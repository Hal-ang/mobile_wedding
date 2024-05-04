import AddressSection from "@/components/section/AddressSection";
import CalendarSection from "@/components/section/CalendarSection";
import CoupleSection from "@/components/section/CoupleSection";
import IntroduceSection from "@/components/section/IntroduceSection";
import RollingBanner from "@/components/RollingBanner";
import Spacing from "@/components/Spacing";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden ">
      {/* <Welcome /> */}
      <IntroduceSection />
      <Spacing size={100} />
      <CoupleSection />
      <Spacing size={100} />
      <CalendarSection />
      <Spacing size={100} />
      <AddressSection />
      <RollingBanner />
    </main>
  );
}
