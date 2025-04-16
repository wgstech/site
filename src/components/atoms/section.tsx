import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const sectionVariants = tv({
	base: "py-30 *:container",
	variants: {
		color: {
			white: "bg-white",
			slate: "bg-slate-50",
			blue: "bg-gradient-to-br from-blue-500 to-cyan-700",
			dark: "bg-blue-800",
		},
	},
	defaultVariants: {
		color: "slate",
	},
});

interface SectionProps extends ComponentProps<"section"> {
	id: string;
}

export function Section({
	children,
	className,
	color,
	...rest
}: SectionProps & VariantProps<typeof sectionVariants>) {
	return (
		<section {...rest} className={sectionVariants({ color, className })}>
			{children}
		</section>
	);
}
