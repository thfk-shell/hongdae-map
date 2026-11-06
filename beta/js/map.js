/* 홍대 느슨지도 — 지도 어댑터 (Leaflet).
   app.js 는 Leaflet 을 직접 부르지 않고 이 파일의 HM_MAP 만 씁니다.
   나중에 카카오맵 등으로 바꿀 때는 이 파일만 같은 함수 이름으로 새로 만들면 됩니다. */
(function () {
  'use strict';
  var U = window.HM_UTIL;
  var map, markerLayer, ringLayer, routeLayer, baseLayer, meLayer;
  var markers = {};
  var opts = {};
  var tileLayer = null, tilesOk = false, activeTile = null, activeInfo = null, tileList = [];
  var overlays = {};

  function init(el, settings, o) {
    opts = o || {};
    var cfg = settings.map;
    map = L.map(el, {
      center: cfg.center, zoom: cfg.zoom, minZoom: cfg.minZoom, maxZoom: cfg.maxZoom,
      zoomControl: false, attributionControl: false,
      tap: true
    });
    /* v0.3: 지도 출처 표시를 오른쪽 위(검색창 바로 아래)로 옮김. 휴대폰에서는 오른쪽 아래가 장소 목록 시트에 가려져
       브이월드(공공누리 출처표시) 표기가 안 보였다. */
    L.control.attribution({ position: 'topright', prefix: false }).addTo(map);
    window.__hmMap = map;
    L.control.scale({ imperial: false, position: 'bottomleft', maxWidth: 90 }).addTo(map);

    /* 레이어 순서 (아래 → 위): 지도 배경 타일 → 기본 표시(역·동네) → 도보 원 → 경로선 → 장소 핀 → 내 위치.
       경로선 전용 칸(pane)을 따로 두어, 나중에 실제 도보 경로(골목길을 따라가는 빨간 선)를 넣어도 핀 아래에 깔린다. */
    map.createPane('hmRoute').style.zIndex = 450;   // 기본 도형 칸(400)과 핀 칸(600) 사이
    baseLayer = L.layerGroup().addTo(map);
    ringLayer = L.layerGroup().addTo(map);
    routeLayer = L.layerGroup().addTo(map);
    markerLayer = L.layerGroup().addTo(map);
    meLayer = L.layerGroup().addTo(map);
    overlays = { base: baseLayer, rings: ringLayer, route: routeLayer, places: markerLayer, me: meLayer };

    drawBase(settings);
    tileList = prepareTiles(cfg.tiles);
    tryTiles(tileList, 0);

    map.on('zoomend', function () {
      el.classList.toggle('show-labels', map.getZoom() >= 17);
      el.classList.toggle('show-zones', map.getZoom() <= 16 && map.getZoom() >= 15);
      el.classList.toggle('far', map.getZoom() <= 14);
    });
    el.classList.toggle('show-zones', map.getZoom() <= 16 && map.getZoom() >= 15);
    el.classList.toggle('far', map.getZoom() <= 14);
    map.on('click', function () { if (opts.onMapClick) opts.onMapClick(); });
  }

  /* 지도 배경(타일)이 막혀도 방향을 잡을 수 있게 역 출구와 동네 이름을 직접 그린다 */
  function drawBase(settings) {
    settings.zones.forEach(function (z) {
      L.marker(z.center, {
        interactive: false, keyboard: false,
        icon: L.divIcon({ className: 'zone-label', html: '<span>' + U.esc(z.label) + '</span>', iconSize: [120, 24], iconAnchor: [60, 12] })
      }).addTo(baseLayer);
    });
    settings.startPoints.forEach(function (s) {
      var short = s.label.replace(/ \(.+\)/, '').replace('홍대입구역', '홍대입구').replace(' 출구', '');
      L.marker([s.lat, s.lng], {
        interactive: false, keyboard: false,
        icon: L.divIcon({ className: 'exit-pin', html: '<b>M</b><span>' + U.esc(short) + '</span>', iconSize: [18, 18], iconAnchor: [9, 9] })
      }).addTo(baseLayer);
    });
  }

  /* ---------- 지도 배경(타일) ----------
     v0.2.1: 이미지가 "불러와졌는지"만 보던 방식에서, 서버가 실제로 허락했는지(HTTP 상태)를 먼저 확인하는 방식으로 바꿈.
     - OpenStreetMap 서버는 정책을 어긴 요청(예: 파일을 직접 열어 Referer 가 없는 요청)에 403 + "Access blocked" 그림을 보낸다.
       그림도 '이미지'라서 예전 코드는 성공으로 착각했다.
     - 그래서 지도 가운데 타일 1장을 fetch 로 먼저 받아 상태 코드를 본다. 거절(4xx·5xx)이면 다음 배경으로 넘어간다.
     - fetch 자체가 막혀 결과를 모르면(네트워크·CORS) 예전처럼 이미지로 시도하고, 연속 실패하면 넘어간다. */
  var diag = []; // [{id, step, result, detail}] — 무엇이 왜 실패했는지 기록 (화면 안내·?mapdebug 에 사용)

  function tileUrl(t, z, x, y) {
    var s = (t.subdomains || 'a').charAt(0);
    return t.url.replace('{s}', s).replace('{z}', z).replace('{x}', x).replace('{y}', y).replace('{r}', '');
  }
  function centerTile(z) {
    var c = map.getCenter(), n = Math.pow(2, z), rad = c.lat * Math.PI / 180;
    return { x: Math.floor((c.lng + 180) / 360 * n), y: Math.floor((1 - Math.log(Math.tan(rad) + 1 / Math.cos(rad)) / Math.PI) / 2 * n) };
  }
  function note(id, step, result, detail) {
    diag.push({ id: id, step: step, result: result, detail: detail || '' });
    if (opts.onDiag) opts.onDiag(diag.slice());
  }

  function probe(t, cb) {
    if (!window.fetch || t.probe === false) { cb('unknown'); return; }
    var z = Math.min(map.getZoom(), t.maxNativeZoom || 19), c = centerTile(z), url = tileUrl(t, z, c.x, c.y);
    var done = false, timer = setTimeout(function () { if (!done) { done = true; note(t.id, 'probe', 'unknown', '응답 지연(8초)'); cb('unknown'); } }, 8000);
    fetch(url, { mode: 'cors', credentials: 'omit', referrerPolicy: 'strict-origin-when-cross-origin', cache: 'force-cache' })
      .then(function (r) {
        if (done) return; done = true; clearTimeout(timer);
        var type = (r.headers && r.headers.get('content-type')) || '';
        if (r.ok && (!type || /^image\//i.test(type))) { note(t.id, 'probe', 'ok', 'HTTP ' + r.status + (type ? ' ' + type : '')); cb('ok'); return; }
        /* v0.3: 인증 실패를 "200 + 글자(XML 등)"로 돌려주는 서버가 있어, 그림이 아니면 거절로 본다. 내용 앞부분을 진단에 남긴다. */
        r.text().then(function (body) {
          var why = 'HTTP ' + r.status + (type ? ' ' + type : '') + (r.ok ? ' (지도 그림이 아님)' : '');
          var snippet = hideKey(t, body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()).slice(0, 120);
          note(t.id, 'probe', 'blocked', why + (snippet ? ': ' + snippet : ''));
          cb('blocked');
        }, function () { note(t.id, 'probe', 'blocked', 'HTTP ' + r.status); cb('blocked'); });
      }, function (err) {
        if (done) return; done = true; clearTimeout(timer);
        note(t.id, 'probe', 'unknown', '요청 실패(네트워크 차단 또는 CORS): ' + (err && err.message || err)); cb('unknown');
      });
  }

  /* ---------- v0.3: 인증키가 필요한 지도(브이월드) ----------
     키는 data/map-key.js 에 넣거나, 시험용으로 주소 끝에 ?vwkey=발급키 를 붙여 한 번 열면 이 브라우저에 저장된다.
     ?vwkey 는 저장 직후 주소창에서 지워서, 공유 링크에 키가 섞여 나가지 않게 한다. */
  var KEY_STORE = 'hongdae-map:key:';
  function takeUrlKeys() {
    var m = /[?&]vwkey=([^&#]*)/.exec(location.search);
    if (!m) return;
    var v = decodeURIComponent(m[1]).trim();
    try {
      if (!v || v === 'clear') localStorage.removeItem(KEY_STORE + 'vworld');
      else localStorage.setItem(KEY_STORE + 'vworld', v);
    } catch (e) { /* 저장이 막힌 브라우저: 이번 접속에서만 쓴다 */ sessionKeys.vworld = v === 'clear' ? '' : v; }
    if (window.history && history.replaceState) {
      var q = location.search.replace(/([?&])vwkey=[^&#]*&?/, '$1').replace(/[?&]$/, '');
      history.replaceState(null, '', location.pathname + q + location.hash);
    }
  }
  var sessionKeys = {};
  function getKey(name) {
    if (sessionKeys[name]) return sessionKeys[name];
    try { var v = localStorage.getItem(KEY_STORE + name); if (v) return v; } catch (e) {}
    var k = window.HM_MAP_KEYS && window.HM_MAP_KEYS[name];
    return (k && String(k).trim()) || '';
  }
  /* ?map=white 처럼 붙이면 그 배경을 먼저 시도 (배경 비교용). optIn 배경은 직접 고를 때만 쓴다. */
  function prepareTiles(list) {
    takeUrlKeys();
    var m = /[?&]map=([\w-]+)/.exec(location.search), want = m && m[1];
    var out = [];
    list.forEach(function (t) {
      if (t.optIn && t.id !== want) return;
      var c = {}; for (var k in t) c[k] = t[k];
      if (t.needsKey) {
        var key = getKey(t.needsKey);
        if (!key) { note(t.id, 'key', 'skipped', '인증키 없음 (data/map-key.js 또는 ?vwkey=)'); return; }
        c.url = t.url.replace('{key}', encodeURIComponent(key));
        c._key = key;
      }
      out.push(c);
    });
    if (want) out.sort(function (a, b) { return (b.id === want) - (a.id === want); });
    return out;
  }
  function hideKey(t, text) { return t._key ? String(text).split(t._key).join('***') : String(text); }

  function tryTiles(list, i) {
    if (tileLayer) { map.removeLayer(tileLayer); tileLayer = null; }
    map.getContainer().classList.remove('base-labels');
    if (i >= list.length) {
      tilesOk = false;
      map.getContainer().classList.add('no-tiles');
      if (opts.onTilesFailed) opts.onTilesFailed(diag.slice());
      return;
    }
    var t = list[i];
    probe(t, function (state) {
      if (state === 'blocked') { tryTiles(list, i + 1); return; }
      useLayer(list, i, t);
    });
  }

  function useLayer(list, i, t) {
    var loaded = 0, failed = 0, switched = false;
    var layer = L.tileLayer(t.url, {
      subdomains: t.subdomains || 'abc', maxNativeZoom: t.maxNativeZoom, minNativeZoom: t.minNativeZoom || 0, maxZoom: 19,
      attribution: t.attribution, detectRetina: false,
      referrerPolicy: 'strict-origin-when-cross-origin' // 타일 서버가 어느 사이트에서 쓰는지 알 수 있게(OSM 정책)
    });
    function giveUp(why) {
      if (switched) return; switched = true;
      note(t.id, 'tiles', 'failed', why);
      tryTiles(list, i + 1);
    }
    layer.on('tileload', function () {
      loaded++;
      if (!tilesOk) {
        tilesOk = true; activeTile = t.id; activeInfo = { id: t.id, name: t.name, credit: t.credit || '' };
        map.getContainer().classList.remove('no-tiles');
        /* v0.3: 브이월드처럼 역 출구 번호·동네 이름이 이미 그려진 지도면, 우리가 따로 그린 출구·동네 글씨를 숨겨 겹침을 없앤다 */
        map.getContainer().classList.toggle('base-labels', !!t.baseLabels);
        note(t.id, 'tiles', 'ok', '타일 표시됨');
        if (opts.onTilesOk) opts.onTilesOk(t);
      }
    });
    layer.on('tileerror', function () {
      failed++;
      if (loaded === 0 && failed >= 4) giveUp('타일 ' + failed + '장 연속 실패');
    });
    tileLayer = layer;
    layer.addTo(map);
    // 느린 모바일 회선을 고려해 15초까지 기다린다 (v0.2 는 7초)
    setTimeout(function () { if (tileLayer === layer && loaded === 0 && failed > 0) giveUp('15초 동안 한 장도 못 받음'); }, 15000);
  }

  function pinHtml(m) {
    return '<div class="pin' + (m.selected ? ' is-sel' : '') + (m.saved ? ' is-saved' : '') + (m.dim ? ' is-dim' : '') +
      (m.warn ? ' is-warn' : '') + '" style="--c:' + m.color + '">' +
      '<span class="pin-dot">' + (m.number ? '<b>' + m.number + '</b>' : '<i>' + m.icon + '</i>') + '</span>' +
      (m.saved ? '<i class="pin-heart" aria-hidden="true"></i>' : '') +
      '<span class="pin-label">' + U.esc(m.label) + '</span></div>';
  }

  /* items: [{id, lat, lng, color, icon, label, selected, saved, dim, warn, number}] */
  function setMarkers(items) {
    markerLayer.clearLayers();
    markers = {};
    items.forEach(function (m) {
      var mk = L.marker([m.lat, m.lng], {
        icon: L.divIcon({ className: 'pin-wrap', html: pinHtml(m), iconSize: [34, 34], iconAnchor: [17, 17] }),
        zIndexOffset: m.selected ? 1000 : (m.saved ? 200 : 0),
        keyboard: true, title: m.label, riseOnHover: true
      });
      mk.on('click', function (e) {
        L.DomEvent.stopPropagation(e);
        if (opts.onPick) opts.onPick(m.id);
      });
      mk.addTo(markerLayer);
      markers[m.id] = mk;
    });
  }

  /* 화면 아래 시트가 지도를 가리는 만큼 비켜서 보여 준다 */
  function pad() { return opts.getPadding ? opts.getPadding() : { top: 0, bottom: 0, left: 0 }; }

  function focus(lat, lng, zoom) {
    var p = pad();
    var z = Math.max(zoom || map.getZoom(), map.getZoom());
    var size = map.getSize();
    var target = map.project([lat, lng], z);
    var visibleCenterY = p.top + (size.y - p.top - p.bottom) / 2;
    var visibleCenterX = p.left + (size.x - p.left) / 2;
    target = target.add([size.x / 2 - visibleCenterX, size.y / 2 - visibleCenterY]);
    map.setView(map.unproject(target, z), z, { animate: true });
  }

  /* o.minZoom: 핀 전체를 담으려고 이보다 더 멀리 축소해야 하면, 대신 핀들의 가운데를 이 확대 수준으로 보여 준다.
     (v0.3: 휴대폰 첫 화면이 13단계까지 멀어져 골목을 읽을 수 없던 문제. 화면 밖 장소는 목록에서 그대로 보임) */
  function fitTo(points, o) {
    if (!points.length) return;
    if (points.length === 1) { focus(points[0][0], points[0][1], 17); return; }
    var p = pad();
    var size = map.getSize();
    var availY = size.y - p.top - p.bottom;
    var extra = availY < 160 ? 10 : 40;
    var b = L.latLngBounds(points);
    if (o && o.minZoom) {
      var need = map.getBoundsZoom(b, false, L.point(p.left + extra * 2, p.top + p.bottom + extra * 2));
      if (need < o.minZoom) { var c = o.center || b.getCenter(); focus(c[0] != null ? c[0] : c.lat, c[1] != null ? c[1] : c.lng, o.minZoom); return; }
    }
    map.fitBounds(b, {
      paddingTopLeft: [p.left + extra, p.top + extra],
      paddingBottomRight: [extra, p.bottom + extra],
      maxZoom: 17, animate: true
    });
  }

  function showRings(lat, lng, rings, walk) {
    ringLayer.clearLayers();
    rings.forEach(function (min) {
      var r = min * walk.metersPerMinute / walk.detour;
      L.circle([lat, lng], { radius: r, className: 'ring', interactive: false }).addTo(ringLayer);
      var labelPt = L.latLng(lat + r / 111320, lng);
      L.marker(labelPt, {
        interactive: false,
        icon: L.divIcon({ className: 'ring-label', html: '<span>도보 ' + min + '분</span>', iconSize: [64, 18], iconAnchor: [32, 9] })
      }).addTo(ringLayer);
    });
  }
  function clearRings() { ringLayer.clearLayers(); }

  function showRoute(latlngs) {
    routeLayer.clearLayers();
    if (latlngs.length > 1) L.polyline(latlngs, { className: 'route', interactive: false, pane: 'hmRoute' }).addTo(routeLayer);
  }
  function clearRoute() { routeLayer.clearLayers(); }

  function showMe(lat, lng) {
    meLayer.clearLayers();
    L.marker([lat, lng], {
      interactive: false,
      icon: L.divIcon({ className: 'me-pin', html: '<span></span>', iconSize: [18, 18], iconAnchor: [9, 9] })
    }).addTo(meLayer);
  }
  function clearMe() { meLayer.clearLayers(); }
  function goZone(z) { map.setView(z.center, z.zoom, { animate: true }); }
  function invalidate() { if (map) map.invalidateSize(); }
  function tilesLoaded() { return tilesOk; }
  function tileStatus() { return { ok: tilesOk, active: activeTile, info: activeInfo, log: diag.slice() }; }
  function retryTiles() { diag = []; tilesOk = false; activeTile = null; activeInfo = null; tryTiles(tileList, 0); }

  /* 나중 기능(개인 핀, 코스 주변 추천 등)을 위한 이름 붙은 레이어.
     overlay('personal') 처럼 부르면 같은 레이어를 돌려주고, 없으면 새로 만든다. 지도 전체를 다시 만들 필요 없음. */
  function overlay(name, o) {
    if (!overlays[name]) {
      if (o && o.pane && !map.getPane(o.pane)) map.createPane(o.pane).style.zIndex = o.zIndex || 500;
      overlays[name] = L.layerGroup([], o && o.pane ? { pane: o.pane } : undefined).addTo(map);
    }
    return overlays[name];
  }

  window.HM_MAP = {
    init: init, setMarkers: setMarkers, focus: focus, fitTo: fitTo,
    showRings: showRings, clearRings: clearRings, showRoute: showRoute, clearRoute: clearRoute,
    showMe: showMe, clearMe: clearMe, goZone: goZone, invalidate: invalidate, tilesLoaded: tilesLoaded,
    tileStatus: tileStatus, retryTiles: retryTiles, overlay: overlay
  };
})();
