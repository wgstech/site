import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/lib/components/header";

const robotoSans = Roboto({
	variable: "--font-sans",
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
				className={`${robotoSans.variable} antialiased bg-zinc-900 text-zinc-100 font-sans min-h-screen`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
