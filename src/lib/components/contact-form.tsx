"use client";

import { sendContactFormEmail } from "@/lib/actions/sendContactFormEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, User, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";
import { isMobilePhone } from "validator";
import { z } from "zod";
import { Button } from "./ui/button";
import { LabeledInput } from "./ui/labeled-input";

interface ContactFormProps {
  onSubmit?: () => void;
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

export function ContactForm({ onSubmit = () => {} }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      details: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await sendContactFormEmail(data);
        onSubmit();
      })}
      className="flex flex-col gap-5"
    >
      <LabeledInput
        label="Seu nome"
        Icon={User}
        type="input"
        placeholder="Gabriel Santos"
        register={register("name")}
        error={errors.name}
      />
      <LabeledInput
        label="Telefone"
        Icon={WhatsappLogo}
        type="input"
        iconFill="light"
        placeholder="Seu WhatsApp ou telefone"
        error={errors.phone}
        register={register("phone")}
      />
      <LabeledInput
        label="Como podemos te ajudar?"
        type="textarea"
        placeholder="Conte-nos um pouco sobre como podemos contribuir para a sua instituição"
        error={errors.details}
        register={register("details")}
      />
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          <ArrowRight className="size-4" />
          {isSubmitting ? "..." : "Enviar"}
        </Button>
      </div>
    </form>
  );
}
