import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { testimonials } from "@/data/testimonials";

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-foreground"
          }
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" variant="default">
      <SectionHeader
        title="수강생 후기"
        subtitle="실제 수강생들의 따뜻한 후기입니다"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.workshopTitle}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {testimonial.date}
                </span>
              </div>

              {/* 별점 */}
              <div className="mb-3">
                <Rating rating={testimonial.rating} />
              </div>

              {/* 후기 텍스트 */}
              <p className="text-sm text-foreground leading-relaxed">
                {testimonial.comment}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
