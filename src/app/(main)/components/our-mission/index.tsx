import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { Section } from "@/components/atoms/section";
import { SectionTitle } from "@/components/molecules/section-title";
import { Stat } from "./stat";

export function OurMission() {
  return (
    <Section id="nossa-missao" container={false} color="blue">
      <div className="px-6 max-md:text-center lg:px-8">
        <SectionTitle className="mb-20 text-center text-pretty text-white">
          Nossa Missão
        </SectionTitle>
        <div className="mx-auto mt-6 flex items-center justify-center gap-20 text-slate-100 max-md:flex-col">
          <div className="flex max-w-2xl flex-col max-md:items-center lg:flex-1">
            <MotionInView
              as="p"
              className="motion-safe:motion-preset-slide-up motion-delay-200 text-xl/8 text-pretty"
            >
              Na WGS Tech, nossa missão é oferecer suporte de TI ágil, confiável
              e sem enrolação para pequenas e médias empresas que não podem
              parar. Atuamos de forma preventiva, com monitoramento constante e
              respostas rápidas, garantindo que os sistemas dos nossos clientes
              funcionem com segurança e estabilidade.
            </MotionInView>
            <MotionInView
              as="p"
              className="motion-delay-400 motion-safe:motion-preset-slide-up mt-10 max-w-xl text-base/7 text-pretty text-slate-200"
            >
              Acreditamos que o suporte técnico deve ser claro, acessível e
              realmente resolver problemas. Por isso, nos dedicamos todos os
              dias a entregar soluções eficientes, sem burocracia, com
              atendimento humano e transparente — exatamente como gostaríamos de
              ser atendidos.
            </MotionInView>
          </div>
          <MotionInView className="motion-delay-600 motion-preset-fade flex flex-col gap-8 max-md:items-center">
            <Stat name="Ativos monitorados" value={70} hasPlus />
            {/* <Stat name="Dados interessantes" value={999} duration={1750} />
            <Stat
              name="Gigabytes em algum lugar"
              value={1275}
              duration={2000}
            /> */}
          </MotionInView>
        </div>
      </div>
    </Section>
  );
}
