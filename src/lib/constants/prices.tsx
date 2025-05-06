import {
	ArrowCircleLeft,
	CheckCircle,
	PlusCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

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
			<CheckItem>Suporte remoto e no local</CheckItem>,
			<CheckItem>
				Monitoramento, Manutenção e Patching de até{" "}
				<strong className="text-blue-800">2</strong> máquinas
			</CheckItem>,
			<CheckItem>Gerenciamento completo da sua rede</CheckItem>,
			<PlusItem>
				Máquinas adicionais por{" "}
				<strong className="whitespace-nowrap text-nowrap">R$ 80/mês</strong>{" "}
				cada
			</PlusItem>,
		],
	},
	{
		title: "Pro",
		description: "Cobertura simples.",
		basePrice: 400,
		freeMachines: 4,
		additionalMachinePrice: 70,
		items: [
			<ArrowLeftItem>Tudo do Essencial</ArrowLeftItem>,
			<CheckItem>
				Monitoramento, Manutenção e Patching de até{" "}
				<strong className="text-blue-800">4</strong> máquinas
			</CheckItem>,
			<CheckItem>Relatórios mensais de desempenho e manutenção</CheckItem>,
			<CheckItem>Consultoria básica em TI</CheckItem>,
			<PlusItem>
				Máquinas adicionais por{" "}
				<strong className="whitespace-nowrap text-nowrap">R$ 70/mês</strong>{" "}
				cada
			</PlusItem>,
		],
	},
	{
		title: "Max",
		basePrice: 800,
		description: "Cobertura completa e sem limites.",
		freeMachines: 10,
		additionalMachinePrice: 60,
		items: [
			<ArrowLeftItem>Tudo do Pro</ArrowLeftItem>,
			<CheckItem>
				Monitoramento, Manutenção e Patching de até{" "}
				<strong className="text-blue-800">10</strong> máquinas
			</CheckItem>,
			<CheckItem>
				Consultoria estratégica para otimizar sua infraestrutura
			</CheckItem>,
			<CheckItem>Gerenciamento completo de Backups</CheckItem>,
			<CheckItem>Treinamento de conscientização sobre segurança</CheckItem>,
			<PlusItem>
				Máquinas adicionais por{" "}
				<strong className="whitespace-nowrap text-nowrap">R$ 60/mês</strong>{" "}
				cada
			</PlusItem>,
		],
	},
	{
		title: "Enterprise",
		basePrice: "custom",
		description: "Plano que escala com você",
		freeMachines: 0,
		additionalMachinePrice: 0,
		items: [
			<ArrowLeftItem>Tudo do Max</ArrowLeftItem>,
			<CheckItem>SLA personalizado</CheckItem>,
			<CheckItem>Condições comerciais e contrato sob medida</CheckItem>,
		],
	},
] satisfies Price[];

function ArrowLeftItem({ children }: { children: ReactNode }) {
	return (
		<>
			<ArrowCircleLeft
				weight="fill"
				className="size-5 flex-none text-emerald-600"
			/>
			<span>{children}</span>
		</>
	);
}

function PlusItem({ children }: { children: ReactNode }) {
	return (
		<>
			<PlusCircle weight="fill" className="size-5 flex-none text-slate-500" />
			<span>{children}</span>
		</>
	);
}

function CheckItem({ children }: { children: ReactNode }) {
	return (
		<>
			<CheckCircle weight="fill" className="size-5 flex-none text-orange-500" />
			<span>{children}</span>
		</>
	);
}
