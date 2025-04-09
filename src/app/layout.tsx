import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata = {
	title: "WGS Tech",
	applicationName: "WGS Tech",
	description: "Excelência e Compromisso em Suporte Técnico de TI",
	metadataBase: new URL("https://www.wgstech.com.br"),
	keywords: ["WGS", "Tech", "WGSTech", "Suporte", "TI", "Consultoria"],
	authors: { name: "Leonardo Gurgel", url: "https://gurgel.io" },
	creator: "Leonardo Gurgel",
	publisher: "WGS Tech",
	alternates: {
		canonical: "/",
	},
	robots: {
		follow: true,
		index: true,
	},
	openGraph: {
		type: "website",
		url: "https://www.wgstech.com.br/",
		locale: "pt_BR",
		title: "WGS Tech | Excelência e Compromisso em Suporte Técnico de TI",
		description:
			"Suporte técnico sem enrolação, para empresas que não podem parar.",
		images: "https://www.wgstech.com.br/images/og-preview.webp",
	},
	twitter: {
		card: "summary_large_image",
		title: "WGS Tech | Excelência e Compromisso em Suporte Técnico de TI",
		description:
			"Suporte técnico sem enrolação, para empresas que não podem parar.",
		images: "https://www.wgstech.com.br/images/twitter-preview.webp",
		site: "https://www.wgstech.com.br/",
	},
} satisfies Metadata;

export const viewport = {
	colorScheme: "light",
	themeColor: "#0D0A0E",
} satisfies Viewport;

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className="min-h-screen scroll-smooth bg-slate-50 text-slate-900 antialiased">
				<noscript>Seu navegador não suporta JavaScript.</noscript>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
