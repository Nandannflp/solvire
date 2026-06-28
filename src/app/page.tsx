import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhySolvireSection } from "@/components/sections/WhySolvireSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProtectionSection } from "@/components/sections/ProtectionSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FounderStorySection } from "@/components/sections/FounderStorySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 01. HERO */}
      <HeroSection />

      {/* 02. PROBLEM DISCOVERY */}
      <ProblemSection />

      {/* 03. BRAND PURPOSE (WHY SOLVIRE EXISTS) */}
      <WhySolvireSection />

      {/* 04. SERVICE EXPERIENCE */}
      <ServicesSection />

      {/* 05. PROTECTION EXPERIENCE */}
      <ProtectionSection />

      {/* 07. TECHNOLOGY EXPERIENCE */}
      <TechnologySection />

      {/* 08. ROADMAP */}
      <RoadmapSection />

      {/* 09. FOUNDER STORY */}
      <FounderStorySection />

      {/* 10. FINAL CTA */}
      <FinalCTASection />

      {/* 11. FOOTER */}
      <Footer />
    </main>
  );
}