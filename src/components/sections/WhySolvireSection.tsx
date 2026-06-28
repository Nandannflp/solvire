"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

import { SyncDot } from "@/components/layout/SyncDot";

export function WhySolvireSection() {
  return (
    <Section id="purpose" theme="navy" className="py-32 md:py-48 relative md:pl-28">
      <SyncDot />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-solar/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
        >
          But they <span className="text-solar text-glow-solar">found</span> a better way.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="body-clean text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          By connecting directly with Solvire's verified ecosystem, owners discovered a unified platform for maintenance, protection, and absolute peace of mind.
        </motion.p>
      </div>
    </Section>
  );
}
