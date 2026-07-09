"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Solvire managed our entire transition to solar. Their verified network meant we didn't have to worry about finding the right vendors. Highly recommended.",
    author: "Rakesh Sharma",
    role: "Factory Owner, Pune",
  },
  {
    quote: "The maintenance service is incredibly proactive. They caught an inverter issue before we even noticed a drop in our energy production.",
    author: "Sneha Patel",
    role: "Homeowner, Ahmedabad",
  },
  {
    quote: "We chose Solvire for our office building. The ROI has been phenomenal, and their team handled all the subsidy paperwork flawlessly.",
    author: "Vikram Desai",
    role: "Operations Director, Mumbai",
  }
];

export function SocialInsightsSection() {
  return (
    <section className="relative py-32 md:py-48 bg-transparent border-t border-border overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold text-foreground mb-4"
          >
            Don't Just Take Our Word For It
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-textSecondary text-lg"
          >
            Hear from our clients who have optimized their energy infrastructure with Solvire.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg relative"
            >
              <Quote className="w-10 h-10 text-energy/30 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-8 relative z-10 text-lg">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-textSecondary">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
