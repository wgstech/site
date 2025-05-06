import classImg from "@/assets/images/cards/class.webp";
import consultingImg from "@/assets/images/cards/consulting.webp";
import networkImg from "@/assets/images/cards/network-2.webp";
import technicianImg from "@/assets/images/cards/technician-1.webp";
import dedent from "dedent";
import type { StaticImageData } from "next/image";

interface Service {
  img: StaticImageData;
  title: string;
  className?: string;
  children: string;
}

export const services = [
  {
    title: "Suporte Técnico",
    className: "motion-delay-500",
    img: technicianImg,
    children: dedent`
    Tenha a tranquilidade de saber que sua TI está em boas mãos. Suporte
    técnico proativo e soluções eficientes para empresas e residências.
    Foco em resolver, para você focar no que importa.
  `,
  },
  {
    title: "Gestão de Rede",
    className: "motion-delay-700",
    img: networkImg,
    children: dedent`
    Especialistas em redes para otimizar sua conexão. Configuração de
    roteadores, dimensionamento de Wi-Fi e gerenciamento completo da sua
    rede. Conte com quem entende do assunto.
  `,
  },
  {
    title: "Consultoria Avançada em TI",
    className: "motion-delay-900",
    img: consultingImg,
    children: dedent`
    Consultoria de TI para resolver seus desafios e otimizar sua
    infraestrutura. Diagnósticos precisos, recomendações personalizadas e
    soluções eficientes para o seu negócio.
  `,
  },
  {
    title: "Treinamento em Segurança da Informação",
    className: "motion-delay-1100",
    img: classImg,
    children: dedent`
    Prepare seus funcionários para se defender contra phishing, ransomware
    e outras ameaças online! Reduza o risco de ataques e proteja os dados
    da sua empresa com um treinamento rápido e eficaz.
  `,
  },
] satisfies Service[];
