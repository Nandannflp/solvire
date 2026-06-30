"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const GridBackground = ({ children }: { children?: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Magenta Orb Grid Background */}
      <div
       className="fixed inset-0 z-0 pointer-events-none"
       style={{
         backgroundImage: `
           linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
           linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px),
           radial-gradient(circle at 50% 60%, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.1) 40%, transparent 70%)
         `,
         backgroundSize: "40px 40px, 40px 40px, 100% 100%",
         maskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)",
         WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 100%)"
       }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
