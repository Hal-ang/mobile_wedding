"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

import CoupleImage from "./CoupleImage";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Title from "./Title";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["THE", "MARRIAGE", "OF"];
const CoupleSection = ({
  enabledTransition
}: {
  enabledTransition: boolean;
}) => {
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);
  const handleTransition = useCallback(() => {
    intervalId.current = setInterval(() => {
      setTransitionIds((prev) => {
        if (prev.length === TITLE.length) {
          clearInterval(intervalId.current!);
          return prev;
        }
        return prev.concat(prev.length);
      });
    }, 200);

    setTimeout(() => {
      intervalId2.current = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === TITLE.length + 2) {
            clearInterval(intervalId2.current!);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 700);
    }, 900);

    setTimeout(() => {
      setTransitionIds((prev) => prev.concat(prev.length));
    }, 3000);
  }, []);

  useEffect(() => {
    if (transitionIds.length === TITLE.length + 1) {
      clearTimeout(intervalId.current!);
      intervalId.current = null;
      clearTimeout(intervalId2.current!);
      intervalId2.current = null;
    }
  }, [transitionIds]);

  const ref = useRef<HTMLDivElement>(null);

  const { isInView } = useIsInView(ref, handleTransition);

  useEffect(() => {
    const handler = () => {
      const $calendar = document.getElementById("calendar-section");
      if ($calendar) {
        $calendar.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (isInView) {
      addEventListener("click", handler);
    } else {
      removeEventListener("click", handler);
    }
    return () => {
      removeEventListener("click", handler);
    };
  }, [isInView]);

  useEffect(() => {
    console.log("couple", transitionIds);
  }, [transitionIds]);

  return (
    <section ref={ref} id="couple-section" className="w-full px-24pxr">
      <Spacing size={50} />
      {TITLE.map((title, index) => (
        <SlideUp
          disabled={!enabledTransition}
          show={transitionIds.includes(index)}
        >
          <Title display="block">{title}</Title>
        </SlideUp>
      ))}

      <Spacing size={20} />
      <SlideUp
        disabled={!enabledTransition}
        show={transitionIds.includes(TITLE.length)}
      >
        <CoupleImage
          url="/profile/profile_taehoon.jpg"
          person={{ name: "구태훈", desc: "환수, 성순의 아들" }}
        />

        <Spacing size={6} />
      </SlideUp>
      <SlideUp
        disabled={!enabledTransition}
        show={transitionIds.includes(TITLE.length + 1)}
      >
        <CoupleImage
          url="/profile/profile_danhee.jpg"
          person={{ name: "김단희", desc: "형국, 희영의 딸" }}
        />
      </SlideUp>
    </section>
  );
};

export default CoupleSection;
