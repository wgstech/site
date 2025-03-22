import { Navbar } from "@/app/(main)/_layout/navbar";
import { ContactSection } from "./_sections/contact-section";
import { FeaturesAndBenefits } from "./_sections/features-and-benefits-section";
import { Hero } from "./_sections/hero";
import { ServicesSection } from "./_sections/services-section";
import { SocialProofSection } from "./_sections/social-proof-section";

export default function Home() {
  return (
    <main className="mx-auto gap-32">
      <div className="flex h-screen w-full flex-col">
        <Navbar />
        <Hero />
      </div>
      <FeaturesAndBenefits />
      <SocialProofSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
