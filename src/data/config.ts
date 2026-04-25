import type { AtelierConfig } from "@/types";

/**
 * 공방 기본 설정
 * 이 파일만 수정하면 다른 공방으로 커스터마이징이 완료됩니다.
 */
export const atelierConfig: AtelierConfig = {
  name: "아뜰리에 공방",
  tagline: "손으로 만드는 이야기",
  description:
    "2015년부터 시작된 핸드메이드 가죽 공방입니다. 하나하나 정성껏 만드는 수공예 가죽 제품과 클래스를 운영합니다.",
  philosophy:
    "기계가 아닌 손의 온도로, 시간이 지날수록 더 아름다워지는 것들을 만듭니다.",
  foundedYear: 2015,
  contact: {
    email: "hello@atelier-leather.kr",
    phone: "02-1234-5678",
    address: "서울특별시 마포구 연남동 123-45 2층",
    mapUrl: "https://map.kakao.com",
  },
  social: {
    instagram: "https://instagram.com/atelier_leather",
    naver: "https://blog.naver.com/atelier_leather",
    youtube: "https://youtube.com/@atelier_leather",
    kakaotalk: "https://open.kakao.com/",
  },
  hero: {
    headline: "손끝에서 태어나는\n나만의 가죽 이야기",
    subheadline:
      "직접 재단하고 바느질하는 과정에서\n세상에 하나뿐인 작품이 완성됩니다",
    ctaText: "클래스 둘러보기",
    backgroundImage:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1600&h=900&fit=crop",
  },
  meta: {
    title: "아틀리에 가죽 | 핸드메이드 가죽 공방",
    description:
      "서울 연남동에 위치한 핸드메이드 가죽 공방. 입문부터 심화까지 다양한 클래스를 운영합니다.",
    ogImage:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=1200&h=630&fit=crop",
  },
};
