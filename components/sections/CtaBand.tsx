import React, { Suspense } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export function CtaBand() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D0E10] text-[#F4F1EA] hairline-dark-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline and subcopy */}
          <div className="lg:col-span-5">
            <Eyebrow number="09" className="!text-[#A98A56]">
              Begin Your Journey
            </Eyebrow>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F1EA] tracking-tight mt-3">
              Let us craft your sanctuary.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#F4F1EA]/75 font-light leading-relaxed max-w-md">
              Schedule your private, no-obligation design consultation today.
            </p>
          </div>

          {/* Right Column: Inline form in two-column layout */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="text-xs text-[#F4F1EA]/50">Loading form...</div>}>
              <ConsultationForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
