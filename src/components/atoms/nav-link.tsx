import Link from "next/link";
import type { ComponentProps } from "react";

export function NavLink(props: ComponentProps<typeof Link>) {
	return (
		<Link
			className="motion-duration-200 hover:motion-safe:-motion-translate-y-out-[2px] focus-within:motion-safe:-motion-translate-y-out-[2px] cursor-pointer rounded-xl p-2 font-medium text-xs uppercase tracking-widest focus-within:text-sky-300 hover:text-sky-300"
			{...props}
		/>
	);
}
