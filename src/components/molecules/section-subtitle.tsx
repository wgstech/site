import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { cn } from "@/lib/helpers/cn";
import type { ComponentProps } from "react";

export function SectionSubtitle({ className, ...rest }: ComponentProps<"p">) {
	return (
		<MotionInView className="motion-safe:motion-preset-slide-right">
			<p
				className={cn("mt-6 text-center text-lg text-slate-700", className)}
				{...rest}
			/>
		</MotionInView>
	);
}
