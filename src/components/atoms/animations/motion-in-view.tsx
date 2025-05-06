"use client";

import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";
import { twMerge, type ClassNameValue } from "tailwind-merge";

type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & { as?: E }
>;

type MotionInViewProps<T extends ElementType> = PolymorphicProps<T> & {
  threshold?: number;
  className?: ClassNameValue;
};

export function MotionInView<T extends ElementType = "div">({
  className,
  as,
  ...rest
}: MotionInViewProps<T>) {
  const [ref, didIntersect] = useIntersectionOnce();
  const Component = (as ?? "div") satisfies ElementType;

  return (
    <Component
      ref={ref}
      className={twMerge(
        className,
        didIntersect
          ? "motion-safe:motion-running"
          : "motion-safe:motion-paused",
      )}
      {...rest}
    />
  );
}
