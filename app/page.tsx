import React from "react";
import { ClientHome } from "@/components/ClientHome";
import {
  getHeroContent,
  getServices,
  getPopularDesigns,
  getTestimonial,
  defaultApproachSteps,
  getFaqs,
} from "@/lib/supabase";

export default async function HomePage() {
  // Fetch from Supabase (or instantaneous curated default fallback)
  const [heroData, services, designs, testimonial, faqs] = await Promise.all([
    getHeroContent(),
    getServices(),
    getPopularDesigns("All"),
    getTestimonial(),
    getFaqs(),
  ]);

  return (
    <ClientHome
      heroData={heroData}
      services={services}
      designs={designs}
      testimonial={testimonial}
      approachSteps={defaultApproachSteps}
      faqs={faqs}
    />
  );
}
