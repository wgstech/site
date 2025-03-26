"use client";

import { ContactForm } from "@/lib/components/contact-form";
import { Button } from "@/lib/components/ui/button";
import { SectionContainer } from "@/lib/components/ui/section-container";
import { SectionSubtitle } from "@/lib/components/ui/section-subtitle";
import { SectionTitle } from "@/lib/components/ui/section-title";
import { Toast } from "@/lib/components/ui/toast";
import { useState } from "react";

export function ContactSection() {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <SectionContainer
      id="contato"
      className="bg-gradient-to-br from-sky-500 to-cyan-700"
    >
      <Button type="button" onClick={() => setToastOpen(true)}>
        Teste
      </Button>
      <div className="rounded-2xl bg-slate-50 p-10 shadow-md transition-shadow focus-within:shadow-2xl hover:shadow-2xl">
        <SectionTitle>Entraremos em contato com você</SectionTitle>
        <SectionSubtitle className="text-slate-500">
          Não compartilharemos seus dados com ninguém.
        </SectionSubtitle>

        <ContactForm onSubmit={() => setToastOpen(true)} />
      </div>
      <Toast
        title="Obrigado!"
        description="Sua mensagem foi enviada com sucesso. Entraremos em contato em breve."
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
    </SectionContainer>
  );
}
