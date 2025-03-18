import Link from "next/link";
import type { ComponentProps } from "react";
import { LogoWithText } from "./logo";

export function Header() {
  return (
    <header className="sticky top-0 z-100 w-full bg-slate-100/90 text-slate-900 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 transition-colors duration-500">
        <LogoWithText />
        <div className="flex h-full w-full items-center justify-end gap-8">
          <NavLink href="https://solicita.wgstech.com.br">Suporte</NavLink>
        </div>
      </nav>
    </header>
  );
}

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      className="motion-ease-in-out motion-duration-200 hover:-motion-translate-y-out-[2px] focus-within:-motion-translate-y-out-[2px] cursor-pointer rounded-md p-2 text-xs font-medium tracking-widest uppercase focus-within:text-sky-800 hover:text-sky-800"
      {...props}
    />
  );
}
