import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

type ButtonVariant = "normal" | "outline";
type ButtonSize = "md" | "lg" | "xl";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  children,
  className,
  variant = "normal",
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 rounded-xl font-semibold disabled:pointer-events-none",
        {
          "px-3 py-2": size === "md",
          "px-4 py-3 text-lg": size === "lg",
          "px-5 py-4 text-lg": size === "xl",
        },
        {
          "bg-gradient-to-r from-sky-500 to-cyan-700 text-white transition-colors transition-discrete hover:brightness-125 disabled:from-slate-600 disabled:to-slate-600 disabled:text-slate-100":
            variant === "normal",
          "border border-sky-600 bg-transparent text-sky-600 hover:border-sky-700 hover:bg-sky-700 hover:text-white":
            variant === "outline",
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
