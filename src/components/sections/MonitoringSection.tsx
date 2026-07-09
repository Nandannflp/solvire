"use client";

import { motion } from "framer-motion";
import { Activity, Smartphone, BarChart3, BellRing } from "lucide-react";

export function MonitoringSection() {
  return (
    <section className="relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Mock Dashboard / App */}
            <div className="relative mx-auto w-full max-w-[300px] aspect-[9/19] rounded-[3rem] border-[8px] border-[#111] bg-black overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&fit=crop" 
                alt="Intelligent Monitoring App Placeholder"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm p-4 text-center z-20">
                <span className="text-white text-sm font-medium border border-white/20 px-4 py-2 rounded-full bg-black/50">Replace with real Solvire App screenshot</span>
              </div>
              
              {/* Mock UI Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-4 z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <div className="text-white/60 text-xs mb-1 uppercase tracking-wider">Current Generation</div>
                  <div className="text-3xl font-bold text-white flex items-end gap-2">
                    5.4 <span className="text-lg text-primary mb-1">kW</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex justify-between items-center">
                  <div>
                    <div className="text-white/60 text-xs mb-1 uppercase tracking-wider">Today's Yield</div>
                    <div className="text-xl font-bold text-white">24.2 kWh</div>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-white border border-border rounded-2xl shadow-xl flex items-center justify-center animate-[bounce_3s_infinite]">
              <Activity className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-white border border-border rounded-2xl shadow-xl flex items-center justify-center animate-[bounce_4s_infinite]">
              <BellRing className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Smartphone className="w-4 h-4" />
              <span>Intelligent Monitoring</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Track Your Power. Anywhere, Anytime.
            </h2>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              Every Solvire installation comes with full integration to our smart monitoring app. Get granular visibility into your system's performance, right from your pocket.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Real-Time Yield", desc: "Monitor live energy generation and consumption." },
                { title: "Smart Alerts", desc: "Get instant notifications for grid outages or maintenance needs." },
                { title: "ROI Tracking", desc: "Visualize your financial savings and CO2 offset over time." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-medium text-lg">{feature.title}</h4>
                    <p className="text-textSecondary">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
