import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/lib/layout/header";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400", "700"],
	subsets: ["latin", "latin-ext"],
	display: "swap",
});

export const metadata = {
	title: "WGS Tech",
	applicationName: "WGS Tech",
	description: "",
	keywords: ["WGS", "Tech", "WGSTech"],
	robots: {
		follow: true,
		index: true,
	},
} satisfies Metadata;

export const viewport = {
	colorScheme: "dark",
	themeColor: "#F58634",
} satisfies Viewport;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${montserrat.variable} antialiased bg-slate-100 text-slate-900 font-montserrat min-h-screen text-[87.5%] md:text-[100%] scroll-smooth`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
