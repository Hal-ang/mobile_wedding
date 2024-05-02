import localFont from "next/font/local";

export const BonVivantFont = localFont({
  src: [
    {
      path: "../../public/font/BonVivantSerif.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  display: "swap",
  preload: true
});

export const PretendardFont = localFont({
  src: [
    {
      path: "../../public/font/Pretendard-Bold.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../../public/font/Pretendard-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/font/Pretendard-Regular.otf",
      weight: "500",
      style: "normal"
    }
  ],
  display: "swap",
  preload: true
});
