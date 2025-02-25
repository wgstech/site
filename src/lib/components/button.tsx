import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

type ButtonVariant = "normal" | "outline";
type ButtonSize = "normal" | "large";

export interface ButtonProps extends ComponentProps<"button"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

export function Button({
	children,
	variant = "normal",
	size = "normal",
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"flex items-center gap-2 cursor-pointer transition-all transition-discrete brightness-100 duration-150 hover:brightness-125",
				{
					"px-3 py-2 rounded-md": size === "normal",
					"px-8 py-4 text-lg rounded-2xl": size === "large",
					"bg-gradient-to-r from-sky-500 to-cyan-700 text-white":
						variant === "normal",
					"border border-sky-500 text-sky-500": variant === "outline",
				},
			)}
		>
			{children}
		</button>
	);
}
