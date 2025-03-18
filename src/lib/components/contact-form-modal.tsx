"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  User,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react/dist/ssr";
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import { type PropsWithChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import { sendContactFormEmail } from "../actions/sendContactFormEmail";
import { Button } from "./ui/button";
import { LabeledInput } from "./ui/labeled-input";

const formSchema = z.object({
  name: z.string().trim().min(3, "Deve conter no mínimo três caracteres"),
  phone: z
    .string()
    .trim()
    .refine(validator.isMobilePhone, "Deve ser um número de telefone válido"),
  details: z.string().trim().min(10, "Deve conter no mínimo dez caracteres"),
});

export function ContactFormModal({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open === false) reset();
  }, [open]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      details: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    await sendContactFormEmail(data);
    setOpen(false);
  });

  return (
    <Root open={open} onOpenChange={setOpen}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay className="data-[state=open]:motion-preset-fade-sm fixed inset-0 z-100 bg-black/65" />
        <Content className="data-[state=open]:motion-preset-focus-sm fixed top-1/2 left-1/2 z-100 max-h-[85vh] w-[90vw] max-w-2xl -translate-1/2 rounded-xl bg-slate-100 p-[25px] shadow">
          <Title className="text-lg font-medium text-sky-700">
            Entraremos em contato com você
          </Title>
          <Description className="mt-2 mb-5 flex items-center gap-3 rounded-lg bg-slate-200 p-2 text-sm leading-normal text-slate-700">
            <WhatsappLogo className="size-7 text-sky-700" weight="light" />
            <span>
              Ou entre em contato agora no nosso{" "}
              <a
                href="https://wa.me/5521978838514"
                target="_blank"
                rel="noreferrer"
                className="text-sky-700 underline"
              >
                WhatsApp.
              </a>
            </span>
          </Description>
          <form onSubmit={onSubmit} className="*:mb-5">
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
            <div className="mt-6 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                <ArrowRight className="size-4" />
                {isSubmitting ? "..." : "Enviar"}
              </Button>
            </div>
          </form>
          <Close asChild>
            <button
              type="button"
              className="absolute top-2.5 right-2.5 inline-flex size-7 items-center justify-center rounded-full bg-slate-200 text-sky-700 transition-colors hover:bg-slate-300 hover:text-sky-800"
              aria-label="Close"
            >
              <X className="size-6" />
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
}
