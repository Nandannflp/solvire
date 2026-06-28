"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import Image from "next/image";

import { SyncDot } from "@/components/layout/SyncDot";

export function FounderStorySection() {
  return (
    <Section id="story" theme="navy" className="py-32 md:py-48 relative overflow-hidden md:pl-28">
      <SyncDot />
      <div className="absolute inset-0 bg-solar/5" />
      <div className="container max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 aspect-[3/4] relative rounded-3xl overflow-hidden bg-primary/50 border border-white/10"
          >
            {/* Placeholder for Founder Portrait - using a deep abstract gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#040D17] to-[#1C334D] opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
               {/* This space is reserved for a real editorial portrait of the founder */}
               <div className="text-center">
                  <div className="size-16 rounded-full border border-white/20 mx-auto mb-4" />
                  <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">Founder Portrait</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-solar text-sm font-bold tracking-widest uppercase mb-6 block">
              Built for Long-Term Solar Care
            </span>
            <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-white mb-10 leading-tight">
              "We realized the hardest part of solar wasn't buying the panels. It was keeping them running flawlessly for 25 years."
            </h2>
            
            <div className="space-y-6 text-white/70 body-clean text-lg">
              <p>
                When solar adoption accelerated, everyone focused on installation. But we saw a massive gap: homeowners were left completely unsupported the day after the installers left.
              </p>
              <p>
                Solvire was built to be the operating system for the next 25 years of your solar journey. We believe that clean energy is only sustainable if the infrastructure supporting it is reliable, transparent, and easy to maintain.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-white font-bold text-lg">Founder Name</h4>
              <p className="text-white/50 text-sm">Founder & CEO, Solvire</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </Section>
  );
}
