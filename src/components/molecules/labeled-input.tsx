import type { Icon, IconWeight } from "@phosphor-icons/react";
import type { ComponentPropsWithRef } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
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

interface LabeledInputProps extends UseFormRegisterReturn {
	type?: "input" | "textarea";
	label: string;
	Icon?: Icon;
	iconFill?: IconWeight;
	placeholder: string;
	error?: FieldError | undefined;
}

export function LabeledInput({
	Icon,
	label,
	iconFill = "regular",
	error,
	type = "input",
	...rest
}: LabeledInputProps) {
	return (
		<fieldset className="group">
			<label className="font-medium text-lg text-slate-900" htmlFor={rest.name}>
				{label}
			</label>
			<div className="relative clear-both mt-1 flex flex-col items-center">
				{type === "input" ? (
					<>
						{Icon != null && (
							<Icon
								className="-translate-y-1/2 absolute top-1/2 left-2 size-6 text-slate-400 transition-colors group-focus-within:text-orange-400"
								weight={iconFill}
							/>
						)}
						<Input error={error != null} icon={Icon != null} {...rest} />
					</>
				) : (
					<TextArea error={error != null} {...rest} />
				)}
			</div>
			{error != null && (
				<p className="w-full text-left text-rose-500 text-sm">
					{error.message}
				</p>
			)}
		</fieldset>
	);
}

function Input({
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

function TextArea({
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
