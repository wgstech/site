import type { Icon, IconWeight } from "@phosphor-icons/react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../atoms/input";
import { TextArea } from "../atoms/text-area";

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
