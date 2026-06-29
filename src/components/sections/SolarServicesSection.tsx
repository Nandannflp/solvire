"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Sun, 
  Zap, 
  BatteryCharging, 
  Wrench, 
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  PhoneCall
} from "lucide-react";

const serviceCategories = [
  {
    title: "Installation",
    icon: Sun,
    items: [
      "Residential Solar Installation",
      "Commercial Solar Installation",
      "Industrial Solar Solutions",
    ]
  },
  {
    title: "Solar Systems",
    icon: Zap,
    items: [
      "On-Grid Solar System",
      "Off-Grid Solar System",
      "Hybrid Solar System",
    ]
  },
  {
    title: "Energy Solutions",
    icon: BatteryCharging,
    items: [
      "Solar Water Pump Installation",
      "Solar Street Light Installation",
      "Solar Battery & Inverter Solutions",
    ]
  },
  {
    title: "Maintenance & Support",
    icon: Wrench,
    items: [
      "Solar Panel Cleaning & Maintenance",
      "Annual Maintenance Contract (AMC)",
      "System Repair & Upgradation",
    ]
  },
  {
    title: "Consultancy & Compliance",
    icon: FileCheck2,
    items: [
      "Site Survey & Energy Audit",
      "Customized Solar Design",
      "Net Metering Assistance",
      "Subsidy & Documentation Support",
      "Financing / EMI Assistance",
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function SolarServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const dataParticlesY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft radial orange glow behind the service grid */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-solar/10 rounded-full blur-[120px] opacity-60" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated Data Particles */}
        <motion.div 
          style={{ y: dataParticlesY }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-energy rounded-full shadow-[0_0_10px_#2DBE60] animate-pulse" />
          <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-energy rounded-full shadow-[0_0_10px_#2DBE60] animate-ping" />
          <div className="absolute top-[40%] right-[20%] w-3 h-3 bg-solar rounded-full shadow-[0_0_15px_#F5C542] animate-pulse delay-75" />
          <div className="absolute bottom-[30%] right-[40%] w-2 h-2 bg-energy rounded-full shadow-[0_0_10px_#2DBE60] animate-pulse delay-150" />
        </motion.div>
      </div>

      <div className="container max-w-7xl mx-auto z-10 relative px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Sticky Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-energy/10 border border-energy/20 text-energy text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-energy"></span>
                </span>
                End-to-End Solutions
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight">
                Complete <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy to-solar">Solar Solutions</span>
              </h2>
              
              <p className="text-textSecondary text-lg md:text-xl leading-relaxed mb-10 max-w-md">
                From consultation and installation to long-term maintenance, Solvire delivers end-to-end solar solutions for homes, businesses, and industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-energy to-[#24994d] hover:from-[#24994d] hover:to-energy text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(45,190,96,0.3)] hover:shadow-[0_0_30px_rgba(45,190,96,0.5)]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  Book Free Site Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-surface hover:bg-surface/80 border border-white/10 hover:border-solar/30 text-white rounded-xl font-medium transition-all duration-300 group">
                  Talk to an Expert
                  <PhoneCall className="w-5 h-5 text-solar group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Complimentary Services Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface/50 border border-energy/30 shadow-[0_0_15px_rgba(245,197,66,0.1)] backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-solar" />
                  <span className="text-sm font-medium text-white">Free Site Visit*</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface/50 border border-energy/30 shadow-[0_0_15px_rgba(245,197,66,0.1)] backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-solar" />
                  <span className="text-sm font-medium text-white">Free Consultation*</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Service Grid */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {serviceCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className={`group relative p-8 rounded-2xl bg-surface/40 backdrop-blur-xl border border-white/5 hover:border-energy/40 transition-all duration-500 overflow-hidden ${
                      idx === serviceCategories.length - 1 ? 'md:col-span-2' : ''
                    }`}
                  >
                    {/* Orange ambient corner lighting */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-solar/10 rounded-full blur-2xl group-hover:bg-solar/20 transition-colors duration-500" />
                    
                    {/* Subtle green glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-energy/0 to-energy/0 group-hover:from-energy/5 group-hover:to-transparent transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-energy/30 group-hover:shadow-[0_0_15px_rgba(45,190,96,0.2)] transition-all duration-300">
                        <Icon className="w-6 h-6 text-energy group-hover:text-solar transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-energy transition-colors duration-300">
                        {category.title}
                      </h3>
                      
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-textSecondary group/item">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-energy/50 group-hover/item:bg-solar transition-colors duration-300" />
                            <span className="text-sm group-hover/item:text-white transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
