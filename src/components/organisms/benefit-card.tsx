import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";
import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { cn } from "@/lib/helpers/cn";

interface BenefitCardProps extends ComponentProps<"article"> {
	title: string;
	Icon: PhosphorIcon;
}

export function BenefitCard({
	children,
	title,
	Icon,
	className,
}: BenefitCardProps) {
	return (
		<MotionInView
			as="article"
			className={cn(
				"motion-safe:motion-preset-slide-up",
				"flex max-w-[60ch] flex-col items-center gap-3 text-pretty p-8 text-center text-slate-800 text-sm md:text-lg",
				className,
			)}
		>
			<Icon
				weight="fill"
				className="size-12 text-orange-500 md:size-16 lg:size-18"
			/>
			<h3 className="font-semibold text-2xl text-sky-700 lg:text-3xl">
				{title}
			</h3>
			{children}
		</MotionInView>
	);
}
