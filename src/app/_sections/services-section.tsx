import classImg from "@/assets/images/cards/class.jpg";
import consultingImg from "@/assets/images/cards/consulting.jpg";
import networkImg2 from "@/assets/images/cards/network-2.jpg";
import technicianImg1 from "@/assets/images/cards/technician-1.jpg";
import { MotionInView } from "@/components/motion-in-view";
import { SectionContainer } from "@/components/ui/section-container";
import { Card } from "../../components/ui/card";
import { SectionTitle } from "../../components/ui/section-title";

export function ServicesSection() {
  return (
    <SectionContainer id="serviços">
      <SectionTitle className="text-center">Nossos Serviços</SectionTitle>
      <MotionInView className="motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-lg motion-delay-200">
        <p className="mt-2 text-center text-slate-700">
          Soluções completas para manter sua infraestrutura funcionando
          perfeitamente.
        </p>
      </MotionInView>
      <div className="justify-content-between mt-10 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
        <Card
          img={technicianImg1}
          title="Suporte Técnico"
          className="motion-delay-500"
        >
          Tenha a tranquilidade de saber que sua TI está em boas mãos. Suporte
          técnico proativo e soluções eficientes para empresas e residências.
          Foco em resolver, para você focar no que importa.
        </Card>
        <Card
          img={networkImg2}
          title="Gestão de Rede"
          className="motion-delay-600"
        >
          Especialistas em redes para otimizar sua conexão. Configuração de
          roteadores, dimensionamento de Wi-Fi e gerenciamento completo da sua
          rede. Conte com quem entende do assunto.
        </Card>
        <Card
          img={consultingImg}
          title="Consultoria Avançada em TI"
          className="motion-delay-700"
        >
          Consultoria de TI para resolver seus desafios e otimizar sua
          infraestrutura. Diagnósticos precisos, recomendações personalizadas e
          soluções eficientes para o seu negócio.
        </Card>
        <Card
          img={classImg}
          title="Treinamento em Segurança da Informação"
          className="motion-delay-800"
        >
          Prepare seus funcionários para se defender contra phishing, ransomware
          e outras ameaças online! Reduza o risco de ataques e proteja os dados
          da sua empresa com um treinamento rápido e eficaz.
        </Card>
      </div>
    </SectionContainer>
  );
}

/* 
Suporte Técnico: (Imagem de um técnico) - Resolvemos seus problemas de TI rapidamente.
Gestão de Redes: (Imagem de uma rede) - Otimizamos sua rede para o melhor desempenho.
Laudos Técnicos: (Imagem de um diagnóstico) - Identificamos e solucionamos problemas complexos.
Formatação e Instalação: (Imagem de um sistema operacional) - Mantemos seus sistemas operacionais atualizados.
Monitoramento de Ativos: (Imagem de um gráfico) - Monitoramos sua infraestrutura para evitar problemas.

*/
