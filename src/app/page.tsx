import { Button } from "@/lib/components/ui/button";
import { VideoBackground } from "@/lib/layout/video-background";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { BenefitsSection } from "./benefits-section";

export default function Home() {
  return (
    <main className="mx-auto grid grid-flow-row gap-32 bg-slate-100">
      <section className="h-[95vh] p-8 flex flex-col gap-4 items-center justify-center bg-transparent text-slate-100 z-20">
        <VideoBackground />
        <h1 className="font-bold text-3xl md:text-5xl text-center motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg">
          Otimize Sua Infraestrutura de TI e Reduza Custos
        </h1>
        <p className="text-slate-300 text-balance md:text-lg text-center motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg motion-delay-700">
          Suporte de TI Estratégico para Aumentar a Produtividade e a Eficiência do Seu Negócio.
        </p>
        <div className="flex gap-8 mt-10 flex-col md:flex-row">
          <Button size="large" className="motion-delay-1500 motion-safe:motion-preset-fade-lg">
            <Phone className="size-6" /> Entrar em contato
          </Button>
          <Button variant="outline" size="large" className="motion-delay-1550 motion-safe:motion-preset-fade-lg">
            <ArrowRight className="size-5" />
            Quero conhecer
          </Button>
        </div>
      </section>
      <BenefitsSection />
      <section className="bg-sky-950">
        <h2>Quem Somos</h2>
        <p>
          A WGS Tech nasceu da paixão por tecnologia e do desejo de simplificar o gerenciamento de TI para empresas e
          organizações. Sabemos que o sucesso de qualquer negócio depende de uma infraestrutura de TI confiável e
          eficiente, e é exatamente isso que nos motiva. Somos especialistas em suporte técnico, oferecendo soluções
          abrangentes e personalizadas para atender às necessidades específicas de cada cliente. Nossa equipe é formada
          por profissionais altamente qualificados e certificados, com experiência em diversas áreas de TI, incluindo
          redes, segurança da informação, suporte a servidores, computação em nuvem e manutenção preventiva.
        </p>
      </section>
      <section className="bg-sky-800 p-8">
        <h2>Nossa Missão e Valores</h2>
        <p>
          <strong>Missão:</strong> Fornecer suporte técnico confiável e eficiente, capacitando empresas a focarem em
          seus objetivos de negócio, enquanto cuidamos de suas operações de TI com seriedade e competência.
        </p>
        <div>
          <strong>Valores:</strong>
          <ul className="list-disc list-inside">
            <li>
              <strong>Compromisso com a Qualidade:</strong> Cada solução é projetada para atender aos mais altos padrões
              de qualidade e confiabilidade.
            </li>
            <li>
              <strong>Inovação Contínua:</strong> Estamos sempre atualizados com as tendências e inovações tecnológicas
              para oferecer o melhor aos nossos clientes.
            </li>
            <li>
              <strong>Foco no Cliente:</strong> Suas necessidades são a nossa prioridade. Trabalhamos para entender e
              solucionar problemas de maneira personalizada.
            </li>
            <li>
              <strong>Ética e Transparência:</strong> Construímos relacionamentos baseados na confiança, comunicando de
              forma clara e honesta.
            </li>
            <li>
              <strong>Sustentabilidade:</strong> Enxergamos a tecnologia como uma aliada para criar um futuro mais
              sustentável, adotando práticas que minimizem impactos ambientais.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
