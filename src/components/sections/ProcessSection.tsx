import * as Icons from "lucide-react";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <SectionWrapper id="process" variant="muted">
      <SectionHeader
        title="작업 과정"
        subtitle="가죽 제품이 완성되기까지의 정성스러운 과정"
      />

      {/* 타임라인 */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {processSteps.map((step, index) => {
            // 동적으로 아이콘 선택
            const IconComponent =
              Icons[step.icon as keyof typeof Icons] || Icons.Circle;

            return (
              <div key={step.step} className="flex gap-6 md:gap-8">
                {/* 왼쪽: 아이콘 + 연결선 */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4 shrink-0">
                    {step.step}
                  </div>
                  {index !== processSteps.length - 1 && (
                    <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/30 md:h-24" />
                  )}
                </div>

                {/* 오른쪽: 콘텐츠 */}
                <div className="pb-8 md:pb-12">
                  <h3 className="text-xl md:text-2xl font-semibold font-serif mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
