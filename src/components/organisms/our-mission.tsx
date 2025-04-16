import { CountUp } from "@/components/atoms/animations/count-up";
import { SectionTitle } from "@/components/molecules/section-title";
import { MotionInView } from "../atoms/animations/motion-in-view";

export function OurMission() {
	return (
		<section id="nossa-missao" className="py-30">
			<div className="mx-auto max-w-fit px-6 lg:px-8">
				<SectionTitle className="w-fit text-pretty text-left">
					Nossa Missão
				</SectionTitle>
				<div className="mt-6 flex w-fit items-center gap-20 max-md:flex-col">
					<div className="justify-self-center-safe place-self-center self-center lg:w-full lg:max-w-2xl lg:flex-1">
						<MotionInView
							as="p"
							className="motion-safe:motion-preset-slide-up motion-delay-200 text-pretty text-slate-700 text-xl/8"
						>
							Na WGS Tech, nossa missão é oferecer suporte de TI ágil, confiável
							e sem enrolação para pequenas e médias empresas que não podem
							parar. Atuamos de forma preventiva, com monitoramento constante e
							respostas rápidas, garantindo que os sistemas dos nossos clientes
							funcionem com segurança e estabilidade.
						</MotionInView>
						<MotionInView
							as="p"
							className="motion-delay-400 motion-safe:motion-preset-slide-up mt-10 max-w-xl text-pretty text-base/7 text-slate-600"
						>
							Acreditamos que o suporte técnico deve ser claro, acessível e
							realmente resolver problemas. Por isso, nos dedicamos todos os
							dias a entregar soluções eficientes, sem burocracia, com
							atendimento humano e transparente — exatamente como gostaríamos de
							ser atendidos.
						</MotionInView>
					</div>
					<MotionInView className="motion-delay-600 motion-preset-fade flex flex-col space-y-8">
						<Stat name="Ativos monitorados" value={70} hasPlus />
						<Stat name="Dados interessantes" value={999} duration={1750} />
						<Stat
							name="Gigabytes em algum lugar"
							value={1275}
							duration={2000}
						/>
					</MotionInView>
				</div>
			</div>
		</section>
	);
}

interface StatProps {
	name: string;
	value: number;
	hasPlus?: boolean;
	duration?: number;
}

function Stat({ name, value, hasPlus = false, duration = 1500 }: StatProps) {
	return (
		<div className="flex flex-col-reverse gap-y-2">
			<dt className="w-fit font-medium text-slate-500 text-sm leading-7">
				{name}
			</dt>
			<dd className="w-fit font-semibold text-5xl text-blue-700 tracking-tight">
				<CountUp to={value} duration={duration} delay={800} />
				{hasPlus && "+"}
			</dd>
		</div>
	);
}
