import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

export const furore = localFont({
  src: "../../../public/fonts/Furore.woff2",
  display: "swap",
  preload: true,
  variable: "--font-furore",
  weight: "'normal'",
  style: "normal",
});

export const montserrat = Montserrat({
  display: "swap",
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: "variable",
  preload: true,
  style: "normal",
});
