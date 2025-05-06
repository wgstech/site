import { LogoWithText } from "@/components/atoms/logos/logo-with-text";
import Link from "next/link";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export function Navbar({ className, ...rest }: ComponentProps<"header">) {
  return (
    <header
      className={twMerge("w-full transition-colors", className)}
      {...rest}
    >
      <nav className="container flex items-center justify-between px-4 transition-colors">
        <LogoWithText />
        <div className="flex flex-1 items-center justify-end gap-4 sm:gap-8">
          <NavLink href="/precos">Preços</NavLink>
          <NavLink href="https://solicita.wgstech.com.br">Suporte</NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      prefetch
      className="motion-duration-200 hover:motion-safe:-motion-translate-y-out-[2px] focus-within:motion-safe:-motion-translate-y-out-[2px] cursor-pointer rounded-xl p-2 text-xs font-medium tracking-widest uppercase focus-within:text-blue-300 hover:text-blue-300"
      {...props}
    />
  );
}
