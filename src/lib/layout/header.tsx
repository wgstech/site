import Logo from "@/assets/images/logo.svg";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/button";

export function Header() {
	return (
		<header className="p-4 w-full flex items-center justify-between text-slate-900 transition-colors duration-500 bg-slate-100/90 fixed z-100 backdrop-blur-sm">
			<nav className="flex items-center gap-8 w-full max-w-7xl mx-auto font-nunito">
				<Link href="/" className="mr-auto">
					<Image src={Logo.src} alt="" width={50} height={50} priority />
				</Link>
				<Link href="/" className="text-xs tracking-widest uppercase">
					Soluções
				</Link>
				<Link href="/" className="text-xs tracking-widest uppercase">
					Sobre
				</Link>
				<Link href="/contato" className="text-base tracking-normal">
					<Button>
						<Phone className="size-5" />
						Contato
					</Button>
				</Link>
				<Link href="/">
					<Button variant="outline">Portal do cliente</Button>
				</Link>
			</nav>
		</header>
	);
}
