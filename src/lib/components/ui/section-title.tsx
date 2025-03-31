import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";
import { MotionInView } from "../animations/motion-in-view";

export function AnimatedSectionTitle(props: ComponentProps<"h2">) {
  return (
    <MotionInView className="motion-safe:motion-preset-slide-up-lg">
      <SectionTitle {...props} />
    </MotionInView>
  );
}

export function SectionTitle({ className, ...rest }: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-center text-3xl font-semibold text-sky-700 lg:text-4xl",
        className,
      )}
      {...rest}
    />
  );
}
