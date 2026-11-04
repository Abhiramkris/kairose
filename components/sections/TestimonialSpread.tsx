import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { clientChronicles } from "@/content/testimonials";

export function TestimonialSpread() {
  return (
    <section className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow number="07">Chronicles</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] tracking-tight">
            Client Chronicles. The KaiRose Experience.
          </h2>
        </div>

        {/* 3-column editorial spread, large serif pull-quotes, small caps attribution */}
        {/* NO quote marks graphics, NO cards, NO avatars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-12">
          {clientChronicles.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between ${
                index > 0 ? "md:hairline-l md:pl-8 lg:pl-12" : ""
              }`}
            >
              <blockquote className="font-serif text-xl sm:text-2xl text-[#0D0E10] font-light leading-relaxed tracking-tight">
                {item.quote}
              </blockquote>

              <div className="mt-8 pt-6 hairline-t">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#0D0E10] font-medium">
                  {item.author}
                </p>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#A98A56] mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
