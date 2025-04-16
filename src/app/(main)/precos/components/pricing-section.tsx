"use client";

import { CheckCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { parseAsInteger, useQueryState } from "nuqs";
import { tv, type VariantProps } from "tailwind-variants";
import { Slider } from "@/components/atoms/slider";
import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import type { Price, PriceItem } from "@/lib/constants/prices";
import { prices } from "@/lib/constants/prices";

const sliderToMachineCount = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 40, 50];

export function PricingSection() {
	const [machineCount, setMachineCount] = useQueryState(
		"maquinas",
		parseAsInteger.withDefault(2),
	);

	return (
		<>
			<div className="mx-auto my-12 flex w-full max-w-2xl flex-col gap-4 px-4">
				<label htmlFor="number-of-machines" className="text-center font-medium">
					Quantas máquinas você tem?
				</label>
				<Slider
					id="number-of-machines"
					min={0}
					max={sliderToMachineCount.length - 1}
					defaultValue={[0]}
					value={[sliderToMachineCount.indexOf(machineCount)]}
					onValueChange={(v) => setMachineCount(sliderToMachineCount[v[0]!]!)}
				/>
				<div
					aria-hidden
					className="pointer-events-none flex justify-between px-[.5625rem]"
				>
					{sliderToMachineCount.map((value) => (
						<div
							className="flex w-0 flex-col items-center justify-center whitespace-nowrap text-[.625rem]"
							key={value}
						>
							{value}
						</div>
					))}
				</div>
			</div>

			<div className="container mx-auto mt-4 mb-32 grid grid-cols-1 gap-y-16 max-sm:max-w-sm max-md:divide-y md:mb-56 lg:grid-cols-4 lg:divide-x">
				{prices.map((price) => (
					<PricingCard
						key={price.title}
						machineCount={machineCount}
						{...price}
					/>
				))}
			</div>
		</>
	);
}

const pricingCardVariants = tv({
	slots: {
		card: "border-slate-200 pt-16 lg:px-8 lg:pt-0 xl:px-14 md:hover:opacity-100 duration-200 flex flex-col",
		badge:
			"inline-flex w-fit select-none items-center truncate bg-emerald-400 text-emerald-800 h-6 px-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-200",
	},
	variants: {
		recommended: {
			off: {
				badge: "opacity-0",
			},
			yes: {
				badge: "opacity-100",
			},
			no: {
				card: "hidden md:flex md:opacity-40 md:hover:opacity-80",
				badge: "opacity-0",
			},
		},
	},
	defaultVariants: {
		recommended: "off",
	},
});

type PricingCardProps = Price &
	VariantProps<typeof pricingCardVariants> & {
		machineCount: number;
	};

function PricingCard({
	title,
	basePrice,
	description,
	items,
	freeMachines,
	additionalMachinePrice,
	recommendedFrom,
	recommendedUpTo,
	machineCount,
}: PricingCardProps) {
	const price =
		basePrice +
		Math.max(0, machineCount - freeMachines) * additionalMachinePrice;

	const { card, badge } = pricingCardVariants({
		recommended: isRecommended(
			machineCount,
			recommendedFrom,
			recommendedUpTo,
			2,
		),
	});

	return (
		<div className={card()}>
			<h3 className="mb-6 flex min-h-16 flex-col items-center justify-center gap-2 font-semibold text-base leading-7">
				{title}
				<span className={badge()}>Recomendado</span>
			</h3>
			<p className="mt-6 flex items-baseline justify-center gap-x-1">
				<span className="text-center font-semibold text-5xl text-slate-900 tracking-tight">
					{price}
				</span>
				<span className="font-semibold text-slate-600 text-sm/6">/mês</span>
			</p>
			<ContactFormModal details={`Estou interessado no plano ${title}.`}>
				<button
					type="button"
					className="mt-10 block w-full rounded-xl bg-linear-to-r/oklch from-blue-500 to-blue-700 px-3 py-2 text-center font-semibold text-sm/6 text-white shadow-xs transition-all hover:from-blue-400 hover:to-blue-600"
				>
					Comprar plano
				</button>
			</ContactFormModal>
			<p className="mt-10 font-semibold text-sm/6">{description}</p>
			<ul className="mt-6 space-y-3 text-slate-600 text-sm/6">
				{items.map((item, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: array is constant
					<PricingItem key={index} {...item} />
				))}
			</ul>
		</div>
	);
}

function isRecommended(
	value: number,
	from: number,
	to: number,
	defaultValue: number,
) {
	if (value === defaultValue) return "off";
	if (from <= value && value <= to) return "yes";
	return "no";
}

function PricingItem({ description, type }: PriceItem) {
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
