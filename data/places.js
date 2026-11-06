/* 홍대 느슨지도 장소 데이터.
   "window.HM_PLACES = " 뒤는 순수 JSON 이에요. 장소를 고칠 땐 이 파일만 수정하면 돼요.
   필드 설명: README.md 의 "장소 데이터 고치기" */
window.HM_PLACES = {
  "meta": {
    "version": "0.2",
    "researchedAt": "2026-10-16",
    "editedAt": "2026-11-06",
    "note": "장소 조사는 2026-10-16 웹 검색 기준(2026-11-06 추가 8곳은 그날 조사). 현장·전화 확인은 하지 않았어요.",
    "changes": [
      "툭툭누들타이: 데이터는 보존, 기본 목록에서 숨김 (운영 미확인)",
      "장소별 issues(확인이 필요한 점) 추가 — 인계 자료 03·07 문서의 충돌 메모 기준",
      "수동 추정 좌표 4곳에 location.manual 표시",
      "가샤폰 hoursNote 근거 오류 정정, 짱오락실(한 줄 이유 포함)·상상마당 설명 완화, 레이어드 미확인 인스타 링크 제거",
      "카페 공명 홍대점 후기에 다른 지점 혼용 안내 추가",
      "2026-11-06 장소 8곳 추가 (쿄우마 가챠샵, 아더에러, 피조물빈티지, 오레노라멘, 카페꼼마, 어글리쿠키, 내맘대로폰케이스, 그림제작소). 상수·합정 4곳 보강"
    ]
  },
  "places": [
    {
      "id": "animate-hongdae",
      "name": "애니메이트 홍대점",
      "shortName": "애니메이트",
      "searchName": "애니메이트 홍대점",
      "aliases": [
        "animate",
        "애니굿즈",
        "AK플라자"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "비 오는 날",
        "구경 위주",
        "애니·게임",
        "오래 머물기"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 양화로 188 AK PLAZA 홍대 5층",
      "location": {
        "lat": 37.55774581,
        "lng": 126.92649833,
        "accuracy": "exact",
        "source": "가챠맵 카카오맵 좌표 (AK PLAZA 홍대)"
      },
      "nearestExit": "홍대입구역 4번 출구 도보 2분",
      "oneLineReason": "애니·게임 공식 굿즈가 한 층에 모인 홍대 덕질의 출발점",
      "description": "AK PLAZA 홍대 5층의 대형 애니메이션 굿즈숍이에요. 책·음반부터 아크릴 스탠드, 캔뱃지, 피규어까지 작품별·게임별로 정리돼 있어 처음 가도 찾기 쉬워요. 바로 아래 4층 반다이 가샤폰과 묶어 돌기 좋아요.",
      "priceLevel": 2,
      "priceNote": "아크릴 스탠드 1~2만원대, 캔뱃지 5천원부터 (2025 후기)",
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "11:00-21:40",
        "tue": "11:00-21:40",
        "wed": "11:00-21:40",
        "thu": "11:00-21:40",
        "fri": "11:00-21:40",
        "sat": "10:30-21:40",
        "sun": "10:30-21:40"
      },
      "hoursNote": "공휴일은 10:30 오픈 (공식 X 기준)",
      "floor": "AK PLAZA 5층",
      "entranceTip": "AK PLAZA 안에서 5층으로. 애니메이트 카페와는 층 반대편이에요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null,
        "x": "https://x.com/animate_hongdae"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "애니메이트 서울홍대점 공식 X",
          "url": "https://x.com/animate_hongdae",
          "type": "sns",
          "note": "영업시간 11:00~21:40, 주말·공휴일 10:30 오픈"
        },
        {
          "label": "가챠맵 매장 정보",
          "url": "https://www.gachamap.co.kr/store/9ea5b2a9-7acd-4087-ad22-647b5d8228e1",
          "type": "aggregator",
          "note": "주소, 출구, 좌표, 취급 가챠"
        },
        {
          "label": "애니메이트 홍대점 방문 후기 (2025)",
          "url": "https://ghostweb.tistory.com/2197",
          "type": "blog",
          "note": "게임별 굿즈 구성과 가격대"
        }
      ],
      "review": {
        "pros": [
          "애니·게임 굿즈 규모가 홍대에서 손꼽힘",
          "게임·작품별로 매대가 나뉘어 찾기 쉬움",
          "4층 가샤폰·팝업과 한 건물에서 이어 보기 좋음"
        ],
        "cons": [
          "주말엔 사람이 많이 몰림",
          "인기 굿즈는 빨리 빠져 오픈 직후가 유리"
        ],
        "goodFor": [
          "애니·서브컬처 게임 팬",
          "홍대 덕질 투어를 처음 하는 사람"
        ],
        "practical": [
          "아크릴 스탠드 1~2만원대, 캔뱃지 5천원부터"
        ],
        "sourceCount": 4,
        "sources": [
          {
            "label": "홍대 굿즈샵 정리 (2025)",
            "url": "https://think2918.tistory.com/760"
          },
          {
            "label": "애니메이트 홍대점 방문 후기 (2025)",
            "url": "https://ghostweb.tistory.com/2197"
          },
          {
            "label": "애니메이트 홍대점 방문 후기 (2024)",
            "url": "https://clean-white.tistory.com/entry/%ED%99%8D%EB%8C%80-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%ED%8A%B8-%ED%99%8D%EB%8C%80%EC%A0%90-%EB%B0%A9%EB%AC%B8-%ED%9B%84%EA%B8%B0"
          },
          {
            "label": "트립닷컴 AK플라자 홍대점 모음",
            "url": "https://kr.trip.com/moments/theme/poi-ak-plaza-hongdae-144084158-store-993139"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": "high",
        "priceBurden": null,
        "friendGroup": null,
        "crowd": "high"
      },
      "details": {
        "works": [
          "원신",
          "붕괴: 스타레일",
          "명조",
          "주술회전",
          "귀멸의 칼날",
          "하이큐!!"
        ],
        "gachaPayment": null
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "gashapon-street-ak",
      "name": "반다이 가샤폰 스트리트 홍대AK점",
      "shortName": "가샤폰 스트리트",
      "searchName": "가샤폰 스트리트 홍대",
      "aliases": [
        "반다이",
        "가샤폰",
        "정가 가챠"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "가챠",
        "애니·게임",
        "짧게 들르기",
        "저렴함"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 양화로 188 AK PLAZA 홍대 4층",
      "location": {
        "lat": 37.55774581,
        "lng": 126.92649833,
        "accuracy": "exact",
        "source": "가챠맵 카카오맵 좌표 (AK PLAZA 홍대)"
      },
      "nearestExit": "홍대입구역 4번 출구 도보 1분",
      "oneLineReason": "반다이 공식 가챠를 정가로, 애니메이트 바로 아래층",
      "description": "AK PLAZA 4층의 반다이 공식 가챠 매장이에요. 가챠맵 가격 비교에서 이 매장이 최저가인 상품이 많고, 뽑은 캡슐을 올려놓고 찍는 촬영 부스도 있어요.",
      "priceLevel": 1,
      "priceNote": "가챠 1회 대부분 3,000~7,000원 (가챠맵)",
      "stayMinutes": [
        10,
        30
      ],
      "openingHours": {
        "mon": "10:30-22:00",
        "tue": "10:30-22:00",
        "wed": "10:30-22:00",
        "thu": "10:30-22:00",
        "fri": "10:30-22:00",
        "sat": "10:30-22:00",
        "sun": "10:30-22:00"
      },
      "hoursNote": "AK PLAZA 운영시간 기준. 매장 자체 시간은 공식 확인 전이에요",
      "floor": "AK PLAZA 4층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "가챠맵 매장 정보",
          "url": "https://www.gachamap.co.kr/store/d1ef86a1-01f5-4342-ae63-59a8825e6c94",
          "type": "aggregator",
          "note": "주소, 좌표, 가격 비교, 다음 날 10:30 오픈 표시"
        },
        {
          "label": "트립닷컴 AK플라자 홍대점",
          "url": "https://kr.trip.com/moments/theme/poi-ak-plaza-hongdae-144084158-store-993139",
          "type": "map",
          "note": "AK플라자 운영 10:30~22:00"
        },
        {
          "label": "가샤폰 스트리트 홍대점 방문 후기 (2024)",
          "url": "https://clean-white.tistory.com/entry/%ED%99%8D%EB%8C%80-%EB%B0%98%EB%8B%A4%EC%9D%B4-%EA%B0%80%EC%83%A4%ED%8F%B0-%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8-%ED%99%8D%EB%8C%80%EC%A0%90-%EB%B0%A9%EB%AC%B8-%ED%9B%84%EA%B8%B0",
          "type": "blog",
          "note": "4층 위치, 촬영 부스"
        }
      ],
      "review": {
        "pros": [
          "반다이 정가라 다른 가챠샵보다 싼 상품이 많음",
          "뽑은 상품 촬영용 부스가 있음",
          "5층 애니메이트와 같이 돌기 편함"
        ],
        "cons": [
          "상품 구성은 다른 반다이 매장과 비슷하다는 평"
        ],
        "goodFor": [
          "가볍게 가챠 몇 판 돌리고 싶은 사람"
        ],
        "practical": [
          "가챠 1회 3,000~7,000원대"
        ],
        "sourceCount": 2,
        "sources": [
          {
            "label": "가챠맵 가격 비교",
            "url": "https://www.gachamap.co.kr/store/d1ef86a1-01f5-4342-ae63-59a8825e6c94"
          },
          {
            "label": "가샤폰 스트리트 홍대점 방문 후기 (2024)",
            "url": "https://clean-white.tistory.com/entry/%ED%99%8D%EB%8C%80-%EB%B0%98%EB%8B%A4%EC%9D%B4-%EA%B0%80%EC%83%A4%ED%8F%B0-%EC%8A%A4%ED%8A%B8%EB%A6%AC%ED%8A%B8-%ED%99%8D%EB%8C%80%EC%A0%90-%EB%B0%A9%EB%AC%B8-%ED%9B%84%EA%B8%B0"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "works": [
          "산리오",
          "짱구는 못말려",
          "원피스",
          "건담",
          "명탐정 코난"
        ],
        "gachaPayment": null
      },
      "issues": [
        "오픈 시각을 공식 출처로 확인하지 못했어요. (AK PLAZA 운영시간 기준)"
      ],
      "listed": true
    },
    {
      "id": "js-store",
      "name": "제이에스스토어 홍대점",
      "shortName": "JS스토어",
      "searchName": "제이에스스토어 홍대점",
      "aliases": [
        "JS STORE",
        "피규어",
        "쿠지",
        "제일복권"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "애니·게임",
        "가챠",
        "구경 위주"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 와우산로29길 48-24 1층",
      "location": {
        "lat": 37.55630663,
        "lng": 126.92808588,
        "accuracy": "exact",
        "source": "가챠맵 카카오맵 좌표"
      },
      "nearestExit": "홍대입구역 6·7번 출구 도보 1분",
      "oneLineReason": "벽 한 면이 피규어, 피규어·쿠지 구경하기 좋은 대형 매장",
      "description": "피규어와 굿즈 비중이 큰 대형 매장이에요. 진열장 위쪽엔 전시용 피규어가 있어 구경만 해도 재미있고, 가챠 225종·쿠지 48종 정도를 함께 다뤄요(가챠맵 집계).",
      "priceLevel": 2,
      "priceNote": "쿠지 1회 1만~1만5천원, 가챠 3,000~8,000원 (가챠맵)",
      "stayMinutes": [
        20,
        40
      ],
      "openingHours": {
        "mon": "12:00-21:00",
        "tue": "12:00-21:00",
        "wed": "12:00-21:00",
        "thu": "12:00-21:00",
        "fri": "12:00-21:00",
        "sat": "12:00-21:00",
        "sun": "12:00-21:00"
      },
      "hoursNote": "마감 시간은 출처에 따라 20:45~21:00",
      "floor": "1층",
      "entranceTip": "입구가 건물 오른편에 있어요 (방문 후기).",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://www.instagram.com/jsstore_hongdae/"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "가챠맵 매장 정보",
          "url": "https://www.gachamap.co.kr/store/e2d96aca-6156-4c32-856d-95f0826a4c35",
          "type": "aggregator",
          "note": "주소, 좌표, 다음 날 12시 오픈 표시, 운영자 코멘트"
        },
        {
          "label": "트리플 장소 정보",
          "url": "https://triple.guide/attractions/e34a094f-d52c-4ef3-8acc-48ac775602f4",
          "type": "map",
          "note": "12:00~21:00"
        },
        {
          "label": "방문 후기 (2024)",
          "url": "https://m.blog.naver.com/fir0616/223512795640",
          "type": "blog",
          "note": "입구 위치, 12:00~20:45"
        }
      ],
      "review": {
        "pros": [
          "피규어 전시·판매 규모가 큼",
          "가격이 괜찮다는 평이 여럿",
          "지상층이라 넓고 쾌적하다는 후기"
        ],
        "cons": [
          "가챠보다 피규어·굿즈 비중이 높음",
          "입구가 건물 옆이라 지나치기 쉬움"
        ],
        "goodFor": [
          "피규어 수집가",
          "애니를 잘 몰라도 산리오·치이카와 구경하고 싶은 친구"
        ],
        "practical": [
          "쿠지 1회 약 1만~1만5천원"
        ],
        "sourceCount": 4,
        "sources": [
          {
            "label": "피규어샵 방문 후기",
            "url": "https://blog.naver.com/zerotoo02/223669166890"
          },
          {
            "label": "방문 후기 (2024)",
            "url": "https://m.blog.naver.com/fir0616/223512795640"
          },
          {
            "label": "홍대 피규어 사는 곳 (2025)",
            "url": "https://brunch.co.kr/@topasvga/4684"
          },
          {
            "label": "가챠맵 운영자 코멘트",
            "url": "https://www.gachamap.co.kr/store/e2d96aca-6156-4c32-856d-95f0826a4c35"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": "high",
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "works": [
          "포켓몬",
          "치이카와",
          "산리오",
          "드래곤볼",
          "봇치 더 록!"
        ],
        "gachaPayment": null
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "space-urara",
      "name": "스페이스 우라라 홍대점",
      "shortName": "스페이스 우라라",
      "searchName": "스페이스 우라라 홍대점",
      "aliases": [
        "우라라",
        "쿠지",
        "제일복권"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "애니·게임",
        "가챠",
        "저렴함",
        "짧게 들르기"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 와우산로29길 48-29 지하 1층",
      "location": {
        "lat": 37.55625803,
        "lng": 126.92772717,
        "accuracy": "exact",
        "source": "가챠맵 카카오맵 좌표"
      },
      "nearestExit": "홍대입구역 7번 출구 도보 2분",
      "oneLineReason": "쿠지(제일복권)가 싼 편, JS스토어 바로 옆 지하",
      "description": "가챠와 쿠지, 피규어를 함께 파는 지하 매장이에요. 가챠맵 비교 기준 쿠지·가챠 상당수가 홍대 최저가로 집계돼 있어요. 제이에스스토어와 같은 골목이라 연달아 들르기 좋아요.",
      "priceLevel": 1,
      "priceNote": "쿠지 11,900~14,900원, 가챠 3,500~5,900원 (가챠맵)",
      "stayMinutes": [
        10,
        30
      ],
      "openingHours": null,
      "hoursNote": "11시 오픈 (가챠맵 기준). 마감 시간은 아직 확인하지 못했어요",
      "floor": "지하 1층",
      "entranceTip": "지하 매장이라 계단 입구를 찾아 내려가야 해요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://instagram.com/space_urara"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "가챠맵 매장 정보",
          "url": "https://www.gachamap.co.kr/store/39ddd44b-352e-410f-8799-b8b38066ab67",
          "type": "aggregator",
          "note": "주소, 좌표, 가격 비교, 11시 오픈"
        },
        {
          "label": "방문 후기",
          "url": "https://blog.naver.com/dorothy3560/223747323791",
          "type": "blog",
          "note": "쿠지·피규어 구성"
        }
      ],
      "review": {
        "pros": [
          "쿠지 종류가 많고 가격이 낮은 편",
          "피규어도 함께 구경 가능"
        ],
        "cons": [],
        "goodFor": [
          "쿠지 한 판 뽑아보고 싶은 사람"
        ],
        "practical": [
          "쿠지 1만원대 초중반, 가챠 3~6천원"
        ],
        "sourceCount": 2,
        "sources": [
          {
            "label": "가챠맵 가격 비교",
            "url": "https://www.gachamap.co.kr/store/39ddd44b-352e-410f-8799-b8b38066ab67"
          },
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/dorothy3560/223747323791"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "works": [
          "원피스",
          "헌터×헌터",
          "하이큐!!",
          "주술회전",
          "장송의 프리렌"
        ],
        "gachaPayment": null
      },
      "issues": [
        "마감 시간이 확인되지 않았고, 문을 연 시기도 출처마다 달라요."
      ],
      "listed": true
    },
    {
      "id": "shiro-store",
      "name": "시로상점·시로가챠",
      "shortName": "시로상점",
      "searchName": "시로상점 홍대",
      "aliases": [
        "시로가챠",
        "shiro"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "가챠",
        "애니·게임",
        "구경 위주"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 와우산로33길 23 (시로가챠 2층, 시로상점 맞은편 지하 1층)",
      "location": {
        "lat": 37.55543941,
        "lng": 126.92896358,
        "accuracy": "exact",
        "source": "가챠맵 카카오맵 좌표 (시로가챠)"
      },
      "nearestExit": "홍대입구역 7번 출구 도보 5분",
      "oneLineReason": "굿즈 매장과 가챠 매장이 마주 보는, 신상이 빠른 곳",
      "description": "굿즈 중심의 시로상점(지하 1층)과 가챠 중심의 시로가챠(맞은편 2층)가 마주 보고 있어요. 공식 X에 신상 입고 소식을 자주 올리고, 가챠는 중복을 줄이는 스티커 시스템이 있어요(가챠맵 기준).",
      "priceLevel": 2,
      "priceNote": "가챠 4,000~8,500원 (가챠맵)",
      "stayMinutes": [
        20,
        40
      ],
      "openingHours": {
        "mon": "11:00-20:00",
        "tue": "11:00-20:00",
        "wed": "11:00-20:00",
        "thu": "11:00-20:00",
        "fri": "11:00-20:00",
        "sat": "11:00-20:00",
        "sun": "11:00-20:00"
      },
      "hoursNote": "시로가챠 기준 (가챠맵). 시로상점 시간은 다를 수 있어요",
      "floor": "시로가챠 2층 · 시로상점 지하 1층",
      "entranceTip": "두 매장이 길을 사이에 두고 마주 보고 있어요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://instagram.com/shirostore_hongdae",
        "x": "https://x.com/shirostore_hd"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "가챠맵 매장 정보",
          "url": "https://www.gachamap.co.kr/store/68790b26-8e26-4804-bbe9-ca3e62345ad7",
          "type": "aggregator",
          "note": "주소, 좌표, 11:00~20:00, 중복 방지 스티커"
        },
        {
          "label": "시로상점 공식 X",
          "url": "https://x.com/shirostore_hd",
          "type": "sns",
          "note": "7번 출구 도보 5분, 입고 안내"
        },
        {
          "label": "방문 후기",
          "url": "https://blog.naver.com/doldao/223829338444",
          "type": "blog",
          "note": "매장 분위기"
        }
      ],
      "review": {
        "pros": [
          "진열이 잘 돼 있어 구경하는 재미가 있음",
          "매장이 넓고 쾌적한 편",
          "신상 가챠가 빨리 들어옴"
        ],
        "cons": [
          "역에서 5분 정도 걸어야 함"
        ],
        "goodFor": [
          "신상 가챠를 노리는 사람"
        ],
        "practical": [
          "굿즈(지하)와 가챠(2층) 매장이 따로라 둘 다 들르기"
        ],
        "sourceCount": 3,
        "sources": [
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/doldao/223829338444"
          },
          {
            "label": "가챠맵 매장 정보",
            "url": "https://www.gachamap.co.kr/store/68790b26-8e26-4804-bbe9-ca3e62345ad7"
          },
          {
            "label": "시로상점 공식 X 입고 안내",
            "url": "https://x.com/shirostore_hd"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "works": [
          "치이카와",
          "주술회전",
          "산리오",
          "짱구는 못말려",
          "포켓몬"
        ],
        "gachaPayment": null
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "brothergoods-station",
      "name": "브라더굿즈 가챠샵 홍대입구역점",
      "shortName": "브라더굿즈",
      "searchName": "브라더굿즈 가챠샵 홍대입구역점",
      "aliases": [
        "브라더굿즈",
        "쿠지"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "가챠",
        "짧게 들르기",
        "늦게까지"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 홍익로6길 30 1층·지하 1층",
      "location": {
        "lat": 37.5556332,
        "lng": 126.92346531,
        "accuracy": "exact",
        "source": "가챠맵 카카오맵 좌표"
      },
      "nearestExit": "홍대입구역 9번 출구 도보 1분",
      "oneLineReason": "9번 출구 1분, 밤늦게까지 가챠 돌릴 수 있는 곳",
      "description": "1층은 가챠, 지하에는 가챠와 쿠지가 있어요. 역에서 가장 가까운 가챠샵 중 하나라 약속 시간 전에 들르기 좋아요. 같은 브랜드의 홍대점(다른 매장)과 헷갈리지 마세요.",
      "priceLevel": 1,
      "priceNote": "가챠 4,000~8,000원, 쿠지 1만원대 (가챠맵)",
      "stayMinutes": [
        10,
        20
      ],
      "openingHours": null,
      "hoursNote": "자정까지(가챠맵) 또는 24시간(2025 후기)으로 정보가 엇갈려요. 늦은 시간엔 확인하고 가세요",
      "floor": "1층 · 지하 1층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "가챠맵 매장 정보",
          "url": "https://www.gachamap.co.kr/store/3325fbe2-5c54-4c00-a538-b6f22b633c69",
          "type": "aggregator",
          "note": "주소, 좌표, 자정까지, 홍대점과 별개"
        },
        {
          "label": "방문 후기 (2025)",
          "url": "https://m.blog.naver.com/dulgi_bae/224021285241",
          "type": "blog",
          "note": "24시간 영업이라는 기록"
        }
      ],
      "review": {
        "pros": [
          "역 바로 앞이라 들르기 쉬움",
          "늦은 시간까지 운영"
        ],
        "cons": [
          "같은 브랜드 홍대점보다 작은 매장",
          "이름이 비슷한 다른 매장과 헷갈리기 쉬움"
        ],
        "goodFor": [
          "약속 기다리며 잠깐 들를 사람"
        ],
        "practical": [],
        "sourceCount": 2,
        "sources": [
          {
            "label": "가챠맵 매장 정보",
            "url": "https://www.gachamap.co.kr/store/3325fbe2-5c54-4c00-a538-b6f22b633c69"
          },
          {
            "label": "방문 후기 (2025)",
            "url": "https://m.blog.naver.com/dulgi_bae/224021285241"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "works": [
          "나루토",
          "나의 히어로 아카데미아",
          "단다단",
          "치이카와",
          "마인크래프트"
        ],
        "gachaPayment": null
      },
      "issues": [
        "영업시간이 출처마다 달라요 (자정 마감 / 24시간)."
      ],
      "listed": true
    },
    {
      "id": "root-hongdae",
      "name": "루트 홍대",
      "shortName": "루트 홍대",
      "searchName": "루트홍대",
      "aliases": [
        "ROOT",
        "구제",
        "창고형 빈티지"
      ],
      "primaryCategory": "fashion",
      "tags": [
        "실내",
        "빈티지",
        "구경 위주",
        "오래 머물기",
        "늦게까지",
        "저렴함"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 양화로 140 지하 1층",
      "location": {
        "lat": 37.554905,
        "lng": 126.922122,
        "accuracy": "exact",
        "source": "Google 지도 좌표 (Wanderlog 경유)"
      },
      "nearestExit": null,
      "oneLineReason": "250평 창고형 빈티지, 새벽 2시까지 여는 홍대 최대급 구제샵",
      "description": "공식 계정 기준 250평 규모의 창고형 빈티지샵이에요. 아우터·데님부터 원피스, 액세서리까지 종류가 많고 매주 신상이 들어와요.",
      "priceLevel": 1,
      "priceNote": "5,000원부터 시작하는 상품도 있음 (오픈 당시 안내)",
      "stayMinutes": [
        40,
        90
      ],
      "openingHours": {
        "mon": "10:00-02:00",
        "tue": "10:00-02:00",
        "wed": "10:00-02:00",
        "thu": "10:00-02:00",
        "fri": "10:00-02:00",
        "sat": "10:00-02:00",
        "sun": "10:00-02:00"
      },
      "hoursNote": "365일 영업 (공식 인스타)",
      "floor": "지하 1층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://www.instagram.com/root.hongdae"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "루트 홍대 공식 인스타그램",
          "url": "https://www.instagram.com/root.hongdae",
          "type": "sns",
          "note": "양화로 140 B1, 10AM~2AM 365일, 2026.09 게시물"
        },
        {
          "label": "Wanderlog (구글 리뷰 요약)",
          "url": "https://wanderlog.com/ko/place/details/9883813/%EB%A3%A8%ED%8A%B8%ED%99%8D%EB%8C%80",
          "type": "map",
          "note": "구글 좌표, 리뷰 경향"
        }
      ],
      "review": {
        "pros": [
          "매장이 매우 넓어 2시간도 금방 간다는 후기",
          "가격이 합리적이고 브랜드 옷도 섞여 있음",
          "탈의실이 많아 입어 보기 편함"
        ],
        "cons": [
          "계산·할인 적용 응대에 대한 불만 후기도 일부 있음"
        ],
        "goodFor": [
          "구제 입문자",
          "오래 뒤적이며 보물찾기 좋아하는 친구"
        ],
        "practical": [
          "구글 리뷰 3천 건 이상, 대부분 높은 평가 (Wanderlog 집계)"
        ],
        "sourceCount": 3,
        "sources": [
          {
            "label": "Wanderlog 리뷰 요약 (구글 리뷰)",
            "url": "https://wanderlog.com/ko/place/details/9883813/%EB%A3%A8%ED%8A%B8%ED%99%8D%EB%8C%80"
          },
          {
            "label": "구제샵 매니저의 방문 후기",
            "url": "https://blog.naver.com/idkw2w/223495799854"
          },
          {
            "label": "홍대 빈티지 투어 후기",
            "url": "https://blog.naver.com/afx1979/223956595244"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": "high",
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "styleKeywords": [
          "아우터",
          "데님",
          "원피스",
          "액세서리"
        ]
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "vintage-santa",
      "name": "빈티지산타 홍대",
      "shortName": "빈티지산타",
      "searchName": "빈티지산타 홍대",
      "aliases": [
        "vintage santa",
        "구제",
        "스트릿"
      ],
      "primaryCategory": "fashion",
      "tags": [
        "실내",
        "빈티지",
        "구경 위주",
        "늦게까지"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 홍익로 19 지하 1층",
      "location": {
        "lat": 37.554132,
        "lng": 126.922543,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)",
        "note": "주소가 두 가지로 나와 홍익로 19 기준으로 표시했어요."
      },
      "nearestExit": null,
      "oneLineReason": "스트릿 브랜드 구제가 모인 100평 규모 지하 빈티지샵",
      "description": "슈프림, 폴로, 나이키, 칼하트 같은 스트릿·캐주얼 브랜드 구제가 많은 지하 매장이에요. 옷마다 가격표가 붙어 있어 점원 없이도 편하게 구경할 수 있어요.",
      "priceLevel": 2,
      "priceNote": "셔츠류 5만원 안팎 (2023 후기, 변동 가능)",
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "11:00-23:00",
        "tue": "11:00-23:00",
        "wed": "11:00-23:00",
        "thu": "11:00-23:00",
        "fri": "11:00-24:00",
        "sat": "11:00-24:00",
        "sun": "11:00-23:00"
      },
      "hoursNote": "공식 인스타 기준",
      "floor": "지하 1층",
      "entranceTip": "계단으로 내려가는 지하 매장이에요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://www.instagram.com/vintage.santa/"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "빈티지산타 홍대 공식 인스타그램",
          "url": "https://www.instagram.com/vintage.santa/",
          "type": "sns",
          "note": "홍익로19 B1, 11:00 오픈, 일~목 23시·금토 24시, 2026 게시물"
        },
        {
          "label": "방문 후기 (2023)",
          "url": "https://hanybuny.tistory.com/119",
          "type": "blog",
          "note": "규모, 가격대, 탈의실"
        }
      ],
      "review": {
        "pros": [
          "매장이 넓고 종류별로 잘 정리돼 있음",
          "가격표가 붙어 있어 부담 없이 구경",
          "스트릿·힙합 스타일 아이템이 많음"
        ],
        "cons": [
          "구제치고 가격대가 있는 편",
          "주말엔 붐빔"
        ],
        "goodFor": [
          "스트릿 브랜드 구제를 찾는 사람"
        ],
        "practical": [],
        "sourceCount": 2,
        "sources": [
          {
            "label": "방문 후기 (2023)",
            "url": "https://hanybuny.tistory.com/119"
          },
          {
            "label": "공식 인스타그램 게시물",
            "url": "https://www.instagram.com/vintage.santa/"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": "high",
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "styleKeywords": [
          "스트릿",
          "브랜드 구제",
          "힙합"
        ]
      },
      "issues": [
        "주소가 두 가지로 나와요: 홍익로 19 B1 / 양화로23길 28 B1. 지도는 앞의 주소 기준이에요."
      ],
      "listed": true
    },
    {
      "id": "aland-hongdae",
      "name": "에이랜드 홍대점",
      "shortName": "에이랜드",
      "searchName": "에이랜드 홍대점",
      "aliases": [
        "A LAND",
        "편집숍",
        "디자이너 브랜드"
      ],
      "primaryCategory": "fashion",
      "tags": [
        "실내",
        "구경 위주",
        "비 오는 날",
        "오래 머물기"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 양화로16길 29 (지하 1층~5층)",
      "location": {
        "lat": 37.553192,
        "lng": 126.921168,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": null,
      "oneLineReason": "국내 디자이너 브랜드를 지하 1층부터 5층까지 한 번에",
      "description": "국내 신진·디자이너 브랜드 의류와 잡화를 모은 편집숍이에요. 층이 많아 비 오는 날 실내에서 쇼핑하며 시간 보내기 좋아요. 한국관광공사에 택스리펀 매장으로 등록돼 있어요.",
      "priceLevel": 2,
      "priceNote": null,
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "12:00-22:00",
        "tue": "12:00-22:00",
        "wed": "12:00-22:00",
        "thu": "12:00-22:00",
        "fri": "12:00-22:00",
        "sat": "12:00-22:00",
        "sun": "12:00-22:00"
      },
      "hoursNote": "한국관광공사 기준. 11:00 오픈으로 안내한 출처도 있어요. 설·추석 휴무",
      "floor": "지하 1층~5층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": "카드 가능 (관광공사 정보)",
      "links": {
        "official": "https://a-land.co.kr/store/hongdae/",
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "VISITKOREA (한국관광공사)",
          "url": "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=145842",
          "type": "tourism",
          "note": "B1~5F, 12:00~22:00, 명절 휴무"
        },
        {
          "label": "트립인포",
          "url": "https://www.tripinfo.co.kr/info.html?content_type_id=38&content_id=2893937",
          "type": "map",
          "note": "12:00~22:00, 9번 출구 도보 7분"
        },
        {
          "label": "에이랜드 공식 매장 페이지",
          "url": "https://a-land.co.kr/store/hongdae/",
          "type": "official",
          "note": "조사 시점 접속 오류로 내용 확인 못함"
        }
      ],
      "review": null,
      "traits": {
        "browse": "high",
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "styleKeywords": [
          "디자이너 브랜드",
          "캐주얼",
          "잡화"
        ]
      },
      "issues": [
        "일요일 휴무 여부가 출처마다 달라요."
      ],
      "listed": true
    },
    {
      "id": "object-seogyo",
      "name": "오브젝트 서교점",
      "shortName": "오브젝트",
      "searchName": "오브젝트 서교점",
      "aliases": [
        "object",
        "소품샵",
        "문구",
        "최고심"
      ],
      "primaryCategory": "lifestyle",
      "tags": [
        "실내",
        "구경 위주",
        "전시",
        "핸드메이드"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 와우산로35길 13",
      "location": {
        "lat": 37.556214,
        "lng": 126.92903,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (도로 단위)",
        "note": "도로 단위 근사 위치라 실제 매장과 수십 m 다를 수 있어요."
      },
      "nearestExit": null,
      "oneLineReason": "국내 작가 소품과 자주 바뀌는 캐릭터 전시를 함께 보는 곳",
      "description": "국내 소규모 브랜드·작가의 문구, 생활소품, 책을 모은 셀렉트숍이에요. 한 층은 작가 협업 전시·팝업 공간이라 갈 때마다 볼거리가 바뀌어요.",
      "priceLevel": 2,
      "priceNote": "엽서·스티커 2~3천원대, 키링 7천원대 (공식 온라인몰)",
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "11:00-21:00",
        "tue": "11:00-21:00",
        "wed": "11:00-21:00",
        "thu": "11:00-21:00",
        "fri": "11:00-21:00",
        "sat": "11:00-21:00",
        "sun": "11:00-21:00"
      },
      "hoursNote": "현재 전시 운영시간(공식) 기준. 매장은 12:00 오픈으로 안내한 출처도 있어요",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": "https://insideobject.com/",
        "instagram": "https://www.instagram.com/insideobject/"
      },
      "events": [
        {
          "title": "소프트썸네일 〈Little Eyes, The Town〉",
          "kind": "전시",
          "where": "서교점",
          "from": "2026-10-01",
          "until": "2026-11-11",
          "hours": "매일 11:00~21:00",
          "url": "https://insideobject.com/object/exhibition/seogyo/1f/softthumbnail.html"
        }
      ],
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "오브젝트 공식 전시 페이지",
          "url": "https://insideobject.com/object/exhibition/seogyo/1f/softthumbnail.html",
          "type": "official",
          "note": "2026.10.01~11.11, 매일 11:00~21:00"
        },
        {
          "label": "오브젝트 공식몰",
          "url": "https://insideobject.com/",
          "type": "official",
          "note": "주소 와우산로35길 13, 상품 가격"
        },
        {
          "label": "책방지도",
          "url": "https://www.bookshopmap.com/map/object_hongdae",
          "type": "map",
          "note": "12:00~22:00 (예전 정보)"
        }
      ],
      "review": {
        "pros": [
          "선물용 소품 고르기 좋다는 평이 많음",
          "전시·팝업이 자주 바뀌어 다시 갈 이유가 있음",
          "자체 제작 다이어리·노트가 인기"
        ],
        "cons": [
          "전시 기간엔 전시층이 붐빔"
        ],
        "goodFor": [
          "다꾸·문구 좋아하는 친구",
          "선물 사러 가는 날"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "여행톡톡 소품샵 추천",
            "url": "https://www.tourtoctoc.com/news/articleView.html?idxno=2703"
          },
          {
            "label": "방문 후기 (2023)",
            "url": "https://come-out-play.tistory.com/98"
          },
          {
            "label": "방문 후기 (2021)",
            "url": "https://belifgd.tistory.com/entry/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8-%EC%84%9C%EA%B5%90%EC%A0%90-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%A0%84%EA%B5%AD-%EB%A7%A4%EC%9E%A5-%EC%A0%95%EB%B3%B4"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": "high",
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {},
      "issues": [
        "오픈 시각이 출처마다 달라요 (11시 / 12시)."
      ],
      "listed": true
    },
    {
      "id": "muumuu-yeonnam",
      "name": "무유무유 연남점",
      "shortName": "무유무유",
      "searchName": "무유무유 연남",
      "aliases": [
        "muu muu",
        "다꾸",
        "스티커",
        "소품샵"
      ],
      "primaryCategory": "lifestyle",
      "tags": [
        "실내",
        "구경 위주",
        "사진 맛집"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 190-4 102호",
      "location": {
        "lat": 37.562843,
        "lng": 126.926049,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": null,
      "oneLineReason": "다꾸 스티커와 캐릭터 소품이 가득한 연남 대표 소품샵",
      "description": "스티커·문구 같은 다꾸 아이템과 캐릭터 소품, 향수까지 파는 소품샵이에요. 독점 디자인 상품이 많고 매장 곳곳이 사진 찍기 좋게 꾸며져 있어요.",
      "priceLevel": null,
      "priceNote": null,
      "stayMinutes": [
        20,
        40
      ],
      "openingHours": {
        "mon": "11:00-20:00",
        "tue": "11:00-20:00",
        "wed": "11:00-20:00",
        "thu": "11:00-20:00",
        "fri": "11:00-20:00",
        "sat": "11:00-20:00",
        "sun": "11:00-20:00"
      },
      "hoursNote": "연중무휴 (공식 인스타)",
      "floor": "1층 (102호)",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://www.instagram.com/muu_muu_yeonnam/"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "무유무유 연남점 공식 인스타그램",
          "url": "https://www.instagram.com/muu_muu_yeonnam/",
          "type": "sns",
          "note": "성미산로 190-4 102호, 11:00~20:00 연중무휴"
        }
      ],
      "review": {
        "pros": [
          "다꾸용 스티커·문구 종류가 많음",
          "독점 디자인 상품이 있어 선물용으로 좋음",
          "입구에서 향수 시향 가능"
        ],
        "cons": [
          "주말엔 붐빔"
        ],
        "goodFor": [
          "다꾸·스티커 좋아하는 친구"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "방문 후기 (2024)",
            "url": "https://namooya3.tistory.com/95"
          },
          {
            "label": "방문 후기",
            "url": "https://m.blog.naver.com/title15/223471076388"
          },
          {
            "label": "방문 후기",
            "url": "https://m.blog.naver.com/heidi7121/223739839949"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": "high",
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {},
      "issues": [],
      "listed": true
    },
    {
      "id": "sokamono",
      "name": "소카모노",
      "shortName": "소카모노",
      "searchName": "소카모노 연남",
      "aliases": [
        "soka mono",
        "고양이 소품샵",
        "고양이 굿즈"
      ],
      "primaryCategory": "lifestyle",
      "tags": [
        "실내",
        "구경 위주",
        "짧게 들르기"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 167-1 1층",
      "location": {
        "lat": 37.564444,
        "lng": 126.924818,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": null,
      "oneLineReason": "고양이 캐릭터 문구·소품만 모은 연남 골목 소품샵",
      "description": "고양이를 주제로 한 문구와 소품이 가득한 작은 가게예요. 연남동 안쪽 골목에 있어 연남 산책 코스 끝에 들르기 좋아요.",
      "priceLevel": null,
      "priceNote": null,
      "stayMinutes": [
        10,
        20
      ],
      "openingHours": {
        "mon": "closed",
        "tue": "13:00-19:00",
        "wed": "13:00-19:00",
        "thu": "13:00-19:00",
        "fri": "13:00-19:00",
        "sat": "13:00-19:00",
        "sun": "13:00-19:00"
      },
      "hoursNote": "2026 후기 기준. 예전 후기엔 화요일 휴무·주말 20시까지로 나와 있어 바뀌었을 수 있어요",
      "floor": "1층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "needs-check",
      "verifiedAt": null,
      "sources": [
        {
          "label": "방문 후기 (2026)",
          "url": "https://m.blog.naver.com/jhshjh9455/224253410841",
          "type": "blog",
          "note": "13:00~19:00, 월요일 휴무"
        },
        {
          "label": "방문 후기 (2023)",
          "url": "https://m.blog.naver.com/wh012/223114698720",
          "type": "blog",
          "note": "성미산로 167-1, 이전 영업시간"
        }
      ],
      "review": {
        "pros": [
          "고양이 굿즈 종류가 많아 고양이 좋아하면 만족도 높음",
          "가게만의 색깔이 확실하다는 평"
        ],
        "cons": [
          "오후에 열고 저녁에 일찍 닫음"
        ],
        "goodFor": [
          "고양이 좋아하는 친구"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "방문 후기 (2026)",
            "url": "https://m.blog.naver.com/jhshjh9455/224253410841"
          },
          {
            "label": "연남동 소품샵 3곳 정리",
            "url": "https://blog.naver.com/coto1020/223428250157"
          },
          {
            "label": "방문 후기",
            "url": "https://m.blog.naver.com/kakoi77/222042800692"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {},
      "issues": [
        "영업시간·휴무일이 예전 후기와 달라요. 바뀌었을 수 있어요."
      ],
      "listed": true
    },
    {
      "id": "kittybunnypony-hapjeong",
      "name": "메종 키티버니포니 합정",
      "shortName": "키티버니포니",
      "searchName": "메종 키티버니포니",
      "aliases": [
        "kitty bunny pony",
        "파우치",
        "패브릭"
      ],
      "primaryCategory": "lifestyle",
      "tags": [
        "실내",
        "구경 위주",
        "이색 공간",
        "사진 맛집"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 월드컵로5길 33-16",
      "location": {
        "lat": 37.551983,
        "lng": 126.909847,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (도로 단위)",
        "note": "도로 단위 근사 위치라 실제 매장과 수십 m 다를 수 있어요."
      },
      "nearestExit": null,
      "oneLineReason": "주택을 고친 패브릭 브랜드 쇼룸, 파우치 구경 맛집",
      "description": "패브릭 브랜드 키티버니포니의 합정 쇼룸이에요. 오래된 주택을 고친 건물에 1층은 파우치·가방 같은 소품, 2층은 침구·쿠션이 집처럼 꾸며져 있어요.",
      "priceLevel": 2,
      "priceNote": null,
      "stayMinutes": [
        20,
        40
      ],
      "openingHours": {
        "mon": "closed",
        "tue": "12:00-19:00",
        "wed": "12:00-19:00",
        "thu": "12:00-19:00",
        "fri": "12:00-19:00",
        "sat": "12:00-19:00",
        "sun": "12:00-19:00"
      },
      "hoursNote": "월요일·공휴일 휴무 (공식 공지)",
      "floor": "1~2층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": "https://kittybunnypony.com/",
        "instagram": "https://www.instagram.com/kittybunnypony/"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "키티버니포니 공식 공지 (오프라인 스토어 안내)",
          "url": "https://kittybunnypony.com/article/notice/1/188206",
          "type": "official",
          "note": "월드컵로5길 33-16, 화~일 12:00~19:00, 월·공휴일 휴무"
        }
      ],
      "review": {
        "pros": [
          "집처럼 꾸민 공간이라 구경 자체가 재미있음",
          "파우치는 크기·패턴 고르는 재미가 있음"
        ],
        "cons": [],
        "goodFor": [
          "패브릭·인테리어 소품 좋아하는 친구"
        ],
        "practical": [
          "월요일·공휴일 휴무"
        ],
        "sourceCount": 2,
        "sources": [
          {
            "label": "여행톡톡 소품샵 추천",
            "url": "https://www.tourtoctoc.com/news/articleView.html?idxno=2703"
          },
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/with_ssogong/223688607768"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {},
      "issues": [
        "근거가 된 공식 공지는 2025년 9월 글이에요. 그 뒤 바뀌었을 수 있어요."
      ],
      "listed": true
    },
    {
      "id": "overdeep",
      "name": "오버딥 연남",
      "shortName": "오버딥",
      "searchName": "오버딥 연남",
      "aliases": [
        "overdeep",
        "심해 카페",
        "바다 카페",
        "파도크림라떼"
      ],
      "primaryCategory": "dessert",
      "tags": [
        "실내",
        "사진 맛집",
        "이색 공간",
        "비 오는 날"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 149-8 2·3층, 루프탑",
      "location": {
        "lat": 37.56466,
        "lng": 126.922944,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": "홍대입구역 3번 출구에서 약 760m",
      "oneLineReason": "건물 전체가 심해 콘셉트, 연남에서 가장 파란 카페",
      "description": "2·3층과 루프탑을 쓰는 바다 콘셉트 카페예요. 위층으로 갈수록 어두운 심해 분위기에 해파리 장식과 미디어아트가 있어요. 시그니처는 크림을 파도처럼 올린 파도크림라떼.",
      "priceLevel": 2,
      "priceNote": "시그니처 음료 7,000원대",
      "stayMinutes": [
        40,
        80
      ],
      "openingHours": {
        "mon": "closed",
        "tue": "11:00-21:00",
        "wed": "11:00-21:00",
        "thu": "11:00-21:00",
        "fri": "11:00-21:00",
        "sat": "11:00-21:00",
        "sun": "11:00-21:00"
      },
      "hoursNote": "월요일 휴무 (VisitSeoul·공식 인스타)",
      "floor": "2층 주문, 3층·루프탑 좌석",
      "entranceTip": "파란 건물이라 골목에서도 바로 보여요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://www.instagram.com/overdeep_yeonnam"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "VisitSeoul",
          "url": "https://korean.visitseoul.net/area/Overdeep-Yeonnam/KOP8jtxt1",
          "type": "tourism",
          "note": "화~일 11:00~21:00, 월 휴무, 주소"
        },
        {
          "label": "오버딥 공식 인스타그램",
          "url": "https://www.instagram.com/overdeep_yeonnam",
          "type": "sns",
          "note": "open 11:00–21:00 (Mon off)"
        },
        {
          "label": "다이닝코드",
          "url": "https://www.diningcode.com/profile.php?rid=4mp0ta0IeOsw",
          "type": "map",
          "note": "평가 키워드, 2026.10 후기 모음"
        }
      ],
      "review": {
        "pros": [
          "콘셉트가 확실해 사진이 잘 나옴",
          "층마다 분위기가 달라 둘러보는 재미",
          "루프탑이 있어 날씨 좋은 날 좋음"
        ],
        "cons": [
          "위층은 어두워 계단 주의",
          "밝은 카페를 좋아하면 호불호",
          "디저트 종류는 많지 않다는 평"
        ],
        "goodFor": [
          "사진 남기고 싶은 친구들"
        ],
        "practical": [
          "음료 7,000원대",
          "주차 불가, 대중교통 추천"
        ],
        "sourceCount": 4,
        "sources": [
          {
            "label": "다이닝코드 후기 모음",
            "url": "https://www.diningcode.com/profile.php?rid=4mp0ta0IeOsw"
          },
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/black_cat6/223720784383"
          },
          {
            "label": "방문 후기 (2024)",
            "url": "https://janjandaily.tistory.com/625"
          },
          {
            "label": "VisitSeoul 소개",
            "url": "https://korean.visitseoul.net/area/Overdeep-Yeonnam/KOP8jtxt1"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [
          "파도크림라떼",
          "크림브륄레라떼",
          "마들렌"
        ],
        "seating": "2·3층과 루프탑, 규모 큰 편"
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "layered-yeonnam",
      "name": "카페 레이어드 연남",
      "shortName": "레이어드",
      "searchName": "카페 레이어드 연남",
      "aliases": [
        "layered",
        "스콘"
      ],
      "primaryCategory": "dessert",
      "tags": [
        "실내",
        "디저트 맛집",
        "사진 맛집",
        "웨이팅 있음"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 161-4",
      "location": {
        "lat": 37.564985,
        "lng": 126.924188,
        "accuracy": "exact",
        "source": "OpenStreetMap 매장 위치"
      },
      "nearestExit": null,
      "oneLineReason": "스콘과 영국식 케이크가 창가에 가득한 연남 대표 디저트 카페",
      "description": "스콘 여러 종류와 영국식 케이크를 진열해 두고 골라 먹는 베이커리 카페예요. 건물 한 채를 카페로 써서 층마다 좌석이 있어요.",
      "priceLevel": 2,
      "priceNote": "스콘 4,500원 안팎, 케이크 6~7천원대 (예전 후기, 변동 가능)",
      "stayMinutes": [
        40,
        70
      ],
      "openingHours": {
        "mon": "10:00-22:00",
        "tue": "10:00-22:00",
        "wed": "10:00-22:00",
        "thu": "10:00-22:00",
        "fri": "10:00-22:00",
        "sat": "10:00-22:00",
        "sun": "10:00-22:00"
      },
      "hoursNote": "공식 인스타 매장별 영업시간 안내 기준",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": "sometimes",
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "카페 레이어드 공식 인스타그램 (영업시간 안내)",
          "url": "https://www.instagram.com/p/DPP5aJ8Eulb/",
          "type": "sns",
          "note": "연남점 10:00~22:00"
        },
        {
          "label": "트립닷컴",
          "url": "https://kr.trip.com/moments/theme/poi-layered-yeonnam-145046373-restaurant-993134",
          "type": "map",
          "note": "성미산로 161-4"
        }
      ],
      "review": {
        "pros": [
          "디저트 진열이 예뻐 고르는 재미",
          "스콘 종류가 다양함"
        ],
        "cons": [
          "의자가 딱딱하고 작다는 후기",
          "맛보다 분위기라는 평도 있음",
          "인기 시간엔 대기"
        ],
        "goodFor": [
          "디저트 사진 좋아하는 친구"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "방문 후기 (2018, 오픈 초기)",
            "url": "https://blog.naver.com/PostView.naver?blogId=xjvm9026&logNo=221423808347"
          },
          {
            "label": "방문 후기",
            "url": "https://bokmanhee.tistory.com/68"
          },
          {
            "label": "트립닷컴 후기 모음",
            "url": "https://kr.trip.com/moments/theme/poi-cafe-layerd-140740613-restaurant-993134/"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [
          "스콘",
          "빅토리아 케이크"
        ],
        "seating": "여러 층, 좌석 많은 편"
      },
      "issues": [
        "오픈 시각이 출처마다 달라요 (10시 / 11시)."
      ],
      "listed": true
    },
    {
      "id": "butter-and-shelter",
      "name": "버터앤쉘터 연남점",
      "shortName": "버터앤쉘터",
      "searchName": "버터앤쉘터 연남점",
      "aliases": [
        "butter & shelter",
        "버터샌드"
      ],
      "primaryCategory": "dessert",
      "tags": [
        "실내",
        "디저트 맛집",
        "웨이팅 있음"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 170 102호",
      "location": {
        "lat": 37.5642,
        "lng": 126.9252,
        "accuracy": "approx",
        "source": "인근 번지 좌표로 추정",
        "note": "주소 검색이 안 돼 인근 번지 기준으로 위치를 추정했어요.",
        "manual": true
      },
      "nearestExit": "홍대입구역 3번 출구에서 약 700m",
      "oneLineReason": "수제 캐러멜 버터샌드가 시그니처인 아늑한 디저트 카페",
      "description": "주택을 고친 듯한 아늑한 공간에서 버터샌드와 쿠키, 크림 커피를 파는 카페예요. 테라스 좌석도 있어요.",
      "priceLevel": 2,
      "priceNote": "버터샌드 3,200~3,500원, 쿠키 4천원대 (2023 후기)",
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "10:00-21:00",
        "tue": "10:00-21:00",
        "wed": "10:00-21:00",
        "thu": "10:00-21:00",
        "fri": "10:00-21:00",
        "sat": "10:00-21:00",
        "sun": "10:00-21:00"
      },
      "hoursNote": "연중무휴",
      "floor": "1층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": "sometimes",
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "당근 동네 업체 정보",
          "url": "https://www.daangn.com/kr/local-profile/%EB%B2%84%ED%84%B0%EC%95%A4%EC%89%98%ED%84%B0-1necpky5s5ni/",
          "type": "map",
          "note": "성미산로 170, 10:00~21:00 연중무휴"
        },
        {
          "label": "트립닷컴",
          "url": "https://www.trip.com/moments/theme/poi-butter-and-shelter-140731160-restaurant-993134/",
          "type": "map",
          "note": "10:00~21:00"
        }
      ],
      "review": {
        "pros": [
          "버터샌드가 시그니처로 꾸준히 언급됨",
          "쿠키·디저트 종류가 많음",
          "아늑한 인테리어와 테라스"
        ],
        "cons": [
          "인기 시간엔 웨이팅이 길다는 후기",
          "버터샌드는 꽤 단 편"
        ],
        "goodFor": [
          "구움과자·쿠키 좋아하는 친구"
        ],
        "practical": [
          "버터샌드 3,200~3,500원, 쿠키 4천원대",
          "반려견은 야외석만 가능하다는 후기"
        ],
        "sourceCount": 4,
        "sources": [
          {
            "label": "방문 후기 (2023)",
            "url": "https://vhap990.tistory.com/12"
          },
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/khing311/223501328789"
          },
          {
            "label": "포장 후기",
            "url": "https://m.blog.naver.com/ablossom1130/223369108139"
          },
          {
            "label": "Corner 소개",
            "url": "https://www.corner.inc/place/pHjWx35kpfMh"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [
          "버터샌드",
          "버터슈페너",
          "르뱅쿠키"
        ],
        "seating": "실내 3개 공간과 테라스"
      },
      "issues": [
        "주소 표기가 출처마다 달라요. 지도 위치는 추정한 값이에요."
      ],
      "listed": true
    },
    {
      "id": "gongmyoung-hongdae",
      "name": "카페 공명 홍대점",
      "shortName": "카페 공명",
      "searchName": "카페 공명 홍대점",
      "aliases": [
        "공명",
        "비스킷슈",
        "루프탑 카페"
      ],
      "primaryCategory": "dessert",
      "tags": [
        "실내",
        "디저트 맛집",
        "늦게까지",
        "오래 머물기"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 와우산로17길 11-8",
      "location": {
        "lat": 37.549924,
        "lng": 126.922024,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": null,
      "oneLineReason": "빵·크림 디저트가 많은 홍대 중심 대형 카페, 루프탑까지",
      "description": "홍대 한가운데 있는 대형 카페예요. 비스킷슈·스콘 같은 크림 디저트와 빵 종류가 많고, 날씨 좋은 날엔 루프탑이 인기예요.",
      "priceLevel": 2,
      "priceNote": "라떼 6~7천원, 비스킷슈 4,600원 (연남점 2026 후기 기준)",
      "stayMinutes": [
        40,
        90
      ],
      "openingHours": {
        "mon": "11:00-23:00",
        "tue": "11:00-23:00",
        "wed": "11:00-23:00",
        "thu": "11:00-23:00",
        "fri": "11:00-23:00",
        "sat": "11:00-23:00",
        "sun": "11:00-23:00"
      },
      "hoursNote": "트립닷컴 안내 기준. 공식 출처로는 아직 확인 못 했어요",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "needs-check",
      "verifiedAt": null,
      "sources": [
        {
          "label": "트립닷컴 카페 공명 홍대점",
          "url": "https://kr.trip.com/moments/theme/poi-cafe-gong-myoung-hongdae-branch-147719989-food-993052",
          "type": "map",
          "note": "와우산로17길 11-8, 11:00~23:00"
        },
        {
          "label": "홍대점 방문 후기",
          "url": "https://blog.naver.com/to_myday/223447959714",
          "type": "blog",
          "note": "루프탑, 빵, 자체 로스팅"
        }
      ],
      "review": {
        "pros": [
          "빵·디저트가 맛있다는 평이 많음",
          "지점 중 홍대점 분위기가 가장 좋다는 후기",
          "루프탑이 있음"
        ],
        "cons": [
          "사람이 많고 좌석이 다소 불편하다는 평"
        ],
        "goodFor": [
          "오래 앉아 수다 떨 곳이 필요한 친구들"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "홍대점 방문 후기",
            "url": "https://blog.naver.com/to_myday/223447959714"
          },
          {
            "label": "다이닝코드 카페 공명 후기 (지점 비교 포함)",
            "url": "https://www.diningcode.com/profile.php?rid=vbZXUq6LJBDi"
          },
          {
            "label": "트립닷컴 후기 모음",
            "url": "https://kr.trip.com/moments/theme/poi-cafe-gong-myoung-hongdae-branch-147719989-food-993052"
          }
        ],
        "checkedAt": "2026-10-16",
        "note": "일부 후기는 같은 브랜드 다른 지점(연남점) 방문기예요."
      },
      "traits": {
        "browse": null,
        "priceBurden": null,
        "friendGroup": null,
        "crowd": "high"
      },
      "details": {
        "signatureMenu": [
          "공명라떼",
          "비스킷슈",
          "스콘"
        ],
        "seating": "대형, 루프탑 있음"
      },
      "issues": [
        "홍대점 자체의 영업시간·가격은 확인하지 못했어요.",
        "가격과 후기 일부는 같은 브랜드 연남점 자료예요.",
        "루프탑 운영 현황은 확인하지 못했어요."
      ],
      "listed": true
    },
    {
      "id": "kyodaiya",
      "name": "교다이야",
      "shortName": "교다이야",
      "searchName": "교다이야 합정",
      "aliases": [
        "우동",
        "사누키 우동",
        "미쉐린"
      ],
      "primaryCategory": "food",
      "tags": [
        "웨이팅 있음"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 성지길 39 합정빌딩 1층",
      "location": {
        "lat": 37.546856,
        "lng": 126.913207,
        "accuracy": "exact",
        "source": "OpenStreetMap 매장 위치"
      },
      "nearestExit": "합정역 7번 출구 도보 약 5분",
      "oneLineReason": "주문하면 바로 썰어 삶는 사누키 우동, 미쉐린 빕 구르망",
      "description": "형제가 운영하는 사누키 우동 전문점이에요. 숙성한 반죽을 주문이 들어올 때 썰어 삶아 면발이 쫄깃해요. 예약 없이 현장 대기만 받아요.",
      "priceLevel": 2,
      "priceNote": "우동 단품 1만원대 초반, 정식 16,500원 (2026 후기)",
      "stayMinutes": [
        30,
        50
      ],
      "openingHours": {
        "mon": "closed",
        "tue": "11:00-20:30",
        "wed": "11:00-20:30",
        "thu": "11:00-20:30",
        "fri": "11:00-20:30",
        "sat": "11:00-20:30",
        "sun": "11:00-20:30"
      },
      "hoursNote": "브레이크타임 15:00~17:00. 저녁 영업 여부가 출처마다 달라 저녁엔 전화 확인 추천 (02-2654-2645)",
      "floor": "1층",
      "entranceTip": "주택가 골목 안쪽이라 지도 앱을 켜 두는 게 편해요.",
      "reservation": "no",
      "waiting": "often",
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "미쉐린 가이드 빕 구르망 목록",
          "url": "https://guide.michelin.com/kr/ko/selection/south-korea/restaurants/bib-gourmand",
          "type": "official",
          "note": "2026 빕 구르망 선정 매장 (목록 기준)"
        },
        {
          "label": "다이닝코드",
          "url": "https://www.diningcode.com/profile.php?rid=FnqoA13qRDU4",
          "type": "map",
          "note": "월요일 휴무, 2026 후기 모음"
        },
        {
          "label": "방문 후기 (2025.11)",
          "url": "https://m.blog.naver.com/cjycjy9423/224088984153",
          "type": "blog",
          "note": "11:00~20:30, 브레이크 15~17, 월 휴무"
        }
      ],
      "review": {
        "pros": [
          "쫄깃한 면발이 가장 많이 언급됨",
          "회전이 빨라 대기가 생각보다 빨리 빠진다는 후기",
          "정식 구성이 알참"
        ],
        "cons": [
          "주말엔 30~45분 대기 후기",
          "매장이 좁고 시끌벅적",
          "일행이 모두 와야 입장"
        ],
        "goodFor": [
          "우동·면 좋아하는 친구"
        ],
        "practical": [
          "예약 불가, 현장 번호표",
          "주차 불가"
        ],
        "sourceCount": 5,
        "sources": [
          {
            "label": "다이닝코드 후기 모음",
            "url": "https://www.diningcode.com/profile.php?rid=FnqoA13qRDU4"
          },
          {
            "label": "주말 웨이팅 후기",
            "url": "https://blog.naver.com/qpdlwl29/224275874640"
          },
          {
            "label": "방문 후기 (2025)",
            "url": "https://m.blog.naver.com/so0oho0o/223825472522"
          },
          {
            "label": "방문 후기 (2023)",
            "url": "https://jhjeon0910.tistory.com/300"
          },
          {
            "label": "평일 웨이팅 후기",
            "url": "https://m.blog.naver.com/040314/224224378500"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": "high"
      },
      "details": {
        "signatureMenu": [
          "자루붓카케우동",
          "덴뿌라우동 정식",
          "가케우동"
        ],
        "seating": "작은 편",
        "pricePerPerson": "1인 약 1.1~1.7만원"
      },
      "issues": [
        "저녁 영업 여부가 확실하지 않아요."
      ],
      "listed": true
    },
    {
      "id": "seogyo-nanmyeonbang",
      "name": "서교난면방",
      "shortName": "서교난면방",
      "searchName": "서교난면방",
      "aliases": [
        "난면",
        "국수",
        "미쉐린"
      ],
      "primaryCategory": "food",
      "tags": [
        "웨이팅 있음"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 동교로12길 16 1층",
      "location": {
        "lat": 37.553586,
        "lng": 126.912322,
        "accuracy": "exact",
        "source": "OpenStreetMap 매장 위치"
      },
      "nearestExit": "합정역 9번 출구 도보 약 6분",
      "oneLineReason": "계란 난면에 닭·한우 육수, 2025~26 미쉐린 빕 구르망 국수",
      "description": "우리밀 계란면(난면)과 구엄닭·한우를 섞은 맑은 육수가 대표인 국수집이에요. 들기름 비빔 난면, 콩난면 같은 메뉴도 있어요.",
      "priceLevel": 2,
      "priceNote": "국수 13,000~14,000원 (캐치테이블)",
      "stayMinutes": [
        30,
        50
      ],
      "openingHours": {
        "mon": "11:00-21:00",
        "tue": "closed",
        "wed": "11:00-21:00",
        "thu": "11:00-21:00",
        "fri": "11:00-21:00",
        "sat": "11:00-21:00",
        "sun": "11:00-21:00"
      },
      "hoursNote": "화요일 휴무. 브레이크타임 평일 15:00~17:30, 주말 15:00~17:00 (공식 인스타). 이용시간 최대 1시간",
      "floor": "1층",
      "entranceTip": null,
      "reservation": null,
      "waiting": "sometimes",
      "paymentNote": null,
      "links": {
        "official": "https://app.catchtable.co.kr/ct/shop/seokyonanmyun",
        "instagram": "https://www.instagram.com/seokyonanmyunbang/"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "서교난면방 공식 인스타그램",
          "url": "https://www.instagram.com/seokyonanmyunbang/",
          "type": "sns",
          "note": "2025-26 빕 구르망, 화요일 휴무, 2026.09 게시물"
        },
        {
          "label": "공식 인스타 영업시간 공지",
          "url": "https://www.instagram.com/p/DJsw-pBOLIl/",
          "type": "sns",
          "note": "11:00~21:00, 브레이크타임"
        },
        {
          "label": "캐치테이블",
          "url": "https://app.catchtable.co.kr/ct/shop/seokyonanmyun",
          "type": "map",
          "note": "메뉴·가격, 예약·웨이팅"
        }
      ],
      "review": {
        "pros": [
          "맑고 깊은 육수가 자주 언급됨",
          "남은 육수에 밥을 말아 먹는 셀프바"
        ],
        "cons": [
          "이용시간이 최대 1시간으로 정해져 있음"
        ],
        "goodFor": [
          "담백한 면 요리 좋아하는 친구"
        ],
        "practical": [
          "캐치테이블로 예약·웨이팅 가능"
        ],
        "sourceCount": 2,
        "sources": [
          {
            "label": "캐치테이블 리뷰 요약",
            "url": "https://app.catchtable.co.kr/ct/shop/seokyonanmyun"
          },
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/PostView.naver?blogId=dbswl2394&logNo=224338599909"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [
          "서교난면",
          "들기름 난면과 모르따델라 햄",
          "콩난면"
        ],
        "pricePerPerson": "1인 약 1.3~1.4만원"
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "hapjeongok",
      "name": "합정옥",
      "shortName": "합정옥",
      "searchName": "합정옥",
      "aliases": [
        "곰탕",
        "미쉐린"
      ],
      "primaryCategory": "food",
      "tags": [],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 양화로1길 21 2층",
      "location": {
        "lat": 37.549595,
        "lng": 126.910457,
        "accuracy": "exact",
        "source": "OpenStreetMap 건물 위치 (같은 건물 1층 매장 기준)",
        "note": "건물 단위 좌표예요. 입구는 지도 앱에서 확인해 주세요."
      },
      "nearestExit": "합정역 8번 출구 도보 약 4분",
      "oneLineReason": "맑은 국물 곰탕 한 그릇, 미쉐린 빕 구르망 곰탕집",
      "description": "양지와 사골로 우린 맑은 곰탕에 밥을 말아 내는 곰탕집이에요. 매장이 넓어 여럿이 가기 편하고 수육·곱창전골 같은 메뉴도 있어요.",
      "priceLevel": 2,
      "priceNote": "곰탕 12,000원, 특곰탕 14,000원 (2026 후기)",
      "stayMinutes": [
        30,
        45
      ],
      "openingHours": {
        "mon": "11:00-22:00",
        "tue": "11:00-22:00",
        "wed": "11:00-22:00",
        "thu": "11:00-22:00",
        "fri": "11:00-22:00",
        "sat": "11:00-22:00",
        "sun": "closed"
      },
      "hoursNote": "라스트오더 20:30, 일요일 휴무",
      "floor": "2층",
      "entranceTip": null,
      "reservation": null,
      "waiting": "sometimes",
      "paymentNote": "카드 가능",
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "미쉐린 가이드 빕 구르망 목록",
          "url": "https://guide.michelin.com/kr/ko/selection/south-korea/restaurants/bib-gourmand",
          "type": "official",
          "note": "빕 구르망 선정 매장 (목록 기준)"
        },
        {
          "label": "트립인포",
          "url": "https://www.tripinfo.co.kr/info.html?content_id=2871395&content_type_id=39",
          "type": "map",
          "note": "11:00~22:00, LO 20:30, 일요일 휴무"
        },
        {
          "label": "다이닝코드",
          "url": "https://www.diningcode.com/profile.php?rid=bDlUpVT87aiE",
          "type": "map",
          "note": "2026.09~10 후기 모음"
        }
      ],
      "review": {
        "pros": [
          "잡내 없이 깔끔하고 담백한 국물",
          "고기가 부드럽다는 평",
          "매장이 넓고 회전이 빠름"
        ],
        "cons": [
          "평범한 곰탕 맛이라 기대가 크면 아쉽다는 의견",
          "김치가 많이 시었다는 후기도 있음"
        ],
        "goodFor": [
          "든든한 한식 한 끼가 필요할 때"
        ],
        "practical": [
          "건물 옆 주차 가능하다는 후기"
        ],
        "sourceCount": 4,
        "sources": [
          {
            "label": "다이닝코드 후기 모음",
            "url": "https://www.diningcode.com/profile.php?rid=bDlUpVT87aiE"
          },
          {
            "label": "방문 후기 (2026.09)",
            "url": "https://blog.naver.com/PostView.nhn?blogId=since150327&logNo=224424910071"
          },
          {
            "label": "방문 후기 (2026.09)",
            "url": "https://blog.naver.com/PostView.nhn?blogId=shin_1122&logNo=224424976361"
          },
          {
            "label": "방문 후기 (2026.09)",
            "url": "https://blog.naver.com/PostView.nhn?blogId=choco_luna&logNo=224423797701"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [
          "양지곰탕",
          "특곰탕",
          "수육무침"
        ],
        "seating": "넓은 편, 4인석 위주",
        "pricePerPerson": "1인 약 1.2~1.4만원"
      },
      "issues": [
        "위치 정확도는 건물 단위예요."
      ],
      "listed": true
    },
    {
      "id": "tuktuk-noodle-thai",
      "name": "툭툭누들타이",
      "shortName": "툭툭누들타이",
      "searchName": "툭툭누들타이",
      "aliases": [
        "태국 음식",
        "뿌팟퐁커리",
        "팟타이"
      ],
      "primaryCategory": "food",
      "tags": [
        "웨이팅 있음",
        "예약 추천"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 161-8 2층",
      "location": {
        "lat": 37.56488,
        "lng": 126.92432,
        "accuracy": "approx",
        "source": "인근 번지 좌표로 추정",
        "note": "주소 검색이 안 돼 인근 번지(성미산로 161-4) 기준으로 위치를 추정했어요.",
        "manual": true
      },
      "nearestExit": "홍대입구역 3번 출구 도보 약 13분",
      "oneLineReason": "태국 셰프의 뿌팟퐁커리, 연남에서 오래 사랑받은 태국 음식점",
      "description": "태국 현지 셰프가 조리하는 연남동 태국 음식점이에요. 뿌팟퐁커리, 똠얌꿍, 팟타이가 대표 메뉴이고 미쉐린 빕 구르망에 여러 해 이름을 올렸어요(2025 후기 기준).",
      "priceLevel": 3,
      "priceNote": "2인 세트 55,000원, 텃만꿍 16,000원 (2025 후기)",
      "stayMinutes": [
        50,
        80
      ],
      "openingHours": {
        "mon": "11:30-21:00",
        "tue": "11:30-21:00",
        "wed": "closed",
        "thu": "11:30-21:00",
        "fri": "11:30-21:00",
        "sat": "11:30-21:00",
        "sun": "11:30-21:00"
      },
      "hoursNote": "브레이크타임 15:30~17:00, 라스트오더 14:50·20:20 (2025.05 후기 기준)",
      "floor": "2층",
      "entranceTip": null,
      "reservation": "recommended",
      "waiting": "often",
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "needs-check",
      "verifiedAt": null,
      "sources": [
        {
          "label": "방문 후기 (2025.05)",
          "url": "https://foodanddaily.tistory.com/25",
          "type": "blog",
          "note": "주소, 영업시간, 예약·원격 줄서기"
        }
      ],
      "review": {
        "pros": [
          "뿌팟퐁커리가 특히 맛있다는 평",
          "직원 응대가 친절"
        ],
        "cons": [
          "모든 메뉴가 입맛에 맞지는 않았다는 솔직 후기",
          "평소 웨이팅이 많은 편"
        ],
        "goodFor": [
          "태국 음식 좋아하는 친구"
        ],
        "practical": [
          "네이버 예약·캐치테이블 원격 줄서기 가능"
        ],
        "sourceCount": 1,
        "sources": [
          {
            "label": "방문 후기 (2025.05)",
            "url": "https://foodanddaily.tistory.com/25"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "high",
        "friendGroup": null,
        "crowd": "high"
      },
      "details": {
        "signatureMenu": [
          "뿌팟퐁커리",
          "똠얌꿍",
          "팟타이",
          "연남갈비국수"
        ],
        "pricePerPerson": "1인 약 2.5~3만원 (2인 세트 기준)"
      },
      "issues": [
        "2025년 5월 후기 1건 이후로 운영 여부를 확인하지 못했어요.",
        "지도 위치는 근처 번지로 추정한 값이에요."
      ],
      "listed": false,
      "hiddenReason": "근거가 2025년 5월 후기 1건뿐이고 현재 운영 여부를 확인하지 못해 기본 목록에서 뺐어요."
    },
    {
      "id": "zzang-arcade",
      "name": "짱오락실 홍대점",
      "shortName": "짱오락실",
      "searchName": "짱오락실 홍대점",
      "aliases": [
        "오락실",
        "리듬게임",
        "인형뽑기",
        "아케이드"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "애니·게임",
        "늦게까지",
        "친구끼리",
        "비 오는 날",
        "저렴함"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 어울마당로 69 1~3층",
      "location": {
        "lat": 37.551267,
        "lng": 126.921096,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": null,
      "oneLineReason": "새벽까지 여는 홍대 중심가 대형 오락실",
      "description": "홍대 중심가의 여러 층짜리 대형 오락실이에요. 인형뽑기와 리듬게임 등이 있다는 후기가 많아요(층별 구성은 바뀔 수 있어요). 상상마당 바로 옆이라 찾기 쉬워요.",
      "priceLevel": 1,
      "priceNote": null,
      "stayMinutes": [
        20,
        60
      ],
      "openingHours": {
        "mon": "11:00-02:00",
        "tue": "11:00-02:00",
        "wed": "11:00-02:00",
        "thu": "11:00-02:00",
        "fri": "11:00-03:00",
        "sat": "10:00-03:00",
        "sun": "10:00-02:00"
      },
      "hoursNote": "공식 매장 안내 기준",
      "floor": "1~3층",
      "entranceTip": "상상마당 바로 옆 건물이에요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": "https://cocozzang.com/html/dh_board/views/66",
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "짱오락실 공식 매장 안내",
          "url": "https://cocozzang.com/html/dh_board/views/66",
          "type": "official",
          "note": "어울마당로 69, 요일별 영업시간"
        },
        {
          "label": "나무위키 오락실/서울/강북",
          "url": "https://namu.wiki/w/%EC%98%A4%EB%9D%BD%EC%8B%A4/%EC%84%9C%EC%9A%B8/%EA%B0%95%EB%B6%81",
          "type": "map",
          "note": "최종 확인 2026.09.11, 층별 구성"
        }
      ],
      "review": {
        "pros": [
          "홍대 한가운데라 접근성이 좋음",
          "리듬게임 기기가 한 층에 모여 있음"
        ],
        "cons": [
          "리듬게임 외 아케이드 기종은 줄었다는 기록",
          "1·2층은 인형뽑기 위주"
        ],
        "goodFor": [
          "리듬게임 하는 친구",
          "밤늦게까지 놀 곳이 필요할 때"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "나무위키 기록",
            "url": "https://namu.wiki/w/%EC%98%A4%EB%9D%BD%EC%8B%A4/%EC%84%9C%EC%9A%B8/%EA%B0%95%EB%B6%81"
          },
          {
            "label": "방문 후기",
            "url": "https://m.blog.naver.com/mok527/222491658696"
          },
          {
            "label": "방문 후기 (2018)",
            "url": "https://blog.naver.com/headlineuser/221259878756"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "duration": "자유 (게임당 결제)"
      },
      "issues": [
        "층별 구성(인형뽑기·리듬게임)은 현재 상태를 확인하지 못했어요."
      ],
      "listed": true
    },
    {
      "id": "sangsangmadang",
      "name": "KT&G 상상마당 홍대",
      "shortName": "상상마당",
      "searchName": "KT&G 상상마당 홍대",
      "aliases": [
        "상상마당",
        "전시",
        "팝업",
        "디자인스퀘어",
        "아따맘마"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "전시",
        "팝업",
        "비 오는 날",
        "저렴함",
        "구경 위주"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 어울마당로 65",
      "location": {
        "lat": 37.550989,
        "lng": 126.921068,
        "accuracy": "exact",
        "source": "OpenStreetMap 시설 위치"
      },
      "nearestExit": null,
      "oneLineReason": "캐릭터 팝업부터 갤러리 전시까지, 갈 때마다 바뀌는 문화 공간",
      "description": "갤러리, 라이브홀, 디자인스퀘어(팝업 공간)가 모인 복합문화공간이에요. 시기마다 전시와 팝업이 바뀌니 가기 전에 공식 홈페이지에서 지금 하는 행사를 확인하세요.",
      "priceLevel": 1,
      "priceNote": "전시·팝업마다 다름 (무료였던 팝업이 있었어요)",
      "stayMinutes": [
        20,
        60
      ],
      "openingHours": {
        "mon": "11:00-21:00",
        "tue": "11:00-21:00",
        "wed": "11:00-21:00",
        "thu": "11:00-21:00",
        "fri": "11:00-21:00",
        "sat": "11:00-21:00",
        "sun": "11:00-21:00"
      },
      "hoursNote": "디자인스퀘어 팝업 기준. 갤러리는 11:00~19:00 (현재 전시 기준)",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": "https://www.sangsangmadang.com/main/HD",
        "instagram": "https://www.instagram.com/ssmadang.official/"
      },
      "events": [
        {
          "title": "가을엔 아따맘마! 우리집으로 놀러와~",
          "kind": "팝업",
          "where": "디자인스퀘어 2F",
          "from": "2026-09-22",
          "until": "2026-10-18",
          "url": "https://www.sangsangmadang.com/display/detail/3179"
        },
        {
          "title": "WEAR SEOUL, KEEP KOREA.",
          "kind": "기획전시",
          "where": "디자인스퀘어 1F",
          "from": "2026-09-29",
          "until": "2026-11-18",
          "url": "https://www.sangsangmadang.com/display/detail/3184"
        },
        {
          "title": "《같은 무게의 날들》",
          "kind": "전시",
          "where": "갤러리 3~5F",
          "from": "2026-10-08",
          "until": "2026-11-22",
          "hours": "11:00~19:00",
          "url": "https://www.sangsangmadang.com/display/detail/3187"
        }
      ],
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "KT&G 상상마당 홍대 공식 (공연/전시)",
          "url": "https://www.sangsangmadang.com/main/HD",
          "type": "official",
          "note": "현재 전시·팝업 일정"
        },
        {
          "label": "상상마당 갤러리 공식 인스타그램",
          "url": "https://www.instagram.com/ssmadang_gallery",
          "type": "sns",
          "note": "같은 무게의 날들 11:00~19:00"
        },
        {
          "label": "공식 팝업 상세 (2026.03, 운영시간 예시)",
          "url": "https://www.sangsangmadang.com/display/detail/3063",
          "type": "official",
          "note": "디자인스퀘어 11:00~21:00, 무료"
        }
      ],
      "review": null,
      "traits": {
        "browse": null,
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "pricePerPerson": "전시·팝업 상당수 무료"
      },
      "issues": [
        "운영시간은 전시·팝업마다 달라요. 표시된 시간은 지난 팝업 기준이에요."
      ],
      "listed": true
    },
    {
      "id": "luso-jewelry",
      "name": "루소주얼리 홍대본점",
      "shortName": "루소주얼리",
      "searchName": "루소주얼리 홍대본점",
      "aliases": [
        "반지 만들기",
        "우정링",
        "커플링",
        "은반지"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "핸드메이드",
        "친구끼리",
        "예약 추천",
        "비 오는 날"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 동교동 165-1 미래프라자 지하 1층 (홍대입구역 8번 출구 연결)",
      "location": {
        "lat": 37.5567,
        "lng": 126.9241,
        "accuracy": "approx",
        "source": "홍대입구역 8번 출구 연결 위치로 추정",
        "note": "역 8번 출구와 연결된 지하상가 안이라 출구 위치로 표시했어요.",
        "manual": true
      },
      "nearestExit": "홍대입구역 8번 출구 연결",
      "oneLineReason": "은반지를 직접 다듬어 만들고 당일에 가져가는 반지 공방",
      "description": "주얼리숍이 운영하는 반지 만들기 공방이에요. 디자인·각인·유광/무광을 고른 뒤 직접 모양을 잡고 광을 내서 완성해요. 위험한 작업은 없다는 후기가 많아요.",
      "priceLevel": 3,
      "priceNote": "2인 평반지 만들기 정가 10만원 (할인 판매가 자주 있음)",
      "stayMinutes": [
        60,
        120
      ],
      "openingHours": {
        "mon": "10:00-20:00",
        "tue": "10:00-20:00",
        "wed": "10:00-20:00",
        "thu": "10:00-20:00",
        "fri": "10:00-20:00",
        "sat": "10:00-20:00",
        "sun": "10:00-20:00"
      },
      "hoursNote": "공식 지점 안내 기준, 연중무휴. 30분 단위 예약",
      "floor": "지하 1층",
      "entranceTip": "홍대입구역 8번 출구 쪽 지하상가와 연결돼 있어요.",
      "reservation": "recommended",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": "http://www.luso.co.kr/",
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "루소주얼리 공식 지점안내",
          "url": "https://m.luso.co.kr/shopinfo/map.html",
          "type": "official",
          "note": "10:00~20:00, 홍대본점 연중무휴"
        },
        {
          "label": "데이트팝 상품 페이지 (2025)",
          "url": "https://datepop.co.kr/item/27382",
          "type": "map",
          "note": "가격, 주소, 체험 과정"
        }
      ],
      "review": {
        "pros": [
          "손재주가 없어도 완성도 있게 만들 수 있다는 후기",
          "은 재질이라 금속 알레르기 걱정이 적다는 후기",
          "당일 수령 가능"
        ],
        "cons": [],
        "goodFor": [
          "우정링·커플링 만들고 싶은 친구"
        ],
        "practical": [
          "디자인·각인 선택 후 제작, 당일 또는 다른 날 수령 선택"
        ],
        "sourceCount": 2,
        "sources": [
          {
            "label": "데이트팝 체험 후기",
            "url": "https://datepop.co.kr/item/27382"
          },
          {
            "label": "반지 만들기 안내 글",
            "url": "https://m.blog.naver.com/lusoj2/221515963241"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "high",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "pricePerPerson": "1인 약 5만원 (정가 기준, 디자인별 상이)",
        "duration": null,
        "minPeople": null,
        "maxPeople": null,
        "takeHomeResult": "당일 수령 가능"
      },
      "issues": [
        "마감 시각이 출처마다 달라요 (20시 / 22시).",
        "지도 위치는 역 출구 기준으로 추정한 값이에요."
      ],
      "listed": true
    },
    {
      "id": "caplab",
      "name": "캡랩 연남 (CAPLAB)",
      "shortName": "캡랩",
      "searchName": "캡랩 연남",
      "aliases": [
        "CAPLAB",
        "모자 커스텀",
        "캡꾸",
        "패치"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "핸드메이드",
        "친구끼리",
        "사진 맛집"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 연남동 241-47 지층",
      "location": {
        "lat": 37.5638,
        "lng": 126.9247,
        "accuracy": "approx",
        "source": "지번 주소로 대략 추정",
        "note": "지번 주소만 있어 위치를 대략 추정했어요. 오차가 클 수 있어요.",
        "manual": true
      },
      "nearestExit": null,
      "oneLineReason": "패치를 골라 붙여 나만의 모자를 만드는 연남 커스텀 숍",
      "description": "모자를 고르고 패치·장식을 골라 붙여 나만의 모자를 만드는 커스텀 숍이에요. 모자는 매장 자체 디자인이에요.",
      "priceLevel": null,
      "priceNote": null,
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "closed",
        "tue": "12:00-20:00",
        "wed": "12:00-20:00",
        "thu": "12:00-20:00",
        "fri": "12:00-20:00",
        "sat": "12:00-20:00",
        "sun": "12:00-20:00"
      },
      "hoursNote": "월요일 정기휴무 (공식 인스타)",
      "floor": "지층(반지하)",
      "entranceTip": null,
      "reservation": null,
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": "https://www.instagram.com/caplab_seoul"
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "verified",
      "verifiedAt": "2026-10-16",
      "sources": [
        {
          "label": "캡랩 공식 인스타그램",
          "url": "https://www.instagram.com/caplab_seoul",
          "type": "sns",
          "note": "연남동 241-47 지층, 12PM~8PM, 월 휴무"
        }
      ],
      "review": {
        "pros": [
          "패치 종류가 많아 고르는 재미",
          "혼자 가도 재밌었다는 후기"
        ],
        "cons": [],
        "goodFor": [
          "기념품을 직접 만들고 싶은 친구들"
        ],
        "practical": [],
        "sourceCount": 2,
        "sources": [
          {
            "label": "방문 후기",
            "url": "https://m.blog.naver.com/dijurido1/224252077200"
          },
          {
            "label": "방문 후기 릴스",
            "url": "https://www.instagram.com/reel/DV_DRBakcmW"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": null,
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "pricePerPerson": null,
        "duration": null,
        "takeHomeResult": null
      },
      "issues": [
        "번지 표기가 두 가지예요 (연남동 241-37 / 241-47). 지도 위치는 오차가 클 수 있어요."
      ],
      "listed": true
    },
    {
      "id": "dontlookup-hongdae",
      "name": "돈룩업 홍대",
      "shortName": "돈룩업",
      "searchName": "돈룩업 홍대",
      "aliases": [
        "DON'T LXXK UP",
        "셀프사진",
        "네컷",
        "하이앵글",
        "인생네컷"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "사진 맛집",
        "친구끼리",
        "늦게까지",
        "짧게 들르기",
        "저렴함"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 와우산로21길 20",
      "location": {
        "lat": 37.552478,
        "lng": 126.922958,
        "accuracy": "approx",
        "source": "OpenStreetMap 주소 검색 (건물 단위)"
      },
      "nearestExit": "홍대입구역 9번 출구에서 약 510m",
      "oneLineReason": "위에서 내려찍는 하이앵글 셀프사진, 24시간 무인",
      "description": "천장 쪽 카메라로 위에서 찍는 하이앵글 셀프사진관이에요. 방마다 배경색이 달라 고르는 재미가 있어요. 무인으로 24시간 운영한다는 후기가 많아요.",
      "priceLevel": 1,
      "priceNote": null,
      "stayMinutes": [
        10,
        20
      ],
      "openingHours": {
        "mon": "00:00-24:00",
        "tue": "00:00-24:00",
        "wed": "00:00-24:00",
        "thu": "00:00-24:00",
        "fri": "00:00-24:00",
        "sat": "00:00-24:00",
        "sun": "00:00-24:00"
      },
      "hoursNote": "무인 24시간 운영 (후기 기준)",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-10-16",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "포토부스 매장 정보",
          "url": "https://photobooth.joelin.cc/ko/korea/locations/dlu-hongdae-2/",
          "type": "map",
          "note": "와우산로21길 20"
        },
        {
          "label": "방문 후기",
          "url": "https://blog.naver.com/89702565/223682305454",
          "type": "blog",
          "note": "24시간 연중무휴, 9번 출구 512m"
        },
        {
          "label": "마이리얼트립 소개",
          "url": "https://www.myrealtrip.com/community/posts/35595",
          "type": "blog",
          "note": "하이앵글, 컬러 룸"
        }
      ],
      "review": {
        "pros": [
          "하이앵글 구도로 색다른 사진",
          "방마다 다른 컬러 배경"
        ],
        "cons": [],
        "goodFor": [
          "오늘 놀았던 기념사진 남기기"
        ],
        "practical": [],
        "sourceCount": 3,
        "sources": [
          {
            "label": "마이리얼트립 소개",
            "url": "https://www.myrealtrip.com/community/posts/35595"
          },
          {
            "label": "방문 후기",
            "url": "https://blog.naver.com/89702565/223682305454"
          },
          {
            "label": "방문 후기 (팝업 부스)",
            "url": "https://m.blog.naver.com/PostView.naver?blogId=dion_2&logNo=223687750589"
          }
        ],
        "checkedAt": "2026-10-16"
      },
      "traits": {
        "browse": null,
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "duration": "10~20분"
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "kyouma-gacha-hongdae",
      "name": "쿄우마 가챠샵 홍대점",
      "shortName": "쿄우마 가챠",
      "searchName": "쿄우마 가챠샵 홍대점",
      "aliases": [
        "쿄우마",
        "Kyouma",
        "대형 가챠샵",
        "LC타워"
      ],
      "primaryCategory": "goods",
      "tags": [
        "실내",
        "비 오는 날",
        "가챠",
        "애니·게임",
        "짧게 들르기"
      ],
      "area": "hongdae-station",
      "address": "서울 마포구 양화로 186 LC타워 1층",
      "location": {
        "lat": 37.55766848,
        "lng": 126.92589314,
        "accuracy": "exact",
        "source": "가챠맵 매장 페이지의 카카오맵 길찾기 좌표"
      },
      "nearestExit": "홍대입구역 4번 출구 도보 1분",
      "oneLineReason": "가챠 444종, 홍대에서 종류가 가장 많은 대형 가챠샵",
      "description": "AK PLAZA 옆 LC타워 1층의 대형 가챠 전문점이에요. 가챠맵 기준 취급 가챠가 444종으로 홍대 가챠샵 중 가장 많고, 다른 매장과 비교해 최저가인 종류도 많다고 표시돼 있어요. 애니메이트·가샤폰 스트리트(AK PLAZA)와 바로 붙어 있어 함께 돌기 좋아요.",
      "priceLevel": 1,
      "priceNote": "가챠 한 번 약 2,900~8,000원 (가챠맵 상품 예시 기준)",
      "stayMinutes": [
        15,
        40
      ],
      "openingHours": null,
      "hoursNote": "영업시간을 공식 출처로 확인하지 못했어요. 가챠맵 조회 시점에는 오전 11시 오픈 · 오후 8시 마감으로 표시됐어요.",
      "floor": "LC타워 1층",
      "entranceTip": "AK PLAZA 홍대 옆 건물(LC타워) 1층이에요.",
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "needs-check",
      "verifiedAt": null,
      "sources": [
        {
          "label": "가챠맵 쿄우마 가챠샵 홍대점",
          "url": "https://www.gachamap.co.kr/store/8a677f86-ca9c-46b8-98a8-0f08a3d07633",
          "type": "aggregator",
          "note": "주소, LC타워 1층, 4번 출구 1분, 가챠 444종, 좌표"
        },
        {
          "label": "가챠맵 홍대 가챠샵 목록",
          "url": "https://www.gachamap.co.kr/stores/hongdae",
          "type": "aggregator",
          "note": "홍대 54곳 중 취급 종류 1위(444종), 대형 매장"
        }
      ],
      "review": null,
      "traits": {
        "browse": "high",
        "priceBurden": "low",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "works": [],
        "gachaPayment": null
      },
      "issues": [
        "영업시간과 결제 수단을 공식 출처로 확인하지 못했어요.",
        "방문 후기를 충분히 찾지 못해 후기 요약이 없어요."
      ],
      "listed": true
    },
    {
      "id": "ader-error-hongdae",
      "name": "아더에러 홍대 스페이스",
      "shortName": "아더에러",
      "searchName": "아더에러 홍대 스페이스",
      "aliases": [
        "ADER error",
        "아더 스페이스",
        "플래그십"
      ],
      "primaryCategory": "fashion",
      "tags": [
        "실내",
        "비 오는 날",
        "구경 위주",
        "사진 맛집",
        "이색 공간"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 와우산로21길 19-18",
      "location": {
        "lat": 37.551726957752,
        "lng": 126.922407907948,
        "accuracy": "exact",
        "source": "KOREA TRIP TIPS 장소 페이지의 지도 좌표 (한국관광 데이터)"
      },
      "nearestExit": null,
      "oneLineReason": "설치미술처럼 꾸민 아더에러 첫 공식 플래그십",
      "description": "스트릿 브랜드 아더에러의 첫 공식 플래그십 매장이에요. 해체주의 건축과 미디어 아트 설치물로 매장 자체를 전시처럼 꾸며, 옷을 사지 않아도 공간을 구경하러 가는 사람이 많아요. 옷·신발·가방을 팔아요.",
      "priceLevel": 3,
      "priceNote": "하이엔드 스트릿 브랜드라 가격대가 높은 편 (가격표는 확인 못 함)",
      "stayMinutes": [
        20,
        40
      ],
      "openingHours": {
        "mon": "11:00-21:00",
        "tue": "11:00-21:00",
        "wed": "11:00-21:00",
        "thu": "11:00-21:00",
        "fri": "11:00-21:00",
        "sat": "11:00-21:00",
        "sun": "11:00-21:00"
      },
      "hoursNote": "매일 11:00~21:00 (KOREA TRIP TIPS, 2026-03 갱신)",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": "https://adererror.com",
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "KOREA TRIP TIPS 아더에러 홍대 스페이스",
          "url": "https://www.ktriptips.com/kor/shopping/4027413",
          "type": "map",
          "note": "주소, 11:00~21:00 연중, 전화 02-3143-2221, 좌표 (2026-03-27 갱신)"
        },
        {
          "label": "월간 디자인 기사 (2025-01)",
          "url": "https://design.co.kr/article/107148/",
          "type": "media",
          "note": "아더에러 첫 공식 플래그십, 와우산로21길 19-18, 공간 연출 소개"
        }
      ],
      "review": null,
      "traits": {
        "browse": "high",
        "priceBurden": "high",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "styleKeywords": [
          "스트릿",
          "디자이너 브랜드",
          "공간 전시"
        ]
      },
      "issues": [
        "방문 후기를 충분히 찾지 못해 후기 요약이 없어요."
      ],
      "listed": true
    },
    {
      "id": "pijomul-vintage",
      "name": "피조물빈티지",
      "shortName": "피조물빈티지",
      "searchName": "피조물빈티지",
      "aliases": [
        "pijomul vintage",
        "상수 빈티지"
      ],
      "primaryCategory": "fashion",
      "tags": [
        "실내",
        "빈티지",
        "구경 위주"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 와우산로 53 3층",
      "location": {
        "lat": 37.5492542889396,
        "lng": 126.922867200971,
        "accuracy": "exact",
        "source": "KOREA TRIP TIPS 장소 페이지의 지도 좌표 (한국관광 데이터)",
        "note": "건물 단위 좌표예요. 매장은 3층이에요."
      },
      "nearestExit": null,
      "oneLineReason": "옷과 액세서리를 골라 들여오는 상수동 빈티지 편집숍",
      "description": "시간이 지난 옷과 액세서리를 골라 지금 감각으로 소개하는 빈티지 편집숍이에요. 니트, 원피스, 재킷, 시어링 코트 같은 옷과 팔찌·목걸이 같은 액세서리가 있어요. 대량 생산 옷과 다른 한 벌을 찾는 사람에게 맞아요.",
      "priceLevel": 3,
      "priceNote": "온라인 스토어 기준 약 4.5만~26만원 (2026-11 확인, 매장 가격은 다를 수 있음)",
      "stayMinutes": [
        20,
        40
      ],
      "openingHours": {
        "mon": "14:00-20:00",
        "tue": "14:00-20:00",
        "wed": "14:00-20:00",
        "thu": "14:00-20:00",
        "fri": "14:00-20:00",
        "sat": "14:00-20:00",
        "sun": null
      },
      "hoursNote": "월~토 14:00~20:00로 나와 있어요. 일요일 영업 여부는 확인 못 했어요. (KOREA TRIP TIPS, 2026-04 갱신)",
      "floor": "3층",
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": "카드 가능 (KOREA TRIP TIPS)",
      "links": {
        "official": "https://www.pijomulvintage.com",
        "instagram": "https://www.instagram.com/pijomulvintage/"
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "KOREA TRIP TIPS 피조물빈티지",
          "url": "https://www.ktriptips.com/kor/shopping/4012571",
          "type": "map",
          "note": "와우산로 53 3층, 월~토 14:00~20:00, 좌표 (2026-04-01 갱신)"
        },
        {
          "label": "피조물빈티지 공식 온라인 스토어",
          "url": "https://www.pijomulvintage.com",
          "type": "official",
          "note": "매장 주소 3F 53 Wausan-ro, 상품과 가격대"
        }
      ],
      "review": null,
      "traits": {
        "browse": "mid",
        "priceBurden": "high",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "styleKeywords": [
          "빈티지",
          "여성 의류",
          "액세서리"
        ]
      },
      "issues": [
        "일요일 영업 여부를 확인하지 못했어요.",
        "가격대가 10대에게는 높은 편이에요.",
        "방문 후기를 충분히 찾지 못해 후기 요약이 없어요."
      ],
      "listed": true
    },
    {
      "id": "oreno-ramen",
      "name": "오레노라멘 본점",
      "shortName": "오레노라멘",
      "searchName": "오레노라멘 본점",
      "aliases": [
        "오레노 라멘",
        "Oreno Ramen",
        "토리파이탄",
        "라멘",
        "미쉐린"
      ],
      "primaryCategory": "food",
      "tags": [
        "웨이팅 있음"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 독막로8길 16 1층",
      "location": {
        "lat": 37.5475303597,
        "lng": 126.9173521314,
        "accuracy": "approx",
        "manual": true,
        "source": "KOREA TRIP TIPS 좌표 (이전 주소 독막로6길 14 기준)",
        "note": "좌표는 옛 주소 기준이라 지금 매장과 한 블록쯤 어긋날 수 있어요."
      },
      "nearestExit": "합정역 7번 출구 도보 약 10분 (KOREA TRIP TIPS)",
      "oneLineReason": "진한 닭 육수 토리파이탄, 미쉐린 빕 구르망 라멘집",
      "description": "닭을 통째로 고아 낸 하얀 닭 육수(토리파이탄) 라멘집이에요. 국물을 한 번 더 갈아 거품이 나고 부드러워요. 매운 버전(카라파이탄)도 있고, 면·밥·육수는 더 달라고 할 수 있어요. 2026 미쉐린 가이드 빕 구르망에 올라 있어요.",
      "priceLevel": 2,
      "priceNote": "토리파이탄·카라파이탄 각 13,000원, 계란 추가 1,000원 (polle 메뉴 정보)",
      "stayMinutes": [
        30,
        45
      ],
      "openingHours": {
        "mon": "11:00-22:00",
        "tue": "11:00-22:00",
        "wed": "11:00-22:00",
        "thu": "11:00-22:00",
        "fri": "11:00-22:00",
        "sat": "11:00-22:00",
        "sun": "11:00-22:00"
      },
      "hoursNote": "매일 11:00~22:00, 라스트오더 21:30 (미쉐린 가이드·KOREA TRIP TIPS)",
      "floor": "1층",
      "entranceTip": null,
      "reservation": null,
      "waiting": "often",
      "paymentNote": "카드 가능 (미쉐린 가이드)",
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "verified",
      "verifiedAt": "2026-11-06",
      "sources": [
        {
          "label": "미쉐린 가이드 오레노 라멘",
          "url": "https://guide.michelin.com/kr/ko/seoul-capital-area/kr-seoul/restaurant/oreno-ramen",
          "type": "official",
          "note": "독막로8길 16, 2026 빕 구르망, 매일 11:00~22:00, 줄이 길지만 회전이 빠름"
        },
        {
          "label": "KOREA TRIP TIPS 오레노라멘 본점",
          "url": "https://www.ktriptips.com/kor/food/2848972",
          "type": "map",
          "note": "11:00~22:00 (LO 21:30) 연중무휴, 합정역 7번 출구 10분. 주소는 이전 주소(독막로6길 14)로 나와 있음"
        },
        {
          "label": "polle 오레노 라멘 합정 본점",
          "url": "https://polle.com/place/5B0lI8/%EC%98%A4%EB%A0%88%EB%85%B8%20%EB%9D%BC%EB%A9%98",
          "type": "map",
          "note": "독막로8길 16 1층, 메뉴 가격, 후기 340건"
        }
      ],
      "review": {
        "pros": [
          "진하지만 짜지 않은 닭 육수와 부드러운 닭고기 차슈",
          "면·밥·육수를 더 받을 수 있어 배부르게 먹음",
          "웨이팅이 있어도 회전이 빠른 편"
        ],
        "cons": [
          "고수가 올라가고 닭 냄새가 느껴졌다는 의견도 있음",
          "저녁 이른 시간에도 줄이 길다는 후기"
        ],
        "goodFor": [
          "라멘을 좋아하는 친구들",
          "혼자 든든하게 한 끼"
        ],
        "practical": [
          "매운 맛을 원하면 카라파이탄",
          "예전보다 매장이 넓어졌다는 후기"
        ],
        "sourceCount": 2,
        "sources": [
          {
            "label": "polle 합정 본점 후기 모음 (2026)",
            "url": "https://polle.com/place/5B0lI8/%EC%98%A4%EB%A0%88%EB%85%B8%20%EB%9D%BC%EB%A9%98"
          },
          {
            "label": "합정 맛집 소개 기사 (2025-09)",
            "url": "https://v.daum.net/v/7IkmjNtsYi"
          }
        ],
        "checkedAt": "2026-11-06"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": "high"
      },
      "details": {
        "signatureMenu": [
          "토리파이탄",
          "카라파이탄"
        ],
        "seating": null,
        "pricePerPerson": "1인 약 1.3~1.5만원"
      },
      "issues": [
        "주소가 두 가지로 나와요: 미쉐린 가이드·polle는 독막로8길 16, KOREA TRIP TIPS는 독막로6길 14(이전 주소로 보임). 지도 위치는 옛 주소 기준 추정이라 지도 앱에서 확인해 주세요."
      ],
      "listed": true
    },
    {
      "id": "cafe-comma-hapjeong",
      "name": "카페꼼마 합정점",
      "shortName": "카페꼼마",
      "searchName": "카페꼼마 합정점",
      "aliases": [
        "카페 꼼마",
        "북카페",
        "문학동네"
      ],
      "primaryCategory": "dessert",
      "tags": [
        "실내",
        "비 오는 날",
        "오래 머물기",
        "늦게까지",
        "이색 공간"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 포은로 49",
      "location": {
        "lat": 37.5519413,
        "lng": 126.9067575,
        "accuracy": "exact",
        "source": "맘맘 장소 페이지의 지도 좌표"
      },
      "nearestExit": null,
      "oneLineReason": "천장까지 책이 꽂힌 출판사 문학동네의 대형 북카페",
      "description": "출판사 문학동네가 운영하는 북카페예요. 천장 높은 공간을 높은 책장이 둘러싸고 있고, 책장에서 책을 꺼내 자유롭게 읽을 수 있어요. 여러 층이라 자리가 넓은 편이고 음료·디저트·와인도 있어요.",
      "priceLevel": 2,
      "priceNote": "음료 약 6,500~7,300원 (polle 메뉴 정보)",
      "stayMinutes": [
        60,
        120
      ],
      "openingHours": {
        "mon": "10:00-22:00",
        "tue": "10:00-22:00",
        "wed": "10:00-22:00",
        "thu": "10:00-22:00",
        "fri": "10:00-22:00",
        "sat": "10:00-22:00",
        "sun": "10:00-22:00"
      },
      "hoursNote": "매일 10:00~22:00, 라스트오더 21:30 (맘맘). 예약 없이 방문",
      "floor": null,
      "entranceTip": null,
      "reservation": "no",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "맘맘 카페꼼마 합정점",
          "url": "https://mom-mom.net/travel/places/6a14f408159a063c5c7b813c",
          "type": "aggregator",
          "note": "포은로 49, 매일 10:00~22:00 (LO 21:30), 예약 불가, 좌표"
        },
        {
          "label": "뉴시스 출판사 북카페 기사 (2026-07)",
          "url": "https://www.newsis.com/view/NISX20260710_0003704366",
          "type": "media",
          "note": "문학동네 운영, 책장 책을 자유롭게 읽을 수 있음"
        },
        {
          "label": "polle 카페 꼼마 합정점",
          "url": "https://polle.com/place/3gqcR9/%EC%B9%B4%ED%8E%98%20%EA%BC%BC%EB%A7%88",
          "type": "map",
          "note": "메뉴 가격, 후기 27건"
        }
      ],
      "review": {
        "pros": [
          "천장이 높고 넓어서 답답하지 않음",
          "책을 꺼내 읽으며 오래 머물기 좋음",
          "스타벅스보다 덜 붐빈다는 의견"
        ],
        "cons": [
          "노트북 자리·콘센트는 빨리 찬다는 후기",
          "음악 소리가 크게 느껴졌다는 의견",
          "자리 찾기 어려웠다는 후기도 있음"
        ],
        "goodFor": [
          "조용히 수다 떨거나 책 구경하고 싶은 친구들",
          "비 오는 날 오래 있을 곳"
        ],
        "practical": [
          "밤 10시까지 열어 저녁 코스 마무리로 좋음"
        ],
        "sourceCount": 1,
        "sources": [
          {
            "label": "polle 카페 꼼마 합정점 후기 모음",
            "url": "https://polle.com/place/3gqcR9/%EC%B9%B4%ED%8E%98%20%EA%BC%BC%EB%A7%88"
          }
        ],
        "checkedAt": "2026-11-06"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [],
        "seating": "여러 층, 넓은 편",
        "pricePerPerson": null
      },
      "issues": [],
      "listed": true
    },
    {
      "id": "ugly-cookie-tremont",
      "name": "올 더 어글리 쿠키 앤 트레몽",
      "shortName": "어글리쿠키",
      "searchName": "올더어글리쿠키 앤 트레몽",
      "aliases": [
        "어글리쿠키",
        "All The Ugly Cookie",
        "트레몽",
        "두바이 쿠키"
      ],
      "primaryCategory": "dessert",
      "tags": [
        "디저트 맛집",
        "사진 맛집",
        "친구끼리"
      ],
      "area": "sangsu-hapjeong",
      "address": "서울 마포구 토정로 45 1·2층",
      "location": {
        "lat": 37.5456431,
        "lng": 126.9159323,
        "accuracy": "exact",
        "source": "맘맘 장소 페이지의 지도 좌표"
      },
      "nearestExit": null,
      "oneLineReason": "동화 같은 분홍 2층 집에서 먹는 꾸덕한 수제 쿠키",
      "description": "분홍색 2층 단독 건물의 쿠키 카페예요. 1층에서 주문하고 바깥 철제 계단으로 2층에 올라가 앉아요. 크고 꾸덕한 쿠키가 대표 메뉴이고, 계절마다 꾸밈과 포토존이 바뀐다고 해요.",
      "priceLevel": 2,
      "priceNote": "어글리 쿠키 약 5,900~6,200원, 아메리카노 5,000원 (2026 맘맘·polle)",
      "stayMinutes": [
        30,
        60
      ],
      "openingHours": {
        "mon": "12:00-20:00",
        "tue": "12:00-20:00",
        "wed": "12:00-20:00",
        "thu": "12:00-20:00",
        "fri": "12:00-20:00",
        "sat": "12:00-20:00",
        "sun": "12:00-20:00"
      },
      "hoursNote": "매일 12:00~20:00, 라스트오더 19:30 (맘맘, 2026-05 갱신)",
      "floor": "1·2층",
      "entranceTip": "주문은 1층, 자리는 바깥 철제 계단으로 올라가는 2층이에요. 비 오는 날은 불편하다는 후기가 있어요.",
      "reservation": "no",
      "waiting": "sometimes",
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "맘맘 올 더 어글리 쿠키 & 트레몽",
          "url": "https://mom-mom.net/en/travel/places/6567e0a599e3924b9720c4e5",
          "type": "aggregator",
          "note": "토정로 45 1·2층, 매일 12:00~20:00 (LO 19:30), 메뉴 가격, 좌표 (2026-05-04 갱신)"
        },
        {
          "label": "polle 올더어글리쿠키 앤 트레몽",
          "url": "https://polle.com/place/4Em00d/%EC%98%AC%EB%8D%94%EC%96%B4%EA%B8%80%EB%A6%AC%EC%BF%A0%ED%82%A4%20%EC%95%A4%20%ED%8A%B8%EB%A0%88%EB%AA%BD",
          "type": "map",
          "note": "토정로 45 1·2층, 메뉴 가격, 후기 13건"
        }
      ],
      "review": {
        "pros": [
          "버터 풍미가 진하고 쫀득·촉촉한 큰 쿠키",
          "피스타치오 두바이 쿠키 칭찬이 많음",
          "건물이 귀엽고 사진 찍기 좋음"
        ],
        "cons": [
          "매장에서 먹으려면 음료 주문이 필요",
          "쿠키가 꽤 달다는 의견",
          "2층 좌석이 바깥 계단이라 음료 들고 오르기 불편"
        ],
        "goodFor": [
          "달달한 디저트 좋아하는 친구들",
          "사진 남기고 싶은 날"
        ],
        "practical": [
          "두바이 쿠키는 전자레인지 10초 데우면 더 맛있다는 팁",
          "비 오는 날은 포장 추천"
        ],
        "sourceCount": 1,
        "sources": [
          {
            "label": "polle 후기 모음",
            "url": "https://polle.com/place/4Em00d/%EC%98%AC%EB%8D%94%EC%96%B4%EA%B8%80%EB%A6%AC%EC%BF%A0%ED%82%A4%20%EC%95%A4%20%ED%8A%B8%EB%A0%88%EB%AA%BD"
          }
        ],
        "checkedAt": "2026-11-06"
      },
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "signatureMenu": [
          "어글리 쿠키",
          "두바이 쿠키"
        ],
        "seating": "2층 좌석 (바깥 계단)",
        "pricePerPerson": "1인 약 1~1.5만원 (쿠키+음료)"
      },
      "issues": [
        "상수역보다 당인리·합정 쪽에 가까워 걸어가면 조금 멀어요."
      ],
      "listed": true
    },
    {
      "id": "naemamdaero-phonecase",
      "name": "내맘대로폰케이스 홍대점",
      "shortName": "내맘대로폰케이스",
      "searchName": "내맘대로폰케이스 홍대점",
      "aliases": [
        "데코덴",
        "폰꾸",
        "모루인형",
        "탑로더",
        "슬라임"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "비 오는 날",
        "핸드메이드",
        "친구끼리"
      ],
      "area": "hongdae-main",
      "address": "서울 마포구 와우산로19길 21 삼진빌딩 3층",
      "location": {
        "lat": 37.5512466761,
        "lng": 126.9218988345,
        "accuracy": "exact",
        "source": "KOREA TRIP TIPS 지도 좌표 (맘맘 좌표와 일치)"
      },
      "nearestExit": null,
      "oneLineReason": "파츠 무제한, 데코덴 폰케이스를 직접 만드는 공방",
      "description": "폰케이스에 크림 접착제와 파츠를 붙여 꾸미는 데코덴 체험 공방이에요. 모루인형, 탑로더 꾸미기, 비즈 폰줄, 슬라임도 있어요. 파츠를 원하는 만큼 쓸 수 있고, 기본 1시간 정도 걸려요.",
      "priceLevel": 2,
      "priceNote": "데코덴·모루인형 19,000원, 탑로더 16,000원, 폰줄 12,000원 (2025-12 KOREA TRIP TIPS)",
      "stayMinutes": [
        60,
        90
      ],
      "openingHours": {
        "mon": "12:00-21:00",
        "tue": "12:00-21:00",
        "wed": "12:00-21:00",
        "thu": "12:00-21:00",
        "fri": "12:00-21:00",
        "sat": "12:00-21:00",
        "sun": "12:00-21:00"
      },
      "hoursNote": "매일 12:00~21:00, 마지막 입장(주문) 19:50 (맘맘). 연중무휴 (KOREA TRIP TIPS)",
      "floor": "3층",
      "entranceTip": "엘리베이터 없이 계단으로 3층까지 올라가요.",
      "reservation": "no",
      "waiting": "sometimes",
      "paymentNote": "자리를 잡은 뒤 결제 (맘맘)",
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "KOREA TRIP TIPS 내맘대로폰케이스 홍대점",
          "url": "https://www.ktriptips.com/kor/tourspot/2946242",
          "type": "map",
          "note": "와우산로19길 21, 12:00~21:00 연중무휴, 체험 가격, 좌표 (2025-12-18 갱신)"
        },
        {
          "label": "맘맘 내맘대로폰케이스 홍대점",
          "url": "https://mom-mom.net/travel/places/672976658fecbb765e1432e9",
          "type": "aggregator",
          "note": "삼진빌딩 3층(계단), 마지막 주문 19:50, 예약 불가·현장 접수, 대기 가능"
        }
      ],
      "review": null,
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "pricePerPerson": "체험 1개 1.2~2.3만원",
        "duration": "기본 약 1시간 (시간 제한 없음)",
        "takeHomeResult": true
      },
      "issues": [
        "방문 후기를 충분히 찾지 못해 후기 요약이 없어요."
      ],
      "listed": true
    },
    {
      "id": "grim-factory-yeonnam",
      "name": "그림제작소 연남점",
      "shortName": "그림제작소",
      "searchName": "그림제작소 연남점",
      "aliases": [
        "드로잉카페",
        "그림 그리기",
        "모루인형"
      ],
      "primaryCategory": "play",
      "tags": [
        "실내",
        "비 오는 날",
        "핸드메이드",
        "오래 머물기",
        "친구끼리"
      ],
      "area": "yeonnam",
      "address": "서울 마포구 성미산로 170",
      "location": {
        "lat": 37.5641718,
        "lng": 126.9245885,
        "accuracy": "exact",
        "source": "맘맘 장소 페이지의 지도 좌표"
      },
      "nearestExit": null,
      "oneLineReason": "앞치마 입고 캔버스에 그림 한 장 그려 오는 드로잉 카페",
      "description": "물감·앞치마·팔토시를 받아 캔버스에 자유롭게 그림을 그리는 드로잉 카페예요. 모루인형 만들기도 있어요. 그림을 잘 못 그려도 친구들과 수다 떨며 오래 머물기 좋아요.",
      "priceLevel": 2,
      "priceNote": "1인 드로잉 21,000원, 모루인형 9,900원(2인 이상), 음료 약 4,000원 (맘맘, 2025-04)",
      "stayMinutes": [
        90,
        120
      ],
      "openingHours": {
        "mon": null,
        "tue": null,
        "wed": null,
        "thu": null,
        "fri": null,
        "sat": "12:00-22:00",
        "sun": "12:00-22:00"
      },
      "hoursNote": "주말 12:00~22:00. 평일은 13:00 오픈인데 마감이 출처마다 달라요(22:00 / 21:00). 대기 손님이 있으면 120분 제한이 있을 수 있어요.",
      "floor": null,
      "entranceTip": null,
      "reservation": "recommended",
      "waiting": null,
      "paymentNote": null,
      "links": {
        "official": null,
        "instagram": null
      },
      "checkedAt": "2026-11-06",
      "verificationStatus": "cross-checked",
      "verifiedAt": null,
      "sources": [
        {
          "label": "맘맘 그림제작소 연남점",
          "url": "https://mom-mom.net/travel/places/66ff7c7273b8bd30bf968aff",
          "type": "aggregator",
          "note": "성미산로 170, 평일 13:00~22:00·주말 12:00~22:00, 가격, 네이버 예약·현장 방문, 좌표 (2025-04-18 갱신)"
        },
        {
          "label": "AutoReserve 그림제작소 연남점",
          "url": "https://autoreserve.com/en/restaurants/mrMqCDSFpLSXKgvACCdQ",
          "type": "aggregator",
          "note": "평일 13:00~21:00, 주말 12:00~22:00, 공휴일 휴무로 표시 (사용자 제공 정보)"
        }
      ],
      "review": null,
      "traits": {
        "browse": null,
        "priceBurden": "mid",
        "friendGroup": null,
        "crowd": null
      },
      "details": {
        "pricePerPerson": "1인 약 2.1만원 + 음료",
        "duration": "보통 1~2시간",
        "takeHomeResult": null
      },
      "issues": [
        "평일 마감 시간이 출처마다 달라요 (22:00 / 21:00).",
        "공휴일 휴무 여부가 출처마다 달라요.",
        "방문 후기를 충분히 찾지 못해 후기 요약이 없어요."
      ],
      "listed": true
    }
  ]
};
