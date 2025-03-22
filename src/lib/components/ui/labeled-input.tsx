import { cn } from "@/lib/utils/cn";
import type { Icon, IconWeight } from "@phosphor-icons/react";
import type { ComponentPropsWithRef } from "react";
import type { FieldError } from "react-hook-form";

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
        className="text-lg font-medium text-slate-900"
        htmlFor={register.name}
      >
        {label}
      </label>
      <div className="relative clear-both mt-1 flex flex-col items-center">
        {Icon != null && (
          <Icon
            className="group-focus-within:text-logo-orange absolute top-1/2 left-2 size-6 -translate-y-1/2 text-slate-400 transition-colors"
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
        <p className="w-full text-left text-sm text-rose-500">
          {error.message}
        </p>
      )}
    </fieldset>
  );
}

function Input({ className, name, ...rest }: ComponentPropsWithRef<"input">) {
  return (
    <input
      className={cn(
        "focus:ring-logo-orange flex w-full items-center justify-center rounded-lg p-3 text-slate-700 inset-shadow-sm ring-1 ring-slate-800/10 placeholder:text-slate-400",
        className,
      )}
      id={name}
      name={name}
      {...rest}
    />
  );
}

function TextArea({
  className,
  name,
  ...rest
}: ComponentPropsWithRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "focus:ring-logo-orange mt-1 field-sizing-content max-h-[5lh] min-h-[3lh] w-full resize-none rounded-lg p-2 text-wrap text-slate-700 inset-shadow-sm ring-1 ring-slate-800/10 placeholder:text-slate-400",
        className,
      )}
      id={name}
      name={name}
      {...rest}
    />
  );
}

/*
  <textarea
    className="mt-1 resize-none text-wrap field-sizing-content w-full min-h-[3lh] max-h-[5lh] rounded-lg p-2 text-slate-700 placeholder:text-slate-400 inset-shadow-sm ring-1 ring-slate-800/10 focus:ring-logo-orange"
    id={name}
    name={name}
    {...rest}
  />
*/
