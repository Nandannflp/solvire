"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export function FinalCtaSection() {
  const [formData, setFormData] = useState({ name: "", property: "", bill: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleCalculatorData = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFormData(prev => ({
          ...prev,
          bill: customEvent.detail.bill || prev.bill,
          property: customEvent.detail.systemSize > 10 ? "commercial" : "residential"
        }));
      }
    };
    
    window.addEventListener("solar-calculator-data", handleCalculatorData);
    return () => window.removeEventListener("solar-calculator-data", handleCalculatorData);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz_webhook_placeholder/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "no-cors", // Required for basic Google Sheets webhook without complex CORS setup
        body: JSON.stringify(formData)
      });
      setIsSuccess(true);
      setFormData({ name: "", property: "", bill: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-32 md:py-48 bg-transparent overflow-hidden border-t border-border">
      
      {/* Background Solar Flare Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-[100px] opacity-60 pointer-events-none" />
      


      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Text & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start text-left"
          >
            <div className="relative w-16 h-16 mb-8 opacity-90">
              <Image 
                src={logo} 
                alt="Solvire Logo" 
                fill 
                className="object-contain"
              />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Stop Guessing. <br/>
              <span className="text-primary">Start Managing.</span>
            </h2>
            
            <p className="text-slate-600 text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
              Take the first step towards a seamless, efficient, and profitable solar infrastructure.
            </p>
            
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-border shadow-xl text-left">
              {isSuccess && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm mb-2">
                  Thank you! Your application has been received. Our team will contact you shortly.
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-800 mb-1.5">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Jane Doe" 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="property" className="block text-sm font-medium text-slate-800 mb-1.5">Property Type</label>
                <select 
                  id="property" 
                  value={formData.property}
                  onChange={(e) => setFormData({...formData, property: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                  required
                >
                  <option value="" disabled>Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              <div>
                <label htmlFor="bill" className="block text-sm font-medium text-slate-800 mb-1.5">Monthly Bill (₹)</label>
                <input 
                  type="number" 
                  id="bill" 
                  value={formData.bill}
                  onChange={(e) => setFormData({...formData, bill: e.target.value})}
                  placeholder="e.g. 5000" 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                  required 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-800 mb-1.5">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 00000 00000" 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
                  required 
                />
              </div>
              
              <button disabled={isSubmitting} type="submit" className="mt-2 w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                {isSubmitting ? "Submitting..." : "Submit Application"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>

          {/* Right Column: High-Res Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-5154345e69e7?q=80&w=600&h=800&fit=crop" 
                alt="Commercial Solar Installation Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
