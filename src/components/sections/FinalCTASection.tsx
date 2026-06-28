"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <Section id="cta" theme="navy" className="py-32 md:py-48 bg-transparent text-center">
      <div className="container max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block size-16 rounded-full bg-solar/10 flex items-center justify-center mb-8 mx-auto">
            <div className="size-8 rounded-full bg-solar" />
          </div>
          
          <h2 className="heading-editorial text-5xl md:text-7xl text-white mb-8">
            Start with <span className="text-solar text-glow-solar">Solvire.</span>
          </h2>
          
          <p className="body-clean text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join the ecosystem of trusted solar care. Whether you need an inspection today or want to protect your system for tomorrow.
          </p>
          
          <Button size="lg" className="h-16 px-10 text-lg bg-solar text-white hover:bg-solar/90 rounded-full shadow-xl hover:shadow-2xl transition-all btn-glow">
            Explore Solvire <ArrowRight className="ml-2 size-5" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
