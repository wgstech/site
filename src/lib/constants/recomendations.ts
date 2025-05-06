import type { PlanName } from "./prices";

export const machineCountSliderSteps = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20];
export const defaultMachineCount = machineCountSliderSteps[0]!;

export const recomendations: Record<PlanName, { from: number; to: number }> = {
	Essencial: { from: 0, to: 4 },
	Pro: { from: 4, to: 8 },
	Max: { from: 8, to: 14 },
	Enterprise: { from: 12, to: Number.POSITIVE_INFINITY },
};
