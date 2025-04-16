"use client";

import { CountUp as CountUpPrimitive } from "countup.js";
import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/helpers/prefers-reduced-motion";
import { useIntersectionOnce } from "@/lib/hooks/useIntersectionOnce";

interface CountUpProps {
	from?: number;
	to: number;
	duration: number;
}

export function CountUp({ from = 0, to, duration }: CountUpProps) {
	const [ref, didIntersect] = useIntersectionOnce();

	useEffect(() => {
		if (ref.current == null || !didIntersect || prefersReducedMotion()) return;

		const countUp = new CountUpPrimitive(ref.current, to, {
			duration,
		});
		if (!countUp.error) countUp.start();
	}, [duration, to, didIntersect, ref]);

	return (
		<span ref={ref} className="font-mono">
			{prefersReducedMotion() ? to : from}
		</span>
	);
}
