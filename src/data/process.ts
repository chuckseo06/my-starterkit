import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "가죽 선택",
    description:
      "다양한 색상과 질감의 프리미엄 가죽 중에서 마음에 드는 것을 선택합니다. 각 가죽의 특성을 자세히 설명해드립니다.",
    icon: "Palette",
  },
  {
    step: 2,
    title: "패턴 설계",
    description:
      "원하는 제품의 크기와 디자인을 정하고 패턴을 만들어 가죽 위에 옮깁니다. 나만의 개성을 담을 수 있습니다.",
    icon: "PencilRuler",
  },
  {
    step: 3,
    title: "재단 & 정형",
    description:
      "패턴에 따라 정교하게 가죽을 재단하고 모서리를 다듭니다. 가장 정성이 들어가는 단계입니다.",
    icon: "Scissors",
  },
  {
    step: 4,
    title: "바느질 & 마감",
    description:
      "정교한 손바느질로 각 부분을 연결하고, 마감재를 덧발라 오래 사용할 수 있도록 완성합니다.",
    icon: "Needle",
  },
];
