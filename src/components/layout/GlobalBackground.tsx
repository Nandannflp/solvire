"use client";

import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {/* Soft radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-energy/10 rounded-full blur-[150px] opacity-70" />
      
      {/* Uniform grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem]" />

      {/* Minimal technical overlays / Energy lines */}
      <div className="absolute top-1/3 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-energy to-transparent opacity-50" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-[1px] bg-gradient-to-r from-transparent via-solar to-transparent opacity-50" />
      <div className="absolute top-1/4 right-1/3 w-[1px] h-32 bg-gradient-to-b from-transparent via-energy to-transparent opacity-30" />
    </div>
  );
}
