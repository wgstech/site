import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { VideoBlurBackground } from "./video-blur-background";

export function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen">
      <VideoBlurBackground />
      <video
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 size-full object-cover"
      >
        <source type="video/webm" src="/video/landing-page.webm" />
        <source type="video/mp4" src="/video/landing-page.mp4" />
      </video>
      <CaretDown className="motion-duration-2000 motion-safe:motion-preset-oscillate-lg absolute bottom-8 left-1/2 size-9 -translate-x-1/2 text-slate-100" />
    </div>
  );
}
