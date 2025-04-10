"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
	ArrowRight,
	CircleNotch,
	User,
	WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { isMobilePhone } from "validator";
import { z } from "zod";
import { sendContactFormEmail } from "@/lib/actions/sendContactFormEmail";
import { Button } from "../atoms/button";
import { LabeledInput } from "../molecules/labeled-input";

interface ContactFormProps {
	onSubmit?: () => void;
	details?: string | undefined;
}

const formSchema = z.object({
	name: z.string().trim().min(3, "Deve conter no mínimo três caracteres"),
	phone: z
		.string()
		.trim()
		.refine(
			(s) => isMobilePhone(s, "pt-BR"),
			"Deve ser um número de telefone válido",
		),
	details: z.string().trim().min(10, "Deve conter no mínimo dez caracteres"),
});

export function ContactForm({ onSubmit, details }: ContactFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			phone: "",
			details: details ?? "",
		},
	});

	const handleFormSubmit = handleSubmit((data) =>
		toast.promise(sendContactFormEmail(data).then(onSubmit), {
			loading: "Enviando...",
			success: () => (
				<span>
					<strong>Obrigado!</strong>
					<br />
					Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
				</span>
			),
			error: () => <span>Ocorreu um erro ao salvar o formulário!</span>,
		}),
	);

	return (
		<form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
			<LabeledInput
				label="Seu nome"
				Icon={User}
				type="input"
				placeholder="Gabriel Santos"
				error={errors.name}
				{...register("name")}
			/>
			<LabeledInput
				label="Telefone"
				Icon={WhatsappLogo}
				type="input"
				iconFill="light"
				placeholder="Seu WhatsApp ou telefone"
				error={errors.phone}
				{...register("phone")}
			/>
			<LabeledInput
				label="Como podemos te ajudar?"
				type="textarea"
				placeholder="Conte-nos um pouco sobre como podemos contribuir para a sua instituição"
				error={errors.details}
				{...register("details")}
			/>
			<div className="flex justify-end">
				<Button type="submit" disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							Enviar{" "}
							<CircleNotch className="size-4 animate-spin" weight="bold" />
						</>
					) : (
						<>
							Enviar <ArrowRight className="size-4" weight="bold" />
						</>
					)}
				</Button>
			</div>
		</form>
	);
}
