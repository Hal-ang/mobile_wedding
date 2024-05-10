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
        url: "https://github-production-user-asset-6210df.s3.amazonaws.com/68503014/329634204-e3ef77a2-eed3-4236-9dff-928b682b07dc.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240510%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240510T153246Z&X-Amz-Expires=300&X-Amz-Signature=92ed9f022eecd0669abff74b2f844c3843a2cb868edc13672832f1e6570ede84&X-Amz-SignedHeaders=host&actor_id=68503014&key_id=0&repo_id=795044003", // Must be an absolute URL
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
