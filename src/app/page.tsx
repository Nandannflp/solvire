import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { SolarServicesSection } from "@/components/sections/SolarServicesSection";
import { JoinFutureSection } from "@/components/sections/JoinFutureSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative w-full overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PlatformSection />
      <SolarServicesSection />
      <JoinFutureSection />
      <Footer />
    </main>
  );
}