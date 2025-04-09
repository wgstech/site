import Link from "next/link";
import { cn } from "@/lib/helpers/cn";
import { Logo } from "./logo.svg";

interface LogoWithTextProps {
	className?: string;
	size?: number;
}

export function LogoWithText({ className, size = 45 }: LogoWithTextProps) {
	return (
		<Link
			href="/"
			className={cn("group flex items-center gap-2 rounded-xl p-2", className)}
		>
			<Logo width={size} height={size} />
			<span className="text-nowrap font-furore font-medium text-lg transition-colors group-hover:text-blue-500">
				WGS TECH
			</span>
		</Link>
	);
}
