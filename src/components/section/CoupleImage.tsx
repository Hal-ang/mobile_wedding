import Flex from "../Flex";
import React from "react";
import Text from "../Text";

interface CoupleImageProps {
  url: string;
  height: number;
  person: { name: string; desc: string };
}
const CoupleImage = ({ url, height, person }: CoupleImageProps) => {
  return (
    <div
      style={{ height }}
      className="flex flex-col w-full p-10pxr bg-[#D4D4D4] "
    >
      <div className="flex-[1_1_0%]" />
      <Flex
        direction="row"
        justify="space-between"
        align="center"
        className="w-full bg-black px-16pxr py-11pxr text-white"
      >
        <Text className="font-bold text-16pxr leading-26pxr">
          {person.name}
        </Text>
        <Text className="text-16pxr leading-26pxr font-normal">
          {person.desc}
        </Text>
      </Flex>
    </div>
  );
};

export default CoupleImage;
