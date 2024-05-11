"use client";

import React, { ReactNode, useCallback } from "react";

import Flex from "../Flex";
import Kakao from "../../../public/kakaoNavi.svg";
import Link from "next/link";
import NaverMap from "../../../public/naverMap.svg";
import TMap from "../../../public/tMap.svg";

const Navigations = () => {
  const handleKakaoNavi = useCallback(() => {
    window.Kakao.Navi.start({
      name: "삼청각 일화당",
      x: 126.98412996463918,
      y: 37.59687320253386,
      coordType: "wgs84"
    });
  }, []);

  return (
    <Flex
      id="navigations"
      direction="row"
      justify="flex-end"
      align="center"
      className="gap-x-8pxr"
    >
      <Kakao onClick={handleKakaoNavi} className="flex-none" />

      <Link href="https://naver.me/54xSGWUS">
        <NaverMap className="flex-none" />
      </Link>
      <Link href="tmap://route?goalname=분당서울대병원&goalx=127.122930&goaly=37.351987">
        <TMap className="flex-none" />
      </Link>
    </Flex>
  );
};

export default Navigations;
