import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { Button } from "@/components/atoms/button";
import { Section } from "@/components/atoms/section";
import { SectionTitle } from "@/components/molecules/section-title";
import { ContactFormModal } from "@/components/organisms/contact-form-modal";
import { benefits } from "@/lib/constants/benefits";

export function FeaturesAndBenefits() {
	return (
		<Section
			id="beneficios"
			className="flex flex-col items-center justify-center gap-20"
		>
			<SectionTitle>
				Recursos e Benefícios que Impulsionam Seu Sucesso
			</SectionTitle>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-12">
				{benefits.map((benefit) => (
					<BenefitCard key={benefit.title} {...benefit}>
						{benefit.description}
					</BenefitCard>
				))}
			</div>
			<MotionInView className="motion-safe:motion-preset-fade-lg motion-delay-900">
				<ContactFormModal>
					<Button size="md" className="mx-auto" type="button">
						Estou interessado
						<ArrowRight weight="bold" />
					</Button>
				</ContactFormModal>
			</MotionInView>
		</Section>
	);
}

interface BenefitCardProps extends ComponentProps<"article"> {
	title: string;
	Icon: PhosphorIcon;
}

function BenefitCard({ children, title, Icon, className }: BenefitCardProps) {
	return (
		<MotionInView
			as="article"
			className={twMerge(
				"motion-safe:motion-preset-slide-up",
				"flex max-w-[60ch] flex-col items-center gap-3 text-pretty p-8 text-center text-slate-800 text-sm md:text-lg",
				className,
			)}
		>
			<Icon weight="fill" className="size-12 text-orange-400 md:size-14" />
			<h3 className="font-semibold text-2xl text-blue-700 lg:text-2xl">
				{title}
			</h3>
			{children}
		</MotionInView>
	);
}
