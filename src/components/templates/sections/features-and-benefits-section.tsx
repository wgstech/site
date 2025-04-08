import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import { Button } from "@/components/atoms/button";
import { SectionTitle } from "@/components/molecules/section-title";
import {
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { BenefitCard } from "../../organisms/benefit-card";
import { benefits } from "@/lib/constants/benefits";

export function FeaturesAndBenefits() {
  return (
    <section
      id="beneficios"
      className="container flex py-30 flex-col items-center justify-center gap-30"
    >
      <SectionTitle>
        Recursos e Benefícios que Impulsionam Seu Sucesso
      </SectionTitle>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-12">
        {benefits.map(benefit => <BenefitCard key={benefit.title} {...benefit}>{benefit.description}</BenefitCard>)}
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
