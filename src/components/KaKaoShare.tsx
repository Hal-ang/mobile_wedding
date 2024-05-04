"use client";

import React, { useCallback, useEffect } from "react";

import ShareButton from "./ShareButton";

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      Share: {
        sendScrap: (arg: { requestUrl: string }) => void;
      };
    };
  }
}

const KaKaoShare = ({ url }: { url: string }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (document.getElementById("kakao-sdk")) return;

    const script = document.createElement("script");
    script.id = "kakao-sdk";
    script.async = true;
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js";
    script.integrity =
      "sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01";
    script.crossOrigin = "anonymous";

    script.onload = () => {
      window.Kakao.init("7abc44b737ca7c70cf509f0c9d3c98ed");
      console.log("Kakao SDK loaded");
    };
    document.body.appendChild(script);
  }, []);

  const handleKakaoShare = useCallback(() => {
    if (confirm("다른 앱으로 이 페이지를 열겠습니까?")) {
      // 카카오톡 공유 로직
      window.Kakao.Share.sendScrap({
        requestUrl: url
      });
    }
  }, [url]);

  return <ShareButton text="카카오톡 공유하기" onClick={handleKakaoShare} />;
};

export default KaKaoShare;
