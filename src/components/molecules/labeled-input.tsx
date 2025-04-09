import type { Icon, IconWeight } from "@phosphor-icons/react";
import type { ComponentPropsWithRef } from "react";
import type { FieldError } from "react-hook-form";
import { cn } from "@/lib/helpers/cn";
import { Input } from "../atoms/input";
import { TextArea } from "../atoms/text-area";

interface LabeledInputProps<T extends "input" | "textarea"> {
	label: string;
	placeholder?: string;
	Icon?: Icon;
	iconFill?: IconWeight;
	error?: FieldError | undefined;
	register: ComponentPropsWithRef<T>;
	type: T;
}

export function LabeledInput<T extends "input" | "textarea">({
	Icon,
	label,
	iconFill = "regular",
	error,
	placeholder,
	type,
	register,
}: LabeledInputProps<T>) {
	return (
		<fieldset className="group">
			<label
				className="font-medium text-lg text-slate-900"
				htmlFor={register.name}
			>
				{label}
			</label>
			<div className="relative clear-both mt-1 flex flex-col items-center">
				{Icon != null && (
					<Icon
						className="-translate-y-1/2 absolute top-1/2 left-2 size-6 text-slate-400 transition-colors group-focus-within:text-orange-400"
						weight={iconFill}
					/>
				)}
				{type === "input" ? (
					<Input
						name={register.name}
						className={cn({
							"ring-rose-500": error != null,
							"pl-10": Icon != null,
						})}
						placeholder={placeholder}
						{...(register as ComponentPropsWithRef<"input">)}
					/>
				) : (
					<TextArea
						name={register.name}
						className={cn({
							"ring-rose-500": error != null,
							"pl-6": Icon != null,
						})}
						placeholder={placeholder}
						{...(register as ComponentPropsWithRef<"textarea">)}
					/>
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
