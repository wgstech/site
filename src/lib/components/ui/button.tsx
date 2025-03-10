import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type ButtonVariant = "normal" | "outline";
type ButtonSize = "normal" | "large";

export interface ButtonProps extends ComponentProps<"button"> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

export function Button({
	children,
	className,
	variant = "normal",
	size = "normal",
}: ButtonProps) {
	return (
		<button
			type="button"
			className={cn(
				"flex justify-center items-center gap-2 cursor-pointer transition-all transition-discrete duration-150",
				{
					"p-2 md:px-3 rounded-lg": size === "normal",
					"p-4 md:px-8 text-lg rounded-2xl": size === "large",
				},
				{
					"bg-gradient-to-r from-sky-500 to-cyan-700 text-white hover:brightness-125":
						variant === "normal",
					"bg-transparent border border-sky-600 text-sky-600 hover:text-white hover:bg-sky-700 hover:border-sky-700":
						variant === "outline",
				},
				className,
			)}
		>
			{children}
		</button>
	);
}
