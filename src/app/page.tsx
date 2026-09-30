import Hero from "@/components/Hero";
import HowTo from "@/components/HowTo";
import Jurisdiction from "@/components/Jurisdiction";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center">
      <Hero />
      {/* <HowTo /> */}
      <Jurisdiction />
      <Pricing />
    </main>
  );
}
