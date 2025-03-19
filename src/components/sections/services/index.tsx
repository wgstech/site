import classImg from "@/assets/images/cards/class.jpg";
import consultingImg from "@/assets/images/cards/consulting.jpg";
import networkImg2 from "@/assets/images/cards/network-2.jpg";
import technicianImg1 from "@/assets/images/cards/technician-1.jpg";
import { Card } from "./card";

export function Services() {
  return (
    <div className="w-full bg-slate-100 px-30">
      <section id="serviços" className="container mx-auto py-14">
        <h2 className="text-3xl font-medium text-sky-700">Nossos Serviços</h2>
        <span className="text-sm text-slate-700">
          Soluções completas para manter sua infraestrutura funcionando
          perfeitamente.
        </span>
        <div className="justify-content-between mt-10 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
          <Card img={technicianImg1} title="Suporte Técnico">
            Tenha a tranquilidade de saber que sua TI está em boas mãos. Suporte
            técnico proativo e soluções eficientes para empresas e residências.
            Foco em resolver, para você focar no que importa.
          </Card>
          <Card img={networkImg2} title="Gestão de Rede">
            Especialistas em redes para otimizar sua conexão. Configuração de
            roteadores, dimensionamento de Wi-Fi e gerenciamento completo da sua
            rede. Conte com quem entende do assunto.
          </Card>
          <Card img={consultingImg} title="Consultoria Avançada em TI">
            Consultoria de TI para resolver seus desafios e otimizar sua
            infraestrutura. Diagnósticos precisos, recomendações personalizadas
            e soluções eficientes para o seu negócio.
          </Card>
          <Card img={classImg} title="Treinamento em Segurança da Informação">
            Prepare seus funcionários para se defender contra phishing,
            ransomware e outras ameaças online! Reduza o risco de ataques e
            proteja os dados da sua empresa com um treinamento rápido e eficaz.
          </Card>
        </div>
      </section>
    </div>
  );
}

/* 
Suporte Técnico: (Imagem de um técnico) - Resolvemos seus problemas de TI rapidamente.
Gestão de Redes: (Imagem de uma rede) - Otimizamos sua rede para o melhor desempenho.
Laudos Técnicos: (Imagem de um diagnóstico) - Identificamos e solucionamos problemas complexos.
Formatação e Instalação: (Imagem de um sistema operacional) - Mantemos seus sistemas operacionais atualizados.
Monitoramento de Ativos: (Imagem de um gráfico) - Monitoramos sua infraestrutura para evitar problemas.

*/
