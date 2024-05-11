"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import Image from "next/image";
import ScrollArrow from "../../../public/scroll_arrow.svg";
import SlideUp from "../SlideUp";
import Text from "../Text";

const TITLE = ["THE", "WEDDING", "OF", "TAEHOON", "AND", "DANHEE"];
const Welcome = ({ className }: { className?: string }) => {
  const [visibleTitle, setVisibleTitle] = useState<number[]>([]);

  const [clicked, setClicked] = useState(false);

  const titleIntervalId = useRef<number>(null);
  const startTitleTransition = useCallback(() => {
    //@ts-ignore
    titleIntervalId.current = setInterval(() => {
      setVisibleTitle((prev) => {
        if (prev.length === TITLE.length && titleIntervalId.current) {
          clearInterval(titleIntervalId.current);
          return prev;
        }
        return prev.concat(prev.length);
      });
    }, 100);

    setTimeout(() => {
      setVisibleSubTitle(true);
    }, 1800);

    setTimeout(() => {
      setVisibleButton(true);
    }, 3000);
  }, []);

  const [visibleSubTitle, setVisibleSubTitle] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    if (!clicked) return;

    startTitleTransition();
  }, [clicked]);

  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (visible) return;

    const timeoutId = setTimeout(() => {
      setHidden(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [visible]);

  if (hidden) return null;

  return (
    <div
      style={{ height: "100svh", transition: "opacity 2s" }}
      onClick={() => setClicked(true)}
      className={`relative  bg-white w-full flex flex-col justify-between overflow-hidden ${className} ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image
        className="visible regular:invisible absolute bottom-0 left-0"
        width={390}
        height={851}
        alt="wedding"
        src="/welcome/welcome_wedding.png"
      />

      <Image
        className="invisible regular:visible  w-full absolute bottom-0 left-0"
        alt="wedding"
        src="/welcome/welcome_wedding_large.png"
        width={430}
        height={932}
        priority
      />
      {clicked && (
        <>
          <Flex className={`mt-44pxr z-10 ${""}`}>
            {TITLE.map((text, index) => (
              <SlideUp
                key={index}
                show={visibleTitle.includes(index) ? true : false}
              >
                <Text
                  key={index}
                  display="block"
                  className={`text-50pxr leading-42pxr medium:text-55pxr medium:leading-48pxr regular:text-60pxr regular:leading-54pxr large:text-66pxr large:leading-66pxr   ${BonVivantFont.className}`}
                >
                  {text}
                </Text>
              </SlideUp>
            ))}
            <SlideUp show={visibleSubTitle}>
              <Flex className={`text-15pxr leading-18pxr mt-16pxr`}>
                <Text display="block">2024.06.08, SATURDAY 16:00</Text>
                <Text display="block" className="mt-8pxr">
                  SAMCHEONGGAK
                </Text>
              </Flex>
            </SlideUp>
          </Flex>
          <SlideUp
            show={visibleButton}
            className="flex-none mb-40pxr cursor-pointer mx-auto z-10"
          >
            <ScrollArrow onClick={() => setVisible(false)} />
          </SlideUp>
        </>
      )}
    </div>
  );
};

export default Welcome;
