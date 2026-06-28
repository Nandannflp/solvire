import { Section } from "@/components/layout/Section";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhySolvireSection } from "@/components/sections/WhySolvireSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

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
      
      {/* 05. HOW SOLVIRE WORKS (Skipped in User's prompt? Wait, User asked for: Hero, Problem Discovery, Brand Purpose, Trust Layer, Service Experience, Protection Experience, Technology Experience, Roadmap, Founder Story, Final CTA, Footer. I will follow that order) */}

      {/* 06. TRUST LAYER */}
      <Section id="trust-layer" theme="navy">
        <h2 className="heading-editorial text-3xl md:text-5xl">Trust Layer</h2>
      </Section>

      {/* 07. PROTECTION EXPERIENCE */}
      <Section id="protection">
        <h2 className="heading-editorial text-3xl md:text-5xl">Protection Experience</h2>
      </Section>

      {/* 08. TECHNOLOGY EXPERIENCE */}
      <Section id="technology" theme="navy">
        <h2 className="heading-editorial text-3xl md:text-5xl">Technology Experience</h2>
      </Section>

      {/* 09. ROADMAP */}
      <Section id="roadmap">
        <h2 className="heading-editorial text-3xl md:text-5xl">Roadmap</h2>
      </Section>

      {/* 10. FOUNDER STORY */}
      <Section id="founder" theme="navy">
        <h2 className="heading-editorial text-3xl md:text-5xl">Founder Story</h2>
      </Section>

      {/* 11. FINAL CTA */}
      <Section id="cta">
        <h2 className="heading-editorial text-3xl md:text-5xl">Final CTA</h2>
      </Section>

      {/* 12. FOOTER */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          Footer
        </div>
      </footer>
    </main>
  );
}