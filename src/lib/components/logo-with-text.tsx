import { Logo } from "@/lib/components/logo.svg";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

interface LogoWithTextProps {
  className?: string;
  size?: number;
}

export function LogoWithText({ className, size = 45 }: LogoWithTextProps) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-2 rounded-md p-2", className)}
    >
      <Logo width={size} height={size} />
      <span className="font-furore group-hover:text-logo-blue text-lg font-medium text-nowrap transition-colors">
        WGS TECH
      </span>
    </Link>
  );
}
