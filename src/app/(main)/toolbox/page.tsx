import type { Metadata } from "next";
import { ToolCard } from "@/app/(main)/toolbox/components/tool-card";
import { Navbar } from "@/components/organisms/navbar";
import { tools } from "@/lib/constants/tools";

export const metadata = {
	robots: {
		index: false,
		follow: false,
	},
} satisfies Metadata;

export default function Toolbox() {
	return (
		<div className="flex grow flex-col bg-slate-800">
			<Navbar />
			<main className="container mx-auto inline-grid grid-cols-1 content-center justify-center justify-items-center gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{tools.map((tool) => (
					<ToolCard key={tool.name} {...tool} />
				))}
			</main>
		</div>
	);
}
