"use client";

import { motion } from "framer-motion";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] bg-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
    </div>
  );
}
