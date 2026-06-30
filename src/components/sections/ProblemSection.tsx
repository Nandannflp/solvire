"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, XCircle } from "lucide-react";

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  const problemCards = [
    {
      icon: <XCircle className="w-6 h-6 text-solar" />,
      title: "Fragmented Maintenance",
      desc: "Owners juggle multiple contractors, losing track of service history and warranties."
    },
    {
      icon: <Clock className="w-6 h-6 text-solar" />,
      title: "Reactive, Not Proactive",
      desc: "Issues are only discovered after significant energy and revenue loss."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-solar" />,
      title: "Zero Transparency",
      desc: "No clear visibility into technician performance or asset health."
    }
  ];

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
        <h2 className="font-display font-bold text-[15vw] leading-[0.8] tracking-tight text-editorial/5 whitespace-nowrap text-center">
          THE PROBLEM
        </h2>
      </motion.div>

      {/* Foreground Content */}
      <div className="container max-w-5xl mx-auto z-10 relative px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="text-textSecondary uppercase tracking-widest text-sm font-medium">The Current Reality</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground max-w-3xl leading-[1.1]"
          >
            Solar ownership becomes frustrating after installation.
          </motion.h3>
        </div>

        {/* Grayscale UI Cards with Orange Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
              className="bg-white border border-border p-8 rounded-2xl flex flex-col items-start  hover:bg-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{card.title}</h4>
              <p className="text-textSecondary leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
