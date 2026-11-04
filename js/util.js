/* 홍대 느슨지도 — 계산·텍스트 도우미 (화면과 무관한 순수 함수) */
(function () {
  'use strict';
  var DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var DAY_KO = { mon: '월', tue: '화', wed: '수', thu: '목', fri: '금', sat: '토', sun: '일' };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* 거리: 직선거리(m). 도보 분 = 직선 × 골목 보정 ÷ 분당 미터 (길찾기 아님, 추정치) */
  function distance(a, b) {
    var R = 6371000, toR = Math.PI / 180;
    var dLat = (b.lat - a.lat) * toR, dLng = (b.lng - a.lng) * toR;
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(a.lat * toR) * Math.cos(b.lat * toR) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function walkMinutes(meters, walk) {
    return Math.max(1, Math.round(meters * walk.detour / walk.metersPerMinute));
  }

  /* 한국 시간 기준 현재 시각. 테스트용으로 주소에 ?now=2026-11-02T14:30 을 붙이면 그 시각으로 계산 */
  function seoulNow() {
    var forced = null;
    try {
      var m = /[?&]now=([0-9T:\-]+)/.exec(window.location.search);
      if (m) forced = m[1];
    } catch (e) {}
    if (forced) {
      var p = forced.split('T'), d = p[0].split('-').map(Number), t = (p[1] || '12:00').split(':').map(Number);
      var dt = new Date(Date.UTC(d[0], d[1] - 1, d[2]));
      return { day: DAYS[dt.getUTCDay()], minutes: t[0] * 60 + (t[1] || 0), date: p[0] };
    }
    var parts = {};
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', weekday: 'short', hour12: false
    }).formatToParts(new Date()).forEach(function (x) { parts[x.type] = x.value; });
    var hour = Number(parts.hour) % 24;
    return {
      day: parts.weekday.toLowerCase().slice(0, 3),
      minutes: hour * 60 + Number(parts.minute),
      date: parts.year + '-' + parts.month + '-' + parts.day
    };
  }
  function prevDay(day) { return DAYS[(DAYS.indexOf(day) + 6) % 7]; }

  function toMin(hhmm) { var a = hhmm.split(':'); return Number(a[0]) * 60 + Number(a[1]); }
  function fmt(min) {
    min = ((min % 1440) + 1440) % 1440;
    return String(Math.floor(min / 60)).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
  }
  /* "10:00-02:00" → {start:600, end:1560} (자정 넘김은 end 에 1440 더함) */
  function parseRange(v) {
    if (!v || v === 'closed') return null;
    var a = v.split('-');
    var s = toMin(a[0]), e = toMin(a[1]);
    if (e <= s) e += 1440;
    return { start: s, end: e };
  }

  /* 영업 상태: open / closing(1시간 이내 마감) / before(오늘 나중에 엶) / closed / unknown */
  function openState(place, now) {
    var oh = place.openingHours;
    if (!oh || oh[now.day] === undefined || oh[now.day] === null) {
      return { code: 'unknown', label: '영업시간 정보 없음' };
    }
    var y = parseRange(oh[prevDay(now.day)]);
    if (y && y.end > 1440 && now.minutes < y.end - 1440) {
      var left = y.end - 1440 - now.minutes;
      return { code: left <= 60 ? 'closing' : 'open', label: (left <= 60 ? '곧 마감 · ' : '영업 중 · ') + fmt(y.end) + '까지' };
    }
    if (oh[now.day] === 'closed') return { code: 'closed', label: '오늘 휴무' };
    var t = parseRange(oh[now.day]);
    if (!t) return { code: 'unknown', label: '영업시간 정보 없음' };
    if (t.start === 0 && t.end === 1440) return { code: 'open', label: '24시간 영업' };
    if (now.minutes < t.start) return { code: 'before', label: '영업 전 · ' + fmt(t.start) + ' 오픈' };
    if (now.minutes < t.end) {
      var l = t.end - now.minutes;
      return { code: l <= 60 ? 'closing' : 'open', label: (l <= 60 ? '곧 마감 · ' : '영업 중 · ') + fmt(t.end) + '까지' };
    }
    return { code: 'closed', label: '오늘 영업 끝' };
  }
  function isOpenNow(place, now) {
    var c = openState(place, now).code;
    return c === 'open' || c === 'closing';
  }
  /* 늦게까지: 오늘 22시 이후까지 영업, 또는 영업시간이 없고 '늦게까지' 태그 */
  function isLate(place, now) {
    var oh = place.openingHours;
    if (!oh || !oh[now.day]) return (place.tags || []).indexOf('늦게까지') >= 0;
    var t = parseRange(oh[now.day]);
    return !!t && t.end >= 22 * 60;
  }
  function weekRows(place) {
    var order = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    var oh = place.openingHours || {};
    return order.map(function (k) {
      var v = oh[k];
      var text = v == null ? '확인 안 됨' : v === 'closed' ? '휴무' : v === '00:00-24:00' ? '24시간' : v.replace('-', ' ~ ');
      return { key: k, label: DAY_KO[k], text: text };
    });
  }

  function activeEvents(place, today) {
    return (place.events || []).filter(function (e) {
      return (!e.from || e.from <= today) && (!e.until || e.until >= today);
    });
  }
  function daysBetween(a, b) {
    return Math.round((Date.parse(b + 'T00:00:00Z') - Date.parse(a + 'T00:00:00Z')) / 86400000);
  }

  /* 초성 검색 */
  var CHO = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  function chosung(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i) - 0xAC00;
      out += (c >= 0 && c < 11172) ? CHO[Math.floor(c / 588)] : s[i];
    }
    return out;
  }
  function isChosungOnly(s) { return /^[ㄱ-ㅎ\s]+$/.test(s); }
  function norm(s) { return String(s || '').toLowerCase().replace(/\s+/g, ''); }

  /* 외부 지도 링크 (길찾기는 각 앱에서) */
  function naverUrl(p) { return 'https://map.naver.com/p/search/' + encodeURIComponent(p.searchName || p.name); }
  function kakaoUrl(p) {
    if (p.location && p.location.accuracy === 'exact') {
      return 'https://map.kakao.com/link/map/' + encodeURIComponent(p.name) + ',' + p.location.lat + ',' + p.location.lng;
    }
    return 'https://map.kakao.com/link/search/' + encodeURIComponent(p.searchName || p.name);
  }
  function blogSearchUrl(p) {
    return 'https://search.naver.com/search.naver?where=blog&query=' + encodeURIComponent((p.searchName || p.name) + ' 후기');
  }

  window.HM_UTIL = {
    esc: esc, distance: distance, walkMinutes: walkMinutes, seoulNow: seoulNow,
    openState: openState, isOpenNow: isOpenNow, isLate: isLate, weekRows: weekRows,
    activeEvents: activeEvents, daysBetween: daysBetween, fmt: fmt, parseRange: parseRange,
    chosung: chosung, isChosungOnly: isChosungOnly, norm: norm,
    naverUrl: naverUrl, kakaoUrl: kakaoUrl, blogSearchUrl: blogSearchUrl, DAY_KO: DAY_KO
  };
})();
