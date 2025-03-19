import { LogoWithText } from "@/components/logo";
import Link from "next/link";
import type { ComponentProps } from "react";

export function Header() {
  return (
    <header className="w-full text-slate-100">
      <nav className="container mx-auto flex items-center justify-between px-4 transition-colors duration-500">
        <LogoWithText />
        <div className="flex size-full items-center justify-end gap-8">
          <NavLink href="https://solicita.wgstech.com.br">Suporte</NavLink>
        </div>
      </nav>
    </header>
  );
}

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      className="motion-ease-in-out motion-duration-200 hover:-motion-translate-y-out-[2px] focus-within:-motion-translate-y-out-[2px] cursor-pointer rounded-md p-2 text-xs font-medium tracking-widest uppercase focus-within:text-sky-300 hover:text-sky-300"
      {...props}
    />
  );
}
