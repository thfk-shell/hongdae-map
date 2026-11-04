/* 내 컴퓨터용 간이 웹서버 (Node.js 가 있을 때): node tools/serve.js  → http://localhost:8787
   파일을 더블클릭해 열면(file://) 지도 서버가 요청을 거절할 수 있어, 이렇게 http 주소로 여는 게 안전해요. */
const http = require('http'), fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), port = +process.env.PORT || 8787;
const T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' };
http.createServer((q, r) => {
  let rel = decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/, '') || 'index.html';
  const p = path.join(root, rel);
  if (!p.startsWith(root)) { r.writeHead(403); return r.end(); }
  fs.readFile(p, (e, b) => {
    if (e) { r.writeHead(404); return r.end('not found'); }
    r.writeHead(200, { 'content-type': T[path.extname(p)] || 'application/octet-stream' }); r.end(b);
  });
}).listen(port, () => console.log('홍대 느슨지도: http://localhost:' + port + '/index.html  (끄려면 Ctrl+C)'));
