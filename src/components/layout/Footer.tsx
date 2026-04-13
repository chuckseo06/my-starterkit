import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { atelierConfig } from "@/data/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 md:mb-16">
          {/* 공방 정보 */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">
              {atelierConfig.name}
            </h3>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              {atelierConfig.description}
            </p>
            <p className="text-background/70 text-sm">
              {atelierConfig.philosophy}
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span className="text-background/80">
                  {atelierConfig.contact.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a
                  href={`tel:${atelierConfig.contact.phone}`}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {atelierConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a
                  href={`mailto:${atelierConfig.contact.email}`}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  {atelierConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* SNS 링크 */}
          <div>
            <h4 className="font-semibold mb-4">팔로우</h4>
            <div className="flex flex-col gap-2 text-sm">
              {atelierConfig.social.instagram && (
                <a
                  href={atelierConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Instagram
                </a>
              )}
              {atelierConfig.social.naver && (
                <a
                  href={atelierConfig.social.naver}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  Naver Blog
                </a>
              )}
              {atelierConfig.social.youtube && (
                <a
                  href={atelierConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  YouTube
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} {atelierConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <button
                onClick={() => alert("개인정보처리방침 페이지입니다.")}
                className="hover:text-background transition-colors"
              >
                개인정보처리방침
              </button>
              <button
                onClick={() => alert("이용약관 페이지입니다.")}
                className="hover:text-background transition-colors"
              >
                이용약관
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
