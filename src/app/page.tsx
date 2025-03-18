import { Hero } from "@/lib/components/sections/hero";
import { Header } from "@/lib/layout/navbar/header";
import { FeaturesAndBenefits } from "../lib/components/sections/features-and-benefits";

export default function Home() {
  return (
    <main className="mx-auto gap-32">
      <div className="flex h-screen w-full flex-col">
        <Header />
        <Hero />
      </div>
      <FeaturesAndBenefits />
      <section className="bg-sky-950">
        <h2>Quem Somos</h2>
        <p>
          A WGS Tech nasceu da paixão por tecnologia e do desejo de simplificar
          o gerenciamento de TI para empresas e organizações. Sabemos que o
          sucesso de qualquer negócio depende de uma infraestrutura de TI
          confiável e eficiente, e é exatamente isso que nos motiva. Somos
          especialistas em suporte técnico, oferecendo soluções abrangentes e
          personalizadas para atender às necessidades específicas de cada
          cliente. Nossa equipe é formada por profissionais altamente
          qualificados e certificados, com experiência em diversas áreas de TI,
          incluindo redes, segurança da informação, suporte a servidores,
          computação em nuvem e manutenção preventiva.
        </p>
      </section>
      <section className="bg-sky-800 p-8">
        <h2>Nossa Missão e Valores</h2>
        <p>
          <strong>Missão:</strong> Fornecer suporte técnico confiável e
          eficiente, capacitando empresas a focarem em seus objetivos de
          negócio, enquanto cuidamos de suas operações de TI com seriedade e
          competência.
        </p>
        <div>
          <strong>Valores:</strong>
          <ul className="list-inside list-disc">
            <li>
              <strong>Compromisso com a Qualidade:</strong> Cada solução é
              projetada para atender aos mais altos padrões de qualidade e
              confiabilidade.
            </li>
            <li>
              <strong>Inovação Contínua:</strong> Estamos sempre atualizados com
              as tendências e inovações tecnológicas para oferecer o melhor aos
              nossos clientes.
            </li>
            <li>
              <strong>Foco no Cliente:</strong> Suas necessidades são a nossa
              prioridade. Trabalhamos para entender e solucionar problemas de
              maneira personalizada.
            </li>
            <li>
              <strong>Ética e Transparência:</strong> Construímos
              relacionamentos baseados na confiança, comunicando de forma clara
              e honesta.
            </li>
            <li>
              <strong>Sustentabilidade:</strong> Enxergamos a tecnologia como
              uma aliada para criar um futuro mais sustentável, adotando
              práticas que minimizem impactos ambientais.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
