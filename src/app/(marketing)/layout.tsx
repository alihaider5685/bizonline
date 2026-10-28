import { Hero } from "@/components/marketing/hero";
import { FactsStrip } from "@/components/marketing/facts-strip";
import { Features } from "@/components/marketing/features";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { ProductPreview } from "@/components/marketing/product-preview";
import { WhoFor } from "@/components/marketing/who-for";
import { PricingSection } from "@/components/marketing/pricing-section";
import { Faq } from "@/components/marketing/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <FactsStrip />
      <Features />
      <HowItWorks />
      <ProductPreview />
      <WhoFor />
      <PricingSection />
      <Faq />
    </>
  );
}