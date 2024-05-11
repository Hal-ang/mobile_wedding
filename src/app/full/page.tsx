import BlockPintch from "@/components/BlockPintch";
import KakaoSDK from "@/components/KakaoSDK";
import React from "react";
import Welcome from "@/components/welcome/Welcome";

const FullPage = () => {
  return (
    <main
      className="w-full absolute min-h-screen overflow-x-hidden flex flex-col large:max-w-[430px] right-2/4"
      style={{ transform: `translate(50%)` }}
    >
      <BlockPintch>
        <KakaoSDK>
          <Welcome />
          {/* <IntroduceSection />
        <Spacing size={100} />
        <CoupleSection />
        <Spacing size={100} />
        <CalendarSection />
        <Spacing size={100} />
        <GallerySection />
        <Spacing size={100} />
        <AddressSection />
        <Spacing size={80} />
        <RollingBanner />
        <Spacing size={80} />
        <AccountSection />
        <Spacing size={100} />
        <FooterSection /> */}
        </KakaoSDK>
      </BlockPintch>
    </main>
  );
};

export default FullPage;
