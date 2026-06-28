"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export function RoadmapSection() {
  const steps = [
    { year: "Phase 1", title: "Maintenance & AMC", active: true },
    { year: "Phase 2", title: "Inspection & Diagnostics", active: false },
    { year: "Phase 3", title: "Protection & Insurance", active: false },
    { year: "Phase 4", title: "Solar Ownership OS", active: false },
  ];

  return (
    <Section id="roadmap" theme="navy" className="py-32 md:py-48 bg-transparent">
      <div className="container max-w-5xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="heading-editorial text-4xl md:text-5xl text-white mb-6">
            The road to a complete <br /> <span className="text-solar text-glow-solar">solar ecosystem.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-white/10 -translate-x-1/2" />
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "30%" }} // Indicating progress
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-6 md:left-1/2 w-0.5 bg-solar -translate-x-1/2 origin-top"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex items-center justify-start md:justify-between w-full ${
                  i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="hidden md:block w-5/12" />
                
                {/* Node */}
                <div className={`absolute left-6 md:left-1/2 size-4 rounded-full -translate-x-1/2 flex items-center justify-center ${step.active ? 'bg-solar' : 'bg-transparent border-2 border-white/20'}`}>
                  {step.active && <div className="size-8 rounded-full bg-solar/20 badge-pulse absolute" />}
                </div>

                <div className="w-full md:w-5/12 pl-16 md:pl-0">
                  <div className={`p-6 rounded-2xl border ${step.active ? 'bg-white/10 border-solar/30 shadow-md backdrop-blur-sm' : 'bg-transparent border-transparent'}`}>
                    <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${step.active ? 'text-solar' : 'text-white/40'}`}>
                      {step.year}
                    </span>
                    <h3 className={`text-xl font-semibold ${step.active ? 'text-white' : 'text-white/40'}`}>
                      {step.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
