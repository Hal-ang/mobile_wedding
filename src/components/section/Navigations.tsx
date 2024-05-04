import Flex from "../Flex";
import Kakao from "../../../public/kakaoNavi.svg";
import NaverMap from "../../../public/naverMap.svg";
import React from "react";
import TMap from "../../../public/tMap.svg";

const Navigations = () => {
  return (
    <Flex
      direction="row"
      justify="flex-end"
      align="center"
      className="gap-x-8pxr"
    >
      {/* TODO search params */}
      <Kakao className="flex-none" />
      <NaverMap className="flex-none" />
      <TMap className="flex-none" />
    </Flex>
  );
};

export default Navigations;
