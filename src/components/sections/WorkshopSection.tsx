import Link from "next/link";
import { Clock, Users, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { workshops } from "@/data/workshops";

function WorkshopCard({ workshop }: { workshop: (typeof workshops)[0] }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl font-semibold leading-snug">
            {workshop.title}
          </h3>
          <Badge
            variant={workshop.featured ? "default" : "secondary"}
            className="shrink-0"
          >
            {workshop.level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {workshop.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workshop.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            최대 {workshop.maxParticipants}명
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {workshop.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <span className="font-bold text-lg text-primary">
          {workshop.price.toLocaleString()}원
        </span>
        <Link
          href="#contact"
          className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          신청하기 <ChevronRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
}

export function WorkshopSection() {
  return (
    <SectionWrapper id="workshops" variant="muted">
      <SectionHeader
        title="클래스 안내"
        subtitle="입문부터 심화까지, 나의 속도로 배우는 공방 클래스"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </SectionWrapper>
  );
}
