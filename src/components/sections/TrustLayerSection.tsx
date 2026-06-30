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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-solar/5 pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center flex flex-col items-center"
        >
          <TrustBadge text="Solvire Trust Layer" pulse={false} className="mb-6" />
          <h2 className="heading-editorial text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Trust isn't promised.<br /> It's engineered.
          </h2>
          <p className="body-clean text-lg text-foreground/70 mb-16 max-w-2xl text-center">
            We remove the guesswork from solar ownership. By surfacing verified profiles, transparent pricing, and comprehensive service histories, we ensure your investment is always in safe hands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
            {trustSignals.map((signal, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-4 p-6 bg-white/60 backdrop-blur-sm/5 rounded-2xl border border-border  card-hover">
                <div className="bg-solar/20 p-3 rounded-full flex items-center justify-center border border-border glow-solar">
                  {signal.icon}
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-2">{signal.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">{signal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
