"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

import { SyncDot } from "@/components/layout/SyncDot";

export function HeroSection() {
  return (
    <Section id="hero" theme="navy" className="min-h-[100svh] relative justify-center flex items-center md:pl-28">
      <SyncDot />
      {/* Futuristic Precision Grid */}
      <div className="absolute inset-0 futuristic-grid pointer-events-none opacity-50" />
      
      {/* Background Energy Glows (Minimalist for sleek dark) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-solar/10 rounded-full blur-[150px] mix-blend-screen opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/5 rounded-full blur-[150px] mix-blend-screen opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content Column */}
        <div className="lg:col-span-10 flex flex-col items-start pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            {/* Logo Reveal in White Pill for Contrast */}
            <div className="bg-white/95 px-6 py-4 rounded-2xl inline-block shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/20">
              <Image
                src="/solvire-long-logo.png"
                alt="Solvire Logo"
                width={240}
                height={60}
                priority
                className="h-10 w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-8"
          >
            When solar breaks, <br />
            <span className="text-white/40">the real problem begins.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="body-clean text-lg md:text-xl text-white/70 max-w-2xl mb-12"
          >
            We know exactly how you feel. You invested in solar for peace of mind, but finding a trusted technician when things go wrong feels like a fragmented, frustrating mess.
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
