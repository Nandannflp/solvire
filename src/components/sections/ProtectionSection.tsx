"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function ProtectionSection() {
  return (
    <Section id="protection" theme="light" className="py-32 bg-white relative overflow-hidden">
      <div className="container max-w-6xl mx-auto z-10 relative">
        <div className="bg-muted/50 rounded-3xl border border-border/50 p-8 md:p-16 relative overflow-hidden">
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-solar/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-sm text-sm font-semibold mb-6 text-foreground">
                <ShieldCheck className="size-4 text-solar" />
                Solvire Protection
              </div>
              
              <h2 className="heading-editorial text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Protect your solar asset <br /> beyond maintenance.
              </h2>
              
              <p className="body-clean text-lg text-muted-foreground mb-8">
                Your solar system is a long-term asset. We provide comprehensive coverage policies against natural disasters, accidental damage, and theft, integrated directly into your Solvire dashboard.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "One-click claim filing & resolution tracking.",
                  "Solar Protection Score based on system health.",
                  "Policy vault for all your warranty documents."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="size-1.5 rounded-full bg-solar" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full h-12 px-8 shadow-md hover:shadow-xl transition-all">
                Explore Protection Plans <ArrowRight className="ml-2 size-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-sm aspect-[4/5] bg-white rounded-2xl border border-border shadow-2xl p-6 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-solar" />
                <h4 className="font-semibold text-lg mt-4 mb-1">Solar Protection Score</h4>
                <p className="text-xs text-muted-foreground mb-8">System health and coverage status</p>
                
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="size-40 rounded-full border-[8px] border-solar/20 border-t-solar flex items-center justify-center mb-4 relative">
                    <div className="text-4xl font-bold text-foreground">98<span className="text-lg text-muted-foreground">%</span></div>
                  </div>
                  <div className="text-center font-medium text-solar flex items-center gap-2">
                    <ShieldCheck className="size-4" /> Fully Protected
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
