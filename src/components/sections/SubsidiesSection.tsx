"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, BadgeIndianRupee } from "lucide-react";

export function SubsidiesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-energy/5 border-t border-border">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-energy/10 text-energy text-sm font-medium mb-6 border border-energy/20">
              <BadgeIndianRupee className="w-4 h-4" />
              <span>Government Subsidies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Maximize Your ROI with PM Surya Ghar Muft Bijli Yojana
            </h2>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              As an MNRE-empanelled vendor, Solvire helps you navigate the complexities of state and central government subsidies. We handle the paperwork so you can enjoy the savings.
            </p>
            <ul className="space-y-4">
              {[
                "Up to ₹78,000 direct subsidy for residential systems",
                "End-to-end documentation and net-metering approvals",
                "Guaranteed compliance with state DISCOM regulations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="w-6 h-6 text-energy shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-border relative group">
              <img 
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&h=900&fit=crop" 
                alt="Solar installation documentation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-surface/90 backdrop-blur-md p-6 rounded-2xl border border-border flex items-center gap-4">
                <FileText className="w-10 h-10 text-energy" />
                <div>
                  <h4 className="font-semibold text-foreground">Seamless Approvals</h4>
                  <p className="text-sm text-textSecondary">We manage 100% of the subsidy application process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
