"use client";

import React, { useEffect, useState } from "react";

import AccountSection from "./section/AccountSection";
import AddressSection from "./section/AddressSection";
import BlockPintch from "./BlockPintch";
import CalendarSection from "./section/CalendarSection";
import CoupleSection from "./section/CoupleSection";
import GallerySection from "./section/GallerySection";
import IntroduceSection from "./section/IntroduceSection";
import KakaoSDK from "./KakaoSDK";
import Spacing from "./Spacing";
import Welcome from "./welcome/Welcome";

const WeddingScroll = () => {
  const [visitedWelcome, setVisitedWelcome] = useState(false);
  const [visitedAll, setVisitedAll] = useState(false);

  useEffect(() => {
    if (visitedAll) {
      document.body.style.overflow = "auto";
    } else if (!visitedWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visitedWelcome, visitedAll]);
  return (
    <BlockPintch>
      <KakaoSDK>
        <main
          className="w-full absolute min-h-screen overflow-x-hidden flex flex-col large:max-w-[430px] right-2/4"
          style={{ transform: `translate(50%)` }}
        >
          <section id="scroll-container" className="relative w-full h-full">
            {!visitedWelcome && (
              <section className="absolute top-0 left-0 w-full h-full z-10">
                <Welcome onNext={() => setVisitedWelcome(true)} />
              </section>
            )}
            <IntroduceSection
              visitedWelcome={visitedWelcome}
              enabledTransition
            />
            <Spacing size={50} />
            <CoupleSection enabledTransition />
            <Spacing size={50} />
            <CalendarSection enabledTransition />
            <Spacing size={50} />
            <GallerySection enabledTransition />
            <Spacing size={50} />
            <AddressSection />
            <AccountSection onDone={() => setVisitedAll(true)} />
          </section>
        </main>
      </KakaoSDK>
    </BlockPintch>
  );
};

export default WeddingScroll;
