export const metadata = {
  title: "Yomu AI writer",
  description:
    "Transform your academic life. Save time and write superior papers and essays using Yomu AI",
};

import Hero from "@/components/hero-home";
import Features from "@/components/features-home";
import Feedbacks from "@/components/feedback-home";
import FeaturesWorld from "@/components/features-world";
import FeaturesBlocks from "@/components/features-blocks";
import News from "@/components/news";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import PowerWriting from "@/components/power-home";
import Thinking from "@/components/still-thinking";
import RoadMap from "@/components/review-roadmap";
import Question from "@/components/freq-question";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <TestimonialsCarousel />
      <Features />
      <Feedbacks />
      <PowerWriting />
      <Thinking />
      <RoadMap />
      <Question />
      {/* <FeaturesBlocks /> */}
      {/* <FeaturesWorld /> */}
      {/* <News /> */}
      {/* <Newsletter /> */}
    </>
  );
}
