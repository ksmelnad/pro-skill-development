import Companies from "@/components/companies";
import CompaniesMarquee from "@/components/companiesMarquee";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { CommunitySection } from "@/components/landing/communitySection";
import { CtaSection } from "@/components/landing/ctaSection";
import { FeaturesSection } from "@/components/landing/featuresSection";
import { HeroSection } from "@/components/landing/heroSection";
import { HowItWorksSection } from "@/components/landing/howItWorksSection";
import { StatsSection } from "@/components/landing/statsSection";
import { TestimonialsSection } from "@/components/landing/testimonialsSection";
import Navbar from "@/components/navbar";
import Newsletter from "@/components/newsletter";

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CommunitySection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
