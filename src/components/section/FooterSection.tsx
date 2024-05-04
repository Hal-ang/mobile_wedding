import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import FooterButtons from "./FooterButtons";
import React from "react";
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
      <FooterButtons />
    </Flex>
  );
};

export default FooterSection;
