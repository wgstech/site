import { cn } from "@/lib/utils/cn";
import type { ComponentProps } from "react";

export function ExternalLink({
  className,
  ...props
}: Omit<ComponentProps<"a">, "rel" | "target">) {
  return (
    <a
      {...props}
      className={cn(
        "flex items-center gap-2 rounded-md text-sm transition-colors duration-500 hover:text-sky-300",
        className,
      )}
      rel="noreferrer"
      target="_blank"
    />
  );
}
