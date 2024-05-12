import Flex from "../Flex";
import Image from "next/image";
import React from "react";
import Text from "../Text";

interface CoupleImageProps {
  url: string;

  person: { name: string; desc: string };
}
const CoupleImage = ({ url, person }: CoupleImageProps) => {
  return (
    <div className="relative w-full">
      <Image
        quality={100}
        src={url}
        width={382}
        height={201}
        alt="couple-profile"
        className="w-auto"
      />

      <div className="w-full p-10pxr absolute bottom-0">
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
    </div>
  );
};

export default CoupleImage;
