"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export function WhySolvireSection() {
  return (
    <Section id="purpose" theme="navy" className="py-32 md:py-48 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-solar/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-solar/20 bg-solar/10 text-solar text-sm font-semibold mb-8"
        >
          <span className="size-2 rounded-full bg-solar badge-pulse" />
          The Solution
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8"
        >
          Solvire was created to simplify everything that happens after installation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="body-clean text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          We aren't just another service company. We are a unified, trusted ecosystem 
          where customers discover, compare, and book solar care with complete confidence.
        </motion.p>
      </div>
    </Section>
  );
}
