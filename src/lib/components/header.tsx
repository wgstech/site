import Logo from "@/assets/images/logo-with-text.png";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="p-4 w-full flex items-center justify-between bg-gray-800">
			<nav className="flex items-center gap-8 w-full max-w-7xl mx-auto">
				<Link href="/">
					<Image src={Logo.src} alt="" width={128} height={128} />
				</Link>
				<Link href="/">Soluções</Link>
				<Link href="/">Sobre</Link>
				<Link
					href="/"
					className="bg-sky-500 text-white rounded-md px-3 py-2 ml-auto"
				>
					Contato
				</Link>
				<Link
					href="/"
					className="border border-sky-500 text-sky-500 rounded-md px-3 py-2"
				>
					Portal do cliente
				</Link>
			</nav>
		</header>
	);
}
