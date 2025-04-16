import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Viewport } from "next";
import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { ReactNode } from "react";
import { furore, montserrat } from "@/lib/constants/fonts";
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
				<NuqsAdapter>{children}</NuqsAdapter>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
