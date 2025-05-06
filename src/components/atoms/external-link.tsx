import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ExternalLinkProps = Omit<ComponentProps<"a">, "rel" | "target">;

export function ExternalLink({
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      {...props}
      className={twMerge(
        "flex items-center gap-2 rounded-xl text-sm transition-colors hover:text-blue-300",
        className,
      )}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
