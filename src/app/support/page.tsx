"use client";

import Link from "next/link";
import { ArrowLeft, Send, Wrench, ShieldAlert } from "lucide-react";
import logo from "../../../../public/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SupportPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ticket submitted successfully. Our support team will contact you within 24 hours.");
  };

  return (
    <div className="relative min-h-screen bg-background py-32 px-6 md:px-12 overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-editorial/5 whitespace-nowrap text-center select-none">
          SUPPORT
        </h2>
      </div>

      <div className="container max-w-5xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-textSecondary hover:text-foreground transition-colors mb-16 text-sm font-medium group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">Support & Warranty Portal</h1>
            <p className="text-textSecondary leading-relaxed mb-12">
              Log a maintenance ticket, claim your 25-year linear power warranty, or get technical assistance for your Solvire installation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Maintenance Request</h3>
                  <p className="text-textSecondary text-sm">Schedule a cleaning, routine checkup, or resolve an inverter fault.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-medium mb-1">Warranty Claim</h3>
                  <p className="text-textSecondary text-sm">Initiate a replacement request under your 25-year performance guarantee.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white border border-border shadow-sm rounded-xl">
              <p className="text-sm text-textSecondary">
                For urgent grid-down emergencies, please call our 24/7 hotline directly:
                <br/>
                <a href="tel:18002120000" className="text-primary font-semibold text-lg mt-2 inline-block">1800-212-SOLAR</a>
              </p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Open a Ticket</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="customerId" className="text-sm font-medium text-textSecondary">Customer / Installation ID (Optional)</label>
                <input 
                  id="customerId" 
                  type="text" 
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-sm" 
                  placeholder="SOL-XXXX"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-textSecondary">Full Name</label>
                <input 
                  id="name" 
                  type="text" 
                  required
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-sm" 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="issueType" className="text-sm font-medium text-textSecondary">Issue Type</label>
                <select 
                  id="issueType" 
                  required
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-sm appearance-none [&>option]:bg-white" 
                >
                  <option value="">Select an issue type...</option>
                  <option value="maintenance">Routine Maintenance</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium text-textSecondary">Description of Issue</label>
                <textarea 
                  id="description" 
                  required
                  rows={4}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-sm resize-none" 
                  placeholder="Please describe the problem you are experiencing."
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-12 rounded-lg font-medium group shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Submit Ticket
                <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
