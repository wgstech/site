import type { Stat as StatType } from "@/lib/constants/stats";
import { CountUp } from "../atoms/animations/count-up";

export function Stat({ name, duration, value, hasPlus }: StatType) {
	return (
		<div className="flex max-w-xs flex-col gap-y-4">
			<dt className="text-center text-lg/7 text-sky-200">{name}</dt>
			<dd className="order-first text-right font-semibold text-9xl text-white tracking-tight max-sm:text-5xl">
				<CountUp to={value} duration={duration} />
				{hasPlus && "+"}
			</dd>
		</div>
	);
}
