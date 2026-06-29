"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";

export function FinalCtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-white/5">
      
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
            Ready for better <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy to-solar">solar performance?</span>
          </h2>
          
          <p className="text-textSecondary text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
            Take the first step towards a seamless, efficient, and profitable solar infrastructure.
          </p>
          
          <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-energy to-[#24994d] hover:from-[#24994d] hover:to-energy text-white text-lg rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(45,190,96,0.3)] hover:shadow-[0_0_30px_rgba(45,190,96,0.5)]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            Book Your Free Site Visit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
        
      </div>
    </section>
  );
}
