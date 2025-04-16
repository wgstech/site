import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { MotionInView } from "../atoms/animations/motion-in-view";

export function SectionTitle({ className, ...rest }: ComponentProps<"h2">) {
	return (
		<MotionInView className="motion-safe:motion-preset-slide-up-lg">
			<h2
				className={twMerge(
					"text-center font-semibold text-3xl text-blue-700 tracking-tight lg:text-4xl",
					className,
				)}
				{...rest}
			/>
		</MotionInView>
	);
}
