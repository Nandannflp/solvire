import { HeroSection } from "@/components/sections/HeroSection";
import { WhySolvireSection } from "@/components/sections/WhySolvireSection";
import { SolarServicesSection } from "@/components/sections/SolarServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SocialInsightsSection } from "@/components/sections/SocialInsightsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative w-full overflow-hidden bg-background">
      <HeroSection />
      <WhySolvireSection />
      <SolarServicesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TrustSection />
      <SocialInsightsSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
