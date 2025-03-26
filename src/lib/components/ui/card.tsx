import { cn } from "@/lib/utils/cn";
import Image, { type StaticImageData } from "next/image";
import type { PropsWithChildren } from "react";
import { MotionInView } from "../motion-in-view";

interface CardProps extends PropsWithChildren {
  img: StaticImageData;
  title: string;
  className?: string;
}

export function Card({ img, children, title, className }: CardProps) {
  return (
    <MotionInView
      className={cn(
        "group motion-safe:motion-preset-fade-lg motion-safe:motion-preset-slide-up-sm flex flex-col gap-3 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-2xl",
        className,
      )}
    >
      <Image
        className="aspect-video w-full object-cover"
        src={img.src}
        blurDataURL={img.blurDataURL ?? ""}
        alt=""
        width={640}
        height={640}
        placeholder="blur"
      />
      <article className="flex flex-1 flex-col px-5 py-4">
        <h4 className="min-h-[2lh] text-xl font-semibold text-slate-800 lg:text-2xl">
          {title}
        </h4>
        <p className="mt-2 text-sm text-slate-600">{children}</p>
      </article>
    </MotionInView>
  );
}
