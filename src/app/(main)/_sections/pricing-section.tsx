import { ContactFormModal } from "@/lib/components/contact-form-modal";
import { AnimatedSectionSubtitle } from "@/lib/components/ui/section-subtitle";
import { AnimatedSectionTitle } from "@/lib/components/ui/section-title";
import { cn } from "@/lib/utils/cn";
import { CheckCircle, PlusCircle } from "@phosphor-icons/react/dist/ssr";
import type { PropsWithChildren } from "react";

export function PricingSection() {
  return (
    <section id="precos" className="bg-white">
      <div className="container">
        <AnimatedSectionTitle>
          Preços Transparentes para Sua Tranquilidade
        </AnimatedSectionTitle>
        <AnimatedSectionSubtitle>
          Escolha o plano que melhor se adapta às suas necessidades.
          <br />
          Cancele a qualquer momento.
        </AnimatedSectionSubtitle>

        <div className="mt-4 grid max-w-sm grid-cols-1 gap-y-16 max-md:divide-y sm:mx-auto lg:-mx-8 lg:mt-20 lg:max-w-none lg:grid-cols-3 lg:divide-x xl:-mx-4">
          <PricingCard
            title="Básico"
            price="R$ 200"
            description="O essencial para você começar."
          >
            <PricingItem>Suporte remoto e no local</PricingItem>
            <PricingItem>Gerenciamento completo da sua rede</PricingItem>
            <PricingItem>
              Monitoramento, Manutenção e Patching de até{" "}
              <strong className="text-sky-800">2</strong> máquinas
            </PricingItem>
            <PricingItem variant="plus">
              Máquinas adicionais por <strong>R$ 60/mês</strong> cada.
            </PricingItem>
          </PricingCard>
          <PricingCard
            title="Premium"
            price="R$ 600"
            description="Cobertura completa e sem limites."
          >
            <PricingItem>Suporte remoto e no local</PricingItem>
            <PricingItem>Gerenciamento completo da sua rede</PricingItem>
            <PricingItem>
              Monitoramento, Manutenção e Patching de até{" "}
              <strong className="text-sky-800">8</strong> máquinas
            </PricingItem>
            <PricingItem>
              Relatórios mensais de desempenho e manutenção
            </PricingItem>
            <PricingItem>
              Consultoria estratégica para otimizar sua infraestrutura
            </PricingItem>
            <PricingItem>Gerenciamento completo de Backups</PricingItem>
            <PricingItem>
              Treinamento de conscientização sobre segurança
            </PricingItem>
            <PricingItem variant="plus">
              Máquinas adicionais por <strong>R$ 80/mês</strong> cada.
            </PricingItem>
          </PricingCard>
          <PricingCard
            title="Enterprise"
            price="Customizado"
            description="Preço que escala com você."
            custom
          >
            <PricingItem>Suporte remoto e no local</PricingItem>
            <PricingItem>Gerenciamento completo da sua rede</PricingItem>
            <PricingItem>
              Monitoramento, Manutenção e Patching de máquinas ilimitado
            </PricingItem>
            <PricingItem>
              Relatórios mensais de desempenho e manutenção
            </PricingItem>
            <PricingItem>
              Consultoria avançada para otimizar sua infraestrutura
            </PricingItem>
            <PricingItem>Gerenciamento completo de Backups</PricingItem>
            <PricingItem>
              Treinamento de conscientização sobre segurança
            </PricingItem>
          </PricingCard>
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps extends PropsWithChildren {
  title: string;
  description: string;
  price: number | string;
  custom?: boolean;
}

function PricingCard({
  children,
  title,
  price,
  description,
  custom = false,
}: PricingCardProps) {
  return (
    <div className="border-slate-200 pt-16 lg:px-8 lg:pt-0 xl:px-14">
      <h3 className="text-base leading-7 font-semibold">{title}</h3>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-5xl font-semibold tracking-tight text-slate-900">
          {price}
        </span>
        <span className="text-sm/6 font-semibold text-slate-600">
          {custom || "/mês"}
        </span>
      </p>
      <ContactFormModal details={`Estou interessado no plano ${title}.`}>
        <button
          type="button"
          className={cn(
            "from-logo-blue mt-10 block w-full rounded-xl bg-linear-to-r/oklch to-sky-700 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-xs transition-all hover:brightness-125",
            custom && "to-logo-orange from-logo-blue via-purple-500",
          )}
        >
          {custom ? "Entrar em contato" : "Comprar plano"}
        </button>
      </ContactFormModal>
      <p className="mt-10 text-sm/6 font-semibold">{description}</p>
      <ul className="mt-6 space-y-3 text-sm/6 text-slate-600">{children}</ul>
    </div>
  );
}

interface PricingItemProps extends PropsWithChildren {
  variant?: "check" | "plus";
}

function PricingItem({ children, variant = "check" }: PricingItemProps) {
  return (
    <li className="flex gap-x-3">
      {variant === "check" && (
        <CheckCircle
          weight="fill"
          className="size-5 flex-none text-amber-600"
        />
      )}
      {variant === "plus" && (
        <PlusCircle weight="fill" className="size-5 flex-none text-slate-500" />
      )}

      <span>{children}</span>
    </li>
  );
}
