import type { Metadata, Viewport } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto_Flex({
	variable: "--font-roboto-flex",
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
				className={`${robotoSans.variable} antialiased bg-zinc-900 text-zinc-100`}
			>
				<div className="flex min-h-screen flex-col items-start justify-center">
					<header className="mx-auto w-full max-w-7xl py-8"></header>
					{children}
				</div>
			</body>
		</html>
	);
}
