"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="relative py-32 md:py-48 bg-transparent overflow-hidden border-t border-border">
      
      {/* Background Solar Flare Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-energy/10 via-solar/10 to-energy/10 blur-[100px] opacity-60 pointer-events-none" />
      


      <div className="container max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-16 h-16 mb-8 opacity-90">
            <Image 
              src={logo} 
              alt="Solvire Logo" 
              fill 
              className="object-contain"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Stop Guessing. <br/>
            <span className="text-primary">Start Managing.</span>
          </h2>
          
          <p className="text-textSecondary text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
            Take the first step towards a seamless, efficient, and profitable solar infrastructure.
          </p>
          
          <form className="w-full max-w-md mx-auto flex flex-col gap-4 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input type="text" id="name" placeholder="Jane Doe" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-colors" required />
            </div>
            <div>
              <label htmlFor="property" className="block text-sm font-medium text-foreground mb-1.5">Property Type</label>
              <select id="property" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-colors" required>
                <option value="" disabled selected>Select Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <div>
              <label htmlFor="bill" className="block text-sm font-medium text-foreground mb-1.5">Monthly Bill (₹)</label>
              <input type="number" id="bill" placeholder="e.g. 5000" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-colors" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <input type="tel" id="phone" placeholder="+91 00000 00000" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-colors" required />
            </div>
            
            <button type="submit" className="mt-2 w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-md">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Submit Application
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
        
      </div>
    </section>
  );
}
