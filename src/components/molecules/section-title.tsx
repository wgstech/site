import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { MotionInView } from "../atoms/animations/motion-in-view";

export function SectionTitle({ className, ...rest }: ComponentProps<"h2">) {
  return (
    <MotionInView
      className={twMerge(
        "motion-safe:motion-preset-slide-up-lg text-center text-3xl font-semibold tracking-tight text-blue-700 lg:text-4xl",
        className,
      )}
      as="h2"
      {...rest}
    />
  );
}
