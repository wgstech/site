import { VideoBlurBackground } from "./video-blur-background";

export function VideoBackground() {
  return (
    <div className="absolute size-full">
      <VideoBlurBackground />
      <video loop autoPlay muted playsInline className="size-full object-cover -z-10 absolute top-0 left-0">
        <source type="video/webm" src="/video/landing-page.webm" />
        <source type="video/mp4" src="/video/landing-page.mp4" />
      </video>
    </div>
  );
}
