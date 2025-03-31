import { MotionInView } from "@/lib/components/animations/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function AnimatedSectionSubtitle(props: ComponentProps<"p">) {
  return (
    <MotionInView className="motion-safe:motion-preset-slide-right">
      <SectionSubtitle {...props} />
    </MotionInView>
  );
}

export function SectionSubtitle({ className, ...rest }: ComponentProps<"p">) {
  return (
    <p
      className={cn("mt-6 text-center text-lg text-slate-700", className)}
      {...rest}
    />
  );
}
