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
    <section id="trust" className="relative py-32 md:py-48 bg-transparent overflow-hidden border-t border-border">
      {/* Dark Solar Background with Frosted Glass Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-10" />
        <img 
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&fit=crop"
          alt="Dark Solar Panels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[12vw] md:text-[14vw] leading-[0.8] tracking-tighter text-white/5 text-center whitespace-nowrap select-none">
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
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              A Trusted Partner for Your Solar Journey
            </h2>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              We go beyond standard installation. Solvire is committed to ensuring your solar infrastructure remains robust, efficient, and profitable for decades.
            </p>
            
            {/* Authentic High-Res Installation Photography */}
            <div className="w-full h-64 md:h-80 rounded-2xl relative overflow-hidden border border-border mt-8 aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=600&h=800&fit=crop"
                alt="Close-up of smart inverter and solar panels"
                className="w-full h-full object-cover"
              />
            </div>
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
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-primary/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-energy/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-energy" />
                </div>
                <span className="text-white font-medium">{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div>

      {/* Trusted By Logos (Mimetic Social Proof) */}
      <div className="container max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-12 border-t border-white/20 w-full flex flex-col items-center"
        >
          <p className="text-sm font-medium text-white/60 mb-8 uppercase tracking-widest text-center">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale select-none">
            <span className="text-xl font-bold font-display">SUNPHARMA</span>
            <span className="text-xl font-bold font-display">ECOCORP</span>
            <span className="text-xl font-bold font-display">TATA STEEL</span>
            <span className="text-xl font-bold font-display">RELIANCE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
