import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { Navbar } from "@/components/organisms/navbar";
import { PricingSection } from "./components/pricing-section";

export const dynamic = "force-static";

export default function PricingPage() {
	return (
		<main>
			<div className="flex h-screen w-full flex-col">
				<Navbar className="bg-slate-800 text-white" />
				<SectionTitle className="mt-30">
					Preços Transparentes para Sua Tranquilidade
				</SectionTitle>
				<SectionSubtitle>
					Escolha o plano que melhor se adapta às suas necessidades.
					<br />
					Cancele a qualquer momento.
				</SectionSubtitle>
				<PricingSection />
			</div>
		</main>
	);
}
