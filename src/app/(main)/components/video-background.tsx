import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import landingPageImg from "@/assets/images/landing-page.webp";

export function VideoBackground() {
	return (
		<div
			className="-z-10 absolute inset-0 size-full max-h-screen"
			aria-hidden="true"
		>
			<Image
				src={landingPageImg}
				width={landingPageImg.width}
				height={landingPageImg.height}
				blurDataURL={landingPageImg.blurDataURL ?? ""}
				alt=""
				priority
				className="size-full object-cover"
			/>
			<video
				loop
				autoPlay
				muted
				className="absolute inset-0 z-10 size-full object-cover"
			>
				<source
					type="video/webm; codecs=av1"
					src="/video/landing-page-av1-optimized.webm"
				/>
				<source
					type="video/webm; codecs=vp9"
					src="/video/landing-page-vp9-optimized.webm"
				/>
				<source
					type="video/mp4; codecs=avc1.640028"
					src="/video/landing-page-h264-optimized.mp4"
				/>
			</video>
			<CaretDown className="motion-duration-2000 motion-safe:motion-preset-oscillate-lg -translate-x-1/2 absolute bottom-8 left-1/2 z-20 size-9 text-slate-100" />
		</div>
	);
}
