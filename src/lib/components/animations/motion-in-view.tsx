"use client";

import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";
import { cn } from "@/lib/utils/cn";
import type { ComponentProps, ElementType } from "react";

type MotionInViewProps<T extends ElementType> = ComponentProps<T> & {
  threshold?: number;
  as?: T;
};

export function MotionInView<T extends ElementType = "div">({
  className,
  as = "div",
  ...rest
}: MotionInViewProps<T>) {
  const [ref, didIntersect] = useIntersectionOnce();
  const Component = as;

  return (
    <Component
      ref={ref}
      className={cn(
        className,
        didIntersect
          ? "motion-safe:motion-running"
          : "motion-safe:motion-paused",
      )}
      {...rest}
    />
  );
}
