import { ContactFormModal } from "@/lib/components/contact-form-modal";
import { Button } from "@/lib/components/ui/button";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { VideoBackground } from "./components/video-background";

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 bg-transparent p-8 text-slate-100">
      <VideoBackground />
      <h1 className="motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg text-center text-pretty">
        Otimize Sua Infraestrutura de TI e Reduza Custos
      </h1>
      <p className="motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg motion-delay-700 text-center text-lg/8 text-pretty text-slate-300">
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
