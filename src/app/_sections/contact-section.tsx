import { SectionContainer } from "@/components/ui/section-container";
import { ContactForm } from "../../components/contact-form";
import { SectionTitle } from "../../components/ui/section-title";

export function ContactSection() {
  return (
    <SectionContainer id="contato" className="brand-gradient bg-gradient-to-br">
      <div className="rounded-4xl bg-slate-100 p-10 shadow-md transition-shadow focus-within:shadow-2xl hover:shadow-2xl">
        <SectionTitle className="mb-5">Entre em contato</SectionTitle>

        <ContactForm />
      </div>
    </SectionContainer>
  );
}
