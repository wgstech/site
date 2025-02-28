import MotionInView from "@/lib/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

interface BenefitCardProps extends ComponentProps<typeof MotionInView> {
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
			className={cn(
				"flex flex-col items-center gap-3 p-8",
				"text-slate-800 text-center text-balance text-sm md:text-base",
				"motion-safe:motion-preset-fade-lg motion-safe:motion-slide-up-lg",
				className,
			)}
		>
			<Icon weight="fill" className="size-12 md:size-15 text-sky-800" />
			<h3 className="font-semibold font-montserrat text-xl md:text-2xl text-sky-800">
				{title}
			</h3>
			{children}
		</MotionInView>
	);
}
