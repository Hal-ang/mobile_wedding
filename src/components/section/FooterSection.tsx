"use client";

import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import React from "react";
import ShareButton from "../ShareButton";
import Spacing from "../Spacing";
import Text from "../Text";

const FooterSection = () => {
  return (
    <Flex
      as="section"
      justify="center"
      className="w-full bg-black text-white pt-110pxr pb-160pxr"
    >
      <Text
        display="block"
        className={`${BonVivantFont.className} text-44pxr leading-54.5pxr`}
      >
        THANK YOU
      </Text>
      <Text className="text-16pxr leading-25pxr" display="block">
        즐거운 날 함께해 주시면 감사하겠습니다
      </Text>
      <Spacing size={28} />
      <ShareButton text="카카오톡 공유하기" onClick={() => {}} />
      <Spacing size={6} />
      <ShareButton text="링크 복사하기" onClick={() => {}} />
    </Flex>
  );
};

export default FooterSection;
