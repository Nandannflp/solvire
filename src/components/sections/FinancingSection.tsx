"use client";

import { motion } from "framer-motion";
import { CreditCard, Landmark, Wallet } from "lucide-react";

const options = [
  {
    title: "Zero-Cost EMI",
    description: "Install now, pay later with 0% interest EMI options up to 12 months.",
    icon: CreditCard
  },
  {
    title: "Pay-As-You-Go",
    description: "Flexible repayment structures aligned with your monthly energy savings.",
    icon: Wallet
  },
  {
    title: "Bank Partnerships",
    description: "Pre-approved solar loans from leading national banks and NBFCs.",
    icon: Landmark
  }
];

export function FinancingSection() {
  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
              Accessible Financing
            </h2>
            <p className="text-textSecondary text-lg">
              Transition to clean energy without the upfront capital burden. Our financing partners make solar affordable for every enterprise and household.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, idx) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-surface/50 border border-border hover:border-primary/50 transition-all group shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                <p className="text-textSecondary leading-relaxed">{option.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
