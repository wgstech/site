import Link from "next/link";
import type { ComponentProps } from "react";

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      className="motion-ease-in-out motion-duration-200 hover:-motion-translate-y-out-[2px] focus-within:-motion-translate-y-out-[2px] cursor-pointer rounded-xl p-2 text-xs font-medium tracking-widest uppercase focus-within:text-sky-300 hover:text-sky-300"
      {...props}
    />
  );
}
