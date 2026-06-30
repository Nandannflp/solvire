"use client";

import { motion } from "framer-motion";
import longLogo from "../../../public/solvire-long-logo.png";
import { MapPin, Search, PenTool, Wrench, Activity, ShieldCheck } from "lucide-react";
import Image from "next/image";

const steps = [
  { id: "01", title: "Site Visit", icon: MapPin, desc: "Free initial inspection of your premises." },
  { id: "02", title: "Assessment", icon: Search, desc: "Energy audit and feasibility study." },
  { id: "03", title: "Design", icon: PenTool, desc: "Custom solar architecture planning." },
  { id: "04", title: "Installation", icon: Wrench, desc: "Professional deployment and testing." },
  { id: "05", title: "Monitoring", icon: Activity, desc: "Real-time performance tracking." },
  { id: "06", title: "Maintenance", icon: ShieldCheck, desc: "Long-term support and servicing." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 bg-transparent border-t border-foreground/5 overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-editorial/5 text-center whitespace-nowrap select-none">
          HOW IT WORKS
        </h2>
      </div>

      {/* Background logo anchor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none mix-blend-overlay">
        <Image 
          src={longLogo} 
          alt="Solvire"
          fill
          className="object-contain"
        />
      </div>

      <div className="container max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-foreground mb-6"
          >
            A Seamless Process
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary text-lg"
          >
            We handle everything from the first site visit to lifetime maintenance.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-energy/30 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full bg-surface/80 backdrop-blur-sm border border-foreground/10 flex items-center justify-center group-hover:border-energy/50 group-hover:shadow-[0_0_20px_rgba(45,190,96,0.2)] transition-all duration-300">
                      <Icon className="w-8 h-8 text-energy group-hover:text-solar transition-colors duration-300" />
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-energy text-background text-sm font-bold flex items-center justify-center border-2 border-background">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-energy transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-textSecondary px-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
