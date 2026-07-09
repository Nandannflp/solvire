"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent pt-20"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-white/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop"
          alt="Cinematic Drone Shot of Commercial Solar Array"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="container max-w-5xl mx-auto z-10 relative px-6 md:px-12 flex flex-col items-center text-center">

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl md:text-[70px] lg:text-[90px] leading-[1.0] tracking-tight text-foreground mb-8 drop-shadow-sm"
        >
          <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-energy">India's First Verified</em><br/>
          Solar Network.
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-textSecondary text-lg md:text-xl max-w-2xl leading-relaxed mb-4 font-medium"
        >
          From consultation and installation to maintenance and lifetime support.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-textSecondary/80 text-md md:text-lg max-w-2xl leading-relaxed mb-12"
        >
          For homes, businesses, and industrial solar systems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-primary/20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Book a Free Site Visit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-md hover:bg-white/90 border border-primary/10 text-foreground rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 group shadow-sm hover:shadow-md">
            Get an Energy Estimate
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
