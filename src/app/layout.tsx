import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "@/styles/globals.css";

const furore = localFont({
	src: "../../public/fonts/Furore.woff2",
	display: "swap",
	preload: true,
	variable: "--font-furore",
	weight: "'normal'",
	style: "normal",
});

const montserrat = Montserrat({
	display: "swap",
	subsets: ["latin", "latin-ext"],
	variable: "--font-montserrat",
	weight: "variable",
	preload: true,
	style: "normal",
});

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
	themeColor: "#f8fafc",
} satisfies Viewport;

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			lang="pt-BR"
			className="w-full overflow-x-hidden scroll-smooth bg-slate-50"
		>
			<body
				className={`flex min-h-screen w-full flex-col text-slate-900 antialiased ${montserrat.variable} ${furore.variable} font-montserrat`}
			>
				<noscript>Seu navegador não suporta JavaScript.</noscript>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
