import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { VideoRail } from "@/components/sections/VideoRail";
import { ServiceIndex } from "@/components/sections/ServiceIndex";
import { TrendingGrid } from "@/components/sections/TrendingGrid";
import { ProjectFeature } from "@/components/sections/ProjectFeature";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialSpread } from "@/components/sections/TestimonialSpread";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Philosophy */}
      <Philosophy />

      {/* 3. Voices of KaiRose */}
      <VideoRail />

      {/* 4. Signature Services */}
      <ServiceIndex />

      {/* 5. The Trending Edit */}
      <TrendingGrid />

      {/* 6. Recent Projects */}
      <ProjectFeature />

      {/* 7. Crafted for You */}
      <ProcessSteps />

      {/* 8. Client Chronicles */}
      <TestimonialSpread />

      {/* 9. FAQs */}
      <FaqAccordion />

      {/* 10. Footer CTA Band & Form */}
      <CtaBand />
    </>
  );
}
