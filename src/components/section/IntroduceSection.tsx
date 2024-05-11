"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Text, { TextProps } from "../Text";

import { BonVivantFont } from "@/style/fonts";
import Flex from "../Flex";
import Glare from "../../../public/glare/glare.svg";
import Image from "next/image";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import useIsInView from "@/hooks/useIsInView";

const Title = ({ className, ...props }: TextProps) => {
  return (
    <Text
      className={`h-48pxr medium:h-61pxr large:h-67pxr pt-8pxr ${className}`}
      {...props}
    />
  );
};

const IntroduceSection = ({
  visitedWelcome,
  enabledTransition
}: {
  visitedWelcome: boolean;
  enabledTransition: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);
  const intervalId3 = useRef<NodeJS.Timeout | null>(null);

  const handleTransition = useCallback(() => {
    intervalId.current = setInterval(() => {
      setTransitionIds((prev) => {
        if (prev.length === 6) {
          clearInterval(intervalId.current!);
          return prev;
        }
        return prev.concat(prev.length);
      });
    }, 200);

    const timeoutID = setTimeout(() => {
      intervalId2.current = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === 8) {
            clearInterval(intervalId.current!);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 400);
    }, 1800);

    const timeoutID2 = setTimeout(() => {
      intervalId3.current = setInterval(() => {
        setTransitionIds((prev) => {
          if (prev.length === 11) {
            clearInterval(intervalId3.current!);
            return prev;
          }
          return prev.concat(prev.length);
        });
      }, 900);
    }, 3500);
  }, []);

  useEffect(() => {
    if (transitionIds.length === 12) {
      clearInterval(intervalId.current!);
      clearInterval(intervalId2.current!);
      clearInterval(intervalId3.current!);
    }
  }, [transitionIds]);

  useIsInView(ref, handleTransition, !visitedWelcome);

  return (
    <section
      ref={ref}
      id="introduce"
      style={{ height: "100svh" }}
      className="w-full relative"
      onClick={(e) => {
        e.stopPropagation();
        if (transitionIds.length !== 0) {
          const $couple = document.getElementById("couple-section");
          if ($couple) {
            $couple.scrollIntoView({ behavior: "smooth" });
          }
        }
      }}
    >
      <Image
        src={"/gradient.png"}
        layout="fill"
        objectFit="cover"
        alt="gradient"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      <div
        className={` ${BonVivantFont.className}  text-66pxr leading-58pxr medium:text-81pxr medium:leading-71pxr large:text-88pxr large:leading-77pxr w-full gap-`}
      >
        <SlideUp
          disabled={!enabledTransition}
          show={transitionIds.includes(0)}
          style={{ transform: "translate(-0.75rem)" }}
        >
          <Title display="block">NEVER</Title>
        </SlideUp>
        <Spacing size={8} />
        <Flex direction="row" align="center" justify="end">
          <SlideUp
            disabled={!enabledTransition}
            show={transitionIds.includes(6)}
            className="flex-none  w-44pxr h-44pxr medium:w-48pxr medium:h-48pxr large:w-52pxr large:h-52pxr"
          >
            <Glare />
          </SlideUp>
          <SlideUp
            disabled={!enabledTransition}
            show={transitionIds.includes(1)}
            style={{ transform: "translate(0.75rem)" }}
          >
            <Title display="block" className="text-right">
              WITH
            </Title>
          </SlideUp>
        </Flex>
        <Spacing size={8} />
        <SlideUp
          disabled={!enabledTransition}
          show={transitionIds.includes(2)}
          style={{ transform: "translate(-0.75rem)" }}
        >
          <Title display="block">SADNESS</Title>
        </SlideUp>
        <Spacing size={8} />
        <SlideUp
          disabled={!enabledTransition}
          show={transitionIds.includes(3)}
          className="w-full"
          style={{ transform: "translate(0.75rem)" }}
        >
          <Title display="block" className="text-right">
            ALWAYS
          </Title>
        </SlideUp>
        <Spacing size={8} />
        <Flex direction="row" align="center" justify="start">
          <SlideUp
            disabled={!enabledTransition}
            show={transitionIds.includes(4)}
          >
            <Title display="block" style={{ transform: "translate(-0.75rem)" }}>
              WITH
            </Title>
          </SlideUp>
          <SlideUp
            disabled={!enabledTransition}
            show={transitionIds.includes(7)}
            className="flex-none  w-44pxr h-44pxr medium:w-48pxr medium:h-48pxr large:w-52pxr large:h-52pxr"
          >
            <Glare />
          </SlideUp>
        </Flex>
        <Spacing size={8} />
        <SlideUp disabled={!enabledTransition} show={transitionIds.includes(5)}>
          <Flex direction="row" align="start" justify="end">
            <Title style={{ transform: "translate(0.55rem)" }}>GLADNESS</Title>
          </Flex>
        </SlideUp>
      </div>
      <Spacing size={18} />
      <Flex align="start" className="gap-20pxr px-24pxr mt-10pxr">
        {[
          `좋아하는 노래의 가사처럼\n슬픔은 없이, 항상 기쁜 마음으로\n살아가면 좋겠지만`,
          `우리의 가장 큰 바람은\n슬픔은 슬픔대로, 기쁨은 기쁨대로\n함께 흘려보내며\n오래오래 함께하는 것입니다.`,
          `오셔서 저희 함께할 날들을 축복해 주시면\n감사하겠습니다.`
        ].map((text, i) => (
          <SlideUp
            key={i}
            disabled={!enabledTransition}
            show={transitionIds.includes(8 + i)}
          >
            <Text
              key={text}
              display="block"
              className="whitespace-pre-line text-16pxr leading-26pxr"
            >
              {text}
            </Text>
          </SlideUp>
        ))}
      </Flex>
    </section>
  );
};

export default IntroduceSection;
