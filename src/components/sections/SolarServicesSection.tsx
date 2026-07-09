"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
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

const tiers = [
  {
    title: "Residential Jumpstart Bundle",
    subtitle: "Entry-Level On-Grid",
    icon: Sun,
    features: [
      "3kW - 5kW System Size",
      "Net Metering Integration",
      "Tier-1 Mono PERC Panels",
      "Standard String Inverter"
    ]
  },
  {
    title: "Advanced Home Hybrid",
    subtitle: "With Battery Storage",
    icon: BatteryCharging,
    features: [
      "5kW - 10kW System Size",
      "Lithium-ion Backup Storage",
      "Smart Hybrid Inverter",
      "Zero Blackout Guarantee"
    ]
  },
  {
    title: "Commercial Optimization",
    subtitle: "Mid-Scale Deployment",
    icon: Zap,
    features: [
      "20kW - 100kW System Size",
      "High-Yield TOPCon Modules",
      "Advanced Load Management",
      "Priority Maintenance SLA"
    ]
  },
  {
    title: "Enterprise Infrastructure",
    subtitle: "Large-Scale Industrial",
    icon: FileCheck2,
    features: [
      "100kW+ Megawatt Scale",
      "Custom Substation Design",
      "AI Predictive Maintenance",
      "Dedicated Technical Team"
    ]
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

export function SolarServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const dataParticlesY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="services"
      ref={containerRef}
      className="relative min-h-screen py-32 md:py-48 flex flex-col items-center justify-center overflow-hidden bg-background"
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-[1.1] tracking-tight">
                Complete <br/>
                <span className="text-primary">Solar Solutions</span>
              </h2>
              
              <p className="text-textSecondary text-lg md:text-xl leading-relaxed mb-10 max-w-md">
                From consultation and installation to long-term maintenance, Solvire delivers end-to-end solar solutions for homes, businesses, and industries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-sm hover:shadow-sm">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  Book Free Site Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-sm hover:bg-white/60 backdrop-blur-sm border border-border hover:border-border text-foreground rounded-xl font-medium transition-all duration-300 group">
                  Talk to an Expert
                  <PhoneCall className="w-5 h-5 text-solar group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Complimentary Services Badges */}
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-primary/20 shadow-sm ">
                  <CheckCircle2 className="w-5 h-5 text-solar" />
                  <span className="text-sm font-medium text-foreground">Free Site Visit*</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-primary/20 shadow-sm ">
                  <CheckCircle2 className="w-5 h-5 text-solar" />
                  <span className="text-sm font-medium text-foreground">Free Consultation*</span>
                </div>
              </div>
              
              {/* Legal Disclaimer */}
              <p className="mt-8 text-xs text-textSecondary/60 leading-relaxed max-w-sm">
                * Free Site Visit and Free Consultation are subject to location feasibility and standard terms of service. Limited to standard residential and commercial zones.
              </p>
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
              {tiers.map((tier, idx) => {
                const Icon = tier.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-border shadow-lg hover:border-primary/20 transition-all duration-500 overflow-hidden flex flex-col h-full"
                  >
                    {/* Subtle green glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-energy/0 to-energy/0 group-hover:from-energy/5 group-hover:to-transparent transition-colors duration-500 pointer-events-none" />
                    
                    <div className="relative z-10 flex-grow">
                      <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/20 group-hover:shadow-sm transition-all duration-300">
                        <Icon className="w-6 h-6 text-energy group-hover:text-solar transition-colors duration-300" />
                      </div>
                      
                      <p className="text-xs font-bold text-energy uppercase tracking-wider mb-2">{tier.subtitle}</p>
                      <h3 className="text-2xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {tier.title}
                      </h3>
                      
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-3 text-textSecondary group/item">
                            <CheckCircle2 className="w-5 h-5 text-energy/50 group-hover/item:text-energy shrink-0 transition-colors duration-300" />
                            <span className="text-sm font-medium group-hover/item:text-foreground transition-colors duration-300">{feature}</span>
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
