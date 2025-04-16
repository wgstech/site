"use client";

import { useState } from "react";
import { Section } from "@/components/atoms/section";
import { Slider } from "@/components/atoms/slider";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { PricingCard } from "@/components/organisms/pricing-card";
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
