"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wrench, Shield, Search, CheckCircle, BarChart3 } from "lucide-react";

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-energy group-hover:scale-110 transition-transform" />,
      title: "Smart Maintenance",
      desc: "Automated scheduling and tracking for routine checkups, keeping your system at peak performance."
    },
    {
      icon: <Search className="w-6 h-6 text-energy group-hover:scale-110 transition-transform" />,
      title: "AI Diagnostics",
      desc: "Predictive algorithms that identify potential hardware failures before they disrupt your energy output."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-energy group-hover:scale-110 transition-transform" />,
      title: "Verified Network",
      desc: "Immediate access to a curated network of certified solar technicians with proven track records."
    },
    {
      icon: <Shield className="w-6 h-6 text-energy group-hover:scale-110 transition-transform" />,
      title: "Protection & Insurance",
      desc: "Integrated asset protection plans that cover unexpected damages and revenue loss."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-energy group-hover:scale-110 transition-transform" />,
      title: "Asset Dashboard",
      desc: "A single pane of glass for all your solar documentation, warranties, and performance history."
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
          WHAT WE DO
        </h2>
      </motion.div>

      <div className="container max-w-7xl mx-auto z-10 relative px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="text-textSecondary uppercase tracking-widest text-sm font-medium">Core Capabilities</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground max-w-3xl leading-[1.1]"
          >
            Built for total reliability.
          </motion.h3>
        </div>

        {/* 5 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative bg-white p-8 rounded-2xl flex flex-col items-start hover:shadow-sm transition-all overflow-hidden ${i === 3 || i === 4 ? 'lg:col-span-1.5' : ''}`}
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-energy/0 group-hover:bg-energy/5 transition-colors pointer-events-none" />
              
              {/* Orange decorative line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-solar/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-6 z-10">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3 z-10">{service.title}</h4>
              <p className="text-textSecondary leading-relaxed z-10">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
