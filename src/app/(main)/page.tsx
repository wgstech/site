import { Navbar } from "@/app/(main)/_layout/navbar";
import { CountUp } from "@/lib/components/animations/count-up";
import { VideoBackground } from "./_sections/components/video-background";
import { ContactSection } from "./_sections/contact-section";
import { FeaturesAndBenefits } from "./_sections/features-and-benefits-section";
import { Hero } from "./_sections/hero";
import { PricingSection } from "./_sections/pricing-section";
import { ServicesSection } from "./_sections/services-section";
import { SocialProofSection } from "./_sections/social-proof-section";

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="flex h-screen w-full flex-col">
        <VideoBackground />
        <Navbar />
        <div className="text-white">
          <CountUp to={70} />
        </div>
        <Hero />
      </div>
      <FeaturesAndBenefits />
      <SocialProofSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
