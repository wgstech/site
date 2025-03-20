"use client";

import { useIntersectionObserver } from "@react-hooks-library/core";
import { type ComponentProps, useRef } from "react";
import { cn } from "../lib/utils/cn";

export function MotionInView({ className, ...rest }: ComponentProps<"div">) {
  const ref = useRef(null);
  const { inView } = useIntersectionObserver(ref, { threshold: 0.3 });

  return (
    <div
      ref={ref}
      className={cn(
        className,
        inView ? "motion-safe:motion-running" : "motion-safe:motion-paused",
      )}
      {...rest}
    />
  );
}
