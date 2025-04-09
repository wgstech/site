import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { Button } from "@/components/atoms/button";
import { SectionTitle } from "@/components/molecules/section-title";
import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import { benefits } from "@/lib/constants/benefits";
import { BenefitCard } from "../../organisms/benefit-card";

export function FeaturesAndBenefits() {
	return (
		<section
			id="beneficios"
			className="container flex flex-col items-center justify-center gap-30 py-30"
		>
			<SectionTitle>
				Recursos e Benefícios que Impulsionam Seu Sucesso
			</SectionTitle>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-12">
				{benefits.map((benefit) => (
					<BenefitCard key={benefit.title} {...benefit}>
						{benefit.description}
					</BenefitCard>
				))}
			</div>
			<MotionInView className="motion-safe:motion-preset-fade-lg motion-delay-900">
				<ContactFormModal>
					<Button size="lg" className="mx-auto" type="button">
						Estou interessado
						<ArrowRight weight="bold" />
					</Button>
				</ContactFormModal>
			</MotionInView>
		</section>
	);
}
