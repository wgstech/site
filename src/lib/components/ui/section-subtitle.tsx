import { MotionInView } from "@/lib/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function SectionSubtitle({
  children,
  className,
  ...rest
}: ComponentProps<"p">) {
  return (
    <MotionInView className="motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up motion-delay-200">
      <p className={cn("mt-2 text-center text-slate-700", className)} {...rest}>
        {children}
      </p>
    </MotionInView>
  );
}
