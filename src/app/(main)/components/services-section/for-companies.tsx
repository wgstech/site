import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { MotionInView } from "@/components/atoms/animations/motion-in-view";
import { Button } from "@/components/atoms/button";
import { SectionSubtitle } from "@/components/molecules/section-subtitle";
import { SectionTitle } from "@/components/molecules/section-title";
import { services } from "@/lib/constants/services";

export function ForCompanies() {
	return (
		<div className="*:container">
			<SectionTitle>Tudo Que Sua Empresa Precisa em TI</SectionTitle>
			<SectionSubtitle>
				Soluções completas para manter sua infraestrutura funcionando
				perfeitamente.
			</SectionSubtitle>
			<div className="justify-content-between mt-20 grid grid-cols-1 place-content-center content-between justify-center gap-16 md:grid-cols-2 lg:grid-cols-4">
				{services.map((service) => (
					<ServiceCard key={service.title} {...service} />
				))}
			</div>
			<div className="mt-12 flex justify-center">
				<Link href="/precos">
					<Button size="md">
						Ver nossos planos <ArrowRight weight="bold" />
					</Button>
				</Link>
			</div>
		</div>
	);
}

interface ServiceCardProps extends PropsWithChildren {
	img: StaticImageData;
	title: string;
	className?: string;
}

function ServiceCard({ img, children, title, className }: ServiceCardProps) {
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
