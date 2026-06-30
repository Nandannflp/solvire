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
         background: "white",
         backgroundImage: `
           linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
           linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
           radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
         `,
         backgroundSize: "40px 40px, 40px 40px, 100% 100%",
         maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)",
         WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)"
       }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
