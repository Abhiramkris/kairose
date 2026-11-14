"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getAllServices } from "@/content/services";

export function ServiceIndex() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const services = getAllServices();

  return (
    <section className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Eyebrow & Headline */}
        <div className="pb-12 hairline-b">
          <Eyebrow number="03">Services</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0D0E10] tracking-tight">
            Our Expertise. Your Sanctuary.
          </h2>
        </div>

        {/* Numbered Index List */}
        <div className="relative">
          {services.map((service, idx) => {
            const isHovered = hoveredService === service.slug;

            return (
              <div
                key={service.slug}
                onMouseEnter={() => setHoveredService(service.slug)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative group transition-colors duration-300 hover:bg-[#E4DCCD] px-4 sm:px-8 py-8 sm:py-10 hairline-b flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left: Number and Service Name */}
                <div className="flex items-baseline gap-6 md:gap-10 md:w-5/12">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#A98A56] font-medium font-sans">
                    0{idx + 1}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-serif text-2xl sm:text-3xl text-[#0D0E10] group-hover:text-[#0D0E10] transition-colors"
                  >
                    {service.title}
                  </Link>
                </div>

                {/* Middle: One-line description */}
                <div className="md:w-4/12">
                  <p className="text-sm text-[#0D0E10]/70 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Right: Hover image preview & CTA actions */}
                <div className="flex items-center justify-between md:justify-end gap-6 md:w-3/12">
                  {/* Preview image thumbnail */}
                  <div
                    aria-hidden="true"
                    className={`relative w-20 h-14 rounded-[2px] overflow-hidden transition-all duration-300 ${
                      isHovered ? "opacity-100 scale-105" : "opacity-75 sm:opacity-0"
                    }`}
                  >
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      sizes="80px"
                      className="object-cover film-grade"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs uppercase tracking-[0.18em] px-4 py-2 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px] whitespace-nowrap"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
