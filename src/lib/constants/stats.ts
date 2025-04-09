export interface Stat {
	name: string;
	value: number;
	hasPlus?: boolean;
	duration: number;
}

export const stats = [
	{
		name: "Ativos monitorados",
		value: 70,
		hasPlus: true,
		duration: 2,
	},
	{
		name: "Gigabytes em algum lugar",
		value: 1275,
		duration: 3,
	},
	{
		name: "Dados interessantes",
		value: 999,
		duration: 2.5,
	},
] satisfies Stat[];
