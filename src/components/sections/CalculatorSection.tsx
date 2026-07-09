"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export function CalculatorSection() {
  const [bill, setBill] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [areaUnit, setAreaUnit] = useState<"sqft" | "sqm">("sqft");

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-energy/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Calculate Your Solar Potential
          </h2>
          <p className="text-white/60 text-lg">
            Enter your details below for a real-time estimate of your system size and savings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side: Inputs */}
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="monthlyBill" className="text-sm font-medium text-white/90">
                  Average Monthly Electricity Bill (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-medium">₹</span>
                  <input 
                    type="number" 
                    id="monthlyBill" 
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="e.g. 5000" 
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-colors" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rooftopArea" className="text-sm font-medium text-white/90 flex justify-between items-center">
                  Available Rooftop Area
                  <div className="flex bg-black/40 rounded-lg p-0.5 border border-white/10">
                    <button 
                      onClick={() => setAreaUnit("sqft")}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${areaUnit === "sqft" ? "bg-white/20 text-white" : "text-white/50 hover:text-white"}`}
                    >
                      Sq. Ft.
                    </button>
                    <button 
                      onClick={() => setAreaUnit("sqm")}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${areaUnit === "sqm" ? "bg-white/20 text-white" : "text-white/50 hover:text-white"}`}
                    >
                      Sq. Meters
                    </button>
                  </div>
                </label>
                <input 
                  type="number" 
                  id="rooftopArea" 
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder={areaUnit === "sqft" ? "e.g. 1000" : "e.g. 100"} 
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:border-energy focus:ring-1 focus:ring-energy outline-none transition-colors" 
                />
              </div>

            </div>

            {/* Right side: Results Placeholder (Step 2 will populate this) */}
            <div className="flex flex-col justify-center items-center p-6 rounded-2xl bg-black/40 border border-white/5 text-center">
              <Calculator className="w-12 h-12 text-white/20 mb-4" />
              <p className="text-white/50 text-sm">
                Enter your details to generate <br/> real-time estimates
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
