import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const sectionVariants = tv({
  base: "py-32 md:py-56",
  variants: {
    color: {
      white: "bg-white",
      slate: "bg-slate-50",
      blue: "bg-gradient-to-br from-blue-500 to-cyan-700 text-white",
      dark: "bg-blue-800",
    },
    container: {
      true: "*:container",
      false: null,
    },
  },
  defaultVariants: {
    color: "slate",
    container: true,
  },
});

interface SectionProps extends ComponentProps<"section"> {
  id: string;
}

export function Section({
  children,
  className,
  container,
  color,
  ...rest
}: SectionProps & VariantProps<typeof sectionVariants>) {
  return (
    <section
      {...rest}
      className={sectionVariants({ color, container, className })}
    >
      {children}
    </section>
  );
}
