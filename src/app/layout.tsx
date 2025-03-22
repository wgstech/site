import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./_styles/globals.css";

export const metadata = {
  title: "WGS Tech",
  applicationName: "WGS Tech",
  description: "Excelência e Compromisso em Suporte Técnico de TI",
  keywords: ["WGS", "Tech", "WGSTech", "Suporte", "TI", "Consultoria"],
  authors: { name: "Leonardo Gurgel", url: "https://gurgel.io" },
  creator: "Leonardo Gurgel",
  publisher: "WGSTech",
  robots: {
    follow: true,
    index: true,
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
        <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen scroll-smooth bg-slate-100 text-slate-900 antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
