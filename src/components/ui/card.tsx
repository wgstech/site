import Image, { type StaticImageData } from "next/image";
import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  img: StaticImageData;
  title: string;
}

export function Card({ img, children, title }: CardProps) {
  return (
    <article className="group flex flex-col gap-3 overflow-hidden rounded-2xl shadow-lg transition-shadow duration-500 hover:shadow-2xl">
      <Image
        className="aspect-video w-full object-cover"
        src={img.src}
        blurDataURL={img.blurDataURL ?? ""}
        alt=""
        width={640}
        height={640}
        placeholder="blur"
      />
      <header className="flex flex-1 flex-col px-5 py-4">
        <h3 className="h-[2lh] text-xl font-semibold text-slate-800">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{children}</p>
      </header>
    </article>
  );
}
