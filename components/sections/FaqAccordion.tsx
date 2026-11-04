import React from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { homepageFaqs } from "@/content/faqs";

export function FaqAccordion() {
  return (
    <section className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Eyebrow, Title & Context */}
          <div className="lg:col-span-4">
            <Eyebrow number="08">Inquiries</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] tracking-tight mt-2">
              FAQs About Home Interior Design
            </h2>
            <p className="mt-4 text-sm text-[#0D0E10]/70 font-light leading-relaxed">
              Clear parameters regarding commissions, timelines, scope, and warranties across Dubai residences.
            </p>
            <div className="mt-8">
              <Link
                href="/faqs"
                className="text-xs uppercase tracking-[0.18em] text-[#A98A56] hover:text-[#0D0E10] transition-colors"
              >
                View Full FAQ Archive →
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion container with hairline dividers */}
          <div className="lg:col-span-8">
            <Accordion items={homepageFaqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
