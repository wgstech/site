import { Section } from "@/components/atoms/section";
import { SectionTitle } from "@/components/molecules/section-title";
import { Stat } from "@/components/molecules/stat";
import { stats } from "@/lib/constants/stats";

export function SocialProofSection() {
	return (
		<Section id="prova-social" color="blue">
			<SectionTitle className="text-white">Nossos Números</SectionTitle>
			<dl className="mt-10 flex items-center justify-between max-sm:grid-cols-1">
				{stats.map((stat) => (
					<Stat key={stat.name} {...stat} />
				))}
			</dl>
		</Section>
	);
}
