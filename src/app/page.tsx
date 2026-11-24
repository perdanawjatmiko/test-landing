import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MetricsBar } from "@/components/MetricsBar";
import { EcosystemSection } from "@/components/EcosystemSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CtaFooter } from "@/components/CtaFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MetricsBar />
        <EcosystemSection />
        <TechStackSection />
      </main>
      <CtaFooter />
    </div>
  );
}
