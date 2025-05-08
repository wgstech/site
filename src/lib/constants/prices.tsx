/* eslint-disable react/jsx-key */
import type { IconProps, Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  ArrowCircleLeft,
  CheckCircle,
  ClipboardText,
  ClockCounterClockwise,
  DesktopTower,
  Faders,
  GraduationCap,
  Handshake,
  Headset,
  Network,
  PlusCircle,
  PresentationChart,
  Strategy,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <>
      <CheckCircle weight="fill" className="size-5 flex-none text-orange-500" />
      <span>{children}</span>
    </>
  );
}

export type PlanName = "Essencial" | "Pro" | "Max" | "Enterprise";

export interface Price {
  title: PlanName;
  basePrice: number | "custom";
  description: string;
  items: ReactNode[];
  additionalMachinePrice: number;
  freeMachines: number;
}

export const prices = [
  {
    title: "Essencial",
    basePrice: 200,
    freeMachines: 2,
    additionalMachinePrice: 80,
    description: "O essencial para você começar.",
    items: [
      <PriceItem Icon={Headset} weight="bold">
        Suporte remoto e no local
      </PriceItem>,
      <PriceItem Icon={DesktopTower} weight="bold">
        Monitoramento, Manutenção e Patching de até{" "}
        <strong className="text-blue-800">2</strong> máquinas
      </PriceItem>,
      <PriceItem Icon={Network} weight="bold">
        Gerenciamento completo da sua rede
      </PriceItem>,
      <PriceItem Icon={PlusCircle} weight="bold" className="text-slate-500">
        Máquinas adicionais por{" "}
        <strong className="text-nowrap whitespace-nowrap">R$ 80/mês</strong>{" "}
        cada
      </PriceItem>,
    ],
  },
  {
    title: "Pro",
    description: "Cobertura simples.",
    basePrice: 400,
    freeMachines: 4,
    additionalMachinePrice: 70,
    items: [
      <PriceItem
        Icon={ArrowCircleLeft}
        weight="fill"
        className="text-emerald-600"
      >
        Tudo do Essencial
      </PriceItem>,
      <PriceItem Icon={DesktopTower} weight="bold">
        Monitoramento, Manutenção e Patching de até{" "}
        <strong className="text-blue-800">4</strong> máquinas
      </PriceItem>,
      <PriceItem Icon={PresentationChart} weight="bold">
        Consultoria básica em TI
      </PriceItem>,
      <PriceItem Icon={ClipboardText} weight="bold">
        Relatórios mensais de desempenho e manutenção
      </PriceItem>,
      <PriceItem Icon={PlusCircle} weight="bold" className="text-slate-500">
        Máquinas adicionais por{" "}
        <strong className="text-nowrap whitespace-nowrap">R$ 70/mês</strong>{" "}
        cada
      </PriceItem>,
    ],
  },
  {
    title: "Max",
    basePrice: 800,
    description: "Cobertura completa e sem limites.",
    freeMachines: 10,
    additionalMachinePrice: 60,
    items: [
      <PriceItem
        Icon={ArrowCircleLeft}
        weight="fill"
        className="text-emerald-600"
      >
        Tudo do Pro
      </PriceItem>,
      <PriceItem Icon={DesktopTower} weight="bold">
        Monitoramento, Manutenção e Patching de até{" "}
        <strong className="text-blue-800">10</strong> máquinas
      </PriceItem>,
      <PriceItem Icon={Strategy} weight="bold">
        Consultoria estratégica para otimizar sua infraestrutura
      </PriceItem>,
      <PriceItem Icon={ClockCounterClockwise} weight="bold">
        Gerenciamento completo de Backups
      </PriceItem>,
      <PriceItem Icon={GraduationCap} weight="bold">
        Treinamento de conscientização sobre segurança
      </PriceItem>,
      <PriceItem Icon={PlusCircle} weight="bold" className="text-slate-500">
        Máquinas adicionais por{" "}
        <strong className="text-nowrap whitespace-nowrap">R$ 60/mês</strong>{" "}
        cada
      </PriceItem>,
    ],
  },
  {
    title: "Enterprise",
    basePrice: "custom",
    description: "Plano que escala com você.",
    freeMachines: 0,
    additionalMachinePrice: 0,
    items: [
      <PriceItem
        Icon={ArrowCircleLeft}
        weight="fill"
        className="text-emerald-600"
      >
        Tudo do Max
      </PriceItem>,
      <PriceItem Icon={Handshake} weight="bold">
        SLA personalizado
      </PriceItem>,
      <PriceItem Icon={Faders} weight="bold">
        Condições comerciais e contrato sob medida
      </PriceItem>,
    ],
  },
] satisfies Price[];

interface PriceItemProps extends IconProps {
  children?: ReactNode;
  Icon: PhosphorIcon;
}

function PriceItem({
  children,
  Icon,
  className,
  ...iconProps
}: PriceItemProps) {
  return (
    <p className="flex min-h-18 items-center gap-x-3">
      <Icon
        className={twMerge("size-6 flex-none text-orange-500", className)}
        {...iconProps}
      />
      <span>{children}</span>
    </p>
  );
}
