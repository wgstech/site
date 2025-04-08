import type { Icon } from '@phosphor-icons/react'
import { CurrencyDollarSimple, Gear, ShieldCheck } from '@phosphor-icons/react/dist/ssr';

interface Benefit {
  title: string;
  Icon: Icon;
  className?: string;
  description: string;
}

export const benefits = [{
  title: "Soluções Personalizadas",
  Icon: Gear,
  className: 'motion-delay-300',
  description: 'Soluções de TI personalizadas para atender às suas necessidades e objetivos específicos.'
}, {
  title: 'Redução de Custos',
  Icon: CurrencyDollarSimple,
  className: 'motion-delay-500',
  description: 'Consultoria para identificar e eliminar desperdícios na sua infraestrutura.'
}, {
  title: 'Proteção Máxima',
  Icon: ShieldCheck,
  className: 'motion-delay-700',
  description: 'Soluções de segurança robustas para proteger seus dados e sua empresa contra ameaças.'
}] satisfies Benefit[];
