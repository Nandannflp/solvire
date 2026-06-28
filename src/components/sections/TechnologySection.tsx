"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Activity, Bell, Calendar } from "lucide-react";

export function TechnologySection() {
  return (
    <Section id="technology" theme="navy" className="py-32 md:py-48 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-solar/10 rounded-full blur-[120px] mix-blend-screen opacity-30 pointer-events-none" />

      <div className="container max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="heading-editorial text-4xl md:text-5xl text-white mb-6">
            Intelligent Solar Ownership
          </h2>
          <p className="body-clean text-lg text-white/70">
            Solvire operates as your background intelligence, automatically tracking performance, scheduling maintenance, and alerting you only when action is needed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Activity className="size-6 text-solar" />,
              title: "Performance Tracking",
              desc: "We analyze your energy output against local weather and system age to spot invisible degradation."
            },
            {
              icon: <Calendar className="size-6 text-sun" />,
              title: "Smart Scheduling",
              desc: "Predictive algorithms suggest the exact optimal time for panel cleaning based on local dust accumulation rates."
            },
            {
              icon: <Bell className="size-6 text-white" />,
              title: "Actionable Alerts",
              desc: "No noise. You only receive alerts when an inverter faults, a warranty is expiring, or a service is due."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md card-hover"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
