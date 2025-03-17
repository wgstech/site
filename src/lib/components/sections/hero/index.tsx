import { ContactFormModal } from "@/lib/components/contact-form-modal";
import { Button } from "@/lib/components/ui/button";
import { ArrowRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { VideoBackground } from "./video-background";

export function Hero() {
  return (
    <section className="h-[90vh] p-8 flex flex-col gap-4 items-center justify-center bg-transparent text-slate-100 z-20">
      <VideoBackground />
      <h1 className="font-bold text-3xl md:text-5xl text-center motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg">
        Otimize Sua Infraestrutura de TI e Reduza Custos
      </h1>
      <p className="text-slate-300 text-balance md:text-lg text-center motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg motion-delay-700">
        Suporte de TI Estratégico para Aumentar a Produtividade e a Eficiência do Seu Negócio.
      </p>
      <div className="flex gap-8 mt-10 flex-col md:flex-row">
        <ContactFormModal>
          <Button size="large" className="motion-delay-1500 motion-safe:motion-preset-fade-lg">
            <Phone className="size-6" /> Entrar em contato
          </Button>
        </ContactFormModal>
        <Button variant="outline" size="large" className="motion-delay-1550 motion-safe:motion-preset-fade-lg">
          <ArrowRight className="size-5" />
          Quero conhecer
        </Button>
      </div>
    </section>
  );
}
