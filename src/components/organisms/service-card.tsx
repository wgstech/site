import Image, { type StaticImageData } from "next/image";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { MotionInView } from "../atoms/animations/motion-in-view";

interface ServiceCardProps extends PropsWithChildren {
	img: StaticImageData;
	title: string;
	className?: string;
}

export function ServiceCard({
	img,
	children,
	title,
	className,
}: ServiceCardProps) {
	return (
		<MotionInView
			className={twMerge(
				"group motion-safe:motion-preset-slide-left flex flex-col gap-3 overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl",
				className,
			)}
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
				<h4 className="text-pretty font-semibold text-slate-800 text-xl tracking-tight lg:text-2xl">
					{title}
				</h4>
				<p className="text-slate-600 text-sm">{children}</p>
			</footer>
		</MotionInView>
	);
}
