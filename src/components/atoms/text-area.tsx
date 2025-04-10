import type { ComponentPropsWithRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textAreaVariants = tv({
	base: "field-sizing-content inset-shadow-sm max-h-[5lh] min-h-[3lh] w-full resize-none text-wrap rounded-xl p-3 text-slate-700 ring-2 ring-slate-800/10 focus:ring-orange-400 focus-visible:outline-none",
	variants: {
		error: {
			true: "ring-rose-500",
			false: null,
		},
	},
	defaultVariants: {
		error: false,
	},
});

export function TextArea({
	className,
	name,
	error,
	...rest
}: ComponentPropsWithRef<"textarea"> & VariantProps<typeof textAreaVariants>) {
	return (
		<textarea
			className={textAreaVariants({ error, className })}
			id={name}
			name={name}
			{...rest}
		/>
	);
}
