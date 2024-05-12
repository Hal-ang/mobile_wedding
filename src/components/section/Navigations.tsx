"use client";

import React, { MouseEventHandler, ReactNode, useCallback } from "react";

import Flex from "../Flex";
import Kakao from "../../../public/kakaoNavi.svg";
import Link from "next/link";
import NaverMap from "../../../public/naverMap.svg";
import TMap from "../../../public/tMap.svg";

const Navigations = () => {
  const handleKakaoNavi: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
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
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Kakao onClick={handleKakaoNavi} className="flex-none" />

      <Link href="https://naver.me/54xSGWUS">
        <NaverMap className="flex-none" />
      </Link>
      <Link href="https://tmap.life/45059ca0">
        <TMap className="flex-none" />
      </Link>
    </Flex>
  );
};

export default Navigations;
