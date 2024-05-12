"use client";

import React, { useEffect, useRef, useState } from "react";

import CoupleImage from "./CoupleImage";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Title from "./Title";
import { useInterval } from "@/hooks/useInterval";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["THE", "MARRIAGE", "OF"];
const CoupleSection = () => {
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const [startTransition, setStartTransition] = useState(false);

  useInterval(() => {
    if (!startTransition) return;

    if (transitionIds.length < TITLE.length) {
      setTransitionIds((prev) => {
        if (prev.length === TITLE.length) {
          return prev;
        }
        return prev.concat(prev.length);
      });
    }
  }, 200);
  useEffect(() => {
    if (!startTransition) return;

    setTimeout(() => {
      intervalId.current = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === TITLE.length + 2) {
            clearInterval(intervalId.current!);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 500);
    }, 500);
  }, [startTransition]);

  useEffect(() => {
    if (transitionIds.length >= TITLE.length + 2) {
      clearInterval(intervalId.current!);
    }
  }, [transitionIds]);

  const ref = useRef<HTMLDivElement>(null);

  useIsInView(ref, () => setStartTransition(true));

  return (
    <section ref={ref} id="couple-section" className="w-full px-24pxr">
      <Spacing size={50} />
      {TITLE.map((title, index) => (
        <SlideUp key={index} show={transitionIds.includes(index)}>
          <Title display="block">{title}</Title>
        </SlideUp>
      ))}

      <Spacing size={20} />
      <SlideUp show={transitionIds.includes(TITLE.length)}>
        <CoupleImage
          url="/profile/profile_taehoon.jpg"
          person={{ name: "구태훈", desc: "환수, 성순의 아들" }}
        />

        <Spacing size={6} />
      </SlideUp>
      <SlideUp show={transitionIds.includes(TITLE.length + 1)}>
        <CoupleImage
          url="/profile/profile_danhee.jpg"
          person={{ name: "김단희", desc: "형국, 희영의 딸" }}
        />
      </SlideUp>
    </section>
  );
};

export default CoupleSection;
