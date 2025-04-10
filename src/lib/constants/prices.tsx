import type { ReactNode } from "react";

export interface PriceItem {
	type?: "check-mark" | "plus";
	description: ReactNode;
}

export interface Price {
	title: string;
	price: "custom" | number;
	description: string;
	items: PriceItem[];
}

export const prices = [
	{
		title: "Básico",
		price: 200,
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
			{
				type: "plus",
				description: (
					<>
						Máquinas adicionais por <strong>R$ 60/mês</strong> cada.
					</>
				),
			},
		],
	},
	{
		title: "Premium",
		price: 600,
		description: "Cobertura completa e sem limites.",
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
			{
				type: "plus",
				description: (
					<>
						Máquinas adicionais por <strong>R$ 80/mês</strong> cada.
					</>
				),
			},
		],
	},
	{
		title: "Enterprise",
		price: "custom",
		description: "Preço que escala com você",
		items: [
			{ description: "Suporte remoto e no local" },
			{ description: "Gerenciamento completo da sua rede" },
			{
				description:
					"Monitoramento, Manutenção e Patching de máquinas ilimitado",
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
