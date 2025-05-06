"use client";

import { prefersReducedMotion } from "@/lib/helpers/prefers-reduced-motion";
import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";
import { CountUp as CountUpPrimitive } from "countup.js";
import { useEffect } from "react";

interface CountUpProps {
  from?: number;
  to: number;
  duration: number;
  delay?: number;
}

export function CountUp({ from = 0, to, duration, delay = 0 }: CountUpProps) {
  const [ref, didIntersect] = useIntersectionOnce();

  useEffect(() => {
    setTimeout(() => {
      if (ref.current == null || !didIntersect || prefersReducedMotion())
        return;

      const countUp = new CountUpPrimitive(ref.current, to, {
        duration: duration / 1000,
      });
      if (!countUp.error) countUp.start();
    }, delay);
  }, [duration, to, didIntersect, ref, delay]);

  return <span ref={ref}>{prefersReducedMotion() ? to : from}</span>;
}
