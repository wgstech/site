"use client";

import type { ComponentProps, ElementType } from "react";
import { twMerge } from "tailwind-merge";
import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";

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
			className={twMerge(
				"w-fit",
				className,
				didIntersect
					? "motion-safe:motion-running"
					: "motion-safe:motion-paused",
			)}
			{...rest}
		/>
	);
}
