import { Section } from "@/components/atoms/section";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { ServiceCard } from "@/components/organisms/service-card";
import { services } from "@/lib/constants/services";

export function ServicesSection() {
	return (
		<Section id="serviços">
			<SectionTitle>Tudo Que Sua Empresa Precisa em TI</SectionTitle>
			<SectionSubtitle>
				Soluções completas para manter sua infraestrutura funcionando
				perfeitamente.
			</SectionSubtitle>
			<div className="justify-content-between mt-20 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
				{services.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</div>
		</Section>
	);
}
