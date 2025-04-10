import { Section } from "@/components/atoms/section";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { PricingCard } from "@/components/organisms/pricing-card";
import { prices } from "@/lib/constants/prices";

export function PricingSection() {
	return (
		<Section id="precos" color="white">
			<div className="container">
				<SectionTitle>Preços Transparentes para Sua Tranquilidade</SectionTitle>
				<SectionSubtitle>
					Escolha o plano que melhor se adapta às suas necessidades.
					<br />
					Cancele a qualquer momento.
				</SectionSubtitle>

				<div className="lg:-mx-8 xl:-mx-4 mt-4 grid max-w-sm grid-cols-1 gap-y-16 max-md:divide-y sm:mx-auto lg:mt-20 lg:max-w-none lg:grid-cols-3 lg:divide-x">
					{prices.map((price) => (
						<PricingCard key={price.title} {...price} />
					))}
				</div>
			</div>
		</Section>
	);
}
