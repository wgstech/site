import { tv, type VariantProps } from "tailwind-variants";
import type { Price } from "@/lib/constants/prices";
import { PricingItem } from "../atoms/pricing-item";
import { ContactFormModal } from "./contact-form-modal";

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

export function PricingCard({
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
