import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "red" | "gold" | "neutral" | "live" | "outline";
}

export function Badge({ className, variant = "red", children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors";

  const variantStyles = {
    red: "bg-[#C41230]/15 text-[#FF2D4E] border border-[#C41230]/40 shadow-sm shadow-[#C41230]/20",
    gold: "bg-[#C9A84C]/15 text-[#F0C84A] border border-[#C9A84C]/35 shadow-sm shadow-[#C9A84C]/20",
    neutral: "bg-[#1A1A2E] text-[#8888A0] border border-white/10",
    outline: "bg-transparent text-[#F0F0F0] border border-white/20",
    live: "bg-[#C41230]/20 text-white border border-[#FF2D4E]/50 pr-3.5",
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {variant === "live" && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D4E] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2D4E]"></span>
        </span>
      )}
      {children}
    </div>
  );
}
