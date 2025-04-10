import { tv } from "tailwind-variants";
import type { Price } from "@/lib/constants/prices";
import { PricingItem } from "../atoms/pricing-item";
import { ContactFormModal } from "./contact-form-modal";

const pricingCardVariants = tv({
	base: "mt-10 block w-full rounded-xl bg-linear-to-r/oklch px-3 py-2 text-center font-semibold text-sm/6 text-white shadow-xs transition-all hover:brightness-125",
	variants: {
		custom: {
			true: "from-blue-500 via-purple-500 to-orange-400",
			false: "from-blue-500 to-blue-700",
		},
	},
});

export function PricingCard({ title, price, description, items }: Price) {
	const custom = price === "custom";

	return (
		<div className="border-slate-200 pt-16 lg:px-8 lg:pt-0 xl:px-14">
			<h3 className="font-semibold text-base leading-7">{title}</h3>
			<p className="mt-6 flex items-baseline gap-x-1">
				<span className="font-semibold text-5xl text-slate-900 tracking-tight">
					{custom ? "Customizado" : <>R$ {price}</>}
				</span>
				{!custom && (
					<span className="font-semibold text-slate-600 text-sm/6">/mês</span>
				)}
			</p>
			<ContactFormModal details={`Estou interessado no plano ${title}.`}>
				<button type="button" className={pricingCardVariants({ custom })}>
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
