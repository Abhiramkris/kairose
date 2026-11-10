"use client";

import React, { useState } from "react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { HeroMockup } from "@/components/sections/HeroMockup";
import { OurServicesSection } from "@/components/sections/OurServicesSection";
import { PopularDesignsSection } from "@/components/sections/PopularDesignsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyKairoseSection } from "@/components/sections/WhyKairoseSection";
import { OurApproachSection } from "@/components/sections/OurApproachSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import {
  HeroData,
  ServiceItem,
  DesignProject,
  TestimonialItem,
  ApproachStep,
  FaqItem,
} from "@/lib/supabase";

interface ClientHomeProps {
  heroData: HeroData;
  services: ServiceItem[];
  designs: DesignProject[];
  testimonial: TestimonialItem;
  approachSteps: ApproachStep[];
  faqs: FaqItem[];
}

export function ClientHome({
  heroData,
  services,
  designs,
  testimonial,
  approachSteps,
  faqs,
}: ClientHomeProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("General Consultation");

  const handleOpenConsultation = (topic?: string) => {
    setModalTopic(topic || "General Consultation");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F1E8] text-[#221E1B] flex flex-col font-montserrat">
      {/* 1. Header */}
      <SiteHeader onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroMockup
          data={heroData}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 3. Our Services Section */}
        <OurServicesSection
          services={services}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 4. Popular Designs Section */}
        <PopularDesignsSection
          designs={designs}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 5. Testimonials Section */}
        <TestimonialsSection
          testimonial={testimonial}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 6. Why KaiRose Section */}
        <WhyKairoseSection
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 7. Our Approach Section */}
        <OurApproachSection
          steps={approachSteps}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 8. Frequently Asked Question Section */}
        <FaqSection faqs={faqs} />
      </main>

      {/* 9. Footer */}
      <SiteFooter />

      {/* 10. Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic={modalTopic}
      />
    </div>
  );
}
