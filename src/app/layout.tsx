import "./globals.css";

import { BonVivantFont, PretendardFont } from "@/style/fonts";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={PretendardFont.className + " text-black font-normal"}>
        {children}
      </body>
    </html>
  );
}
