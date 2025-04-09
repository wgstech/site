import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/helpers/cn";

export function TextArea({
	className,
	name,
	...rest
}: ComponentPropsWithRef<"textarea">) {
	return (
		<textarea
			className={cn(
				"field-sizing-content inset-shadow-sm max-h-[5lh] min-h-[3lh] w-full resize-none text-wrap rounded-xl p-3 text-slate-700 ring-2 ring-slate-800/10 focus:ring-orange-500 focus-visible:outline-none",
				className,
			)}
			id={name}
			name={name}
			{...rest}
		/>
	);
}
