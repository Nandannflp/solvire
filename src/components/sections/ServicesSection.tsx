"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Shield, Sparkles, Activity, Wrench, RefreshCw, Smartphone } from "lucide-react";
import { useRef } from "react";

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

  return (
    <Section id="services" theme="navy" className="py-32 md:py-48 bg-transparent overflow-hidden">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{ scale: cardScale, y: cardY, opacity: cardOpacity }}
              className="extreme-glass p-8 rounded-2xl card-hover flex flex-col items-start text-left relative overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-solar/5 rounded-full blur-3xl pointer-events-none" />
              <div className="w-14 h-14 rounded-full bg-solar/10 flex items-center justify-center mb-6 border border-solar/20 glow-solar">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl text-white mb-3">{service.title}</h3>
              <p className="body-clean text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
