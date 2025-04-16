import Link from "next/link";
import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { LogoWithText } from "@/components/atoms/logos/logo-with-text";

const navbarVariants = tv({
	slots: {
		header: "w-full transition-colors",
		container:
			"container flex items-center justify-between px-4 transition-colors",
	},
	variants: {
		color: {
			white: {
				header: "bg-white text-blue-800",
			},
			transparent: {
				header: "text-slate-50",
			},
			blue: {
				header: "bg-slate-800 text-white",
			},
		},
	},
	defaultVariants: {
		color: "transparent",
	},
});

const { header, container } = navbarVariants();

export function Navbar({ color }: VariantProps<typeof navbarVariants>) {
	return (
		<header className={header({ color })}>
			<nav className={container({ color })}>
				<LogoWithText />
				<div className="flex flex-1 items-center justify-end gap-4 sm:gap-8">
					<NavLink href="/precos">Preços</NavLink>
					<NavLink href="https://solicita.wgstech.com.br">Suporte</NavLink>
				</div>
			</nav>
		</header>
	);
}

function NavLink(props: ComponentProps<typeof Link>) {
	return (
		<Link
			className="motion-duration-200 hover:motion-safe:-motion-translate-y-out-[2px] focus-within:motion-safe:-motion-translate-y-out-[2px] cursor-pointer rounded-xl p-2 font-medium text-xs uppercase tracking-widest focus-within:text-blue-300 hover:text-blue-300"
			{...props}
		/>
	);
}
