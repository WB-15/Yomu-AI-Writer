export const metadata = {
  title: "Pricing - Yomu AI",
  description: "Page description",
};

import PricingTables from "@/components/pricing-tables";
import Faqs from "@/components/faqs";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
      <PricingTables />
      {/* <FeaturesTable />
      <TestimonialsCarousel /> */}
      <Faqs />
      <Cta />
    </>
  );
}
