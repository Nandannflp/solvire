import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
  containerClass?: string;
  theme?: "light" | "dark" | "navy";
}

export function Section({
  children,
  className,
  containerClass,
  id,
  theme = "light",
  ...props
}: SectionProps) {
  const themeClasses = {
    light: "bg-background text-foreground", // now dark by default
    dark: "bg-[#040D17] text-white", // deep space navy
    navy: "bg-[#0B1F33] text-white", // slightly lighter navy
  };

  return (
    <section
      id={id}
      className={cn(
        "relative flex flex-col justify-center py-24 md:py-32 overflow-hidden w-full",
        themeClasses[theme],
        className
      )}
      {...props}
    >
      <div className={cn("container mx-auto px-6 md:px-12 max-w-7xl z-10", containerClass)}>
        {children}
      </div>
    </section>
  );
}
