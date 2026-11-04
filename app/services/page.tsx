import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { servicesData } from "@/content/services";

export const metadata: Metadata = {
  title: "Interior Design Services Dubai | Penthouse, Villa & Turnkey Fit-Out",
  description:
    "From single-room makeovers to full turnkey projects, KaiRose offers a comprehensive suite of interior design and architectural fit-out services.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Capabilities</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            Our Services. Tailored to Your Lifestyle.
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-2xl font-light">
            From single-room makeovers to full turnkey projects, KaiRose offers a comprehensive suite of interior design services.
          </p>
        </div>

        {/* 5 Full Editorial Blocks */}
        <div className="space-y-24 sm:space-y-32 pt-16">
          {servicesData.map((service, idx) => (
            <article
              key={service.id}
              id={service.slug}
              className="hairline-b pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Left Column: Number, Title, Description, Image */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] text-[#A98A56] font-medium block">
                  Service {idx + 1}: {service.index}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10]">
                  {service.title}
                </h2>

                <p className="text-base text-[#0D0E10]/80 font-light leading-relaxed max-w-xl">
                  {service.description}
                </p>

                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px] mt-8">
                  <Image
                    src={service.previewImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover film-grade"
                  />
                </div>
              </div>

              {/* Right Column: Included Deliverables & Action */}
              <div className="lg:col-span-5 lg:pl-8 lg:hairline-l flex flex-col justify-between h-full pt-4 lg:pt-12">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#0D0E10]/50 block mb-4">
                    Included Deliverables
                  </span>

                  <ul className="space-y-3">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#0D0E10]/85 font-light">
                        <span className="text-[#A98A56] text-xs mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 pt-8 hairline-t">
                  <Link
                    href={`/contact?intent=quote&service=${service.slug}`}
                    className="inline-flex items-center text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
                  >
                    Get a Quote →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing Band: Not Sure Which Service You Need? */}
        <section className="mt-20 py-16 px-8 sm:px-12 bg-[#E4DCCD] rounded-[2px] hairline flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              Not Sure Which Service You Need?
            </h2>
            <p className="mt-2 text-sm text-[#0D0E10]/75 font-light">
              Book a free consultation and we’ll guide you.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px] whitespace-nowrap"
          >
            Book a Private Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
