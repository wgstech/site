import { ExternalLink } from "@/components/atoms/external-link";
import type { Tool } from "@/lib/constants/tools";
import Image from "next/image";

export function ToolCard({ site, name, image, type }: Tool) {
  return (
    <ExternalLink
      href={site}
      download={type === "download"}
      className="flex flex-col overflow-hidden bg-slate-700 text-lg font-medium text-slate-200 shadow-xl transition duration-200 hover:scale-102 hover:text-white"
    >
      <Image
        src={image}
        width={480}
        height={480}
        alt=""
        className="object-cover"
        priority
      />
      <p>{name}</p>
    </ExternalLink>
  );
}
