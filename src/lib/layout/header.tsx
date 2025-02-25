import Logo from "@/assets/images/logo.svg";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/button";

export function Header() {
	return (
		<header className="p-4 w-full flex items-center justify-between fixed text-slate-100">
			<nav className="flex items-center gap-8 w-full max-w-7xl mx-auto">
				<Link href="/" className="mr-auto">
					<Image src={Logo.src} alt="" width={50} height={50} priority />
				</Link>
				<Link href="/">Soluções</Link>
				<Link href="/">Sobre</Link>
				<Link href="/contato">
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
