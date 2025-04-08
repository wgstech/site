import { Footer } from "@/components/templates/layout/footer";
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
