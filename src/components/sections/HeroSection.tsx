import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { atelierConfig } from "@/data/config";

export function HeroSection() {
  const { hero, tagline } = atelierConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 배경 이미지 */}
      <Image
        src={hero.backgroundImage}
        alt={`${atelierConfig.name} 공방`}
        fill
        priority
        className="object-cover"
      />
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 콘텐츠 */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <span className="inline-block text-sm tracking-widest uppercase text-white/80 mb-4">
          {tagline}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
          {hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 whitespace-pre-line leading-relaxed">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#workshops"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            {hero.ctaText}
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-white text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            공방 소개
          </a>
        </div>
      </div>

      {/* 스크롤 유도 아이콘 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}
