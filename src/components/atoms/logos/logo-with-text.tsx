import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Logo } from "./logo.svg";

interface LogoWithTextProps {
  className?: string;
  size?: number;
}

export function LogoWithText({ className, size = 45 }: LogoWithTextProps) {
  return (
    <Link
      href="/"
      className={twMerge(
        "group flex items-center gap-2 rounded-xl p-2",
        className,
      )}
    >
      <Logo width={size} height={size} />
      <span className="font-furore text-lg font-medium text-nowrap transition-colors group-hover:text-blue-500">
        WGS TECH
      </span>
    </Link>
  );
}
