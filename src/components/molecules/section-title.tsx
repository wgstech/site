import type { ComponentProps } from "react";
import { cn } from "@/lib/helpers/cn";
import { MotionInView } from "../atoms/animations/motion-in-view";

export function SectionTitle({ className, ...rest }: ComponentProps<"h2">) {
	return (
		<MotionInView className="motion-safe:motion-preset-slide-up-lg">
			<h2
				className={cn(
					"text-center font-semibold text-3xl text-sky-700 lg:text-4xl",
					className,
				)}
				{...rest}
			/>
		</MotionInView>
	);
}
