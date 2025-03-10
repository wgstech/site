import type { ComponentProps } from "react";

export function ExternalLink({
	...props
}: Omit<ComponentProps<"a">, "rel" | "target" | "className">) {
	return (
		<a
			{...props}
			className="flex items-center gap-2 text-sm text-neutral-200 transition-colors hover:text-white"
			rel="noreferrer"
			target="_blank"
		/>
	);
}
