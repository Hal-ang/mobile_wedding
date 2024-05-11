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

  const handleTransition = useCallback(() => {
    const intervalId = setInterval(() => {
      setTransitionIds((prev) => {
        if (prev.length === TITLE.length) {
          clearInterval(intervalId);
          return prev;
        }
        return prev.concat(prev.length);
      });
    }, 200);

    setTimeout(() => {
      const intervalId2 = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === TITLE.length + 2) {
            clearInterval(intervalId2);
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

  const ref = useRef<HTMLDivElement>(null);

  useIsInView(ref, handleTransition);

  return (
    <section
      ref={ref}
      id="couple-section"
      onClick={() => {
        if (!transitionIds) return;
        // TODO : date로 이동

        const $calendar = document.getElementById("calendar-section");
        if ($calendar) {
          $calendar.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="w-full px-24pxr"
    >
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
