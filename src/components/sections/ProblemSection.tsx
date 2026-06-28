"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { useRef } from "react";

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Extreme parallax values: items scale up and fly "towards" the screen/outside as you scroll down
  const cardScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 1.4]);
  const cardY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -200]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const problems = [
    { title: "No Standards", desc: "Finding an authorized, verified solar technician is a fragmented, manual process.", delay: 0.1 },
    { title: "Hidden Costs", desc: "Maintenance visits often come with surprise fees and unverified part replacements.", delay: 0.2 },
    { title: "Lost Warranties", desc: "Most owners lose track of OEM warranties, voiding them when amateur repairs happen.", delay: 0.3 }
  ];

  return (
    <Section id="problem" theme="navy" className="py-32 md:py-48 relative overflow-hidden">
      {/* Subtle Noise Texture */}
      <div className="noise-overlay" />

      <div className="container max-w-6xl mx-auto z-10 relative" ref={containerRef}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-white mb-16 leading-tight"
        >
          Solar ownership doesn't end at installation. <br className="hidden md:block" />
          <span className="text-solar text-glow-solar">The real journey begins afterwards.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-24">
          {problems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
              className="flex flex-col gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-solar/20 flex items-center justify-center text-sm font-bold text-solar">
                0{i + 1}
              </div>
              <h3 className="font-semibold text-xl text-white mt-2">{item.title}</h3>
              <p className="body-clean text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
