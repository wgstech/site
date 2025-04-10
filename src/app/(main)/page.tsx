import { VideoBackground } from "@/components/organisms/video-background";
import { Navbar } from "@/components/templates/layout/navbar";
import { ContactSection } from "@/components/templates/sections/contact-section";
import { FeaturesAndBenefits } from "@/components/templates/sections/features-and-benefits-section";
import { HeroSection } from "@/components/templates/sections/hero-section";
import { PricingSection } from "@/components/templates/sections/pricing-section";
import { ServicesSection } from "@/components/templates/sections/services-section";
import { SocialProofSection } from "@/components/templates/sections/social-proof-section";

export default function Home() {
	return (
		<main>
			<div className="flex h-screen w-full flex-col">
				<VideoBackground />
				<Navbar />
				<HeroSection />
			</div>
			<FeaturesAndBenefits />
			<SocialProofSection />
			<ServicesSection />
			<PricingSection />
			<ContactSection />
		</main>
	);
}
