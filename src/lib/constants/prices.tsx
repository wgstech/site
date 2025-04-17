import type { ReactNode } from "react";

export interface PriceItem {
	type?: "check-mark" | "plus";
	description: ReactNode;
}

export interface Price {
	title: string;
	basePrice: number;
	description: string;
	items: PriceItem[];
	additionalMachinePrice: number;
	recommendedUpTo: number;
	recommendedFrom: number;
	freeMachines: number;
}

export const prices = [
	{
		title: "Básico",
		basePrice: 200,
		freeMachines: 2,
		recommendedFrom: 0,
		recommendedUpTo: 4,
		additionalMachinePrice: 80,
		description: "O essencial para você começar.",
		items: [
			{ description: "Suporte remoto e no local" },
			{ description: "Gerenciamento completo da sua rede" },
			{
				description: (
					<>
						Monitoramento, Manutenção e Patching de até{" "}
						<strong className="text-blue-800">2</strong> máquinas
					</>
				),
			},
		],
	},
	{
		title: "Premium",
		description: "Cobertura simples.",
		basePrice: 400,
		freeMachines: 4,
		additionalMachinePrice: 80,
		recommendedFrom: 2,
		recommendedUpTo: 7,
		items: [
			{ description: "Suporte remoto e no local" },
			{ description: "Gerenciamento completo da sua rede" },
			{
				description: (
					<>
						Monitoramento, Manutenção e Patching de até{" "}
						<strong className="text-blue-800">4</strong> máquinas
					</>
				),
			},
			{ description: "Relatórios mensais de desempenho e manutenção" },
			{
				description: "Consultoria básica em TI",
			},
		],
	},
	{
		title: "Avançado",
		description: "Cobertura completa e sem limites.",
		basePrice: 600,
		freeMachines: 8,
		additionalMachinePrice: 80,
		recommendedFrom: 6,
		recommendedUpTo: 30,
		items: [
			{ description: "Suporte remoto e no local" },
			{ description: "Gerenciamento completo da sua rede" },
			{
				description: (
					<>
						Monitoramento, Manutenção e Patching de até{" "}
						<strong className="text-blue-800">8</strong> máquinas
					</>
				),
			},
			{ description: "Relatórios mensais de desempenho e manutenção" },
			{
				description: "Consultoria estratégica para otimizar sua infraestrutura",
			},
			{ description: "Gerenciamento completo de Backups" },
			{ description: "Treinamento de conscientização sobre segurança" },
		],
	},
	{
		title: "Elite",
		basePrice: 800,
		description: "Completaço",
		freeMachines: 10,
		additionalMachinePrice: 80,
		recommendedFrom: 10,
		recommendedUpTo: Number.POSITIVE_INFINITY,
		items: [
			{ description: "Suporte remoto e no local" },
			{ description: "Gerenciamento completo da sua rede" },
			{
				description: (
					<>
						Monitoramento, Manutenção e Patching de até{" "}
						<strong className="text-blue-800">10</strong> máquinas
					</>
				),
			},
			{ description: "Relatórios mensais de desempenho e manutenção" },
			{
				description: "Consultoria estratégica para otimizar sua infraestrutura",
			},
			{ description: "Gerenciamento completo de Backups" },
			{ description: "Treinamento de conscientização sobre segurança" },
		],
	},
] satisfies Price[];
