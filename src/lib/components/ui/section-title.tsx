import { MotionInView } from "@/lib/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function SectionTitle({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  return (
    <MotionInView
      className={cn(
        "motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up text-center text-3xl font-semibold text-sky-700 lg:text-4xl",
        className,
      )}
      as="h2"
      {...rest}
    >
      {children}
    </MotionInView>
  );
}
