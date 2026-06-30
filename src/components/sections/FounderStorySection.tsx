"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function FounderStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Editorial Background Title */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden"
      >
        <h2 className="font-display font-bold text-[12vw] leading-[0.8] tracking-tight text-editorial/5 text-center px-4 max-w-full">
          THE PERSON BEHIND<br/>THE VISION
        </h2>
      </motion.div>

      <div className="container max-w-5xl mx-auto z-10 relative px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden relative">
              {/* Fallback dark bg in case image is missing */}
              <div className="absolute inset-0 bg-white" />
              {/* Replace with actual founder portrait later */}
              <Image 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                alt="Founder Portrait"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
            {/* Small Snapshot Tag */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white  border border-border p-6 rounded-xl shadow-2xl max-w-xs">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-textSecondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-energy" />
                  Founder of Solvire
                </li>
                <li className="flex items-center gap-3 text-sm text-textSecondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-energy" />
                  Founder of Pizza Singh Café
                </li>
                <li className="flex items-center gap-3 text-sm text-textSecondary">
                  <div className="w-1.5 h-1.5 rounded-full bg-energy" />
                  Based in Bihar, India
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Founder Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-textSecondary uppercase tracking-widest text-sm font-medium mb-6">Mission & Origins</span>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-[1.2]">
              Building the future of solar infrastructure.
            </h3>
            
            <div className="space-y-6 text-textSecondary text-lg leading-relaxed mb-12 max-w-2xl">
              <p>
                The transition to renewable energy is the most important infrastructural shift of our generation. But installing solar panels is only step one. 
              </p>
              <p>
                We realized that the real challenge—and the real opportunity—lies in what happens next. Homeowners and businesses were being left in the dark, struggling with fragmented maintenance, unverified technicians, and a lack of clear diagnostics when things went wrong.
              </p>
              <p>
                Solvire was built to fix this. We are creating the unified intelligence layer that connects the entire ecosystem, ensuring every solar investment is protected, monitored, and maintained to its fullest potential.
              </p>
            </div>

            <blockquote className="border-l-2 border-energy pl-6 text-xl md:text-2xl text-foreground font-medium italic">
              "Solar adoption isn't the finish line. Reliable ownership is."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
