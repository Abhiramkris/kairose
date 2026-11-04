import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Accordion } from "@/components/ui/Accordion";
import { fullFaqs } from "@/content/faqs";
import { generateFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | KaiRose Interior Design Dubai",
  description:
    "Everything you need to know about working with KaiRose. Timelines, cost parameters, turnkey guarantees, and bespoke material sourcing.",
};

export default function FaqsPage() {
  const jsonLd = generateFaqSchema(fullFaqs);

  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Transparency & Clarity</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-xl font-light">
            Everything you need to know about working with KaiRose.
          </p>
        </div>

        {/* 11 FAQs list from Page 10 of brief */}
        <div className="max-w-4xl mx-auto py-16">
          <Accordion items={fullFaqs} allowMultiple={true} />
        </div>

        {/* Still Have Questions? Bottom Band */}
        <section className="max-w-4xl mx-auto mt-12 py-16 px-8 sm:px-12 bg-[#0D0E10] text-[#F4F1EA] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Still Have Questions?
            </h2>
            <p className="mt-2 text-sm text-[#F4F1EA]/75 font-light">
              We’re here to help.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#F4F1EA] text-[#0D0E10] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px] whitespace-nowrap"
          >
            Contact Us →
          </Link>
        </section>
      </div>
    </div>
  );
}
