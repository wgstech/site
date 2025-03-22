import { MotionInView } from "@/lib/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function SectionTitle({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  return (
    <MotionInView className="motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up">
      <h2 className={cn("text-center", className)} {...rest}>
        {children}
      </h2>
    </MotionInView>
  );
}
