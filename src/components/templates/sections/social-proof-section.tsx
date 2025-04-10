import { Section } from "@/components/atoms/section";
import { Stat } from "@/components/molecules/stat";
import { stats } from "@/lib/constants/stats";

export function SocialProofSection() {
	return (
		<Section id="prova-social" color="blue">
			<dl className="flex items-center justify-between max-sm:grid-cols-1">
				{stats.map((stat) => (
					<Stat key={stat.name} {...stat} />
				))}
			</dl>
		</Section>
	);
}
