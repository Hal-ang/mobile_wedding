import "./globals.css";

import type { Metadata, Viewport } from "next";

import { PretendardFont } from "@/style/fonts";
import { ToastProvider } from "@/components/toast/ToastProvider";

export const metadata: Metadata = {
  title: "구태훈, 김단희 결혼합니다♡",
  description: "6월 8일 토요일 오후 4시 삼청각 일화당",

  openGraph: {
    type: "website",

    title: "구태훈, 김단희 결혼합니다♡",
    locale: "ko_KR",
    description: "6월 8일 토요일 오후 4시 삼청각 일화당",
    images: [
      {
        url: "https://cdn.jsdelivr.net/gh/Hal-ang/wedding_CDN_repo@master/sns.png", // Must be an absolute URL
        width: 720,
        height: 720
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={
          PretendardFont.className + " text-black font-normal relative"
        }
      >
        <ToastProvider>{children}</ToastProvider>

        <div id="portal" className="relative"></div>
      </body>
    </html>
  );
}
