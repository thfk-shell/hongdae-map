/* 카테고리·태그·테마·기준점·지도 설정 */
window.HM_SETTINGS = {
  "appName": "홍대 느슨지도",
  "categories": [
    {
      "id": "goods",
      "label": "굿즈·덕질",
      "short": "굿즈",
      "icon": "🎁",
      "color": "#7357F6"
    },
    {
      "id": "fashion",
      "label": "패션·빈티지",
      "short": "패션",
      "icon": "👕",
      "color": "#2A63F0"
    },
    {
      "id": "lifestyle",
      "label": "소품·액세서리",
      "short": "소품",
      "icon": "🧸",
      "color": "#E06A1B"
    },
    {
      "id": "dessert",
      "label": "디저트·카페",
      "short": "디저트",
      "icon": "🍰",
      "color": "#D63C74"
    },
    {
      "id": "food",
      "label": "식사·맛집",
      "short": "식사",
      "icon": "🍽️",
      "color": "#B07400"
    },
    {
      "id": "play",
      "label": "놀거리·체험",
      "short": "체험",
      "icon": "🎮",
      "color": "#0E9470"
    }
  ],
  "quickFilters": [
    {
      "id": "open",
      "label": "지금 영업 중",
      "icon": "🟢"
    },
    {
      "id": "indoor",
      "label": "실내",
      "icon": "☔"
    },
    {
      "id": "cheap",
      "label": "저렴한 곳",
      "icon": "💸"
    },
    {
      "id": "late",
      "label": "늦게까지",
      "icon": "🌙"
    },
    {
      "id": "limited",
      "label": "기간 한정",
      "icon": "🔥"
    }
  ],
  "themes": [
    {
      "id": "otaku",
      "icon": "🎁",
      "title": "덕질 투어",
      "desc": "굿즈샵 돌고 가챠 한 판",
      "cats": [
        "goods"
      ]
    },
    {
      "id": "vintage",
      "icon": "👕",
      "title": "구제·소품 산책",
      "desc": "빈티지 구경하다 소품샵까지",
      "cats": [
        "fashion",
        "lifestyle"
      ]
    },
    {
      "id": "photo",
      "icon": "📸",
      "title": "사진 남기기",
      "desc": "셀프사진, 이색 공간",
      "tags": [
        "사진 맛집"
      ]
    },
    {
      "id": "rain",
      "icon": "☔",
      "title": "비 와도 OK",
      "desc": "실내에서 오래 놀기",
      "tags": [
        "비 오는 날"
      ]
    },
    {
      "id": "cheap",
      "icon": "💸",
      "title": "가볍게 놀기",
      "desc": "부담 없는 가격대",
      "quick": [
        "cheap"
      ]
    },
    {
      "id": "night",
      "icon": "🌙",
      "title": "밤까지 놀기",
      "desc": "22시 이후에도 여는 곳",
      "quick": [
        "late"
      ]
    },
    {
      "id": "hungry",
      "icon": "🍽️",
      "title": "배고플 때",
      "desc": "한 끼 또는 디저트",
      "cats": [
        "food",
        "dessert"
      ]
    },
    {
      "id": "limited",
      "icon": "🔥",
      "title": "지금만 볼 수 있는",
      "desc": "기간 한정 전시·팝업",
      "quick": [
        "limited"
      ]
    }
  ],
  "tags": [
    "실내",
    "비 오는 날",
    "저렴함",
    "구경 위주",
    "오래 머물기",
    "짧게 들르기",
    "예약 추천",
    "웨이팅 있음",
    "사진 맛집",
    "친구끼리",
    "가챠",
    "애니·게임",
    "빈티지",
    "핸드메이드",
    "기간 한정",
    "팝업",
    "전시",
    "늦게까지",
    "디저트 맛집",
    "이색 공간"
  ],
  "zones": [
    {
      "id": "hongdae-station",
      "label": "홍대입구역",
      "center": [
        37.5572,
        126.9245
      ],
      "zoom": 17
    },
    {
      "id": "yeonnam",
      "label": "연남동",
      "center": [
        37.5615,
        126.9228
      ],
      "zoom": 16
    },
    {
      "id": "hongdae-main",
      "label": "홍대 정문·놀이터",
      "center": [
        37.5517,
        126.923
      ],
      "zoom": 16
    },
    {
      "id": "sangsu-hapjeong",
      "label": "상수·합정",
      "center": [
        37.549,
        126.9175
      ],
      "zoom": 16
    }
  ],
  "startPoints": [
    {
      "id": "hongik-9",
      "label": "홍대입구역 9번 출구",
      "lat": 37.55604,
      "lng": 126.922922
    },
    {
      "id": "hongik-3",
      "label": "홍대입구역 3번 출구 (연남)",
      "lat": 37.558512,
      "lng": 126.925302
    },
    {
      "id": "hongik-8",
      "label": "홍대입구역 8번 출구",
      "lat": 37.556889,
      "lng": 126.924123
    },
    {
      "id": "hapjeong-3",
      "label": "합정역 3번 출구",
      "lat": 37.550787,
      "lng": 126.915912
    },
    {
      "id": "sangsu-1",
      "label": "상수역 1번 출구",
      "lat": 37.547874,
      "lng": 126.922829
    }
  ],
  "defaultStartPoint": "hongik-9",
  "walk": {
    "metersPerMinute": 70,
    "detour": 1.3,
    "nearbyMaxMinutes": 15,
    "rings": [
      5,
      10
    ]
  },
  "map": {
    "center": [
      37.5565,
      126.922
    ],
    "zoom": 15,
    "minZoom": 13,
    "maxZoom": 19,
    "bounds": [
      [
        37.51,
        126.87
      ],
      [
        37.6,
        126.98
      ]
    ],
    "tiles": [
      {
        "id": "vworld",
        "name": "브이월드 기본 지도",
        "needsKey": "vworld",
        "url": "https://api.vworld.kr/req/wmts/1.0.0/{key}/Base/{z}/{y}/{x}.png",
        "subdomains": "",
        "minNativeZoom": 6,
        "maxNativeZoom": 19,
        "credit": "지도: 브이월드(국토교통부)",
        "attribution": "&copy; <a href=\"https://www.vworld.kr\" target=\"_blank\" rel=\"noopener\">브이월드</a> 국토교통부"
      },
      {
        "id": "white",
        "name": "브이월드 흰색 지도",
        "needsKey": "vworld",
        "optIn": true,
        "url": "https://api.vworld.kr/req/wmts/1.0.0/{key}/white/{z}/{y}/{x}.png",
        "subdomains": "",
        "minNativeZoom": 6,
        "maxNativeZoom": 18,
        "credit": "지도: 브이월드(국토교통부)",
        "attribution": "&copy; <a href=\"https://www.vworld.kr\" target=\"_blank\" rel=\"noopener\">브이월드</a> 국토교통부"
      },
      {
        "id": "osm",
        "name": "OpenStreetMap 기본 지도",
        "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        "subdomains": "",
        "maxNativeZoom": 19,
        "credit": "지도 데이터 © OpenStreetMap 기여자",
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a> 기여자"
      },
      {
        "id": "carto",
        "name": "CARTO Voyager (OpenStreetMap 기반)",
        "url": "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        "subdomains": "abcd",
        "maxNativeZoom": 20,
        "credit": "지도 데이터 © OpenStreetMap 기여자, CARTO",
        "attribution": "&copy; <a href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\" rel=\"noopener\">OpenStreetMap</a> 기여자 &copy; <a href=\"https://carto.com/attributions\" target=\"_blank\" rel=\"noopener\">CARTO</a>"
      }
    ]
  },
  "storageKeys": {
    "saved": "hongdae-map:saved:v1",
    "start": "hongdae-map:start:v1"
  },
  "reportUrl": null
};
