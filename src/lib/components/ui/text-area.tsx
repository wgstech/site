import { cn } from "@/lib/utils/cn";
import type { ComponentPropsWithRef } from "react";

export function TextArea({
  className,
  name,
  ...rest
}: ComponentPropsWithRef<"textarea">) {
  return (
    <textarea
      className={cn(
        "focus:ring-logo-orange field-sizing-content max-h-[5lh] min-h-[3lh] w-full resize-none rounded-xl p-3 text-wrap text-slate-700 ring-2 inset-shadow-sm ring-slate-800/10 focus-visible:outline-none",
        className,
      )}
      id={name}
      name={name}
      {...rest}
    />
  );
}
