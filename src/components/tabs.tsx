"use client";

import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const Tabs = Root;

export function TabsList({ className, ...props }: ComponentProps<typeof List>) {
	return (
		<List
			className={twMerge(
				"inline-flex h-10 items-center justify-center rounded-full bg-slate-200 p-1 text-slate-500",
				className,
			)}
			{...props}
		/>
	);
}

export function TabsTrigger({
	className,
	...props
}: ComponentProps<typeof Trigger>) {
	return (
		<Trigger
			className={twMerge(
				"inline-flex items-center justify-center whitespace-nowrap rounded-full px-3 py-1.5 font-medium text-sm transition-all data-[state=active]:bg-white data-[state=active]:text-slate-700 data-[state=active]:shadow-md",
				className,
			)}
			{...props}
		/>
	);
}

export function TabsContent(props: ComponentProps<typeof Content>) {
	return <Content {...props} />;
}
