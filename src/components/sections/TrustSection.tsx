"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Award, Zap } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";

const trustPoints = [
  "Certified Solar Professionals",
  "Reliable & Fast Service",
  "Preventive Maintenance Focus",
  "Smart Solar Support",
  "Long-Term Performance Guarantee",
  "Transparent Pricing & No Hidden Costs"
];

export function TrustSection() {
  return (
    <section id="trust" className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-border">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-editorial/5 text-center whitespace-nowrap select-none">
          TRUST
        </h2>
      </div>

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none mix-blend-overlay">
        <Image 
          src={logo} 
          alt="Solvire Trust"
          fill
          className="object-contain"
        />
      </div>

      {/* Subtle Warm Glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-solar/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              A Trusted Partner for Your Solar Journey
            </h2>
            
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              We go beyond standard installation. Solvire is committed to ensuring your solar infrastructure remains robust, efficient, and profitable for decades.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.ul 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {trustPoints.map((point, idx) => (
              <motion.li 
                key={idx}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-energy/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-energy" />
                </div>
                <span className="text-foreground font-medium">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>
    </section>
  );
}
