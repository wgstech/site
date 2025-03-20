import { MotionInView } from "@/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function SectionTitle({
  children,
  className,
  ...rest
}: ComponentProps<"h2">) {
  return (
    <MotionInView className="motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up">
      <h2
        className={cn(
          "text-center text-3xl font-extrabold text-sky-700 md:text-4xl",
          className,
        )}
        {...rest}
      >
        {children}
      </h2>
    </MotionInView>
  );
}
