import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function ExternalLink({
	className,
	...props
}: Omit<ComponentProps<"a">, "rel" | "target">) {
	return (
		<a
			{...props}
			className={twMerge(
				"flex items-center gap-2 rounded-xl text-sm transition-colors hover:text-blue-300",
				className,
			)}
			rel="noreferrer"
			target="_blank"
		/>
	);
}
