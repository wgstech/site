import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
	base: "flex items-center justify-center gap-2 rounded-xl font-semibold disabled:pointer-events-none",
	variants: {
		size: {
			md: "px-3 py-2",
			lg: "px-4 py-4 text-lg",
			xl: "px-5 py-4 text-lg",
		},
		intent: {
			normal:
				"bg-gradient-to-r from-blue-500 to-cyan-700 text-white transition-colors transition-discrete hover:brightness-125 disabled:from-slate-600 disabled:to-slate-600 disabled:text-slate-100",
			outline:
				"border border-blue-600 bg-transparent text-blue-600 hover:border-blue-700 hover:bg-blue-700 hover:text-white",
		},
	},
	defaultVariants: {
		size: "md",
		intent: "normal",
	},
});

export function Button({
	className,
	intent,
	size,
	...rest
}: ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
	return (
		<button
			type="button"
			className={buttonVariants({ intent, size, className })}
			{...rest}
		/>
	);
}
