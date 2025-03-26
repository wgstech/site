import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function SectionContainer({
  children,
  className,
  id,
  ...rest
}: ComponentProps<"section">) {
  return (
    <div className={cn("w-full px-2 py-30", className)}>
      <section id={id} className="container mx-auto" {...rest}>
        {children}
      </section>
    </div>
  );
}
