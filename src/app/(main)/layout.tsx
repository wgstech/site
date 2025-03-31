import { Footer } from "@/app/(main)/_layout/footer";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Toaster />
      {children}
      <Footer />
    </>
  );
}
