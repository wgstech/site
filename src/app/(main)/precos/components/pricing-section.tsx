"use client";

import { CheckCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Section } from "@/components/atoms/section";
import { Slider } from "@/components/atoms/slider";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import type { PriceItem } from "@/lib/constants/prices";
import type { Price } from "@/lib/constants/prices";
import { prices } from "@/lib/constants/prices";

const numberOfMachines: Record<number, number> = {
	0: 2,
	25: 25,
	50: 50,
	75: 75,
	100: 100,
};

export function PricingSection() {
	const [value, setValue] = useState(0);

	return (
		<Section id="precos" color="white">
			<SectionTitle>Preços Transparentes para Sua Tranquilidade</SectionTitle>
			<SectionSubtitle>
				Escolha o plano que melhor se adapta às suas necessidades.
				<br />
				Cancele a qualquer momento.
			</SectionSubtitle>

			<div className="mx-auto my-12 flex max-w-2xl flex-col gap-4">
				<Slider
					min={0}
					max={100}
					defaultValue={[value]}
					value={[value]}
					onValueChange={(value) => setValue(value[0]!)}
					step={25}
				/>
				<div
					aria-hidden
					className="pointer-events-none flex justify-between px-[.5625rem]"
				>
					{Object.values(numberOfMachines).map((value) => (
						<div
							className="flex w-0 flex-col items-center justify-center whitespace-nowrap text-[.625rem]"
							key={value}
						>
							{value}
						</div>
					))}
				</div>
			</div>

			<div className="lg:-mx-8 xl:-mx-4 mx-auto mt-4 grid grid-cols-1 gap-y-16 max-sm:max-w-sm max-md:divide-y lg:mt-20 lg:grid-cols-3 lg:divide-x">
				{prices.map((price) => (
					<PricingCard key={price.title} {...price} />
				))}
			</div>
		</Section>
	);
}

const pricingCardVariants = tv({
	slots: {
		button:
			"mt-10 block w-full rounded-xl bg-linear-to-r/oklch px-3 py-2 text-center font-semibold text-sm/6 text-white shadow-xs transition-all hover:brightness-125",
		card: "border-slate-200 pt-16 lg:px-8 lg:pt-0 xl:px-14 md:hover:opacity-100 duration-200 flex flex-col",
		badge:
			"inline-flex w-fit select-none items-center truncate bg-emerald-400 text-emerald-800 h-6 px-2 rounded-md text-xs font-semibold tracking-wide transition-all duration-200",
	},
	variants: {
		custom: {
			true: {
				button: "from-blue-500 via-purple-500 to-orange-400",
			},
			false: {
				button: "from-blue-500 to-blue-700",
			},
		},
		recommended: {
			true: {
				badge: "opacity-100",
			},
			false: {
				card: "hidden md:flex md:opacity-40 md:hover:opacity-80",
				badge: "opacity-0",
			},
		},
	},
	defaultVariants: {
		recommended: true,
		custom: false,
	},
});

function PricingCard({
	title,
	price,
	description,
	items,
	recommended,
}: Price & VariantProps<typeof pricingCardVariants>) {
	const custom = price === "custom";
	const { card, button, badge } = pricingCardVariants({ custom, recommended });

	return (
		<div className={card()}>
			<h3 className="mb-6 flex min-h-16 flex-col items-center justify-center gap-2 font-semibold text-base leading-7">
				{title}
				<span className={badge()}>Recomendado</span>
			</h3>
			<p className="mt-6 flex items-baseline justify-center gap-x-1">
				<span className="text-center font-semibold text-5xl text-slate-900 tracking-tight">
					{custom ? "Customizado" : <>R$ {price}</>}
				</span>
				{!custom && (
					<span className="font-semibold text-slate-600 text-sm/6">/mês</span>
				)}
			</p>
			<ContactFormModal details={`Estou interessado no plano ${title}.`}>
				<button type="button" className={button()}>
					{custom ? "Entrar em contato" : "Comprar plano"}
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
