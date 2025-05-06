import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center justify-center gap-2 rounded-xl font-semibold disabled:pointer-events-none",
  variants: {
    size: {
      md: "p-3",
      lg: "p-4 text-lg",
      xl: "px-5 py-4 text-lg",
    },
    intent: {
      normal:
        "bg-gradient-to-r from-blue-500 to-cyan-700 text-white transition-colors hover:from-blue-400 hover:to-cyan-600 disabled:from-slate-600 disabled:to-slate-600 disabled:text-slate-100",
      outline:
        "border border-blue-600 bg-transparent text-blue-600 hover:border-blue-700 hover:bg-blue-700 hover:text-white",
    },
  },
  defaultVariants: {
    size: "md",
    intent: "normal",
  },
});

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  intent,
  size,
  asChild = false,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={buttonVariants({ intent, size, className })}
      {...rest}
    />
  );
}
