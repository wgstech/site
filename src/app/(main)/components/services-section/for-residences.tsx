import { Button } from "@/components/atoms/button";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import { servicesForResidences } from "@/lib/constants/services";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { ServiceCard } from "./service-card";

export function ForResidences() {
  return (
    <div className="*:container">
      <SectionTitle>Suporte Profissional Também na Sua Casa</SectionTitle>
      <SectionSubtitle>
        De computadores lentos a problemas de rede — cuidamos da tecnologia da
        sua residência com a mesma excelência que oferecemos às empresas.
      </SectionSubtitle>
      <div className="justify-content-between mt-20 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
        {servicesForResidences.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <ContactFormModal>
          <Button size="md">
            <Phone className="size-6" /> Entrar em contato
          </Button>
        </ContactFormModal>
      </div>
    </div>
  );
}
