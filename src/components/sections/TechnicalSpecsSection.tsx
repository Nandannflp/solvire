"use client";

import { motion } from "framer-motion";
import { Zap, Activity, Thermometer, ShieldCheck } from "lucide-react";

const specs = [
  {
    label: "Photovoltaic Conversion",
    value: "22.8%",
    description: "Industry-leading module efficiency utilizing N-type TOPCon cell architecture.",
    icon: Zap
  },
  {
    label: "Thermal Coefficient",
    value: "-0.29%/°C",
    description: "Minimal performance degradation even in extreme high-temperature environments.",
    icon: Thermometer
  },
  {
    label: "Inverter Load Capacity",
    value: "150% DC/AC",
    description: "Smart string inverters capable of massive oversizing for peak energy yield.",
    icon: Activity
  },
  {
    label: "25-Year Degradation",
    value: "< 11.5%",
    description: "Linear power warranty ensuring robust output decades after initial deployment.",
    icon: ShieldCheck
  }
];

export function TechnicalSpecsSection() {
  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col justify-between items-start mb-16 gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            Operational Specifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-textSecondary text-lg max-w-2xl"
          >
            Engineered for maximum yield. Our infrastructure relies on Tier-1 components from globally trusted partners like <strong>Vikram Solar</strong>, <strong>Growatt</strong>, and <strong>Enphase</strong>. Designed to withstand harsh environments while delivering consistent, high-density power generation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white backdrop-blur-md border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <Icon className="w-8 h-8 text-primary mb-6" />
                <div className="text-4xl font-bold text-foreground mb-2">{spec.value}</div>
                <div className="text-sm font-medium text-foreground mb-4">{spec.label}</div>
                <p className="text-sm text-textSecondary leading-relaxed">{spec.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
