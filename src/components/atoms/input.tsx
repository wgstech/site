import type { ComponentPropsWithRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
	base: "inset-shadow-sm flex w-full items-center justify-center rounded-xl p-3 text-slate-700 ring-2 ring-slate-800/10 focus:ring-orange-400 focus-visible:outline-none",
	variants: {
		error: {
			true: "ring-rose-500",
			false: null,
		},
		icon: {
			true: "pl-10",
			false: null,
		},
	},
	defaultVariants: {
		error: false,
		icon: false,
	},
});

export function Input({
	className,
	name,
	error,
	icon,
	...rest
}: ComponentPropsWithRef<"input"> & VariantProps<typeof inputVariants>) {
	return (
		<input
			className={inputVariants({ error, icon, className })}
			id={name}
			name={name}
			{...rest}
		/>
	);
}
