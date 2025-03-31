import { ContactForm } from "@/lib/components/contact-form";
import { SectionSubtitle } from "@/lib/components/ui/section-subtitle";
import { SectionTitle } from "@/lib/components/ui/section-title";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-sky-500 to-cyan-700"
    >
      <div className="container rounded-2xl bg-slate-50 p-10 shadow-md transition-shadow focus-within:shadow-2xl hover:shadow-2xl">
        <SectionTitle>Entraremos em contato com você</SectionTitle>
        <SectionSubtitle className="text-slate-500">
          Não compartilharemos seus dados com ninguém.
        </SectionSubtitle>

        <ContactForm />
      </div>
    </section>
  );
}
