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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-4"
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
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            Services
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            Process
          </Link>
          <Link href="/#industries" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            Industries
          </Link>
          <Link href="/resources" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            Resources
          </Link>
          <Link href="/support" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            Support
          </Link>
        </nav>

        {/* Contact Info (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:18002120000" className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5">
            <PhoneCall className="w-4 h-4 text-primary" />
            <span>1800-212-SOLAR</span>
          </a>
          <a href="mailto:sales@solvire.in" className="flex items-center gap-2 text-sm text-textSecondary hover:text-foreground transition-all duration-300 hover:-translate-y-0.5">
            <Mail className="w-4 h-4" />
            <span>sales@solvire.in</span>
          </a>
        </div>
      </div>
    </header>
  );
}
