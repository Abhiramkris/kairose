import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] sm:min-h-[88vh] h-[100svh] sm:h-auto overflow-hidden bg-[#0D0E10]">
      {/* Full-bleed 21:9 photograph, object-cover, high-priority */}
      <Image
        src="/images/hero/dubai-penthouse-dusk.jpg"
        alt="Bespoke luxury Dubai penthouse interior at dusk with skyline view through floor-to-ceiling glass"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center film-grade"
      />

      {/* Single linear scrim strictly from bottom-left for text legibility, never decorative */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-tr from-black/85 via-black/45 to-transparent pointer-events-none"
      />

      {/* Content anchored bottom-left */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 pb-12 sm:pb-20">
          <div className="max-w-[620px]">
            {/* Eyebrow */}
            <Eyebrow className="!text-[#A98A56]">
              By Appointment — Dubai
            </Eyebrow>

            {/* Headline */}
            <h1 className="font-serif text-[clamp(44px,6vw,92px)] text-[#F4F1EA] font-normal leading-[1.05] tracking-[-0.03em] mt-3">
              Redefining Luxury Interiors.
            </h1>

            {/* One line of subcopy from brief */}
            <p className="mt-6 text-sm sm:text-base text-[#F4F1EA]/85 font-light leading-relaxed max-w-lg">
              Bespoke designs for the discerning few. From concept to completion, we craft spaces that speak to your soul.
            </p>

            {/* CTAs: Text-link style with 1px brass underline + secondary link */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-8 sm:gap-10">
              <Link
                href="/contact"
                className="group relative inline-flex items-center text-sm font-medium tracking-wide text-[#F4F1EA] transition-colors"
              >
                <span>Book a Private Consultation</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 text-[#A98A56]">
                  →
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-4px] left-0 h-[1px] w-full bg-[#A98A56] origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-110"
                />
              </Link>

              <Link
                href="/projects"
                className="group relative inline-flex items-center text-sm font-light tracking-wide text-[#F4F1EA]/75 hover:text-[#F4F1EA] transition-colors"
              >
                <span>Explore the Portfolio</span>
                <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1 text-[#A98A56]">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
