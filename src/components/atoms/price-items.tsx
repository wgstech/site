import {
  ArrowCircleLeft,
  CheckCircle,
  PlusCircle,
} from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";

export function ArrowLeftItem({ children }: { children: ReactNode }) {
  return (
    <>
      <ArrowCircleLeft
        weight="fill"
        className="size-5 flex-none text-emerald-600"
      />
      <span>{children}</span>
    </>
  );
}

export function PlusItem({ children }: { children: ReactNode }) {
  return (
    <>
      <PlusCircle weight="fill" className="size-5 flex-none text-slate-500" />
      <span>{children}</span>
    </>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <>
      <CheckCircle weight="fill" className="size-5 flex-none text-orange-500" />
      <span>{children}</span>
    </>
  );
}
