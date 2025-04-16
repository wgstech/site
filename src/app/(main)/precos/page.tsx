import { Navbar } from "@/components/templates/layout/navbar";
import { PricingSection } from "@/components/templates/sections/pricing-section";

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
