import Companies from "@/components/companies";
import CompaniesMarquee from "@/components/companiesMarquee";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompaniesMarquee />
      <Features />
      <Companies />
      <Newsletter />
      <Footer />
    </main>
  );
}
