import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/organisms/footer";

export default function Layout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			<Toaster />
			{children}
			<Footer />
		</>
	);
}
