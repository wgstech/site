import classImg from "@/assets/images/cards/class.jpg";
import consultingImg from "@/assets/images/cards/consulting.jpg";
import networkImg2 from "@/assets/images/cards/network-2.jpg";
import technicianImg1 from "@/assets/images/cards/technician-1.jpg";
import { ServiceCard } from "@/lib/components/ui/card";
import { AnimatedSectionSubtitle } from "@/lib/components/ui/section-subtitle";
import { AnimatedSectionTitle } from "@/lib/components/ui/section-title";

export function ServicesSection() {
  return (
    <section id="serviços" className="container">
      <AnimatedSectionTitle>
        Tudo Que Sua Empresa Precisa em TI
      </AnimatedSectionTitle>
      <AnimatedSectionSubtitle>
        Soluções completas para manter sua infraestrutura funcionando
        perfeitamente.
      </AnimatedSectionSubtitle>
      <div className="justify-content-between mt-20 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          img={technicianImg1}
          title="Suporte Técnico"
          className="motion-delay-500"
        >
          Tenha a tranquilidade de saber que sua TI está em boas mãos. Suporte
          técnico proativo e soluções eficientes para empresas e residências.
          Foco em resolver, para você focar no que importa.
        </ServiceCard>
        <ServiceCard
          img={networkImg2}
          title="Gestão de Rede"
          className="motion-delay-700"
        >
          Especialistas em redes para otimizar sua conexão. Configuração de
          roteadores, dimensionamento de Wi-Fi e gerenciamento completo da sua
          rede. Conte com quem entende do assunto.
        </ServiceCard>
        <ServiceCard
          img={consultingImg}
          title="Consultoria Avançada em TI"
          className="motion-delay-900"
        >
          Consultoria de TI para resolver seus desafios e otimizar sua
          infraestrutura. Diagnósticos precisos, recomendações personalizadas e
          soluções eficientes para o seu negócio.
        </ServiceCard>
        <ServiceCard
          img={classImg}
          title="Treinamento em Segurança da Informação"
          className="motion-delay-1100"
        >
          Prepare seus funcionários para se defender contra phishing, ransomware
          e outras ameaças online! Reduza o risco de ataques e proteja os dados
          da sua empresa com um treinamento rápido e eficaz.
        </ServiceCard>
      </div>
    </section>
  );
}
