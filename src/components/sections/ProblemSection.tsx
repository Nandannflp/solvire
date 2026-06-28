"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export function ProblemSection() {
  return (
    <Section id="problem" theme="navy" className="py-32 md:py-48 relative">
      {/* Subtle Noise Texture */}
      <div className="noise-overlay" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-white mb-16 leading-tight"
        >
          Solar ownership doesn't end at installation. <br className="hidden md:block" />
          <span className="text-solar text-glow-solar">The real journey begins afterwards.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-24">
          {[
            {
              title: "Dust accumulates.",
              desc: "Panels lose up to 30% of their efficiency simply because they aren't cleaned properly or regularly.",
              delay: 0.2
            },
            {
              title: "Performance drops.",
              desc: "Inverters flag invisible errors and wiring degrades while you assume everything is working perfectly.",
              delay: 0.4
            },
            {
              title: "You don't know who to call.",
              desc: "When something finally breaks, finding a reliable, verified technician feels like a complete gamble.",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: item.delay, ease: "easeOut" }}
              className="flex flex-col gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 card-hover"
            >
              <div className="w-10 h-10 rounded-full bg-solar/20 flex items-center justify-center text-sm font-bold text-solar">
                0{i + 1}
              </div>
              <h3 className="font-semibold text-xl text-white mt-2">{item.title}</h3>
              <p className="body-clean text-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
