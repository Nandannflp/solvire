"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Editorial Background Title */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h1 className="font-display font-bold text-[10vw] leading-[0.8] tracking-tight text-editorial/10 whitespace-nowrap text-center">
          THE INTELLIGENCE<br/>LAYER
        </h1>
      </motion.div>

      {/* Foreground Content */}
      <div className="container max-w-5xl mx-auto z-10 relative px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Supporting Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="w-8 h-[1px] bg-energy/50" />
          <span className="text-energy uppercase tracking-widest text-sm font-medium">Introducing Solvire</span>
          <div className="w-8 h-[1px] bg-energy/50" />
        </motion.div>

        {/* Hero Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl md:text-[90px] lg:text-[110px] leading-[0.9] tracking-[-0.02em] text-foreground mb-8"
        >
          The intelligence layer<br/>behind every<br/>solar system.
        </motion.h2>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-textSecondary text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
        >
          A unified platform connecting homeowners, businesses, technicians and insurers into one seamless ecosystem for solar maintenance, diagnostics and protection.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="bg-energy text-white hover:bg-energy/90 rounded-full h-14 px-8 text-base font-medium">
            Join the Waitlist
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-14 px-8 text-base font-medium bg-transparent">
            Watch the Vision
          </Button>
        </motion.div>
      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy/5 rounded-full blur-[120px] pointer-events-none z-0" />
    </section>
  );
}
