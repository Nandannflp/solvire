"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ["1px solid rgba(255, 255, 255, 0)", "1px solid rgba(255, 255, 255, 0.05)"]
  );

  return (
    <motion.header
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 h-20 flex items-center"
    >
      <div className="container mx-auto px-6 md:pl-28 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.svg"
            alt="Solvire Logo"
            width={140}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Problem</a>
          <a href="#purpose" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Purpose</a>
          <a href="#services" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Services</a>
          <a href="#roadmap" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Roadmap</a>
        </nav>
      </div>
    </motion.header>
  );
}
