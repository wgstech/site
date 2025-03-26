"use client";

import { cn } from "@/lib/utils/cn";
import { X } from "@phosphor-icons/react/dist/ssr";
import { Close, Description, Root, Title } from "@radix-ui/react-toast";

interface ToastProps {
  title: string;
  description: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function Toast({ title, description, open, onOpenChange }: ToastProps) {
  return (
    <Root
      open={open}
      onOpenChange={onOpenChange}
      className={cn(
        "group relative right-2 bottom-2 w-full space-x-4 overflow-hidden rounded-xl bg-white p-6 pr-8 shadow-lg",
        "data-[state=open]:motion-preset-slide-left-lg",
        "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]!",
        "data-[swipe=end]:right-[calc(var(--spacing)_*_2-var(--radix-toast-swipe-end-x))]",
        "data-[state=closed]:motion-translate-x-out-100 data-[state=closed]:motion-opacity-out",
      )}
    >
      <Title className="text-sm font-semibold">{title}</Title>
      <Description className="text-sm opacity-90">{description}</Description>
      <Close className="absolute top-2 right-2 rounded-md p-1 text-transparent transition-colors group-hover:text-slate-700 hover:text-rose-500 focus:opacity-100 focus:ring-2">
        <X className="size-4" />
      </Close>
    </Root>
  );
}
