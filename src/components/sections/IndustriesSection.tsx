"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Home, Building2, Factory, ChevronDown } from "lucide-react";

const industries = [
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    description: "Empower your home with clean, renewable energy while significantly reducing electricity bills.",
    services: [
      "Residential Solar Installation",
      "On-Grid Solar System",
      "Off-Grid Solar System",
      "Solar Water Heater Support",
      "Net Metering Assistance"
    ]
  },
  {
    id: "commercial",
    title: "Commercial",
    icon: Building2,
    description: "Optimize operational costs and achieve sustainability goals with our tailored commercial solutions.",
    services: [
      "Commercial Solar Installation",
      "Solar Street Light Installation",
      "Annual Maintenance Contract (AMC)",
      "Financing / EMI Assistance",
      "Customized Solar Design"
    ]
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: Factory,
    description: "High-capacity, robust solar infrastructure designed for heavy energy demands and industrial facilities.",
    services: [
      "Industrial Solar Solutions",
      "High Capacity Hybrid Systems",
      "Site Survey & Energy Audit",
      "System Repair & Upgradation",
      "Subsidy & Documentation Support"
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
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

export function IndustriesSection() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard(openCard === id ? null : id);
  };

  return (
    <section id="industries" className="relative py-32 md:py-48 bg-transparent border-t border-border overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-editorial/5 text-center whitespace-nowrap select-none">
          SECTORS
        </h2>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-solar/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-semibold text-foreground mb-6"
          >
            Tailored Energy Solutions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textSecondary text-lg"
          >
            We provide specialized solar infrastructure across residential, commercial, and industrial sectors.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isOpen = openCard === industry.id;
            
            return (
              <motion.div
                key={industry.id}
                variants={cardVariants}
                className="group relative rounded-2xl bg-white/60 backdrop-blur-sm  border border-border overflow-hidden flex flex-col"
              >
                {/* [REPLACE_ME: Authentic High-Res Installation Photography] */}
                <div className="w-full h-48 bg-black/5 relative overflow-hidden flex items-center justify-center border-b border-border placeholder-image">
                  <span className="text-textSecondary/50 text-sm font-medium">Image Placeholder</span>
                </div>

                {/* Header Section (Always Visible) */}
                <button 
                  onClick={() => toggleCard(industry.id)}
                  className="w-full p-8 text-left focus:outline-none"
                >
                  <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary/20 transition-all duration-300">
                    <Icon className="w-7 h-7 text-energy group-hover:text-solar transition-colors duration-300" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {industry.title}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-textSecondary transition-transform duration-300 ${isOpen ? "rotate-180 text-solar" : ""}`} />
                  </div>
                  
                  <p className="text-sm text-textSecondary leading-relaxed">
                    {industry.description}
                  </p>
                </button>

                {/* Animated Dropdown Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2">
                        <div className="h-[1px] w-full bg-white/60 backdrop-blur-sm/10 mb-6" />
                        <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                          Key Services
                        </h4>
                        <ul className="space-y-3">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-textSecondary">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-energy/50 flex-shrink-0" />
                              <span className="text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
