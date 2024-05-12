"use client";

import React, { useEffect, useRef, useState } from "react";

import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import Image from "next/image";
import ScrollArrow from "../../../public/scroll_arrow.svg";
import SlideUp from "../SlideUp";
import Text from "../Text";
import { useInterval } from "@/hooks/useInterval";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["THE", "WEDDING", "OF", "TAEHOON", "AND", "DANHEE"];
const Welcome = ({
  className,
  onNext
}: {
  className?: string;
  onNext: () => void;
}) => {
  const [transitionIds, setTransitionIds] = useState<number[]>([]);
  const [startTransition, setStartTransition] = useState(false);

  useInterval(() => {
    if (!startTransition || transitionIds.length > TITLE.length) {
      return;
    }
    setTransitionIds((prev) => {
      return prev.concat(prev.length);
    });
  }, 100);

  useEffect(() => {
    if (!startTransition) return;

    const timeout = setTimeout(() => {
      setTransitionIds((prev) => prev.concat(prev.length));
    }, 1800);

    const timeout2 = setTimeout(() => {
      setTransitionIds((prev) => prev.concat(prev.length));
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout2);
    };
  }, [startTransition]);

  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (visible) return;

    const timeoutId = setTimeout(() => {
      setHidden(true);
    }, 1200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible]);

  useEffect(() => {
    if (hidden) {
      onNext();
    }
  }, [hidden, onNext]);

  const ref = useRef<HTMLDivElement>(null);

  useIsInView(ref, () => setStartTransition(true));

  if (hidden) return null;

  return (
    <div
      ref={ref}
      onClick={() => setVisible(false)}
      style={{ height: "100svh", transition: "opacity 2s" }}
      className={`relative  bg-white w-full flex flex-col justify-between overflow-hidden ${className} ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        className="w-full absolute bottom-0 left-0"
        alt="wedding"
        src="/welcome/img_wedding_main.png"
        width={860}
        height={1864}
      />
      <Flex className={`mt-44pxr z-10`}>
        {TITLE.map((text, index) => (
          <SlideUp key={index} show={transitionIds.includes(index)}>
            <Text
              key={index}
              display="block"
              className={`pt-10pxr text-50pxr leading-42pxr h-42pxr medium:text-55pxr medium:leading-48pxr medium:h-48pxr regular:text-60pxr regular:leading-54pxr regular:h-54pxr large:text-66pxr large:leading-66pxr large:h-66pxr  ${BonVivantFont.className}`}
            >
              {text}
            </Text>
          </SlideUp>
        ))}
        <SlideUp show={transitionIds.includes(TITLE.length)}>
          <Flex className={`text-15pxr leading-18pxr mt-16pxr`}>
            <Text display="block">2024.06.08, SATURDAY 16:00</Text>
            <Text display="block" className="mt-8pxr">
              SAMCHEONGGAK
            </Text>
          </Flex>
        </SlideUp>
      </Flex>
      <SlideUp
        show={transitionIds.includes(TITLE.length + 1)}
        className="flex-none mb-40pxr cursor-pointer mx-auto z-10"
      >
        <ScrollArrow />
      </SlideUp>
    </div>
  );
};

export default Welcome;
