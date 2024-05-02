import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import React from "react";
import Text from "../Text";

const Welcome = () => {
  return (
    <div className="h-screen bg-white w-full flex flex-col justify-between">
      <Flex className={`mt-44pxr`} direction="column">
        {["THE", "WEDDING", "OF", "TAEHOON", "AND", "DANHEE"].map(
          (text, index) => (
            <Text
              key={index}
              display="block"
              className={`text-55pxr leading-48pxr ${BonVivantFont.className}`}
            >
              {text}
            </Text>
          )
        )}
        <Flex
          className={`text-15pxr leading-18pxr mt-16pxr`}
          direction="column"
        >
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
