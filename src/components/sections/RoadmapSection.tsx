"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SyncDot } from "@/components/layout/SyncDot";

export function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotColor = useTransform(scrollYProgress, [0, 0.85, 1], ["#2DBE60", "#2DBE60", "#F5C542"]);
  const pulseColor = useTransform(scrollYProgress, [0, 0.85, 1], ["rgba(45,190,96,0.2)", "rgba(45,190,96,0.2)", "rgba(245,197,66,0.2)"]);

  const steps = [
    { year: "Phase 1", title: "Maintenance & AMC", active: true },
    { year: "Phase 2", title: "Inspection & Diagnostics", active: false },
    { year: "Phase 3", title: "Protection & Insurance", active: false },
    { year: "Phase 4", title: "Solar Ownership OS", active: false },
  ];

  return (
    <Section id="roadmap" theme="navy" className="py-32 md:py-48 bg-transparent md:pl-28 relative">
      <SyncDot />
      <div className="container max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="heading-editorial text-4xl md:text-5xl text-foreground mb-6">
            The road to a complete <br /> <span className="text-solar text-glow-solar">solar ecosystem.</span>
          </h2>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Track Wrapper perfectly aligned to the centers of the first and last cards (approx 52px from top/bottom) */}
          <div className="absolute top-[52px] bottom-[52px] left-6 md:left-1/2 w-0.5 -translate-x-1/2 z-10">
            {/* Background Track */}
            <div className="absolute inset-0 w-full bg-white/60 backdrop-blur-sm/10" />
            
            {/* Scroll-driven Progress Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute top-0 w-full bg-solar origin-top"
            />

            {/* Scroll-driven Dot */}
            <motion.div 
              style={{ top: lineHeight }}
              className="absolute left-1/2 w-4 h-4 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
            >
              <motion.div style={{ backgroundColor: dotColor }} className="w-full h-full rounded-full relative z-10" />
              <motion.div style={{ backgroundColor: pulseColor }} className="absolute size-8 rounded-full badge-pulse pointer-events-none" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex items-center justify-start md:justify-between w-full ${
                  i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Node Waypoint */}
                <div className="absolute left-6 md:left-1/2 size-4 rounded-full -translate-x-1/2 flex items-center justify-center bg-transparent border-2 border-border z-0" />

                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`p-6 rounded-2xl border ${step.active ? 'bg-white/60 backdrop-blur-sm/10 border-border shadow-md ' : 'bg-transparent border-transparent'}`}>
                    <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${step.active ? 'text-solar' : 'text-foreground/40'}`}>
                      {step.year}
                    </span>
                    <h3 className={`text-xl font-semibold ${step.active ? 'text-foreground' : 'text-foreground/40'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
