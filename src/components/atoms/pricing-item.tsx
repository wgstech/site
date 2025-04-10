import { CheckCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import type { PriceItem } from "@/lib/constants/prices";

export function PricingItem({ description, type }: PriceItem) {
	return (
		<li className="flex gap-x-3">
			{type === "plus" ? (
				<PlusCircle weight="fill" className="size-5 flex-none text-slate-500" />
			) : (
				<CheckCircle
					weight="fill"
					className="size-5 flex-none text-amber-600"
				/>
			)}

			<span>{description}</span>
		</li>
	);
}
