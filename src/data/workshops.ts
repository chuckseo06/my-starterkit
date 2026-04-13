import type { Workshop } from "@/types";

export const workshops: Workshop[] = [
  {
    id: "card-wallet",
    title: "카드지갑 원데이 클래스",
    description:
      "가죽의 기초부터 시작해 나만의 카드지갑을 완성하는 입문 과정입니다. 가죽 선택부터 재단, 바느질까지 모든 과정을 경험합니다.",
    duration: "3시간",
    level: "입문",
    price: 65000,
    maxParticipants: 6,
    materials: ["베지터블 가죽", "실", "바늘", "마감재"],
    imageUrl:
      "https://images.unsplash.com/photo-1585034694207-997d3f1d4e65?w=500&h=300&fit=crop",
    tags: ["입문", "원데이", "선물용"],
    featured: true,
  },
  {
    id: "tote-bag",
    title: "토트백 정규 과정",
    description:
      "4주 과정으로 본격적인 가죽 가방 제작 기술을 습득합니다. 패턴 설계부터 마무리까지 전문적인 기술을 배웁니다.",
    duration: "4주 (주 1회 × 3시간)",
    level: "초급",
    price: 280000,
    maxParticipants: 4,
    materials: ["이탈리아 베지터블 가죽", "금속 부자재 일체"],
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=300&fit=crop",
    tags: ["정규과정", "가방", "실용적"],
    featured: true,
  },
  {
    id: "leather-belt",
    title: "가죽 벨트 만들기",
    description:
      "기본 기술을 배운 후 한 단계 업그레이드된 벨트 제작을 배웁니다. 여러 색상의 가죽 중 선택해 독특한 디자인을 만들 수 있습니다.",
    duration: "2시간 30분",
    level: "초급",
    price: 55000,
    maxParticipants: 8,
    materials: ["프리미엄 가죽", "버클", "바느질 도구"],
    imageUrl:
      "https://images.unsplash.com/photo-1625947345307-39f2bf57fcad?w=500&h=300&fit=crop",
    tags: ["원데이", "액세서리", "선물용"],
    featured: false,
  },
  {
    id: "leather-carving",
    title: "가죽 카빙 심화반",
    description:
      "가죽에 조각을 하는 고급 기법을 배웁니다. 자신만의 로고나 패턴을 디자인해 가죽 제품에 새길 수 있습니다.",
    duration: "8주 (주 2회 × 2시간)",
    level: "중급",
    price: 320000,
    maxParticipants: 3,
    materials: ["카빙 도구 세트", "프리미엄 가죽"],
    imageUrl:
      "https://images.unsplash.com/photo-1608720463995-a0245dd92e34?w=500&h=300&fit=crop",
    tags: ["정규과정", "카빙", "심화"],
    featured: false,
  },
];
