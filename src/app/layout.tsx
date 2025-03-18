import { Footer } from "@/lib/layout/footer/footer";
import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

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
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${furore.variable} min-h-screen scroll-smooth bg-slate-100 text-[87.5%] text-slate-900 antialiased md:text-[100%]`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
