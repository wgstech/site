import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Link from "next/link";

export function LogoWithText() {
  return (
    <Link href="/" className="group flex items-center gap-2 p-2">
      <Image src={logo.src} alt="" width={45} height={45} priority />
      <span className="font-furore group-hover:text-logo-blue text-lg font-medium text-nowrap transition-colors">
        WGS TECH
      </span>
    </Link>
  );
}
