/* 장소 데이터 검사: node tools/validate.js  (문제가 없으면 "문제 없음") */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../data/settings.js'), 'utf8'), ctx);
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../data/places.js'), 'utf8'), ctx);
const C = ctx.window.HM_SETTINGS, places = ctx.window.HM_PLACES.places;
const cats = new Set(C.categories.map(c => c.id)), zones = new Set(C.zones.map(z => z.id)), tags = new Set(C.tags);
const errs = [], ids = new Set();
const HOURS = /^(closed|\d\d:\d\d-\d\d:\d\d)$/;
for (const p of places) {
  const e = m => errs.push(`${p.id || '(id 없음)'}: ${m}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id || '')) e('id 는 영문 소문자·숫자·하이픈만');
  if (ids.has(p.id)) e('id 중복'); ids.add(p.id);
  if (!p.name) e('name 없음');
  if (!cats.has(p.primaryCategory)) e('카테고리 오류 ' + p.primaryCategory);
  if (!zones.has(p.area)) e('구역 오류 ' + p.area);
  (p.tags || []).forEach(t => { if (!tags.has(t)) e('허용되지 않은 태그 ' + t); });
  if (!p.oneLineReason) e('한 줄 추천 이유 없음'); else if (p.oneLineReason.length > 45) e('한 줄 추천 이유 45자 초과');
  const l = p.location || {};
  if (!(l.lat > 37.54 && l.lat < 37.57 && l.lng > 126.90 && l.lng < 126.935)) e('좌표가 홍대 범위 밖');
  if (!['exact', 'approx'].includes(l.accuracy)) e('location.accuracy 는 exact/approx');
  if (!['verified', 'cross-checked', 'needs-check'].includes(p.verificationStatus)) e('verificationStatus 오류');
  if ((p.verificationStatus === 'verified') !== !!p.verifiedAt) e('verifiedAt 은 verified 일 때만');
  if (!p.checkedAt) e('checkedAt 없음');
  if (!p.sources || !p.sources.length) e('출처 없음');
  if (p.openingHours) Object.entries(p.openingHours).forEach(([k, v]) => { if (v !== null && !HOURS.test(v)) e('영업시간 형식 ' + k + '=' + v); });
  if (p.review && p.review.sources && p.review.sourceCount !== p.review.sources.length) e('후기 sourceCount 불일치');
  if (p.listed === false && !p.hiddenReason) e('숨긴 장소는 hiddenReason 필요');
  (p.events || []).forEach(ev => { if (!ev.title || !ev.until) e('행사에 title/until 필요'); });
}
console.log(`장소 ${places.length}곳 (목록 표시 ${places.filter(p => p.listed !== false).length}곳)`);
console.log(errs.length ? errs.join('\n') : '문제 없음');
process.exit(errs.length ? 1 : 0);
