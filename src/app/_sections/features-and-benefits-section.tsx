import { SectionContainer } from "@/components/ui/section-container";
import {
  ArrowRight,
  Cloud,
  Gear,
  LockKey,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";
import { ContactFormModal } from "../../components/contact-form-modal";
import { MotionInView } from "../../components/motion-in-view";
import { Button } from "../../components/ui/button";
import { SectionTitle } from "../../components/ui/section-title";
import { BenefitCard } from "./components/benefit-card";

export function FeaturesAndBenefits() {
  return (
    <SectionContainer id="beneficios">
      <SectionTitle>
        Recursos e Benefícios que Impulsionam Seu Sucesso
      </SectionTitle>
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-12">
        <BenefitCard
          title="Soluções Personalizadas"
          Icon={Gear}
          className="motion-delay-300"
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
      <MotionInView className="motion-delay-700 motion-safe:motion-preset-fade-lg motion-safe:motion-slide-up-lg">
        <ContactFormModal>
          <Button size="lg" className="mx-auto mt-14" type="button">
            <ArrowRight />
            Estou interessado
          </Button>
        </ContactFormModal>
      </MotionInView>
    </SectionContainer>
  );
}
