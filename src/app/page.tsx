import Introduce from "@/components/section/Introduce";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden ">
      <Welcome />
      {/* <Introduce></Introduce> */}
    </main>
  );
}
