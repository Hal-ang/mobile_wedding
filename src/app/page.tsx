import AccountSection from "@/components/section/AccountSection";
import AddressSection from "@/components/section/AddressSection";
import BlockPintch from "@/components/BlockPintch";
import CalendarSection from "@/components/section/CalendarSection";
import CoupleSection from "@/components/section/CoupleSection";
import FooterSection from "@/components/section/FooterSection";
import GallerySection from "@/components/section/GallerySection";
import IntroduceSection from "@/components/section/IntroduceSection";
import KakaoSDK from "@/components/KakaoSDK";
import RollingBanner from "@/components/RollingBanner";
import Spacing from "@/components/Spacing";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <main
      className="w-full absolute min-h-screen overflow-x-hidden flex flex-col large:max-w-[430px] right-2/4"
      style={{ transform: `translate(50%)` }}
    >
      <BlockPintch>
        <KakaoSDK>
          <Welcome />
          <IntroduceSection />
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
          <FooterSection />
        </KakaoSDK>
      </BlockPintch>
    </main>
  );
}
