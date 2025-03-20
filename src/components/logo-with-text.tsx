import logo from "@/assets/images/logo.svg";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
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
      <Image src={logo.src} alt="" width={size} height={size} priority />
      <span className="font-furore group-hover:text-logo-blue text-lg font-medium text-nowrap transition-colors duration-500">
        WGS TECH
      </span>
    </Link>
  );
}
