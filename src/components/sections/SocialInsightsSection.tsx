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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LinkedIn Placeholder */}
          <div className="w-full bg-white/5 backdrop-blur-sm border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center mb-4">
              <span className="font-bold text-[#0A66C2] text-xl">in</span>
            </div>
            <p className="text-textSecondary font-medium mb-2">LinkedIn Post Integration</p>
            <p className="text-sm text-textSecondary/60 text-center max-w-xs">
              [Placeholder for embedded LinkedIn post. Recommended size: 504px x 400px]
            </p>
            {/* <iframe src="..." height="400" width="100%" frameBorder="0" allowFullScreen title="Embedded post"></iframe> */}
          </div>

          {/* Instagram Placeholder */}
          <div className="w-full bg-white/5 backdrop-blur-sm border border-border rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center mb-4 opacity-80">
              <span className="font-bold text-white text-xl">ig</span>
            </div>
            <p className="text-textSecondary font-medium mb-2">Instagram Carousel Integration</p>
            <p className="text-sm text-textSecondary/60 text-center max-w-xs">
              [Placeholder for embedded Instagram carousel. Recommended size: 400px x 400px]
            </p>
            {/* <iframe src="..." height="400" width="100%" frameBorder="0" allowFullScreen title="Embedded post"></iframe> */}
          </div>
        </div>

      </div>
    </section>
  );
}
