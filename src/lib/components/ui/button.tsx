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
        "flex cursor-pointer items-center justify-center gap-2 leading-0 transition-all transition-discrete",
        {
          "rounded-xl p-3 md:px-4": size === "md",
          "rounded-2xl p-3 text-lg md:px-4": size === "lg",
          "rounded-2xl p-4 text-lg md:px-8": size === "xl",
        },
        {
          "button-gradient bg-gradient-to-r text-white hover:brightness-125":
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
