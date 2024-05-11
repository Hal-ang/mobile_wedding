"use client";

import React, { useCallback, useRef, useState } from "react";

import Account from "./Account";
import Arcodion from "../Arcodion";
import FooterSection from "./FooterSection";
import SlideUp from "../SlideUp";
import Spacing from "../Spacing";
import Text from "../Text";
import Title from "./Title";
import useIsInView from "@/hooks/useIsInView";

const TITLE = ["GIFT", "FOR", "WEDDING", "CEREMONY"];

const AccountSection = () => {
  const [transitionIds, setTransitionIds] = useState<number[]>([]);

  const ref = useRef<HTMLDivElement>(null);

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
  }, []);
  useIsInView(ref, handleTransition);

  return (
    <>
      <section
        ref={ref}
        id="account-section"
        className="w-full px-24pxr"
        onClick={() => {
          if (transitionIds.length === 0) return;

          if (transitionIds.length === TITLE.length) {
            const intervalId = setInterval(() => {
              setTransitionIds((prev) => {
                if (prev.length === TITLE.length + 2) {
                  clearInterval(intervalId);
                  return prev;
                }
                return prev.concat(prev.length);
              });
            }, 100);

            const timeoutId = setTimeout(() => {
              setTransitionIds((prev) => prev.concat(TITLE.length + 2));
              clearTimeout(timeoutId);
            }, 1000);
          }
        }}
      >
        <Spacing size={80} />
        {TITLE.map((title, i) => (
          <SlideUp show={transitionIds.includes(i)}>
            <Title>{title}</Title>
          </SlideUp>
        ))}
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length)}>
          <Arcodion>
            <Arcodion.Header className="cursor-pointer w-full py-21.5pxr border-t border-black">
              <Text>신랑측 계좌번호</Text>
              <Arcodion.Arrow />
            </Arcodion.Header>
            <Arcodion.Content>
              <Account
                name="구태훈"
                bankInfo={{
                  bankName: "하나은행",
                  accountNumber: "29891050568007"
                }}
              />
              <Spacing size={1} />
            </Arcodion.Content>
          </Arcodion>
        </SlideUp>
        <Spacing size={20} />
        <SlideUp show={transitionIds.includes(TITLE.length + 1)}>
          <Arcodion>
            <Arcodion.Header className="cursor-pointer w-full py-21.5pxr border-t border-black">
              <Text>신부측 계좌번호</Text>
              <Arcodion.Arrow />
            </Arcodion.Header>
            <Arcodion.Content>
              <Account
                name="김단희"
                bankInfo={{
                  bankName: "우리은행",
                  accountNumber: "1002560559559"
                }}
              />
              <Spacing size={1} />
            </Arcodion.Content>
          </Arcodion>
        </SlideUp>
      </section>
      <Spacing size={100} />
      <SlideUp show={transitionIds.includes(TITLE.length + 2)}>
        <FooterSection />
      </SlideUp>
    </>
  );
};

export default AccountSection;
