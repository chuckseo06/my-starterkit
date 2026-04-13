import Image from "next/image";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { galleryItems } from "@/data/gallery";

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" variant="default">
      <SectionHeader
        title="갤러리"
        subtitle="지금까지 완성된 다양한 작품들을 만나보세요"
      />

      {/* 마소너리 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`group overflow-hidden rounded-lg cursor-pointer h-64 ${
              index % 4 === 0 || index % 4 === 3 ? "lg:h-80" : "lg:h-64"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.imageUrl}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* 오버레이 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold">{item.alt}</p>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
