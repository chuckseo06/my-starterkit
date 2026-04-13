import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "@/app/globals.css";
import { atelierConfig } from "@/data/config";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  preload: true,
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  preload: true,
});

export const metadata: Metadata = {
  title: atelierConfig.meta.title,
  description: atelierConfig.meta.description,
  keywords: [
    "공방",
    "가죽",
    "핸드메이드",
    "클래스",
    "워크숍",
    "수공예",
    atelierConfig.name,
  ],
  openGraph: {
    title: atelierConfig.meta.title,
    description: atelierConfig.meta.description,
    images: atelierConfig.meta.ogImage
      ? [
          {
            url: atelierConfig.meta.ogImage,
            width: 1200,
            height: 630,
          },
        ]
      : [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable}`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
