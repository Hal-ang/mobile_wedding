import "./globals.css";

import type { Metadata, Viewport } from "next";

import { PretendardFont } from "@/style/fonts";
import { ToastProvider } from "@/components/toast/ToastProvider";

export const metadata: Metadata = {
  title: "구태훈, 김단희 결혼합니다♡",
  description: "6월 8일 토요일 오후 4시 삼청각 일화당",

  openGraph: {
    type: "website",
    // url: "https://wedding.kthcorp.com",
    title: "구태훈, 김단희 결혼합니다♡",
    locale: "ko_KR",
    description: "6월 8일 토요일 오후 4시 삼청각 일화당",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 1200,
        height: 630
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
