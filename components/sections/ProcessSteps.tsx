import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/content/site-config";

const steps = [
  {
    number: "01",
    title: "Private Consultation",
    desc: "We listen to your vision.",
  },
  {
    number: "02",
    title: "Bespoke Design",
    desc: "We create your unique blueprint.",
  },
  {
    number: "03",
    title: "White-Glove Execution",
    desc: "Flawless delivery by master craftsmen.",
  },
  {
    number: "04",
    title: "The Reveal",
    desc: "Step into your sanctuary.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow number="06">Process</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] tracking-tight">
            Crafted for You. Every Step of the Way.
          </h2>
        </div>

        {/* 4-step horizontal timeline with hairline connectors, numbers in brass, NO icons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 pt-12 relative">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col md:pr-8 relative ${
                index > 0 ? "md:pl-8 md:hairline-l" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-serif text-3xl sm:text-4xl text-[#A98A56] font-normal">
                  {step.number}
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl text-[#0D0E10]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm text-[#0D0E10]/70 font-light leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Signals: Single-row trust bar separated by vertical hairlines */}
        <div className="mt-16 sm:mt-24 pt-8 hairline-t grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {siteConfig.trustSignals.map((signal, idx) => (
            <div
              key={signal}
              className={`py-3 px-2 flex items-center justify-center ${
                idx > 0 ? "md:hairline-l" : ""
              }`}
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[#0D0E10]/80 font-medium">
                {signal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
