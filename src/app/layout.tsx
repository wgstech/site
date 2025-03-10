import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer } from "@/lib/layout/footer/footer";
import localFont from "next/font/local";
import { Header } from "../lib/layout/navbar/header";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	weight: ["400", "600", "700"],
	subsets: ["latin", "latin-ext"],
	display: "swap",
});

const furore = localFont({
	src: "./fonts/furore.woff2",
	weight: "400",
	display: "swap",
	variable: "--font-furore",
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
				className={`${montserrat.variable} ${furore.variable} antialiased bg-slate-100 text-slate-900 min-h-screen text-[87.5%] md:text-[100%] scroll-smooth`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
