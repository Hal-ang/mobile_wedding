"use client";

import React, { useCallback } from "react";

import ShareButton from "../ShareButton";
import Spacing from "../Spacing";
import copy from "copy-to-clipboard";

const FooterButtons = () => {
  const handleKakaoShare = useCallback(() => {
    if (confirm("다른 앱으로 이 페이지를 열겠습니까?")) {
      // 카카오톡 공유 로직
    }
  }, []);

  const handleCopyLink = useCallback(() => {
    copy(window.location.href);
    // TODO : 토스트
  }, []);
  return (
    <>
      <ShareButton text="카카오톡 공유하기" onClick={handleKakaoShare} />
      <Spacing size={6} />
      <ShareButton text="링크 복사하기" onClick={handleCopyLink} />
    </>
  );
};

export default FooterButtons;
