"use client";

import { motion } from "framer-motion";

export function SyncDot() {
  return (
    <div className="absolute left-4 md:left-[48px] top-32 -translate-x-1/2 flex items-center justify-center z-40 hidden md:flex">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.5 }}
        className="w-4 h-4 rounded-full bg-background border-2 border-solar shadow-[0_0_10px_rgba(16,185,129,0.5)] flex items-center justify-center"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-solar" />
      </motion.div>
    </div>
  );
}
