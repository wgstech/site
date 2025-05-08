import { Navbar } from "@/components/organisms/navbar";
import { Suspense } from "react";
import { ContactSection } from "./components/contact-section";
import { FeaturesAndBenefits } from "./components/features-and-benefits-section";
import { HeroSection } from "./components/hero-section";
import { OurMission } from "./components/our-mission";
import { ServicesSection } from "./components/services-section";
import { VideoBackground } from "./components/video-background";

export default function HomePage() {
  return (
    <main className="w-full">
      <div className="flex h-screen w-full flex-col">
        <VideoBackground />
        <Navbar className="text-white" />
        <HeroSection />
      </div>
      <FeaturesAndBenefits />
      <OurMission />
      {/* <Testimonial /> */}
      <Suspense>
        <ServicesSection />
      </Suspense>
      <ContactSection />
    </main>
  );
}
