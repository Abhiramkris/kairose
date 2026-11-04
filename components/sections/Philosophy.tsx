import React from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Philosophy() {
  return (
    <section id="philosophy" className="relative w-full bg-[#0D0E10] text-[#F4F1EA] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          {/* Left Column: Monograph statement & copy */}
          <div className="lg:col-span-7 px-5 sm:px-10 lg:pl-16 lg:pr-12 py-20 lg:py-28 flex flex-col justify-center">
            <Eyebrow number="01" className="!text-[#A98A56]">
              Philosophy
            </Eyebrow>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#F4F1EA] mt-4 max-w-xl">
              Craftsmanship. Bespoke. Timeless.
            </h2>

            <div className="mt-8 space-y-5 text-sm sm:text-base text-[#F4F1EA]/80 font-light leading-relaxed max-w-lg">
              <p>
                We curate experiences, not just rooms. Every project is a canvas for your story—combining time-honored craftsmanship with modern luxury and the finest materials, from Italian marble to hand-brushed gold finishes.
              </p>
              <p>
                Our white-glove service ensures a flawless journey from vision to reality.
              </p>
            </div>
          </div>

          {/* Right Column: Full-bleed material detail image bleeding off the right viewport edge */}
          <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full">
            <Image
              src="/images/philosophy/marble-brass-detail.jpg"
              alt="Italian Calacatta marble countertop with hand-brushed brass detailing"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover film-grade"
            />
            {/* Subtle inner hairline separator */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute inset-y-0 left-0 w-[1px] bg-[rgba(214,204,187,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
