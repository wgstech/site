import { ContactFormModal } from "@/lib/components/contact-form-modal";
import { Button } from "@/lib/components/ui/button";
import { Phone } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 bg-transparent p-8 text-slate-100">
      <h1 className="motion-safe:motion-preset-slide-up-lg text-center text-4xl font-semibold tracking-tight text-pretty md:text-5xl">
        Otimize Sua Infraestrutura de TI e Reduza Custos
      </h1>
      <p className="motion-delay-700 motion-safe:motion-preset-slide-up-lg text-center text-lg/8 text-pretty text-slate-300">
        Suporte de TI Estratégico para Aumentar a Produtividade e a Eficiência
        do Seu Negócio.
      </p>
      <div className="mt-10 flex flex-col gap-8 md:flex-row">
        <ContactFormModal>
          <Button
            size="xl"
            className="motion-delay-1500 motion-safe:motion-preset-fade-lg"
          >
            <Phone className="size-6" /> Entrar em contato
          </Button>
        </ContactFormModal>
        {/* <Button
          variant="outline"
          size="xl"
          className="motion-delay-1550 motion-safe:motion-preset-fade-lg"
        >
          <ArrowRight className="size-5" />
          Quero conhecer
        </Button> */}
      </div>
    </section>
  );
}
