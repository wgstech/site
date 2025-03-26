import { ContactForm } from "@/lib/components/contact-form";
import { SectionContainer } from "@/lib/components/ui/section-container";
import { SectionSubtitle } from "@/lib/components/ui/section-subtitle";
import { SectionTitle } from "@/lib/components/ui/section-title";

export function ContactSection() {
  return (
    <SectionContainer id="contato" className="brand-gradient bg-gradient-to-br">
      <div className="rounded-2xl bg-slate-100 p-10 shadow-md transition-shadow focus-within:shadow-2xl hover:shadow-2xl">
        <SectionTitle>Entraremos em contato com você</SectionTitle>
        <SectionSubtitle className="text-slate-500">
          Não compartilharemos seus dados com ninguém.
        </SectionSubtitle>

        <ContactForm />
      </div>
    </SectionContainer>
  );
}
