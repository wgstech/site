import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/helpers/cn";

export function Input({
	className,
	name,
	...rest
}: ComponentPropsWithRef<"input">) {
	return (
		<input
			className={cn(
				"inset-shadow-sm flex w-full items-center justify-center rounded-xl p-3 text-slate-700 ring-2 ring-slate-800/10 focus:ring-orange-400 focus-visible:outline-none",
				className,
			)}
			id={name}
			name={name}
			{...rest}
		/>
	);
}
