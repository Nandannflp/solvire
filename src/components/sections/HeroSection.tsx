"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

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
      {/* Background Solar Patterns */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        {/* Soft radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy/10 rounded-full blur-[150px] opacity-70" />
        
        {/* Faint solar grid lines / blueprints */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2DBE6015_1px,transparent_1px),linear-gradient(to_bottom,#2DBE6015_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)]" />

        {/* Minimal technical overlays / Energy lines */}
        <div className="absolute top-1/3 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-energy to-transparent opacity-50" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-[1px] bg-gradient-to-r from-transparent via-solar to-transparent opacity-50" />
        <div className="absolute top-1/4 right-1/3 w-[1px] h-32 bg-gradient-to-b from-transparent via-energy to-transparent opacity-30" />
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
          <div className="w-8 h-[1px] bg-solar/50" />
          <span className="text-solar uppercase tracking-widest text-sm font-medium">Solvire</span>
          <div className="w-8 h-[1px] bg-solar/50" />
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl md:text-[80px] lg:text-[100px] leading-[1.0] tracking-tight text-foreground mb-8"
        >
          Complete Solar Solutions.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy to-solar">One Trusted Partner.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-textSecondary text-lg md:text-xl max-w-2xl leading-relaxed mb-4"
        >
          From consultation and installation to maintenance and lifetime support.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-textSecondary/80 text-md md:text-lg max-w-2xl leading-relaxed mb-12"
        >
          For homes, businesses, and industrial solar systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-energy to-[#24994d] hover:from-[#24994d] hover:to-energy text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(45,190,96,0.3)] hover:shadow-[0_0_30px_rgba(45,190,96,0.5)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Book Free Site Visit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface hover:bg-surface/80 border border-white/10 hover:border-solar/30 text-white rounded-xl font-medium transition-all duration-300 group">
            Talk to an Expert
            <PhoneCall className="w-5 h-5 text-solar group-hover:scale-110 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
