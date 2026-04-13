// 공방 기본 설정 타입
export interface AtelierConfig {
  name: string;
  tagline: string;
  description: string;
  philosophy: string;
  foundedYear: number;
  contact: {
    email: string;
    phone: string;
    address: string;
    mapUrl?: string;
  };
  social: {
    instagram?: string;
    naver?: string;
    youtube?: string;
    kakaotalk?: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    backgroundImage: string;
  };
  meta: {
    title: string;
    description: string;
    ogImage?: string;
  };
}

// 강좌/클래스 타입
export interface Workshop {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "입문" | "초급" | "중급" | "고급";
  price: number;
  maxParticipants: number;
  materials: string[];
  imageUrl?: string;
  tags: string[];
  featured?: boolean;
}

// 갤러리 아이템 타입
export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  category: string;
}

// 작업 과정 단계 타입
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

// 수강생 후기 타입
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  workshopTitle: string;
  date: string;
}
