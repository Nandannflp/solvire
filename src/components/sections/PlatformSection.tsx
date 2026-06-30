"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Bell, BatteryCharging, ChevronRight } from "lucide-react";

export function PlatformSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const dashboardY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-32 flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Editorial Background Title */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="font-display font-bold text-[15vw] leading-[0.8] tracking-tight text-editorial/5 whitespace-nowrap text-center">
          THE PLATFORM
        </h2>
      </motion.div>

      <div className="container max-w-6xl mx-auto z-10 relative px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="text-textSecondary uppercase tracking-widest text-sm font-medium">Digital Infrastructure</span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground max-w-3xl leading-[1.1]"
          >
            Complete visibility.<br />Zero guesswork.
          </motion.h3>
        </div>

        {/* Abstract Floating Dashboard */}
        <motion.div 
          style={{ y: dashboardY }}
          className="relative w-full max-w-4xl mx-auto"
        >
          {/* Main Dashboard Window */}
          <div className="bg-white/60 backdrop-blur-sm  border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Window Header */}
            <div className="h-12 border-b border-border flex items-center px-4 gap-2 bg-background/50">
              <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm/10" />
              <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm/10" />
              <div className="w-3 h-3 rounded-full bg-white/60 backdrop-blur-sm/10" />
            </div>
            
            {/* Dashboard Content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Main Chart Area */}
              <div className="md:col-span-2 bg-background/50 rounded-xl p-6 border border-border">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h5 className="text-foreground font-medium">System Performance</h5>
                    <p className="text-textSecondary text-sm">Live Energy Output</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-energy opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-energy"></span>
                    </span>
                    <span className="text-energy text-sm font-medium">Active</span>
                  </div>
                </div>
                {/* Abstract Bar Chart */}
                <div className="h-40 flex items-end justify-between gap-2">
                  {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="w-full bg-white/60 backdrop-blur-sm/5 rounded-t-sm relative group cursor-pointer transition-all hover:bg-white/60 backdrop-blur-sm/10" style={{ height: '100%' }}>
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="absolute bottom-0 w-full bg-white/60 backdrop-blur-sm/20 rounded-t-sm group-hover:bg-energy transition-colors" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Side Panels */}
              <div className="flex flex-col gap-6">
                <div className="bg-background/50 rounded-xl p-6 border border-border flex items-start gap-4">
                  <Activity className="w-6 h-6 text-foreground" />
                  <div>
                    <h5 className="text-foreground font-medium mb-1">Diagnostics</h5>
                    <p className="text-textSecondary text-sm mb-3">All systems optimal. No errors detected.</p>
                    <div className="flex items-center gap-1 text-energy text-sm cursor-pointer hover:text-energy/80">
                      View log <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="bg-background/50 rounded-xl p-6 border border-border flex items-start gap-4">
                  <BatteryCharging className="w-6 h-6 text-foreground" />
                  <div>
                    <h5 className="text-foreground font-medium mb-1">Battery Health</h5>
                    <p className="text-textSecondary text-sm">98% efficiency remaining.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Subtle Orange Notification floating out of dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-8 -top-8 bg-white/60 backdrop-blur-sm border border-border rounded-xl p-4 shadow-2xl flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-solar" />
            <span className="text-foreground text-sm font-medium">Routine Checkup Scheduled</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
