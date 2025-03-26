import { Footer } from "@/app/(main)/_layout/footer";
import { Provider, Viewport } from "@radix-ui/react-toast";
import type { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider swipeDirection="right">
      {children}
      <Footer />
      <Viewport className="fixed top-0 z-100 max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-0 sm:bottom-0 sm:flex-col md:max-w-[420px]" />
    </Provider>
  );
}
