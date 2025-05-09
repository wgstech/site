import { Button } from "@/components/atoms/button";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { servicesForCompanies } from "@/lib/constants/services";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ServiceCard } from "./service-card";

export function ForCompanies() {
  return (
    <div className="*:container">
      <SectionTitle>Tudo Que Sua Empresa Precisa em TI</SectionTitle>
      <SectionSubtitle>
        Soluções completas para manter sua infraestrutura funcionando
        perfeitamente.
      </SectionSubtitle>
      <div className="justify-content-between mt-20 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
        {servicesForCompanies.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/precos">
          <Button size="md">
            Ver nossos planos <ArrowRight weight="bold" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
