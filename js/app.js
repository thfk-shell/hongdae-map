/* 홍대 느슨지도 — 화면 동작 */
(function () {
  'use strict';
  var U = window.HM_UTIL, M = window.HM_MAP;
  var C = window.HM_SETTINGS, D = window.HM_PLACES;
  var esc = U.esc;
  var places = D.places;
  var byId = {}, catById = {};
  places.forEach(function (p) { byId[p.id] = p; });
  C.categories.forEach(function (c) { catById[c.id] = c; });

  var $ = function (id) { return document.getElementById(id); };
  var el = {
    app: $('app'), topbar: $('topbar'), q: $('q'), qClear: $('qClear'), cats: $('cats'),
    savedBtn: $('savedBtn'), savedCount: $('savedCount'), sheet: $('sheet'), grab: $('grab'),
    body: $('sheetBody'), toast: $('toast'), modal: $('modal'), mapNote: $('mapNote'),
    zoneBtn: $('zoneBtn'), zoneMenu: $('zoneMenu'), locBtn: $('locBtn'), mapCtl: $('mapCtl')
  };

  /* ---------- 저장 (이 기기 브라우저에만) ---------- */
  function load(key, fallback) {
    try { var v = window.localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function store(key, val) {
    try { window.localStorage.setItem(key, JSON.stringify(val)); return true; } catch (e) { return false; }
  }

  var S = {
    view: 'list', placeId: null, shareIds: [],
    cats: [], quick: [], tag: null, q: '',
    near: null, start: load(C.storageKeys.start, C.defaultStartPoint), me: null,
    saved: load(C.storageKeys.saved, []).filter(function (id) { return byId[id]; }),
    showHidden: false, sheet: 'half', listScroll: 0, depth: 0, storageWarned: false
  };
  if (S.start === 'me' || !C.startPoints.some(function (s) { return s.id === S.start; })) S.start = C.defaultStartPoint;

  /* 같은 건물 좌표를 쓰는 장소는 지도에서만 살짝 벌려 표시 (거리 계산은 원래 좌표) */
  var displayPos = {};
  (function spread() {
    var groups = {};
    places.forEach(function (p) {
      var k = p.location.lat.toFixed(5) + ',' + p.location.lng.toFixed(5);
      (groups[k] = groups[k] || []).push(p);
    });
    Object.keys(groups).forEach(function (k) {
      var g = groups[k];
      g.forEach(function (p, i) {
        if (g.length === 1) { displayPos[p.id] = [p.location.lat, p.location.lng]; return; }
        var a = (2 * Math.PI * i) / g.length, r = 14;
        displayPos[p.id] = [p.location.lat + (r * Math.cos(a)) / 111320, p.location.lng + (r * Math.sin(a)) / 88200];
      });
    });
  })();

  /* ---------- 계산 ---------- */
  var now = U.seoulNow();
  function startPoint() {
    if (S.start === 'me' && S.me) return { lat: S.me.lat, lng: S.me.lng, label: '내 위치' };
    var s = C.startPoints.filter(function (x) { return x.id === S.start; })[0] || C.startPoints[0];
    return { lat: s.lat, lng: s.lng, label: s.label };
  }
  function origin() {
    if (S.near && byId[S.near]) { var p = byId[S.near]; return { lat: p.location.lat, lng: p.location.lng, label: p.name }; }
    return startPoint();
  }
  function walkFrom(o, p) { return U.walkMinutes(U.distance(o, p.location), C.walk); }

  function haystack(p) {
    var d = p.details || {};
    return U.norm([p.name, p.shortName, (p.aliases || []).join(' '), (p.tags || []).join(' '), p.oneLineReason,
      p.description, p.address, catById[p.primaryCategory].label, (d.works || []).join(' '), (d.styleKeywords || []).join(' '),
      (d.signatureMenu || []).join ? (d.signatureMenu || []).join(' ') : d.signatureMenu,
      (p.events || []).map(function (e) { return e.title; }).join(' ')].join(' '));
  }
  var HAY = {}, CHO = {};
  places.forEach(function (p) {
    HAY[p.id] = haystack(p);
    CHO[p.id] = U.chosung([p.name, p.shortName].concat(p.aliases || []).join(' ')).replace(/\s+/g, '');
  });
  function matchQuery(p, q) {
    var tokens = q.trim().split(/\s+/).filter(Boolean);
    return tokens.every(function (t) {
      if (U.isChosungOnly(t)) return CHO[p.id].indexOf(t) >= 0;
      return HAY[p.id].indexOf(U.norm(t)) >= 0;
    });
  }
  function passQuick(p, id) {
    if (id === 'open') return U.isOpenNow(p, now);
    if (id === 'indoor') return (p.tags || []).indexOf('실내') >= 0 || (p.tags || []).indexOf('비 오는 날') >= 0;
    if (id === 'cheap') return p.priceLevel === 1 || (p.tags || []).indexOf('저렴함') >= 0;
    if (id === 'late') return U.isLate(p, now);
    if (id === 'limited') return U.activeEvents(p, now.date).length > 0;
    return true;
  }
  function visible(p) { return p.listed !== false || S.showHidden; }
  function filtered() {
    var o = origin();
    return places.filter(function (p) {
      if (!visible(p)) return false;
      if (S.near && p.id === S.near) return false;
      if (S.cats.length && S.cats.indexOf(p.primaryCategory) < 0) return false;
      if (S.tag && (p.tags || []).indexOf(S.tag) < 0) return false;
      for (var i = 0; i < S.quick.length; i++) if (!passQuick(p, S.quick[i])) return false;
      if (S.q && !matchQuery(p, S.q)) return false;
      return true;
    }).map(function (p) { return { p: p, min: walkFrom(o, p), m: U.distance(o, p.location) }; })
      .sort(function (a, b) { return a.m - b.m; });
  }
  function hasFilters() { return S.cats.length || S.quick.length || S.tag || S.q; }
  function hiddenCount() { return places.filter(function (p) { return p.listed === false; }).length; }

  function nearbyOf(p) {
    var list = places.filter(function (x) { return x.id !== p.id && visible(x); })
      .map(function (x) { return { p: x, min: walkFrom(p.location, x), m: U.distance(p.location, x.location) }; })
      .filter(function (x) { return x.min <= C.walk.nearbyMaxMinutes; })
      .sort(function (a, b) { return a.m - b.m; });
    var other = list.filter(function (x) { return x.p.primaryCategory !== p.primaryCategory; });
    var same = list.filter(function (x) { return x.p.primaryCategory === p.primaryCategory; });
    return other.slice(0, 4).concat(same).slice(0, 4).sort(function (a, b) { return a.m - b.m; });
  }

  /* 저장 목록을 기준점에서 가까운 곳부터 차례로 잇는 순서 (실제 길찾기 아님) */
  function courseOrder(ids) {
    var rest = ids.map(function (id) { return byId[id]; }).filter(Boolean);
    var cur = startPoint(), out = [], total = 0;
    while (rest.length) {
      var bi = 0, bd = Infinity;
      rest.forEach(function (p, i) { var d = U.distance(cur, p.location); if (d < bd) { bd = d; bi = i; } });
      var next = rest.splice(bi, 1)[0];
      var w = U.walkMinutes(bd, C.walk);
      total += w;
      out.push({ p: next, walk: w });
      cur = next.location;
    }
    return { list: out, totalWalk: total };
  }

  /* ---------- 작은 화면 조각 ---------- */
  var STATUS = {
    'verified': { label: '공식 출처 확인', cls: 'v-ok', desc: '공식 홈페이지·SNS·관광기관 중 한 곳 이상에서 주소와 영업시간을 확인했어요. 웹으로 확인한 것이고 현장 확인은 아니에요.' },
    'cross-checked': { label: '여러 출처 일치', cls: 'v-mid', desc: '공식 출처는 찾지 못했지만 서로 다른 출처 두 곳 이상의 정보가 일치했어요.' },
    'needs-check': { label: '확인 필요', cls: 'v-warn', desc: '근거가 적거나 오래됐어요. 가기 전에 지도 앱에서 영업 여부를 꼭 확인하세요.' }
  };
  var PRICE = { 1: '₩ 저렴', 2: '₩₩ 보통', 3: '₩₩₩ 비싼 편' };
  var RESV = { required: '예약 필수', recommended: '예약 추천', no: '예약 없이 가능' };
  var WAIT = { often: '웨이팅 자주 있음', sometimes: '가끔 웨이팅', rare: '웨이팅 거의 없음' };
  var TRAITS = {
    browse: ['구경거리', { high: '많음', mid: '보통', low: '적음' }],
    priceBurden: ['가격 부담', { low: '적음', mid: '보통', high: '큼' }],
    friendGroup: ['친구끼리', { great: '아주 좋음', ok: '괜찮음' }],
    crowd: ['붐비는 정도', { high: '붐비는 편', mid: '보통', low: '한산한 편' }]
  };

  function statusChip(p) {
    var s = U.openState(p, now);
    return '<span class="st st-' + s.code + '">' + esc(s.label) + '</span>';
  }
  function flagChips(p) {
    var out = '';
    if (p.listed === false) out += '<span class="flag f-hide">운영 미확인</span>';
    else if (p.verificationStatus === 'needs-check') out += '<span class="flag f-warn">확인 필요</span>';
    if (p.location.manual) out += '<span class="flag f-loc">위치 추정</span>';
    return out;
  }
  function heartBtn(p, small) {
    var on = S.saved.indexOf(p.id) >= 0;
    return '<button type="button" class="heart' + (small ? ' sm' : '') + (on ? ' on' : '') + '" data-act="save" data-id="' + p.id +
      '" aria-pressed="' + on + '" aria-label="' + esc(p.name) + (on ? ' 저장 취소' : ' 저장') + '">' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-7.5-4.6-7.5-10.1A4.4 4.4 0 0 1 12 7.6a4.4 4.4 0 0 1 7.5 2.8c0 5.5-7.5 10.1-7.5 10.1z"/></svg></button>';
  }
  function card(x, extra) {
    var p = x.p, c = catById[p.primaryCategory];
    return '<li class="pcard" style="--c:' + c.color + '">' +
      '<button type="button" class="pcard-main" data-act="open" data-id="' + p.id + '">' +
      '<span class="pc-ic" aria-hidden="true">' + (extra && extra.number ? '<b>' + extra.number + '</b>' : c.icon) + '</span>' +
      '<span class="pc-body">' +
      '<span class="pc-top"><span class="pc-name">' + esc(p.name) + '</span><span class="pc-cat">' + esc(c.short) + '</span></span>' +
      '<span class="pc-reason">' + esc(p.oneLineReason) + '</span>' +
      '<span class="pc-meta">' + statusChip(p) +
      (x.min != null ? '<span class="walk">' + (extra && extra.walkLabel ? esc(extra.walkLabel) : '도보 ' + x.min + '분') + '</span>' : '') +
      (p.priceLevel ? '<span class="price">' + PRICE[p.priceLevel].split(' ')[0] + '</span>' : '') +
      flagChips(p) + '</span>' +
      '</span></button>' + heartBtn(p, true) + '</li>';
  }

  /* ---------- 상단 카테고리 ---------- */
  function renderCats() {
    var all = !S.cats.length;
    el.cats.innerHTML = '<button type="button" class="cat' + (all ? ' on' : '') + '" data-cat="" aria-pressed="' + all + '">전체</button>' +
      C.categories.map(function (c) {
        var on = S.cats.indexOf(c.id) >= 0;
        return '<button type="button" class="cat' + (on ? ' on' : '') + '" data-cat="' + c.id + '" aria-pressed="' + on + '" style="--c:' + c.color + '">' +
          '<span aria-hidden="true">' + c.icon + '</span>' + esc(c.label) + '</button>';
      }).join('');
  }

  /* ---------- 목록 화면 ---------- */
  function startSelect() {
    var opts = C.startPoints.map(function (s) {
      return '<option value="' + s.id + '"' + (S.start === s.id ? ' selected' : '') + '>' + esc(s.label) + '</option>';
    }).join('');
    if (S.me) opts += '<option value="me"' + (S.start === 'me' ? ' selected' : '') + '>내 위치</option>';
    return '<label class="origin" for="startSel"><span>기준</span><select id="startSel">' + opts + '</select></label>';
  }
  function filterRow() {
    var anyLimited = places.some(function (p) { return visible(p) && U.activeEvents(p, now.date).length; });
    var q = C.quickFilters.filter(function (f) { return f.id !== 'limited' || anyLimited; }).map(function (f) {
      var on = S.quick.indexOf(f.id) >= 0;
      return '<button type="button" class="chip' + (on ? ' on' : '') + '" data-quick="' + f.id + '" aria-pressed="' + on + '">' + esc(f.label) + '</button>';
    }).join('');
    var used = {};
    places.forEach(function (p) { if (visible(p)) (p.tags || []).forEach(function (t) { used[t] = (used[t] || 0) + 1; }); });
    var tags = C.tags.filter(function (t) { return used[t]; }).map(function (t) {
      var on = S.tag === t;
      return '<button type="button" class="chip tag' + (on ? ' on' : '') + '" data-tag="' + esc(t) + '" aria-pressed="' + on + '">#' + esc(t) + '</button>';
    }).join('');
    return '<div class="chiprow" role="group" aria-label="빠른 필터와 태그">' + q + '<span class="sep" aria-hidden="true"></span>' + tags + '</div>';
  }
  function themesBlock() {
    var anyLimited = places.some(function (p) { return visible(p) && U.activeEvents(p, now.date).length; });
    return '<div class="themes" role="list">' + C.themes.filter(function (t) { return t.id !== 'limited' || anyLimited; }).map(function (t) {
      return '<button type="button" role="listitem" class="theme" data-theme="' + t.id + '"><b>' + esc(t.title) + '</b><span>' + esc(t.desc) + '</span></button>';
    }).join('') + '</div>';
  }
  function renderList() {
    var list = filtered();
    var h = '';
    if (S.near && byId[S.near]) {
      var np = byId[S.near];
      h += '<div class="nearbar" style="--c:' + catById[np.primaryCategory].color + '"><div><small>여기서 가까운 순</small><b>' + esc(np.name) + ' 근처</b></div>' +
        '<button type="button" class="ghost" data-act="open" data-id="' + np.id + '">장소 보기</button>' +
        '<button type="button" class="ghost" data-act="nearOff">해제</button></div>';
    } else if (!hasFilters()) {
      h += '<div class="hello"><h1>오늘 홍대, 뭐 하고 놀지?</h1><p>직접 골라 담은 ' + places.filter(visible).length +
        '곳이에요. 핀을 누르거나 아래에서 골라 보세요.</p></div>' + themesBlock();
    }
    h += filterRow();
    h += '<div class="listhead"><span class="count"><b>' + list.length + '</b>곳 · 가까운 순</span>' + (S.near ? '' : startSelect()) +
      (hasFilters() ? '<button type="button" class="link" data-act="clear">필터 지우기</button>' : '') + '</div>';
    if (list.length) {
      h += '<ul class="plist">' + list.map(function (x) { return card(x); }).join('') + '</ul>';
    } else {
      h += '<div class="empty"><b>조건에 맞는 곳이 없어요.</b><p>' +
        (S.quick.indexOf('open') >= 0 ? '지금 영업 중인 곳만 보고 있어요. ' : '') + '필터를 하나씩 풀어 보세요.</p>' +
        '<button type="button" class="btn" data-act="clear">필터 지우기</button></div>';
    }
    var hc = hiddenCount();
    if (hc) {
      h += '<p class="hiddennote">' + (S.showHidden ? '운영 여부를 확인하지 못한 ' + hc + '곳도 함께 보고 있어요. ' : '운영 여부를 확인하지 못한 ' + hc + '곳은 목록에서 뺐어요. ') +
        '<button type="button" class="link" data-act="toggleHidden">' + (S.showHidden ? '다시 숨기기' : '함께 보기') + '</button></p>';
    }
    h += footer();
    el.body.innerHTML = h;
  }
  function footer() {
    return '<footer class="foot"><p>정보 기준: ' + fmtDate(D.meta.researchedAt) + ' 웹 조사. 현장이나 전화로 확인한 정보는 아니에요. ' +
      '가기 전에 네이버지도·카카오맵에서 영업 여부를 확인해 주세요.</p>' +
      '<p>도보 시간은 직선거리로 어림한 값이에요. <span class="mapcredit">' + esc(mapCredit()) + '</span></p></footer>';
  }
  /* v0.3: 지금 화면에 깔린 지도 배경의 출처 (브이월드·OSM 등 실제로 표시된 것 기준) */
  function mapCredit() {
    var st = M.tileStatus && M.tileStatus();
    if (st && st.info && st.info.credit) return st.info.credit + '.';
    return '';
  }
  function fmtDate(s) { var a = s.split('-'); return a[0] + '년 ' + Number(a[1]) + '월 ' + Number(a[2]) + '일'; }

  /* ---------- 장소 상세 ---------- */
  function renderPlace(p) {
    var c = catById[p.primaryCategory], v = STATUS[p.verificationStatus];
    var o = startPoint(), min = walkFrom(o, p);
    var h = '<article class="detail" style="--c:' + c.color + '">';
    h += '<div class="d-nav"><button type="button" class="back" data-act="back">‹ 목록</button>' + heartBtn(p) + '</div>';
    h += '<header class="d-head"><span class="d-cat"><span aria-hidden="true">' + c.icon + '</span>' + esc(c.label) + '</span>' +
      '<h1>' + esc(p.name) + '</h1><p class="d-reason">' + esc(p.oneLineReason) + '</p>' +
      '<div class="d-meta">' + statusChip(p) + '<span class="walk">' + esc(o.label.replace(/ \(.+\)/, '')) + '에서 도보 약 ' + min + '분</span>' +
      (p.priceLevel ? '<span class="price">' + PRICE[p.priceLevel] + '</span>' : '') + '</div></header>';

    h += '<div class="d-actions">' +
      '<a class="btn map-n" href="' + U.naverUrl(p) + '" target="_blank" rel="noopener">네이버지도</a>' +
      '<a class="btn map-k" href="' + U.kakaoUrl(p) + '" target="_blank" rel="noopener">카카오맵</a>' +
      '<button type="button" class="btn near" data-act="near" data-id="' + p.id + '">이 근처 둘러보기</button></div>';

    /* 확인이 필요한 점 */
    var warn = [];
    if (p.listed === false && p.hiddenReason) warn.push(p.hiddenReason);
    (p.issues || []).forEach(function (i) { warn.push(i); });
    if (p.verificationStatus === 'needs-check' || warn.length) {
      h += '<section class="d-warn"><h2>' + (p.verificationStatus === 'needs-check' || p.listed === false ? '가기 전에 확인하세요' : '확인이 필요한 점') + '</h2><ul>' +
        warn.map(function (w) { return '<li>' + esc(w) + '</li>'; }).join('') +
        (p.verificationStatus === 'needs-check' && !warn.length ? '<li>' + esc(v.desc) + '</li>' : '') + '</ul></section>';
    }

    /* 진행 중 행사 */
    var ev = U.activeEvents(p, now.date);
    if (ev.length) {
      h += '<section class="d-sec"><h2>지금 하는 행사</h2><ul class="events">' + ev.map(function (e) {
        var dd = e.until ? U.daysBetween(now.date, e.until) : null;
        return '<li><span class="dday">' + (dd === 0 ? '오늘까지' : dd != null ? 'D-' + dd : '') + '</span><div><b>' + esc(e.title) + '</b><small>' +
          esc([e.kind, e.where, e.until ? Number(e.until.slice(5, 7)) + '월 ' + Number(e.until.slice(8)) + '일까지' : '', e.hours].filter(Boolean).join(' · ')) + '</small>' +
          (e.url ? '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">행사 안내 보기</a>' : '') + '</div></li>';
      }).join('') + '</ul></section>';
    }

    h += '<p class="d-desc">' + esc(p.description) + '</p>';

    /* 후기 요약 */
    h += '<section class="d-sec review"><h2>후기에서 확인된 점</h2>';
    var r = p.review;
    if (r && (r.pros || []).length) {
      h += '<p class="r-basis">공개 후기 ' + r.sourceCount + '건을 읽고 반복되는 내용만 요약했어요 · 조사 ' + esc(r.checkedAt) +
        (r.sourceCount < 2 ? ' · <b>근거가 적어요</b>' : '') + '</p>';
      if (r.note) h += '<p class="r-note">' + esc(r.note) + '</p>';
      h += rlist('좋다는 말', 'pros', r.pros) + rlist('아쉽다는 말', 'cons', r.cons) +
        rlist('이런 사람에게', 'for', r.goodFor) + rlist('알아두면 좋은 것', 'prac', r.practical);
      h += '<details class="r-src"><summary>요약에 쓴 후기 원문 ' + r.sources.length + '건</summary><ul>' +
        r.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a></li>'; }).join('') + '</ul></details>';
    } else {
      h += '<p class="r-basis">근거로 삼을 만한 후기를 충분히 모으지 못해 요약하지 않았어요.</p>';
    }
    h += '<div class="r-more"><span>후기 더 보기</span><a href="' + U.naverUrl(p) + '" target="_blank" rel="noopener">네이버지도</a>' +
      '<a href="' + U.kakaoUrl(p) + '" target="_blank" rel="noopener">카카오맵</a>' +
      '<a href="' + U.blogSearchUrl(p) + '" target="_blank" rel="noopener">블로그 검색</a></div></section>';

    /* 기본 정보 */
    h += '<section class="d-sec"><h2>영업시간</h2><table class="hours"><tbody>' + U.weekRows(p).map(function (row) {
      return '<tr' + (row.key === now.day ? ' class="today"' : '') + '><th scope="row">' + row.label + (row.key === now.day ? ' (오늘)' : '') + '</th><td>' + esc(row.text) + '</td></tr>';
    }).join('') + '</tbody></table>' + (p.hoursNote ? '<p class="note">' + esc(p.hoursNote) + '</p>' : '') + '</section>';

    var info = [];
    info.push(['주소', p.address + (p.floor && p.address.indexOf(p.floor) < 0 ? ' · ' + p.floor : '')]);
    if (p.nearestExit) info.push(['가까운 출구', p.nearestExit + ' (출처 표기)']);
    if (p.entranceTip) info.push(['찾아가는 팁', p.entranceTip]);
    info.push(['지도 위치', p.location.accuracy === 'exact' ? '정확한 위치' + (p.location.note ? ' · ' + p.location.note : '') :
      (p.location.manual ? '추정 위치 (오차가 클 수 있어요)' : '근사 위치 (건물·도로 단위)') + (p.location.note ? ' · ' + p.location.note : '')]);
    if (p.priceNote) info.push(['가격', p.priceNote]);
    if (p.stayMinutes) info.push(['머무는 시간', p.stayMinutes[0] + '~' + p.stayMinutes[1] + '분 (편집자 어림값)']);
    if (p.reservation) info.push(['예약', RESV[p.reservation]]);
    if (p.waiting) info.push(['웨이팅', WAIT[p.waiting] + ' (후기 기준)']);
    if (p.paymentNote) info.push(['결제', p.paymentNote]);
    var d = p.details || {};
    if (d.works && d.works.length) info.push(['주요 작품', d.works.join(', ')]);
    if (d.styleKeywords && d.styleKeywords.length) info.push(['스타일', d.styleKeywords.join(', ')]);
    if (d.signatureMenu) info.push(['대표 메뉴', [].concat(d.signatureMenu).join(', ')]);
    if (d.seating) info.push(['좌석', d.seating]);
    if (d.pricePerPerson) info.push(['1인 가격', d.pricePerPerson]);
    if (d.duration) info.push(['소요 시간', d.duration]);
    if (d.takeHomeResult != null) info.push(['결과물', d.takeHomeResult === true ? '당일 가져갈 수 있어요' : d.takeHomeResult === false ? '당일 수령 안 돼요' : d.takeHomeResult]);
    h += '<section class="d-sec"><h2>기본 정보</h2><dl class="info">' + info.map(function (r) {
      return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
    }).join('') + '</dl></section>';

    var t = p.traits || {}, tk = Object.keys(TRAITS).filter(function (k) { return t[k]; });
    if (tk.length) {
      h += '<section class="d-sec"><h2>한눈에 보기</h2><dl class="traits">' + Object.keys(TRAITS).map(function (k) {
        return '<div><dt>' + TRAITS[k][0] + '</dt><dd' + (t[k] ? '' : ' class="none"') + '>' + (t[k] ? TRAITS[k][1][t[k]] : '정보 부족') + '</dd></div>';
      }).join('') + '</dl><p class="note">몇몇 후기를 바탕으로 한 판단이에요. 근거가 없는 항목은 비워 뒀어요.</p></section>';
    }

    if ((p.tags || []).length) {
      h += '<div class="d-tags">' + p.tags.map(function (tg) { return '<button type="button" class="chip tag" data-tag="' + esc(tg) + '">#' + esc(tg) + '</button>'; }).join('') + '</div>';
    }

    /* 근처 */
    var nb = nearbyOf(p);
    h += '<section class="d-sec"><h2>근처에 같이 들를 곳</h2>';
    if (nb.length) {
      h += '<ul class="plist compact">' + nb.map(function (x) { return card(x, { walkLabel: '여기서 ' + x.min + '분' }); }).join('') + '</ul>' +
        '<button type="button" class="btn wide" data-act="near" data-id="' + p.id + '">이 근처 전부 보기</button>';
    } else {
      h += '<p class="note">도보 ' + C.walk.nearbyMaxMinutes + '분 안에 담아 둔 곳이 없어요.</p>';
    }
    h += '</section>';

    /* 출처 */
    h += '<section class="d-sec src"><h2>정보 출처</h2><p class="vline"><span class="vb ' + v.cls + '">' + v.label + '</span> 조사 ' + esc(p.checkedAt) +
      (p.verifiedAt ? ' · 확인 ' + esc(p.verifiedAt) : '') + '</p><p class="note">' + esc(v.desc) + '</p><ul>' +
      p.sources.map(function (s) {
        return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + '</a>' + (s.note ? '<small>' + esc(s.note) + '</small>' : '') + '</li>';
      }).join('') + '</ul>' + linkRow(p) + '</section>';
    h += '</article>';
    el.body.innerHTML = h;
  }
  function rlist(title, cls, arr) {
    if (!arr || !arr.length) return '';
    return '<div class="r-block r-' + cls + '"><h3>' + title + '</h3><ul>' + arr.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
  }
  function linkRow(p) {
    var l = p.links || {}, out = [];
    if (l.official) out.push('<a href="' + esc(l.official) + '" target="_blank" rel="noopener">공식 홈페이지</a>');
    if (l.instagram) out.push('<a href="' + esc(l.instagram) + '" target="_blank" rel="noopener">인스타그램</a>');
    if (l.x) out.push('<a href="' + esc(l.x) + '" target="_blank" rel="noopener">X(트위터)</a>');
    return out.length ? '<div class="r-more"><span>공식 채널</span>' + out.join('') + '</div>' : '';
  }

  /* ---------- 저장 / 받은 목록 ---------- */
  function renderSaved(shared) {
    var ids = shared ? S.shareIds : S.saved;
    var h = '<div class="d-nav"><button type="button" class="back" data-act="back">‹ 목록</button></div>';
    h += '<div class="savedhead"><h1>' + (shared ? '친구가 보낸 장소 ' + ids.length + '곳' : '내가 고른 곳') + '</h1>';
    if (!ids.length) {
      h += '</div><div class="empty"><b>아직 저장한 곳이 없어요.</b><p>장소 카드의 하트를 누르면 여기에 모여요. 저장은 이 기기 브라우저에만 남아요.</p>' +
        '<button type="button" class="btn" data-act="back">장소 둘러보기</button></div>';
      el.body.innerHTML = h; return;
    }
    var co = courseOrder(ids);
    var stayMin = 0, stayMax = 0;
    co.list.forEach(function (x) { if (x.p.stayMinutes) { stayMin += x.p.stayMinutes[0]; stayMax += x.p.stayMinutes[1]; } });
    h += '<p>' + esc(startPoint().label.replace(/ \(.+\)/, '')) + '에서 가까운 곳부터 이은 순서 초안이에요. 걷는 시간 약 ' + co.totalWalk + '분(직선거리로 어림), 머무는 시간 ' +
      hm(stayMin) + '~' + hm(stayMax) + ' (어림값). 지도의 선은 실제 길이 아니라 방문 순서를 이은 선이에요. 실제 길은 네이버지도·카카오맵에서 확인해 주세요.</p></div>';
    h += '<ol class="plist course">' + co.list.map(function (x, i) {
      return card({ p: x.p, min: x.walk }, { number: i + 1, walkLabel: (i === 0 ? '기준점에서 ' : '앞 장소에서 ') + x.walk + '분' });
    }).join('') + '</ol>';
    if (shared) {
      h += '<div class="savedacts"><button type="button" class="btn primary" data-act="importShared">내 저장에 모두 추가</button></div>';
    } else {
      h += '<div class="savedacts">' +
        '<button type="button" class="btn primary" data-act="copyText">단톡방용 글 복사</button>' +
        '<button type="button" class="btn" data-act="copyLink">공유 링크 복사</button>' +
        '<button type="button" class="btn quiet" data-act="clearSaved">모두 지우기</button></div>' +
        '<p class="note">저장 목록은 이 기기 브라우저에만 남아요. 친구에게는 공유 링크나 단톡방용 글로 보내 주세요.</p>';
    }
    el.body.innerHTML = h;
  }
  function hm(m) { return m >= 60 ? Math.floor(m / 60) + '시간' + (m % 60 ? ' ' + (m % 60) + '분' : '') : m + '분'; }
  function shareUrl(ids) {
    var base = window.location.href.split('#')[0].replace(/([?&])now=[^&]*&?/, '$1').replace(/[?&]$/, '');
    return base + '#share--' + ids.join('--');
  }
  function shareText() {
    var co = courseOrder(S.saved);
    var lines = ['[홍대 느슨지도] 오늘 갈 곳 ' + co.list.length + '곳', ''];
    co.list.forEach(function (x, i) {
      lines.push((i + 1) + '. ' + x.p.name + ' (' + catById[x.p.primaryCategory].label + ')');
      lines.push('   ' + x.p.oneLineReason);
      lines.push('   ' + U.naverUrl(x.p));
    });
    lines.push('', '지도로 같이 보기: ' + shareUrl(S.saved));
    return lines.join('\n');
  }

  /* ---------- 지도 표시 ---------- */
  function renderMap() {
    var items = [], sel = S.view === 'place' ? S.placeId : null;
    if (S.view === 'saved' || S.view === 'share') {
      var co = courseOrder(S.view === 'saved' ? S.saved : S.shareIds);
      co.list.forEach(function (x, i) { items.push(markerFor(x.p, { number: i + 1 })); });
      var pts = [[startPoint().lat, startPoint().lng]].concat(co.list.map(function (x) { return [x.p.location.lat, x.p.location.lng]; }));
      M.showRoute(pts); M.clearRings();
    } else {
      var list = filtered().map(function (x) { return x.p; });
      if (S.near && byId[S.near]) list.push(byId[S.near]);
      if (sel && list.indexOf(byId[sel]) < 0) list.push(byId[sel]);
      list.forEach(function (p) { items.push(markerFor(p, { selected: p.id === sel || p.id === S.near })); });
      M.clearRoute();
      if (S.near && byId[S.near] && S.view === 'list') {
        var np = byId[S.near].location; M.showRings(np.lat, np.lng, C.walk.rings, C.walk);
      } else M.clearRings();
    }
    M.setMarkers(items);
  }
  function markerFor(p, o) {
    var c = catById[p.primaryCategory], dp = displayPos[p.id];
    return {
      id: p.id, lat: dp[0], lng: dp[1], color: c.color, icon: c.icon, label: p.shortName || p.name,
      selected: !!o.selected, saved: S.saved.indexOf(p.id) >= 0, number: o.number,
      dim: U.openState(p, now).code === 'closed', warn: p.verificationStatus === 'needs-check' || p.listed === false
    };
  }
  function fitCurrent() {
    if (S.view === 'place' && byId[S.placeId]) {
      var l = byId[S.placeId].location; M.focus(l.lat, l.lng, 16); return;
    }
    if (S.view === 'saved' || S.view === 'share') {
      var ids = S.view === 'saved' ? S.saved : S.shareIds;
      M.fitTo(ids.map(function (id) { return displayPos[id]; }).filter(Boolean)); return;
    }
    if (S.near && byId[S.near]) {
      var n = byId[S.near].location, r = C.walk.rings[C.walk.rings.length - 1] * C.walk.metersPerMinute / C.walk.detour;
      M.fitTo([[n.lat + r / 111320, n.lng], [n.lat - r / 111320, n.lng], [n.lat, n.lng + r / 88200], [n.lat, n.lng - r / 88200]]);
      return;
    }
    M.fitTo(filtered().map(function (x) { return displayPos[x.p.id]; }), { minZoom: 15 });
  }

  /* ---------- 바텀시트 (휴대폰) / 왼쪽 패널 (넓은 화면) ---------- */
  var desktopMQ = window.matchMedia('(min-width: 900px)');
  function isDesktop() { return desktopMQ.matches; }
  function topH() { return el.topbar.getBoundingClientRect().bottom; }
  function heights() {
    var H = el.app.clientHeight, top = topH();
    return { peek: 112, half: Math.round(H * 0.48), full: Math.max(200, H - top - 6), H: H };
  }
  function setSheet(state, instant) {
    S.sheet = state;
    el.sheet.dataset.state = state;
    document.documentElement.style.setProperty('--topH', Math.round(topH()) + 'px');
    if (isDesktop()) { el.sheet.style.height = ''; return; }
    var hts = heights();
    el.sheet.classList.toggle('instant', !!instant);
    el.sheet.style.height = hts[state] + 'px';
    el.mapCtl.style.bottom = (Math.min(hts[state], hts.half) + 12) + 'px';
  }
  function getPadding() {
    if (isDesktop()) return { top: 0, bottom: 0, left: el.sheet.getBoundingClientRect().right };
    var hts = heights();
    return { top: topH(), bottom: Math.min(hts[S.sheet] || hts.half, hts.half), left: 0 };
  }
  (function dragSheet() {
    var startY = 0, startH = 0, lastY = 0, lastT = 0, vel = 0, dragging = false, moved = false;
    el.grab.addEventListener('pointerdown', function (e) {
      if (isDesktop()) return;
      dragging = true; moved = false; startY = lastY = e.clientY; lastT = performance.now();
      startH = el.sheet.getBoundingClientRect().height;
      el.sheet.classList.add('instant');
      try { el.grab.setPointerCapture(e.pointerId); } catch (err) {}
    });
    el.grab.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dy = e.clientY - startY;
      if (Math.abs(dy) > 5) moved = true;
      var hts = heights();
      var h = Math.max(hts.peek - 30, Math.min(hts.full, startH - dy));
      el.sheet.style.height = h + 'px';
      var t = performance.now();
      vel = (e.clientY - lastY) / Math.max(1, t - lastT); lastY = e.clientY; lastT = t;
    });
    function end() {
      if (!dragging) return;
      dragging = false;
      el.sheet.classList.remove('instant');
      if (!moved) { setSheet(S.sheet === 'peek' ? 'half' : S.sheet === 'half' ? 'full' : 'half'); return; }
      var hts = heights(), h = el.sheet.getBoundingClientRect().height;
      var target;
      if (vel > 0.6) target = h > hts.half ? 'half' : 'peek';
      else if (vel < -0.6) target = h < hts.half ? 'half' : 'full';
      else target = ['peek', 'half', 'full'].sort(function (a, b) { return Math.abs(hts[a] - h) - Math.abs(hts[b] - h); })[0];
      setSheet(target);
    }
    el.grab.addEventListener('pointerup', end);
    el.grab.addEventListener('pointercancel', end);
    el.grab.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSheet(S.sheet === 'full' ? 'half' : 'full'); }
    });
  })();

  /* ---------- 라우팅 (주소 # 뒷부분) ---------- */
  function parseHash() {
    var h = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (h.indexOf('p-') === 0 && byId[h.slice(2)]) return { view: 'place', id: h.slice(2) };
    if (h === 'saved') return { view: 'saved' };
    if (h.indexOf('share--') === 0) return { view: 'share', ids: h.slice(7).split('--').filter(function (id) { return byId[id]; }) };
    return { view: 'list' };
  }
  function nav(hash) {
    if (S.view === 'list') S.listScroll = el.body.scrollTop;
    S.depth++;
    if (window.location.hash.replace(/^#/, '') === hash) route();
    else window.location.hash = hash;
  }
  function goBack() {
    if (S.depth > 0) { S.depth -= 2; window.history.back(); }
    else { S.depth = -1; window.location.hash = ''; }
  }
  function route(opts) {
    var r = parseHash();
    var prev = S.view;
    S.view = r.view;
    S.placeId = r.id || null;
    if (r.view === 'share') S.shareIds = r.ids;
    render();
    if (r.view === 'list' && prev !== 'list') el.body.scrollTop = S.listScroll;
    else if (r.view !== 'list') el.body.scrollTop = 0;
    if (r.view !== 'list' && S.sheet === 'peek') setSheet('half');
    if (!(opts && opts.noFit)) fitCurrent();
    S.depth = Math.max(0, S.depth);
  }

  function render() {
    now = U.seoulNow();
    renderCats();
    el.savedCount.textContent = S.saved.length;
    el.savedBtn.classList.toggle('has', S.saved.length > 0);
    el.qClear.hidden = !S.q;
    if (S.view === 'place' && byId[S.placeId]) renderPlace(byId[S.placeId]);
    else if (S.view === 'saved') renderSaved(false);
    else if (S.view === 'share') renderSaved(true);
    else renderList();
    renderMap();
  }
  /* 목록 조건이 바뀌었을 때: 목록 화면으로 가서 결과를 지도에 맞춰 보여 줌 */
  function refine() {
    if (S.view !== 'list') { S.listScroll = 0; S.depth = 0; window.location.hash = ''; return; }
    render(); el.body.scrollTop = 0; fitCurrent();
  }

  /* ---------- 동작 ---------- */
  function toggleSave(id) {
    var i = S.saved.indexOf(id);
    if (i >= 0) S.saved.splice(i, 1); else S.saved.push(id);
    var ok = store(C.storageKeys.saved, S.saved);
    if (!ok && !S.storageWarned) { S.storageWarned = true; toast('이 브라우저에서는 저장이 유지되지 않아요. 창을 닫으면 사라질 수 있어요.'); }
    else toast(i >= 0 ? '저장에서 뺐어요' : '저장했어요 · 위쪽 하트에서 모아 볼 수 있어요');
    var keep = el.body.scrollTop;
    render(); el.body.scrollTop = keep;
  }
  function setNear(id) {
    S.near = id; S.cats = []; S.quick = []; S.tag = null; S.q = ''; el.q.value = '';
    S.listScroll = 0;
    if (S.view !== 'list') { S.depth = 0; window.location.hash = ''; }
    else { render(); fitCurrent(); }
    if (!isDesktop()) setSheet('half');
  }
  function applyTheme(id) {
    var t = C.themes.filter(function (x) { return x.id === id; })[0];
    if (!t) return;
    S.cats = (t.cats || []).slice(); S.quick = (t.quick || []).slice(); S.tag = (t.tags || [])[0] || null;
    refine();
    toast(t.title + ' · ' + filtered().length + '곳');
  }
  function clearFilters() {
    S.cats = []; S.quick = []; S.tag = null; S.q = ''; el.q.value = '';
    refine();
  }

  var toastTimer;
  function toast(msg) {
    el.toast.textContent = msg; el.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.toast.hidden = true; }, 2600);
  }
  function modal(html) {
    el.modal.innerHTML = '<div class="modal-box" role="dialog" aria-modal="true">' + html + '</div>';
    el.modal.hidden = false;
  }
  function closeModal() { el.modal.hidden = true; el.modal.innerHTML = ''; }
  function copy(text, okMsg) {
    function manual() {
      modal('<h2>직접 복사해 주세요</h2><p>이 브라우저에서는 자동 복사가 막혀 있어요. 아래 글을 길게 눌러 전체 선택 후 복사하세요.</p>' +
        '<textarea id="copyArea" readonly rows="8">' + esc(text) + '</textarea><div class="modal-acts"><button type="button" class="btn primary" data-act="closeModal">닫기</button></div>');
      var ta = $('copyArea'); ta.focus(); ta.select();
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, manual);
      } else manual();
    } catch (e) { manual(); }
  }
  function locate() {
    if (!navigator.geolocation) { toast('이 브라우저는 위치 기능을 지원하지 않아요. 역 출구 기준으로 계산할게요.'); return; }
    toast('내 위치를 찾는 중…');
    navigator.geolocation.getCurrentPosition(function (pos) {
      var me = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      var center = { lat: C.map.center[0], lng: C.map.center[1] };
      if (U.distance(me, center) > 4000) { toast('홍대에서 멀리 있어서 역 출구 기준을 그대로 쓸게요.'); return; }
      S.me = me; S.start = 'me'; S.near = null;
      M.showMe(me.lat, me.lng);
      render(); M.focus(me.lat, me.lng, 16);
      toast('내 위치에서 가까운 순으로 정렬했어요');
    }, function () {
      toast('위치 권한이 없어 역 출구 기준으로 계산해요.');
    }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
  }

  /* 이벤트 연결 */
  el.cats.addEventListener('click', function (e) {
    var b = e.target.closest('[data-cat]'); if (!b) return;
    var id = b.getAttribute('data-cat');
    if (!id) S.cats = [];
    else {
      var i = S.cats.indexOf(id);
      if (i >= 0) S.cats.splice(i, 1); else S.cats.push(id);
      if (S.cats.length === C.categories.length) S.cats = [];
    }
    refine();
  });
  var qTimer;
  el.q.addEventListener('input', function () {
    clearTimeout(qTimer);
    qTimer = setTimeout(function () {
      S.q = el.q.value.trim();
      if (S.q) S.near = null;
      refine();
      if (!isDesktop() && S.sheet === 'peek') setSheet('half');
    }, 120);
  });
  el.q.addEventListener('keydown', function (e) { if (e.key === 'Enter') { el.q.blur(); } });
  el.qClear.addEventListener('click', function () { el.q.value = ''; S.q = ''; refine(); el.q.focus(); });
  el.savedBtn.addEventListener('click', function () { nav('saved'); });
  el.locBtn.addEventListener('click', locate);
  el.zoneMenu.innerHTML = C.zones.map(function (z) { return '<button type="button" data-zone="' + z.id + '">' + esc(z.label) + '</button>'; }).join('');
  el.zoneBtn.addEventListener('click', function () {
    var open = el.zoneMenu.hidden; el.zoneMenu.hidden = !open; el.zoneBtn.setAttribute('aria-expanded', String(open));
  });
  el.zoneMenu.addEventListener('click', function (e) {
    var b = e.target.closest('[data-zone]'); if (!b) return;
    var z = C.zones.filter(function (x) { return x.id === b.getAttribute('data-zone'); })[0];
    el.zoneMenu.hidden = true; el.zoneBtn.setAttribute('aria-expanded', 'false');
    M.goZone(z);
  });

  el.body.addEventListener('change', function (e) {
    if (e.target.id === 'startSel') {
      S.start = e.target.value;
      if (S.start !== 'me') store(C.storageKeys.start, S.start);
      render();
    }
  });
  function onAction(e) {
    var t = e.target.closest('[data-act],[data-quick],[data-tag],[data-theme]');
    if (!t) return;
    if (t.hasAttribute('data-quick')) {
      var qid = t.getAttribute('data-quick'), i = S.quick.indexOf(qid);
      if (i >= 0) S.quick.splice(i, 1); else S.quick.push(qid);
      refine(); return;
    }
    if (t.hasAttribute('data-tag')) {
      var tg = t.getAttribute('data-tag');
      S.tag = S.tag === tg ? null : tg; S.near = null;
      refine(); return;
    }
    if (t.hasAttribute('data-theme')) { applyTheme(t.getAttribute('data-theme')); return; }
    var act = t.getAttribute('data-act'), id = t.getAttribute('data-id');
    if (act === 'open') nav('p-' + id);
    else if (act === 'save') toggleSave(id);
    else if (act === 'back') goBack();
    else if (act === 'near') setNear(id);
    else if (act === 'nearOff') { S.near = null; render(); fitCurrent(); }
    else if (act === 'clear') clearFilters();
    else if (act === 'toggleHidden') { S.showHidden = !S.showHidden; render(); }
    else if (act === 'copyText') copy(shareText(), '단톡방에 붙여 넣으면 돼요');
    else if (act === 'copyLink') copy(shareUrl(S.saved), '공유 링크를 복사했어요');
    else if (act === 'clearSaved') {
      modal('<h2>저장한 ' + S.saved.length + '곳을 모두 지울까요?</h2><p>이 기기에 저장된 목록이 사라져요.</p><div class="modal-acts">' +
        '<button type="button" class="btn" data-act="closeModal">취소</button><button type="button" class="btn danger" data-act="doClear">모두 지우기</button></div>');
    } else if (act === 'doClear') { S.saved = []; store(C.storageKeys.saved, S.saved); closeModal(); render(); toast('저장 목록을 비웠어요'); }
    else if (act === 'closeModal') closeModal();
    else if (act === 'importShared') {
      var added = 0;
      S.shareIds.forEach(function (sid) { if (S.saved.indexOf(sid) < 0) { S.saved.push(sid); added++; } });
      store(C.storageKeys.saved, S.saved);
      toast(added ? added + '곳을 내 저장에 추가했어요' : '이미 모두 저장돼 있어요');
      S.depth = 0; window.location.hash = 'saved';
    }
  }
  el.body.addEventListener('click', onAction);
  el.modal.addEventListener('click', function (e) { if (e.target === el.modal) closeModal(); else onAction(e); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (!el.modal.hidden) closeModal(); else if (S.view !== 'list') goBack(); }
  });
  window.addEventListener('hashchange', function () { route(); });
  window.addEventListener('resize', function () { setSheet(S.sheet, true); M.invalidate(); });
  desktopMQ.addEventListener && desktopMQ.addEventListener('change', function () { setSheet(S.sheet, true); M.invalidate(); });
  setInterval(function () { var k = el.body.scrollTop; render(); el.body.scrollTop = k; }, 60000);

  /* ---------- 시작 ---------- */
  var MAP_DEBUG = /[?&]mapdebug\b/.test(location.search);  // 주소 끝에 ?mapdebug 를 붙이면 지도 배경 진단을 계속 보여 줌
  M.init(document.getElementById('map'), C, {
    getPadding: getPadding,
    onPick: function (id) { if (S.view === 'place' && S.placeId === id) return; nav('p-' + id); },
    onMapClick: function () { if (!el.zoneMenu.hidden) { el.zoneMenu.hidden = true; } },
    onTilesFailed: function (log) {
      /* v0.2.1: 왜 실패했는지 상황별로 알려 준다 */
      var msg, blocked = (log || []).filter(function (d) { return d.result === 'blocked'; });
      if (window.HM_PREVIEW) {
        msg = 'Claude 미리보기 창에서는 지도 배경 그림을 불러오지 못해 간단한 지도로 보여요. 실제 지도는 일반 브라우저에서 확인해 주세요.';
      } else if (location.protocol === 'file:') {
        msg = '파일을 직접 열면 지도 서버가 요청을 거절할 수 있어요. 폴더의 "지도 실행하기(Windows).bat"으로 열어 주세요.';
      } else if (blocked.length) {
        msg = '지도 서버가 요청을 거절했어요(' + blocked.map(function (d) { return d.id + ' ' + d.detail; }).join(', ') + '). 간단한 지도로 보여 드려요.';
      } else {
        msg = '지도 배경을 못 불러와 간단한 지도로 보여 드려요. 인터넷 연결을 확인해 주세요.';
      }
      if (MAP_DEBUG) return;
      el.mapNote.hidden = false;
      el.mapNote.textContent = msg;
      setTimeout(function () { el.mapNote.hidden = true; }, 12000);
    },
    onTilesOk: function (t) {
      [].forEach.call(document.querySelectorAll('.mapcredit'), function (n) { n.textContent = mapCredit(); });
      if (MAP_DEBUG) return;
      /* v0.3: 브이월드 키가 있는데도 못 불러와서 다른 지도로 넘어간 경우, 조용히 넘어가지 않고 알려 준다 */
      var vwFail = (M.tileStatus().log || []).filter(function (d) {
        return (d.id === 'vworld' || d.id === 'white') && (d.result === 'blocked' || d.result === 'failed');
      });
      if (t && t.id !== 'vworld' && t.id !== 'white' && vwFail.length && !window.HM_PREVIEW) {
        el.mapNote.hidden = false;
        el.mapNote.textContent = '브이월드 지도를 불러오지 못해 ' + t.name + '로 보여 드려요. (' + vwFail[0].detail +
          ') 인증키와 등록한 사이트 주소를 확인해 주세요. 자세히: 주소 끝에 ?mapdebug';
        setTimeout(function () { el.mapNote.hidden = true; }, 15000);
        return;
      }
      if (location.protocol !== 'file:') return;
      el.mapNote.hidden = false;
      el.mapNote.textContent = '파일을 직접 열었어요. 지도에 경고 글자가 보이면 "지도 실행하기" 파일로 다시 열어 주세요.';
      setTimeout(function () { el.mapNote.hidden = true; }, 10000);
    },
    onDiag: function (log) {
      if (!MAP_DEBUG) return;
      el.mapNote.hidden = false;
      el.mapNote.textContent = '[지도 진단] 주소 형식: ' + location.protocol + ' / ' +
        log.map(function (d) { return d.id + ' ' + d.step + ': ' + d.result + (d.detail ? ' (' + d.detail + ')' : ''); }).join(' · ');
    }
  });
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      document.documentElement.style.setProperty('--topH', Math.round(topH()) + 'px');
    }).observe(el.topbar);
  }
  setSheet('half', true);
  route();
})();
