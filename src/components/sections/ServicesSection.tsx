"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Droplets, Search, ShieldCheck, Wrench, Shield, FileText } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Solvire Cleaning & Maintenance",
      description: "Restore peak efficiency with professional, scheduled solar panel cleaning and physical maintenance.",
      icon: <Droplets className="size-6 text-solar" />,
    },
    {
      title: "Solvire Inspection & Diagnostics",
      description: "Deep technical audits to identify invisible inverter errors, wiring degradation, and safety risks.",
      icon: <Search className="size-6 text-solar" />,
    },
    {
      title: "Solvire AMC",
      description: "Annual Maintenance Contracts that guarantee priority service, zero downtime, and absolute peace of mind.",
      icon: <ShieldCheck className="size-6 text-solar" />,
    },
    {
      title: "Solvire Fault Diagnosis & Repair",
      description: "Rapid response repairs from verified technicians when your system unexpectedly stops performing.",
      icon: <Wrench className="size-6 text-solar" />,
    },
    {
      title: "Solvire Protection & Insurance",
      description: "Comprehensive coverage for your solar assets against natural disasters, theft, and accidental damage.",
      icon: <Shield className="size-6 text-solar" />,
    },
    {
      title: "Solvire Care Records & History",
      description: "A digital vault tracking every service, repair, and performance metric over your system's lifetime.",
      icon: <FileText className="size-6 text-solar" />,
    }
  ];

  return (
    <Section id="services" theme="navy" className="py-32 md:py-48 bg-transparent">
      <div className="container max-w-6xl mx-auto z-10 relative">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 card-hover flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 rounded-full bg-solar/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl text-white mb-3">{service.title}</h3>
              <p className="body-clean text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
