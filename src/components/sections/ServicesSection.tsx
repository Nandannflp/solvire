"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Shield, Sparkles, Activity, Wrench, RefreshCw, Smartphone } from "lucide-react";
import { useRef } from "react";

import { SyncDot } from "@/components/layout/SyncDot";

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.8, 1, 1, 1.3]);
  const cardY = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [100, 0, 0, -150]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    { title: "Verification & AMC", icon: <Shield className="text-solar size-6" />, description: "Annual maintenance contracts executed only by 5-point verified partners." },
    { title: "Deep Diagnostics", icon: <Activity className="text-solar size-6" />, description: "Thermal imaging and IV-curve tracing to detect invisible panel degradation." },
    { title: "Intelligent Cleaning", icon: <Sparkles className="text-solar size-6" />, description: "Robotic and manual precision cleaning to optimize yield up to 15%." },
    { title: "OEM Warranty Management", icon: <Wrench className="text-solar size-6" />, description: "Automated tracking and claims processing for inverted and panel failures." },
    { title: "Component Replacement", icon: <RefreshCw className="text-solar size-6" />, description: "Seamless sourcing of Tier-1 components at wholesale ecosystem pricing." },
    { title: "Solar OS App", icon: <Smartphone className="text-solar size-6" />, description: "Monitor health, schedule services, and view your Protection Score instantly." },
  ];

  const getBentoClass = (index: number) => {
    switch (index) {
      case 0:
        return "lg:col-span-2 lg:row-span-2";
      case 4:
        return "lg:col-span-2 lg:row-span-1"; // Make the 5th item wide
      default:
        return "lg:col-span-1 lg:row-span-1";
    }
  };

  return (
    <Section id="services" theme="navy" className="py-32 md:py-48 bg-transparent overflow-hidden md:pl-28">
      <SyncDot />
      <div className="container max-w-6xl mx-auto z-10 relative" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="heading-editorial text-4xl md:text-5xl text-white mb-6">
            Everything you need. <br /> <span className="text-solar text-glow-solar">Under one trusted brand.</span>
          </h2>
          <p className="body-clean text-lg text-white/60">
            No fragmented marketplaces. No third-party confusion. Experience complete solar care orchestrated by Solvire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{ scale: cardScale, y: cardY, opacity: cardOpacity }}
              className={`sleek-card p-8 rounded-xl card-hover flex flex-col items-start text-left relative overflow-hidden group ${getBentoClass(index)}`}
            >
              {/* Minimalist glow on hover, NO extreme background blur */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-solar/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 transition-colors duration-500 group-hover:border-solar/30 group-hover:bg-solar/5 ${index === 0 || index === 4 ? 'lg:w-16 lg:h-16 lg:mb-8' : ''}`}>
                <div className="text-white/60 group-hover:text-solar transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className={`font-medium text-white mb-3 transition-colors duration-300 group-hover:text-solar ${index === 0 || index === 4 ? 'text-2xl' : 'text-xl'}`}>{service.title}</h3>
              
              <p className={`body-clean text-white/50 leading-relaxed ${index === 0 || index === 4 ? 'text-base lg:text-lg lg:max-w-md' : 'text-sm'}`}>
                {service.description}
              </p>

              {/* Minimal corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-transparent group-hover:border-solar/30 transition-colors duration-300 rounded-tr-xl m-4 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
