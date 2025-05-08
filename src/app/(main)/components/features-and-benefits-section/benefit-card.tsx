import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import type { ComponentProps } from "react";

interface BenefitCardProps extends ComponentProps<"article"> {
  title: string;
  Icon: PhosphorIcon;
}

export function BenefitCard({ children, title, Icon }: BenefitCardProps) {
  return (
    <MotionInView
      as="article"
      className="motion-safe:motion-preset-slide-up flex max-w-[60ch] flex-col items-center gap-3 p-8 text-center text-sm text-pretty text-slate-800 md:text-lg"
    >
      <Icon weight="fill" className="size-12 text-orange-400 md:size-14" />
      <h3 className="text-2xl font-semibold text-blue-700 lg:text-2xl">
        {title}
      </h3>
      {children}
    </MotionInView>
  );
}
