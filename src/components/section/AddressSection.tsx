import Address from "./Address";
import Flex from "../Flex";
import Image from "next/image";
import Kakao from "../../../public/kakaoNavi.svg";
import NaverMap from "../../../public/naverMap.svg";
import Navigations from "./Navigations";
import React from "react";
import Spacing from "../Spacing";
import TMap from "../../../public/tMap.svg";
import Text from "../Text";
import Title from "./Title";
const AddressSection = () => {
  return (
    <section className="w-full px-24pxr">
      <Title>{`SAM\nCHEONG\nGAK\nILWHADANG`}</Title>
      <Spacing size={10} />
      <Address
        title="삼청각 일화당"
        desc={`서울 성북구 대사관로 3 (성북동 330-115)\n02.765.3000`}
      />
      <Spacing size={20} />
      <Address
        title="자가용 이용 시"
        desc="삼청각 내 주차장 이용 가능 (2시간 무료)"
      />
      <Spacing size={20} />
      <Address
        title="셔틀버스 이용 시"
        desc="지하철 4호선 한성대입구역 6번 출구 50m (15분간격)"
      />
      <Spacing size={20} />
      <Text
        display="block"
        className="w-full p-10pxr text-12pxr leading-22pxr bg-[#F4F4F4] text-[#474747]"
      >
        대중교통으로 오시는 경우 셔틀버스 이용이 불가피합니다. 오시는데 다소
        불편하시겠지만 북악산의 좋은 경치와 맑은 공기가 준비되어 있으니,
        너그러운 마음으로 양해 부탁드립니다..♡
      </Text>
      <Spacing size={20} />
      <Image src={"/map.png"} alt="map" width={382} height={245} />

      <Spacing size={20} />
      <Navigations />
    </section>
  );
};

export default AddressSection;
