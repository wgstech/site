import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import type { PlanName, Price } from "@/lib/constants/prices";
import {
  defaultMachineCount,
  recomendations,
} from "@/lib/constants/recomendations";
import { tv, type VariantProps } from "tailwind-variants";

const pricingCardVariants = tv({
  slots: {
    perMonth: "font-semibold text-slate-600 text-sm/6",
    card: "border-slate-200 pt-16 lg:px-8 lg:pt-0 xl:px-14 md:hover:opacity-100 duration-200 flex flex-col",
    badge:
      "inline-flex w-fit select-none items-center truncate bg-emerald-400 text-emerald-800 h-6 px-2 rounded-md text-xs font-semibold tracking-wide transition-colors  duration-200",
    button:
      "mt-10 block w-full rounded-xl px-3 py-2 text-center font-semibold text-sm/6 text-white shadow-xs transition-all",
  },
  variants: {
    custom: {
      true: {
        perMonth: "hidden",
        button: "bg-linear-to-r/increasing from-blue-500 to-orange-500",
      },
      false: {
        button: "bg-linear-to-r/increasing from-blue-500 to-blue-700",
      },
    },
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
    custom: false,
  },
});

interface PricingCardProps
  extends Price,
    VariantProps<typeof pricingCardVariants> {
  machineCount: number;
}

export function PricingCard({
  title,
  basePrice,
  description,
  items,
  freeMachines,
  additionalMachinePrice,
  machineCount,
}: PricingCardProps) {
  const custom = isCustom(basePrice);
  const price = custom
    ? "Customizado"
    : basePrice +
      Math.max(0, machineCount - freeMachines) * additionalMachinePrice;

  const { card, badge, perMonth, button } = pricingCardVariants({
    recommended: isRecommended(machineCount, title),
    custom,
  });

  return (
    <div className={card()}>
      <h3 className="mb-6 flex min-h-16 flex-col items-center justify-center gap-2 text-base leading-7 font-semibold">
        {title}
        <span className={badge()}>Recomendado</span>
      </h3>
      <p className="mt-6 flex items-baseline justify-center gap-x-1">
        <span className="text-center text-5xl font-semibold tracking-tight text-slate-900">
          {price}
        </span>
        <span className={perMonth()}>/mês</span>
      </p>
      <ContactFormModal details={`Estou interessado no plano ${title}.`}>
        <button type="button" className={button()}>
          Comprar plano
        </button>
      </ContactFormModal>
      <p className="mt-10 text-sm/6 font-semibold">{description}</p>
      <ul className="mt-6 space-y-5 text-sm/6 text-slate-600">
        {items.map((item, index) => (
          <li className="flex items-center gap-x-3" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function isCustom(basePrice: number | "custom") {
  return basePrice === "custom";
}

function isRecommended(machineCount: number, planName: PlanName) {
  if (machineCount === defaultMachineCount) return "off";
  const recomendation = recomendations[planName];
  if (recomendation.from <= machineCount && machineCount <= recomendation.to)
    return "yes";
  return "no";
}
