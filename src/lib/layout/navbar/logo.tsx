import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function LogoWithText() {
	return (
		<Link href="/" className="flex items-center p-2 gap-2">
			<Image src={logo.src} alt="" width={45} height={45} priority />
			<span className="font-furore text-nowrap font-medium text-lg">
				WGS TECH
			</span>
		</Link>
	);
}
