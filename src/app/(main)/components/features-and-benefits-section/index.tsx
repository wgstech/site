import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { Button } from "@/components/atoms/button";
import { Section } from "@/components/atoms/section";
import { SectionTitle } from "@/components/molecules/section-title";
import { benefits } from "@/lib/constants/benefits";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { BenefitCard } from "./benefit-card";

export function FeaturesAndBenefits() {
  return (
    <Section
      id="beneficios"
      className="flex flex-col items-center justify-center gap-20"
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
      <MotionInView className="motion-safe:motion-preset-fade-lg motion-delay-900 mx-auto flex justify-center-safe">
        <Button size="md" type="button" asChild>
          <Link href="/precos">
            Estou interessado
            <ArrowRight weight="bold" />
          </Link>
        </Button>
      </MotionInView>
    </Section>
  );
}
