"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link, Zap, ShieldCheck } from "lucide-react";

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Editorial Background Title */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="font-display font-bold text-[14vw] leading-[0.8] tracking-tight text-editorial/5 whitespace-nowrap text-center">
          OUR SOLUTION
        </h2>
      </motion.div>

      <div className="container max-w-5xl mx-auto z-10 relative px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="text-energy uppercase tracking-widest text-sm font-medium">The Solvire Ecosystem</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground max-w-3xl leading-[1.1]"
          >
            A unified network connecting the entire solar lifecycle.
          </motion.h3>
        </div>

        {/* Abstract Ecosystem Visual */}
        <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] sm:aspect-video flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(45,190,96,0.1)]"
          >
            <span className="font-display font-bold text-2xl tracking-widest text-white">SOLVIRE</span>
            {/* Pulsing glow */}
            <div className="absolute inset-0 rounded-full border border-energy/30 animate-[ping_3s_ease-in-out_infinite]" />
          </motion.div>

          {/* Connected Nodes */}
          {[
            { icon: <Zap className="w-6 h-6 text-energy" />, label: "Technicians", pos: "top-0 left-1/4 -translate-x-1/2 -translate-y-1/2", delay: 0.2 },
            { icon: <ShieldCheck className="w-6 h-6 text-energy" />, label: "Insurers", pos: "top-0 right-1/4 translate-x-1/2 -translate-y-1/2", delay: 0.3 },
            { icon: <Link className="w-6 h-6 text-energy" />, label: "Owners", pos: "bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2", delay: 0.4 },
            { icon: <Zap className="w-6 h-6 text-energy" />, label: "Installers", pos: "bottom-0 right-1/4 translate-x-1/2 translate-y-1/2", delay: 0.5 },
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: node.delay, type: "spring" }}
              className={`absolute ${node.pos} z-10 flex flex-col items-center gap-3`}
            >
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-lg">
                {node.icon}
              </div>
              <span className="text-textSecondary text-sm font-medium">{node.label}</span>
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: "drop-shadow(0 0 8px rgba(45,190,96,0.3))" }}>
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 25% 0 L 50% 50% L 75% 0 M 25% 100% L 50% 50% L 75% 100%"
              fill="none" 
              stroke="#2DBE60" 
              strokeWidth="2" 
              className="vector-non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
