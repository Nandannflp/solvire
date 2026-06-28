"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <Section id="hero" theme="navy" className="min-h-[100svh] relative justify-center flex items-center">
      {/* Background Energy Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-solar/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-soft-blue/10 rounded-full blur-[120px] mix-blend-screen opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content Column */}
        <div className="lg:col-span-8 flex flex-col items-start pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            {/* Logo Reveal */}
            <Image
              src="/logo.svg"
              alt="Solvire Logo"
              width={180}
              height={40}
              priority
              className="mb-12 h-10 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8"
          >
            Reliable solar care. <br />
            <span className="text-white/60">Zero guesswork.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="body-clean text-lg md:text-xl text-white/80 max-w-2xl mb-12"
          >
            Solvire is the trusted bridge between solar customers and verified service.
            Maintenance, inspection, protection — everything that happens after installation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-14 px-8 text-base bg-solar text-white hover:bg-solar/90 rounded-full btn-glow">
              Explore Solvire <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full">
              Connect with Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Energy Line Element */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="absolute bottom-24 left-0 w-[40%] origin-left"
      >
        <div className="energy-line w-full" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-white/80 transition-colors"
        onClick={() => {
          const el = document.getElementById("problem");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </Section>
  );
}
