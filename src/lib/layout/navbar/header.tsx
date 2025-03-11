import Link from "next/link";
import type { ComponentProps } from "react";
import { LogoWithText } from "./logo";

export function Header() {
  return (
    <header className="w-full bg-slate-100/90 sticky top-0 z-100 backdrop-blur-sm text-slate-900">
      <nav className="px-4 mx-auto container flex items-center justify-between transition-colors duration-500">
        <LogoWithText />
        <div className="justify-end gap-8 w-full flex h-full items-center">
          <NavLink href="https://solicita.wgstech.com.br">Suporte</NavLink>
        </div>
      </nav>
    </header>
  );
}

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      className="cursor-pointer rounded-md p-2 motion-ease-in-out motion-duration-200 hover:-motion-translate-y-out-[2px] hover:text-sky-800 focus-within:-motion-translate-y-out-[2px] focus-within:text-sky-800 text-xs font-medium tracking-widest uppercase"
      {...props}
    />
  );
}
