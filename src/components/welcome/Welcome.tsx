import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import React from "react";
import Text from "../Text";

const Welcome = () => {
  return (
    <div className="h-screen bg-white w-full flex flex-col justify-between">
      <Flex className={`mt-44pxr`}>
        {["THE", "WEDDING", "OF", "TAEHOON", "AND", "DANHEE"].map(
          (text, index) => (
            <Text
              key={index}
              display="block"
              className={`text-50pxr leading-42pxr medium:text-55pxr medium:leading-48pxr regular:text-60pxr regular:leading-54pxr large:text-66pxr large:leading-66pxr   ${BonVivantFont.className}`}
            >
              {text}
            </Text>
          )
        )}
        <Flex className={`text-15pxr leading-18pxr mt-16pxr`}>
          <Text display="block">2024.06.08, SATURDAY 16:00</Text>
          <Text display="block" className="mt-8pxr">
            SAMCHEONGGAK
          </Text>
        </Flex>
      </Flex>
      <button className="mb-40pxr text-white bg-black w-40pxr h-40pxr mx-auto rounded-full">
        홋
      </button>
    </div>
  );
};

export default Welcome;
