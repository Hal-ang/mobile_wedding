"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import Address from "./Address";
import Image from "next/image";
import Navigations from "./Navigations";
import RollingBanner from "../RollingBanner";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Text from "../Text";
import Title from "./Title";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["SAM", "CHEONG", "GAK", "ILWHADANG"];
const AddressSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const handleTransition = useCallback(() => {
    setTimeout(() => {
      setTransitionIds((prev) => (prev.length === 0 ? [0, 1, 2, 3] : prev));
    }, 0);

    setTimeout(() => {
      intervalId.current = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === TITLE.length + 3) {
            clearInterval(intervalId.current!);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 200);
    }, 1000);

    setTimeout(() => {
      setTransitionIds((prev) => prev.concat(prev.length));
    }, 2000);

    setTimeout(() => {
      setTransitionIds((prev) =>
        prev.concat([prev.length, prev.length + 1, prev.length + 2])
      );
    }, 2200);
  }, []);

  useIsInView(ref, handleTransition);

  useEffect(() => {
    if (transitionIds.length > TITLE.length + 6) {
      clearInterval(intervalId.current!);
      intervalId.current = null;
    }
  }, [transitionIds]);

  return (
    <>
      <section ref={ref} id="address-section" className="w-full px-24pxr">
        {TITLE.map((title, index) => (
          <SlideUp key={index} show={transitionIds.includes(index)}>
            <Title>{title}</Title>
          </SlideUp>
        ))}
        <Spacing size={10} />
        <SlideUp show={transitionIds.includes(TITLE.length)}>
          <Address
            title="삼청각 일화당"
            desc={`서울 성북구 대사관로 3 (성북동 330-115)\n02.765.3000`}
          />
        </SlideUp>
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 1)}>
          <Address
            title="자가용 이용 시"
            desc="삼청각 내 주차장 이용 가능 (2시간 무료)"
          />
        </SlideUp>
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 2)}>
          <Address
            title="셔틀버스 이용 시"
            desc="지하철 4호선 한성대입구역 6번 출구 50m (15분간격)"
          />
        </SlideUp>
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 3)}>
          <Text
            display="block"
            className="w-full p-10pxr text-12pxr leading-22pxr bg-[#F4F4F4] text-[#474747]"
          >
            대중교통으로 오시는 경우 셔틀버스 이용이 불가피합니다. 오시는데 다소
            불편하시겠지만 북악산의 좋은 경치와 맑은 공기가 준비되어 있으니,
            너그러운 마음으로 양해 부탁드립니다..♡
          </Text>
        </SlideUp>
        <Spacing size={20} />
        <SlideUp id="map" show={transitionIds.includes(TITLE.length + 4)}>
          <Image
            quality={100}
            src={"/map.png"}
            alt="map"
            width={382}
            height={245}
            className="w-full"
          />
        </SlideUp>

        <Spacing size={20} />
        <SlideUp id="" show={transitionIds.includes(TITLE.length + 5)}>
          <Navigations />
        </SlideUp>
      </section>

      <SlideUp show={transitionIds.includes(TITLE.length + 6)}>
        <Spacing size={80} />
        <RollingBanner />
      </SlideUp>
    </>
  );
};

export default AddressSection;
