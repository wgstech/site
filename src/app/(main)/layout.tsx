import { Footer } from "@/app/(main)/_layout/footer";
import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
