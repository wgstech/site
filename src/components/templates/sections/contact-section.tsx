import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { ContactForm } from "@/components/organisms/contact-form";

export function ContactSection() {
	return (
		<section
			id="contato"
			className="bg-gradient-to-br from-blue-500 to-cyan-700 py-30"
		>
			<div className="container rounded-2xl bg-slate-50 p-10 shadow-md transition-shadow focus-within:shadow-2xl hover:shadow-2xl">
				<SectionTitle>Entraremos em contato com você</SectionTitle>
				<SectionSubtitle className="text-slate-500">
					Não compartilharemos seus dados com ninguém.
				</SectionSubtitle>

				<ContactForm />
			</div>
		</section>
	);
}
