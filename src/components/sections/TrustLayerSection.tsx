"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { TrustBadge } from "@/components/ui/trust-badge";
import { ShieldCheck, Star, Users, CheckCircle } from "lucide-react";

export function TrustLayerSection() {
  const trustSignals = [
    {
      icon: <CheckCircle className="size-5 text-solar" />,
      title: "100% Verified Vendors",
      desc: "Every technician goes through a strict 5-point verification process before joining."
    },
    {
      icon: <ShieldCheck className="size-5 text-solar" />,
      title: "Guaranteed Workmanship",
      desc: "If a job isn't done right, we cover the cost to fix it. Absolute peace of mind."
    },
    {
      icon: <Users className="size-5 text-solar" />,
      title: "Community Backed",
      desc: "Thousands of solar owners trust Solvire for their long-term system health."
    }
  ];

  return (
    <Section id="trust-layer" theme="navy" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/50 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <TrustBadge text="Solvire Trust Layer" pulse={false} className="mb-6" />
            <h2 className="heading-editorial text-4xl md:text-5xl text-white mb-6 leading-tight">
              Trust isn't promised.<br /> It's engineered.
            </h2>
            <p className="body-clean text-lg text-white/70 mb-10 max-w-lg">
              We remove the guesswork from solar ownership. By surfacing verified profiles, transparent pricing, and comprehensive service histories, we ensure your investment is always in safe hands.
            </p>

            <div className="flex flex-col gap-6">
              {trustSignals.map((signal, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 bg-white/5 p-2 rounded-full border border-white/10">
                    {signal.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{signal.title}</h4>
                    <p className="text-white/60 text-sm">{signal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Abstraction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col justify-center p-8 glow-solar"
          >
            {/* Faux UI element representing trust / reviews */}
            <div className="flex flex-col gap-4">
              {[1, 2, 3].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="bg-white/10 border border-white/5 rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-solar/20 flex items-center justify-center">
                      <CheckCircle className="size-5 text-solar" />
                    </div>
                    <div>
                      <div className="h-4 w-24 bg-white/20 rounded mb-2" />
                      <div className="h-3 w-16 bg-white/10 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="size-3 text-sun fill-sun" />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
