/* 미리보기용 한 파일 만들기: node tools/build-preview.js
   index.html + css + js + data 를 한 HTML 로 합칩니다.
   (Claude 미리보기 창은 외부 파일을 못 읽어서, Leaflet 은 cdnjs 에서 불러오게 바꿉니다.) */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const read = f => fs.readFileSync(path.join(root, f), 'utf8');
let html = read('index.html');
const swap = (name, content) => {
  const re = new RegExp('<!--BUILD:' + name + '-->[\\s\\S]*?<!--/BUILD-->');
  if (!re.test(html)) throw new Error('marker missing: ' + name);
  html = html.replace(re, () => content);
};
swap('LEAFLET_CSS', '<style>\n' + read('vendor/leaflet/leaflet.css') + '\n</style>');
swap('APP_CSS', '<style>\n' + read('css/style.css') + '\n</style>');
swap('LEAFLET_JS', '<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"></script>');
swap('DATA', '<script>\nwindow.HM_PREVIEW = true; // 미리보기 표시: 지도 배경이 막힌 이유를 정확히 안내\n' + read('data/map-key.js') + '\n' + read('data/settings.js') + '\n' + read('data/places.js') + '\n</script>');
swap('APP_JS', '<script>\n' + ['js/util.js', 'js/map.js', 'js/app.js'].map(read).join('\n') + '\n</script>');
// Claude 미리보기는 <html><head><body> 를 직접 씌우므로 안쪽 내용만 남깁니다.
const head = html.match(/<head>([\s\S]*?)<\/head>/)[1]
  .replace(/<meta charset[^>]*>/, '').replace(/<meta name="viewport"[^>]*>/, '');
const body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
const out = head.trim() + '\n' + body.trim() + '\n';
const dest = process.argv[2] || path.join(root, 'preview', 'hongdae-map-preview.html');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, out);
console.log('wrote', dest, (out.length / 1024).toFixed(0) + 'KB');
