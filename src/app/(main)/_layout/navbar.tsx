import { LogoWithText } from "@/lib/components/logos/logo-with-text";
import { NavLink } from "./components/nav-link";

export function Navbar() {
  return (
    <header className="w-full text-slate-100">
      <nav className="container mx-auto flex items-center justify-between px-4 transition-colors">
        <LogoWithText />
        <div className="flex flex-1 items-center justify-end gap-8">
          <NavLink href="https://solicita.wgstech.com.br">Suporte</NavLink>
        </div>
      </nav>
    </header>
  );
}
