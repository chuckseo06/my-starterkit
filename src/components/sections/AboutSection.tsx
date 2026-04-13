import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { atelierConfig } from "@/data/config";
import { Heart, Users, Lightbulb } from "lucide-react";

const FEATURES = [
  {
    icon: Heart,
    title: "정성",
    description: "한 땀 한 땀 정성을 담아 만든 제품들입니다.",
  },
  {
    icon: Users,
    title: "공동체",
    description: "함께 배우고 만드는 즐거움을 나눕니다.",
  },
  {
    icon: Lightbulb,
    title: "창의성",
    description: "나만의 개성을 담은 작품을 완성할 수 있습니다.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* 텍스트 영역 */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4 tracking-tight">
            {atelierConfig.name}
          </h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {atelierConfig.description}
          </p>
          <p className="text-foreground font-semibold mb-2">철학</p>
          <p className="text-muted-foreground leading-relaxed">
            {atelierConfig.philosophy}
          </p>
          <p className="text-sm text-muted-foreground mt-6">
            설립년도: {atelierConfig.foundedYear}년
          </p>
        </div>

        {/* 플레이스홀더 이미지 영역 */}
        <div className="aspect-square rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-5xl mb-2">🎨</div>
            <p>공방 이미지 영역</p>
            <p className="text-sm">public/images/about.jpg</p>
          </div>
        </div>
      </div>

      {/* 특징 카드 */}
      <SectionHeader title="우리의 가치" centered />
      <div className="grid md:grid-cols-3 gap-6">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card key={feature.title}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
