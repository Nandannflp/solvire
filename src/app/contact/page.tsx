"use client";

import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import logo from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to an actual form handler later
    alert("Message sent! We will get back to you shortly.");
  };

  return (
    <div className="relative min-h-screen bg-background py-32 px-6 md:px-12 overflow-hidden">
      {/* Giant Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h2 className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-editorial/5 whitespace-nowrap text-center select-none">
          CONTACT
        </h2>
      </div>

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none mix-blend-overlay">
        <Image 
          src={logo} 
          alt="Solvire"
          fill
          className="object-contain"
        />
      </div>

      <div className="container max-w-4xl mx-auto relative z-10">
        <Link href="/" className="inline-flex items-center text-textSecondary hover:text-foreground transition-colors mb-16 text-sm font-medium group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">Get in touch</h1>
            <p className="text-textSecondary leading-relaxed mb-12">
              Whether you need a new solar installation, ongoing maintenance, or a comprehensive energy audit, our team is ready to help.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-foreground font-medium text-sm mb-1">General Inquiries</h3>
                <a href="mailto:sales@solvire.in" className="text-primary hover:underline text-lg">sales@solvire.in</a>
              </div>
              <div>
                <h3 className="text-foreground font-medium text-sm mb-1">Support</h3>
                <a href="mailto:support@solvire.in" className="text-primary hover:underline text-lg">support@solvire.in</a>
              </div>
              <div>
                <h3 className="text-foreground font-medium text-sm mb-1">Toll-Free Customer Care</h3>
                <a href="tel:18002120000" className="text-primary hover:underline text-lg">1800-212-SOLAR</a>
              </div>
              <div>
                <h3 className="text-foreground font-medium text-sm mb-1">Headquarters</h3>
                <p className="text-textSecondary text-lg">Patna, Bihar 800020</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-textSecondary">Name</label>
                <input 
                  id="name" 
                  type="text" 
                  required
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-sm" 
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-textSecondary">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  required
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors shadow-sm" 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-textSecondary">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground placeholder-textSecondary/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none shadow-sm" 
                  placeholder="How can we help?"
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-12 rounded-lg font-medium group shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
