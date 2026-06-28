"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function JourneyLine() {
  const { scrollYProgress } = useScroll();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!isMounted) return null;

  return (
    <div className="fixed left-4 md:left-12 top-0 bottom-0 w-[2px] bg-white/5 z-50 pointer-events-none">
      <motion.div
        className="absolute top-0 left-0 right-0 origin-top bg-solar shadow-[0_0_15px_rgba(16,185,129,0.8)]"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}
