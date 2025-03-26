import { ContactFormModal } from "@/lib/components/contact-form-modal";
import { MotionInView } from "@/lib/components/motion-in-view";
import { Button } from "@/lib/components/ui/button";
import { SectionContainer } from "@/lib/components/ui/section-container";
import { SectionTitle } from "@/lib/components/ui/section-title";
import {
  ArrowRight,
  CurrencyDollarSimple,
  Gear,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { BenefitCard } from "./components/benefit-card";

export function FeaturesAndBenefits() {
  return (
    <SectionContainer id="beneficios">
      <SectionTitle>
        Recursos e Benefícios que Impulsionam Seu Sucesso
      </SectionTitle>
      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-12">
        <BenefitCard
          title="Soluções Personalizadas"
          Icon={Gear}
          className="motion-delay-300"
        >
          Soluções de TI personalizadas para atender às suas necessidades e
          objetivos específicos.
        </BenefitCard>
        <BenefitCard
          title="Redução de Custos"
          Icon={CurrencyDollarSimple}
          className="motion-delay-400"
        >
          Consultoria para identificar e eliminar desperdícios na sua
          infraestrutura.
        </BenefitCard>
        <BenefitCard
          title="Proteção Máxima"
          Icon={ShieldCheck}
          className="motion-delay-500"
        >
          Soluções de segurança robustas para proteger seus dados e sua empresa
          contra ameaças.
        </BenefitCard>
      </div>
      <MotionInView className="motion-delay-700 motion-safe:motion-preset-fade-lg motion-safe:motion-slide-up-lg">
        <ContactFormModal>
          <Button size="lg" className="mx-auto mt-14" type="button">
            Estou interessado
            <ArrowRight weight="bold" />
          </Button>
        </ContactFormModal>
      </MotionInView>
    </SectionContainer>
  );
}
