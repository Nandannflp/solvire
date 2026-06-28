"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function ProtectionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const widgetScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.8, 1, 1, 1.5]);
  const widgetY = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [150, 0, 0, -300]);
  const widgetOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <Section id="protection" theme="navy" className="py-32 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto z-10 relative" ref={containerRef}>
        <div className="extreme-glass rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-solar/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar/10 border border-solar/20 shadow-sm text-sm font-semibold mb-6 text-solar glow-solar">
                <ShieldCheck className="size-4" />
                Solvire Protection
              </div>
              
              <h2 className="heading-editorial text-4xl md:text-5xl text-white mb-6 leading-tight">
                Protect your solar asset <br /> <span className="text-solar text-glow-solar">beyond maintenance.</span>
              </h2>
              
              <p className="body-clean text-lg text-white/70 mb-8">
                Your solar system is a long-term asset. We provide comprehensive coverage policies against natural disasters, accidental damage, and theft, integrated directly into your Solvire dashboard.
              </p>

              <ul className="space-y-4 mb-12">
                {[
                  "Coverage up to ₹10 Lakhs against physical damage.",
                  "Solar Protection Score based on system health.",
                  "Policy vault for all your warranty documents."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                    <div className="size-1.5 rounded-full bg-solar shadow-[0_0_10px_rgba(45,190,96,0.8)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="bg-solar text-white hover:bg-solar/90 rounded-full h-12 px-8 shadow-lg hover:shadow-xl transition-all btn-glow">
                Explore Protection Plans <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>

            <motion.div
              style={{ scale: widgetScale, y: widgetY, opacity: widgetOpacity }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-sm aspect-[4/5] extreme-glass rounded-2xl shadow-2xl p-6 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-solar shadow-[0_0_15px_rgba(45,190,96,0.8)]" />
                <h4 className="font-semibold text-lg mt-4 mb-1 text-white">Solar Protection Score</h4>
                <p className="text-xs text-white/50 mb-8">System health and coverage status</p>
                
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="size-40 rounded-full border-[8px] border-white/5 border-t-solar flex items-center justify-center mb-4 relative glow-solar">
                    <div className="text-4xl font-bold text-white text-glow-white">98<span className="text-lg text-white/50">%</span></div>
                  </div>
                  <div className="text-center font-medium text-solar flex items-center gap-2 text-glow-solar">
                    <ShieldCheck className="size-4" /> Fully Protected
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
