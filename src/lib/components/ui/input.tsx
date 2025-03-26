import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithRef } from "react";

export function Input({
  className,
  name,
  ...rest
}: ComponentPropsWithRef<"input">) {
  return (
    <input
      className={cn(
        "focus:ring-logo-orange flex w-full items-center justify-center rounded-xl p-3 text-slate-700 inset-shadow-sm ring-2 ring-slate-800/10 placeholder:text-slate-400 focus-visible:outline-none",
        className,
      )}
      id={name}
      name={name}
      {...rest}
    />
  );
}
