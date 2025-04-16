import { Section } from "@/components/atoms/section";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { ContactForm } from "@/components/organisms/contact-form";

export function ContactSection() {
	return (
		<Section
			id="contato"
			color="blue"
			className="mx-auto mb-0! py-32 md:py-56"
			container={false}
		>
			<div className="mx-auto w-fit rounded-2xl bg-slate-50 p-10 shadow-md transition-shadow focus-within:shadow-2xl hover:shadow-2xl">
				<SectionTitle>Entraremos em contato com você</SectionTitle>
				<SectionSubtitle className="text-slate-500">
					Não compartilharemos seus dados com ninguém.
				</SectionSubtitle>

				<ContactForm />
			</div>
		</Section>
	);
}
