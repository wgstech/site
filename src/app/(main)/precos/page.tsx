import { Navbar } from "@/components/organisms/navbar";
import { PricingSection } from "./components/pricing-section";

export default function PricingPage() {
	return (
		<main>
			<div className="flex h-screen w-full flex-col">
				<Navbar color="blue" />
				<PricingSection />
			</div>
		</main>
	);
}
