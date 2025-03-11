import MotionInView from "@/lib/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

interface BenefitCardProps extends ComponentProps<typeof MotionInView> {
  title: string;
  Icon: PhosphorIcon;
}

export function BenefitCard({ children, title, Icon, className }: BenefitCardProps) {
  return (
    <MotionInView
      className={cn(
        "flex flex-col items-center gap-3 p-8 max-w-[60ch]",
        "text-slate-800 text-center text-sm md:text-lg text-balance",
        "motion-safe:motion-preset-fade-lg motion-safe:motion-slide-up-lg",
        className,
      )}
    >
      <Icon weight="fill" className="size-12 md:size-16 text-logo-orange" />
      <h3 className="font-semibold font-montserrat text-2xl md:text-3xl text-sky-700">{title}</h3>
      {children}
    </MotionInView>
  );
}
