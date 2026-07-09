"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Zap, PiggyBank, Clock, Leaf } from "lucide-react";

export function CalculatorSection() {
  const [bill, setBill] = useState<string>("");
  const [area, setArea] = useState<string>("");
  const [areaUnit, setAreaUnit] = useState<"sqft" | "sqm">("sqft");
  const [stateLocation, setStateLocation] = useState<string>("Goa");

  // Calculated State
  const [systemSize, setSystemSize] = useState<number>(0);
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [paybackYears, setPaybackYears] = useState<number>(0);
  const [co2Offset, setCo2Offset] = useState<number>(0);

  useEffect(() => {
    const billValue = parseFloat(bill) || 0;
    const areaValue = parseFloat(area) || 0;

    if (areaValue > 0) {
      // 1. Convert area to sqm
      const areaSqm = areaUnit === "sqft" ? areaValue / 10.764 : areaValue;
      
      // 2. Physics Engine
      // System Size (kW) = Area * Efficiency (21%) under STC (1000 W/m2)
      const sizeKw = areaSqm * 0.21;
      setSystemSize(parseFloat(sizeKw.toFixed(1)));

      // Energy (kWh/year) = A * Efficiency * G_T * PR
      // G_T ~ 1825 kWh/m2/yr (approx 5 hours peak sun * 365), PR = 0.75
      const gtMap: Record<string, number> = {
        "Goa": 1825,
        "Maharashtra": 1850,
        "Gujarat": 1900,
        "Karnataka": 1800,
        "Other": 1800
      };
      const gt = gtMap[stateLocation] || gtMap["Other"];
      const energyAnnual = areaSqm * 0.21 * gt * 0.75;
      const energyMonthly = energyAnnual / 12;

      // CO2 Offset
      const co2Tons = (energyAnnual * 0.82) / 1000;
      setCo2Offset(parseFloat(co2Tons.toFixed(1)));

      // 3. Savings & Payback
      // Assume grid rate of ₹8/kWh
      const potentialSavings = energyMonthly * 8;
      const actualSavings = billValue > 0 ? Math.min(potentialSavings, billValue) : potentialSavings;
      setMonthlySavings(Math.round(actualSavings));

      // Assume installation cost ~₹60,000 per kW
      const totalCost = sizeKw * 60000;
      if (actualSavings > 0) {
        setPaybackYears(parseFloat((totalCost / (actualSavings * 12)).toFixed(1)));
      } else {
        setPaybackYears(0);
      }
    } else {
      setSystemSize(0);
      setMonthlySavings(0);
      setPaybackYears(0);
      setCo2Offset(0);
    }
  }, [bill, area, areaUnit, stateLocation]);

  const handleRouteToQuote = () => {
    // Save to localStorage so the form can pick it up if needed, or simply scroll to the CTA section
    // In this SPA, we will scroll to the #trust or bottom CTA and auto-fill by passing URL params or just dispatching an event
    window.location.hash = "#trust"; // Scroll closer to the CTA
    
    // We will emit a custom event to notify the form
    const event = new CustomEvent("solar-calculator-data", {
      detail: { bill, systemSize }
    });
    window.dispatchEvent(event);

    setTimeout(() => {
      const ctaEl = document.querySelector("form");
      if (ctaEl) ctaEl.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section className="relative py-24 md:py-32 bg-transparent overflow-hidden border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Calculate Your Solar Potential
          </h2>
          <p className="text-textSecondary text-lg">
            Enter your details below for a real-time estimate of your system size and savings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 md:p-12 rounded-3xl bg-white/70 backdrop-blur-xl border border-border shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side: Inputs */}
            <div className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="monthlyBill" className="text-sm font-medium text-foreground">
                  Average Monthly Electricity Bill (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary font-medium">₹</span>
                  <input 
                    type="number" 
                    id="monthlyBill" 
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="e.g. 5000" 
                    className="w-full pl-8 pr-4 py-3 rounded-xl bg-white border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors shadow-sm" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rooftopArea" className="text-sm font-medium text-foreground flex justify-between items-center">
                  Available Rooftop Area
                  <div className="flex bg-surface rounded-lg p-0.5 border border-border shadow-sm">
                    <button 
                      onClick={() => setAreaUnit("sqft")}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${areaUnit === "sqft" ? "bg-primary/10 text-primary font-semibold" : "text-textSecondary hover:text-foreground"}`}
                    >
                      Sq. Ft.
                    </button>
                    <button 
                      onClick={() => setAreaUnit("sqm")}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${areaUnit === "sqm" ? "bg-primary/10 text-primary font-semibold" : "text-textSecondary hover:text-foreground"}`}
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
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors shadow-sm" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="stateLocation" className="text-sm font-medium text-foreground">
                  Select State Location
                </label>
                <select 
                  id="stateLocation" 
                  value={stateLocation}
                  onChange={(e) => setStateLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors shadow-sm [&>option]:bg-white"
                >
                  <option value="Goa">Goa</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            {/* Right side: Results */}
            <div className="flex flex-col justify-center items-center p-8 rounded-2xl bg-surface/50 border border-border text-center relative overflow-hidden shadow-sm">
              {/* Subtle ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]" />
              
              {systemSize > 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full flex flex-col gap-6 relative z-10"
                >
                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center justify-center gap-2 text-primary mb-1">
                      <Zap className="w-5 h-5" />
                      <span className="font-semibold text-sm">Recommended System</span>
                    </div>
                    <div className="text-4xl font-bold text-foreground">{systemSize} <span className="text-xl text-textSecondary">kW</span></div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center justify-center gap-2 text-energy mb-1">
                      <PiggyBank className="w-5 h-5" />
                      <span className="font-semibold text-sm">Est. Monthly Savings</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground">₹{monthlySavings.toLocaleString()}</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center justify-center gap-2 text-blue-500 mb-1">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold text-sm">Payback Period (ROI)</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{paybackYears > 0 ? `${paybackYears} Years` : 'N/A'}</div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
                    <div className="flex items-center justify-center gap-2 text-green-500 mb-1">
                      <Leaf className="w-5 h-5" />
                      <span className="font-semibold text-sm">Annual CO₂ Offset</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{co2Offset} <span className="text-sm text-textSecondary">Tons</span></div>
                  </div>

                  <button 
                    onClick={handleRouteToQuote}
                    className="mt-4 w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium overflow-hidden transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    Get a Custom Quote for this System
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center opacity-50 py-12">
                  <Calculator className="w-16 h-16 text-textSecondary mb-6" />
                  <p className="text-textSecondary text-lg font-medium">
                    Enter your details to generate
                  </p>
                  <p className="text-textSecondary/70 text-sm mt-2">
                    Real-time physics engine estimates
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
