"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function JoinFutureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

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
        <h2 className="font-display font-bold text-[13vw] leading-[0.8] tracking-tight text-editorial/5 whitespace-nowrap text-center">
          JOIN THE FUTURE
        </h2>
      </motion.div>

      {/* Floating Orange Particles (Minimal) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-solar rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-4xl mx-auto z-10 relative px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Pulsing Logo Indicator */}
          <div className="w-16 h-16 mx-auto bg-surface rounded-2xl flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(45,190,96,0.15)] relative mb-8">
            <span className="font-display font-bold text-xl text-white">S</span>
            <div className="absolute inset-0 rounded-2xl border border-energy/40 animate-[ping_2.5s_ease-in-out_infinite]" />
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-foreground max-w-3xl leading-[1.1] mb-8"
        >
          Be among the first to experience the future of solar infrastructure.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-textSecondary text-xl max-w-2xl mb-12"
        >
          We are currently inviting select partners and homeowners to join our early access program.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="bg-energy text-white hover:bg-energy/90 rounded-full h-14 px-10 text-base font-medium group">
            Join the Waitlist
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
