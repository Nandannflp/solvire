import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

interface TrustBadgeProps {
  className?: string;
  text?: string;
  pulse?: boolean;
}

export function TrustBadge({ className, text = "Verified Partner", pulse = true }: TrustBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-solar/10 px-3 py-1 text-xs font-semibold text-solar border border-solar/20",
        pulse && "badge-pulse",
        className
      )}
    >
      <ShieldCheck className="size-3.5" />
      <span>{text}</span>
    </div>
  );
}
