import CalendarSection from "@/components/section/CalendarSection";
import Introduce from "@/components/section/Introduce";
import Spacing from "@/components/Spacing";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden ">
      {/* <Welcome /> */}
      <Introduce />
      <Spacing size={100} />
      <CalendarSection />
    </main>
  );
}
