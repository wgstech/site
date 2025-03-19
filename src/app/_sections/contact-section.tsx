import { ContactForm } from "../../components/contact-form";

export function ContactSection() {
  return (
    <div className="brand-gradient w-full bg-gradient-to-br py-30">
      <section
        id="contato"
        className="container mx-auto rounded-4xl bg-slate-100 p-10"
      >
        <h2 className="mb-5 text-2xl font-semibold text-slate-800">
          Entre em contato
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
