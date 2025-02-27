"use client";

import { type ComponentProps, useEffect, useState } from "react";
import { cn } from "../utils/cn";

export function HeaderWrapper(
	props: Omit<ComponentProps<"header">, "className">,
) {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 0);
	};

	useEffect(() => {
		if (typeof window === "undefined") return;

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<header
			className={cn(
				"p-4 w-full flex items-center justify-between fixed z-50 text-slate-100 transition-colors duration-500",
				isScrolled
					? "bg-white/10 shadow-lg backdrop-blur-sm"
					: "bg-transparent ",
			)}
			{...props}
		/>
	);
}
