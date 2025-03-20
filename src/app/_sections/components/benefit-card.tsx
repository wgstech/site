import { MotionInView } from "@/components/motion-in-view";
import { cn } from "@/lib/utils/cn";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

interface BenefitCardProps extends ComponentProps<typeof MotionInView> {
  title: string;
  Icon: PhosphorIcon;
}

export function BenefitCard({
  children,
  title,
  Icon,
  className,
}: BenefitCardProps) {
  return (
    <MotionInView
      className={cn(
        "flex max-w-[60ch] flex-col items-center gap-3 p-8",
        "text-center text-sm text-balance text-slate-800 md:text-lg",
        "motion-safe:motion-preset-fade-lg motion-safe:motion-slide-up-lg",
        className,
      )}
    >
      <Icon weight="fill" className="text-logo-orange size-12 md:size-16" />
      <h3 className="font-montserrat text-2xl font-semibold text-sky-700 md:text-3xl">
        {title}
      </h3>
      {children}
    </MotionInView>
  );
}
