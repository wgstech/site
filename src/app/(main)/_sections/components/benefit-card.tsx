import { MotionInView } from "@/lib/components/motion-in-view";
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
        "text-center text-sm text-pretty text-slate-800 md:text-lg",
        "motion-safe:motion-preset-fade-lg motion-safe:motion-slide-up-lg",
        className,
      )}
      as="article"
    >
      <Icon
        weight="fill"
        className="text-logo-orange size-12 md:size-16 lg:size-18"
      />
      <h3 className="text-2xl font-semibold text-sky-700 lg:text-3xl">
        {title}
      </h3>
      {children}
    </MotionInView>
  );
}
