"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { useRef } from "react";
import { AlertTriangle, DollarSign, FileWarning } from "lucide-react";

import { SyncDot } from "@/components/layout/SyncDot";

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1, 1, 1.4]);
  const cardY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -200]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const problems = [
    { title: "No Standards", desc: "Finding an authorized, verified solar technician is a fragmented, manual process.", delay: 0.1, icon: <AlertTriangle className="size-6" /> },
    { title: "Hidden Costs", desc: "Maintenance visits often come with surprise fees and unverified part replacements.", delay: 0.2, icon: <DollarSign className="size-6" /> },
    { title: "Lost Warranties", desc: "Most owners lose track of OEM warranties, voiding them when amateur repairs happen.", delay: 0.3, icon: <FileWarning className="size-6" /> }
  ];

  return (
    <Section id="problem" theme="navy" className="py-32 md:py-48 relative overflow-hidden md:pl-28">
      <SyncDot />
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
          Thousands of owners <span className="text-white/40">felt</span><br className="hidden md:block" />
          <span className="text-solar text-glow-solar">the exact same way.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              style={{ scale: cardScale, y: cardY, opacity: cardOpacity }}
              className="sleek-card p-8 rounded-xl flex flex-col items-start relative group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-destructive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-white/60 mb-6 group-hover:text-destructive transition-colors duration-300">
                {problem.icon}
              </div>
              <h3 className="font-medium text-white mb-3">{problem.title}</h3>
              <p className="body-clean text-white/50 text-sm">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
