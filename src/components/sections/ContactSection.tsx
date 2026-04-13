"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { atelierConfig } from "@/data/config";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 실제 구현 시 API 호출로 교체
      console.log("Form submitted:", formData);
      alert("문의가 접수되었습니다. 곧 연락드리겠습니다.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" variant="dark">
      <SectionHeader
        title="예약 & 문의"
        subtitle="궁금한 점이 있으시면 편하게 연락해 주세요"
      />

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* 연락처 정보 */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
              <MapPin className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold mb-1">주소</p>
              <p className="text-white/80 text-sm leading-relaxed">
                {atelierConfig.contact.address}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
              <Phone className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold mb-1">전화</p>
              <a
                href={`tel:${atelierConfig.contact.phone}`}
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                {atelierConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
              <Mail className="text-white" size={20} />
            </div>
            <div>
              <p className="font-semibold mb-1">이메일</p>
              <a
                href={`mailto:${atelierConfig.contact.email}`}
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                {atelierConfig.contact.email}
              </a>
            </div>
          </div>

          {atelierConfig.contact.mapUrl && (
            <a
              href={atelierConfig.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 text-white border border-white rounded-lg hover:bg-white/10 transition-colors"
            >
              지도에서 보기
            </a>
          )}
        </div>

        {/* 예약 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="이름 *"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />

          <Input
            placeholder="연락처 *"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />

          <Input
            placeholder="이메일"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />

          <Textarea
            placeholder="문의 내용 (관심 있는 클래스, 희망 일정 등) *"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-primary hover:bg-white/90"
            size="lg"
          >
            <Send size={16} className="mr-2" />
            {isSubmitting ? "전송 중..." : "문의 보내기"}
          </Button>

          <p className="text-xs text-white/60 text-center">
            * 필수 입력 항목입니다.
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
}
