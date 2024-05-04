"use client";

import React, { useCallback } from "react";

import KaKaoShare from "../KaKaoShare";
import ShareButton from "../ShareButton";
import Spacing from "../Spacing";
import copy from "copy-to-clipboard";
import { useToast } from "../toast/ToastProvider";

const FooterButtons = () => {
  const { show } = useToast();

  const handleCopyLink = useCallback(() => {
    copy(window.location.href);
    show("URL 링크가 복사되었습니다.");
  }, []);
  return (
    <>
      <KaKaoShare url={window.location.href} />
      <Spacing size={6} />
      <ShareButton text="링크 복사하기" onClick={handleCopyLink} />
    </>
  );
};

export default FooterButtons;
