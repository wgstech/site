import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function SectionSubtitle({ className, ...rest }: ComponentProps<"p">) {
  return (
    <MotionInView className="motion-safe:motion-preset-slide-right">
      <p
        className={twMerge(
          "mt-6 text-center text-lg text-slate-700",
          className,
        )}
        {...rest}
      />
    </MotionInView>
  );
}
