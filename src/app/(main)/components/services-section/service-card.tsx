import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { PropsWithChildren } from "react";

interface ServiceCardProps extends PropsWithChildren {
  img: StaticImageData;
  title: string;
}

export function ServiceCard({ img, children, title }: ServiceCardProps) {
  return (
    <MotionInView
      className="group motion-safe:motion-preset-slide-left flex flex-col gap-3 overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
      as="article"
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
      <footer className="flex flex-1 flex-col justify-center gap-6 p-5">
        <h4 className="text-xl font-semibold tracking-tight text-pretty text-slate-800 lg:text-2xl">
          {title}
        </h4>
        <p className="text-sm text-slate-600">{children}</p>
      </footer>
    </MotionInView>
  );
}
