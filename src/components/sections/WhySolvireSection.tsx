"use client";

import { motion, Variants } from "framer-motion";
import logo from "../../../public/logo.png";
import { ShieldCheck, Activity, Wrench, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "End-to-End Support",
    description: "From initial consultation to final installation, we manage the entire solar lifecycle so you don't have to.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Maintenance",
    description: "Certified professionals ensuring your panels operate at peak efficiency year after year.",
    icon: Wrench,
  },
  {
    title: "Intelligent Monitoring",
    description: "Advanced diagnostics that catch performance issues before they impact your energy savings.",
    icon: Activity,
  },
  {
    title: "Fast Service Response",
    description: "Rapid deployment of maintenance teams when you need them most, minimizing downtime.",
    icon: Clock,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function WhySolvireSection() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-foreground/5">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-editorial/5 text-center whitespace-nowrap select-none">
          WHY CHOOSE US
        </h2>
      </div>

      {/* Logo Watermark Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none mix-blend-overlay">
        <Image 
          src={logo} 
          alt="Solvire Watermark"
          fill
          className="object-contain"
        />
      </div>
      
      {/* Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-energy/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-foreground mb-6"
          >
            The Solvire Advantage
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary text-lg"
          >
            We don't just install solar panels; we ensure they deliver maximum value for their entire lifespan.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-surface/40 backdrop-blur-md border border-foreground/5 hover:border-energy/40 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-energy/10 rounded-full blur-2xl group-hover:bg-energy/20 transition-colors duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-background border border-foreground/10 flex items-center justify-center mb-6 group-hover:border-energy/30 group-hover:shadow-[0_0_15px_rgba(45,190,96,0.2)] transition-all duration-300">
                  <Icon className="w-6 h-6 text-energy group-hover:text-solar transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-energy transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-textSecondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
