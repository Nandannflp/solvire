"use client";

import Link from "next/link";
import { PhoneCall, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/solvire-long-logo.png"
            alt="Solvire Logo"
            className="h-8 md:h-10 object-contain"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-energy transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium text-foreground hover:text-energy transition-colors">
            Services
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-foreground hover:text-energy transition-colors">
            Process
          </Link>
          <Link href="/#industries" className="text-sm font-medium text-foreground hover:text-energy transition-colors">
            Industries
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground hover:text-energy transition-colors">
            Contact
          </Link>
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="mailto:hello@solvire.com" className="flex items-center gap-2 text-sm text-textSecondary hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <span>hello@solvire.com</span>
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-textSecondary hover:text-foreground transition-colors">
            <PhoneCall className="w-4 h-4" />
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </header>
  );
}
