import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight" | "gold" | "surface";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantStyles = {
      default: "glass-card",
      highlight:
        "glass-card border-[#C41230]/40 bg-[#13131F]/90 shadow-lg shadow-[#C41230]/10",
      gold: "glass-card border-[#C9A84C]/40 bg-[#13131F]/90 shadow-lg shadow-[#C9A84C]/10",
      surface: "bg-[#13131F] border border-white/8 rounded-2xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl p-6 overflow-hidden transition-all duration-300",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
