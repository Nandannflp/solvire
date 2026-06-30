"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div className={cn("min-h-screen w-full bg-white relative", className)}>
      {/* Grid Background with fade at ends */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(71,85,105,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(71,85,105,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 40%, transparent 100%)"
        }}
      />
      
      {/* Optional Orb - adapted to be subtle and neutral for the white theme */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
           backgroundImage: "radial-gradient(circle at 50% 50%, rgba(245,130,32,0.03) 0%, rgba(45,190,96,0.02) 40%, transparent 70%)"
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
