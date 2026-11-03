import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "gold" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none rounded-xl active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-[#FF2D4E] via-[#C41230] to-[#8B0D21] text-white shadow-lg shadow-[#C41230]/25 hover:shadow-[#C41230]/40 hover:brightness-110 border border-[#FF2D4E]/30",
      gold:
        "bg-gradient-to-r from-[#F0C84A] to-[#C9A84C] text-[#06060A] font-semibold shadow-lg shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/40 hover:brightness-105 border border-[#FFF3C4]/30",
      secondary:
        "bg-[#1A1A2E] text-[#F0F0F0] hover:bg-[#25253F] border border-white/10 hover:border-white/20",
      outline:
        "bg-transparent border border-white/15 text-[#F0F0F0] hover:bg-white/5 hover:border-[#FF2D4E]/50",
      ghost:
        "bg-transparent text-[#8888A0] hover:text-white hover:bg-white/5",
      glass:
        "bg-[#13131F]/80 backdrop-blur-md border border-white/10 text-[#F0F0F0] hover:border-[#FF2D4E]/50 hover:bg-[#1A1A2E]/80",
    };

    const sizeStyles = {
      sm: "h-8 px-3.5 text-xs gap-1.5",
      md: "h-10 px-5 text-sm gap-2",
      lg: "h-12 px-7 text-base gap-2.5 font-semibold",
      icon: "h-10 w-10 p-0 text-base",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
