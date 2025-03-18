import { cn } from "@/lib/utils/cn";
import { Cloud, Gear, LockKey, TrendUp } from "@phosphor-icons/react/dist/ssr";
import { BenefitCard } from "./benefit-card";

export function FeaturesAndBenefits() {
  return (
    <section
      id="beneficios"
      className={cn(
        "container mx-auto flex min-h-[95vh] flex-col items-center bg-slate-100",
      )}
    >
      <h2 className="text-center text-3xl font-extrabold text-sky-700 md:text-4xl">
        Recursos e Benefícios que Impulsionam Seu Sucesso
      </h2>
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-12">
        <BenefitCard
          title="Soluções Personalizadas"
          Icon={Gear}
          className="motion-delay-0"
        >
          Entendemos que cada empresa é única. Por isso, oferecemos soluções de
          TI personalizadas para atender às suas necessidades e objetivos
          específicos.
        </BenefitCard>
        <BenefitCard
          title="Otimização de Infraestrutura"
          Icon={TrendUp}
          className="motion-delay-400"
        >
          Analisamos sua infraestrutura de TI e implementamos as melhores
          práticas para otimizar o desempenho, reduzir custos e aumentar a
          segurança.
        </BenefitCard>
        <BenefitCard
          title="Segurança da Informação"
          Icon={LockKey}
          className="motion-delay-500"
        >
          Implementamos soluções de segurança robustas para proteger seus dados
          e sua empresa contra vírus, hackers e outras ameaças cibernéticas.
        </BenefitCard>
        <BenefitCard
          title="Computação em Nuvem"
          Icon={Cloud}
          className="motion-delay-600"
        >
          A computação em nuvem oferece flexibilidade, escalabilidade e economia
          para o seu negócio. Ajudamos você a migrar para a nuvem de forma
          segura e eficiente.
        </BenefitCard>
      </div>
    </section>
  );
}
