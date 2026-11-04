#!/bin/bash
# 홍대 느슨지도: 내 컴퓨터에서 간이 웹서버를 켜고 브라우저로 엽니다. 이 창을 닫으면 꺼져요.
cd "$(dirname "$0")" || exit 1
PORT=8787
URL="http://localhost:$PORT/index.html"
if command -v python3 >/dev/null 2>&1; then
  (sleep 1; open "$URL") &
  echo "홍대 느슨지도: $URL  (끄려면 이 창을 닫거나 Ctrl+C)"
  python3 -m http.server "$PORT" --bind 127.0.0.1
elif command -v node >/dev/null 2>&1; then
  (sleep 1; open "$URL") &
  node tools/serve.js
else
  echo "python3 또는 Node.js 가 필요해요. 터미널에 'xcode-select --install' 을 입력하면 python3 가 설치돼요."
  read -r -p "엔터를 누르면 닫혀요"
fi
