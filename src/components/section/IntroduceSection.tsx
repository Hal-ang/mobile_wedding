import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import Glare from "../../../public/glare/glare.svg";
import React from "react";
import Text from "../Text";

const CrossTitle = () => {
  return (
    <div
      className={`${BonVivantFont.className} text-66pxr leading-58pxr medium:text-81pxr medium:leading-71pxr large:text-88pxr large:leading-77pxr mt-12pxr w-full`}
    >
      <Text display="block" style={{ transform: "translate(-0.75rem)" }}>
        NEVER
      </Text>
      <Flex direction="row" align="start" justify="end">
        <Glare className="flex-none inline w-44pxr h-44pxr medium:w-48pxr medium:h-48pxr large:w-52pxr large:h-52pxr" />
        <Text
          className="text-right"
          style={{ transform: "translate(0.75rem)" }}
        >
          WITH
        </Text>
      </Flex>
      <Text display="block" style={{ transform: "translate(-0.75rem)" }}>
        SADNESS
      </Text>
      <Text
        display="block"
        className="text-right"
        style={{ transform: "translate(0.75rem)" }}
      >
        ALWAYS
      </Text>
      <Flex direction="row" align="start" justify="start">
        <Text display="block" style={{ transform: "translate(-0.75rem)" }}>
          WITH
        </Text>
        <Glare className="flex-none  inline w-44pxr h-44pxr medium:w-48pxr medium:h-48pxr large:w-52pxr large:h-52pxr" />
      </Flex>

      <Flex direction="row" align="start" justify="end">
        <Text style={{ transform: "translate(0.75rem)" }}>GLADNESS</Text>
      </Flex>
    </div>
  );
};

const IntroduceSection = () => {
  return (
    <div className="w-full">
      <CrossTitle />
      <Flex align="start" className="gap-20pxr px-24pxr mt-10pxr">
        {[
          `좋아하는 노래의 가사처럼\n슬픔은 없이, 항상 기쁜 마음으로\n살아가면 좋겠지만`,
          `우리의 가장 큰 바람은\n슬픔은 슬픔대로, 기쁨은 기쁨대로\n함께 흘려보내며\n오래오래 함께하는 것입니다.`,
          `오셔서 저희 함께할 날들을 축복해 주시면\n감사하겠습니다.`
        ].map((text) => (
          <Text
            key={text}
            display="block"
            className="whitespace-pre-line text-16pxr leading-26pxr"
          >
            {text}
          </Text>
        ))}
      </Flex>
    </div>
  );
};

export default IntroduceSection;
