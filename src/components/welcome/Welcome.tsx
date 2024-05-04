"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import Image from "next/image";
import ScrollArrow from "../../../public/scroll_arrow.svg";
import Text from "../Text";
import useResize from "@/hooks/useResize";

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
    const $body = document.querySelector("body");
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



  const { width } = useResize();

  return (
    <div
      ref={ref}
      style={{ height: "100svh" }}
      className="relative  bg-white w-full flex flex-col justify-between overflow-hidden"
    >
      {width < 390 ? (
        <Image
          className="w-full absolute bottom-0 left-0"
          alt="wedding"
          src="/welcome_wedding.png"
          width={390}
          height={851}
        />
      ) : (
        <Image
          className="w-full absolute bottom-0 left-0"
          alt="wedding"
          src="/welcome_wedding_large.png"
          width={430}
          height={932}
        />
      )}

      <Flex className={`mt-44pxr z-10`}>
        {["THE", "WEDDING", "OF", "TAEHOON", "AND", "DANHEE"].map(
          (text, index) => (
            <Text
              key={index}
              display="block"
              className={`text-50pxr leading-42pxr medium:text-55pxr medium:leading-48pxr regular:text-60pxr regular:leading-54pxr large:text-66pxr large:leading-66pxr   ${BonVivantFont.className}`}
            >
              {text}
            </Text>
          )
        )}
        <Flex className={`text-15pxr leading-18pxr mt-16pxr`}>
          <Text display="block">2024.06.08, SATURDAY 16:00</Text>
          <Text display="block" className="mt-8pxr">
            SAMCHEONGGAK
          </Text>
        </Flex>
      </Flex>
      <ScrollArrow
        onClick={handleScroll}
        className="flex-none mb-40pxr cursor-pointer mx-auto z-10"
      />
    </div>
  );
};

export default Welcome;
