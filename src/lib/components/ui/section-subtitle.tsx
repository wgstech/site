import { MotionInView } from "@/lib/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function SectionSubtitle({
  children,
  className,
  ...rest
}: ComponentProps<"p">) {
  return (
    <MotionInView
      className={cn(
        "motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up motion-delay-200 mt-6 text-center text-lg text-slate-700",
        className,
      )}
      {...rest}
      as="p"
    >
      {children}
    </MotionInView>
  );
}
