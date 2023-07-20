export const metadata = {
  title: "Yomu AI writer",
  description:
    "Transform your academic life. Save time and write superior papers and essays using Yomu AI",
};

import Hero from "@/components/hero-home";
import Features from "@/components/features-home";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      <TestimonialsCarousel />
      {/* <FeaturesWorld /> */}
      {/* <News /> */}
      <Newsletter />
    </>
  );
}
