"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import Image from "next/image";
import ScrollArrow from "../../../public/scroll_arrow.svg";
import SlideUp from "../SlideUp";
import Text from "../Text";
import { clear } from "console";

const TITLE = ["THE", "WEDDING", "OF", "TAEHOON", "AND", "DANHEE"];
const Welcome = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
  }, []);

  useEffect(() => {
    const $body = document.getElementById("container");
    if (!$body) return;

    if (isInView) {
      scrollTo({ top: 0, behavior: "smooth" });
    } else {
      $body.style.overflow = "auto";
    }
  }, [isInView]);

  const handleScroll = useCallback(() => {
    const $introduce = document.getElementById("introduce");
    if (!$introduce) return;
    scrollTo({ top: $introduce.offsetTop, behavior: "smooth" });
  }, []);

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
    }, 2000);

    setTimeout(() => {
      setVisibleButton(true);
    }, 2500);
  }, []);

  const [visibleSubTitle, setVisibleSubTitle] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);

  useEffect(() => {
    if (!clicked) return;

    startTitleTransition();
  }, [clicked]);

  return (
    <div
      ref={ref}
      style={{ height: "100svh" }}
      onClick={() => setClicked(true)}
      className="relative  bg-white w-full flex flex-col justify-between overflow-hidden"
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
            <ScrollArrow onClick={handleScroll} />
          </SlideUp>
        </>
      )}
    </div>
  );
};

export default Welcome;
