import { Functions } from "@/components/functions/Functions";
import { Services } from "@/components/services/Services";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TechnologyStrip } from "@/components/technologies/TechnologyStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
  <TechnologyStrip />
  <Services />
  <Functions />
      </main>
    </>
  );
}