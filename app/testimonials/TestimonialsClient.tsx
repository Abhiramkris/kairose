"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { videoTestimonials, clientChronicles } from "@/content/testimonials";

export function TestimonialsClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Client Stories</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            Voices of KaiRose. Real Homes. Real Stories.
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-xl font-light">
            Watch the stories of families who trusted us with their homes.
          </p>
        </div>

        {/* 5 Video Entries with 16:9 thumbnails and durations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 pt-16">
          {videoTestimonials.map((item) => (
            <article key={item.id} className="flex flex-col group">
              <div
                onClick={() => setActiveVideo(item.videoPlaceholderUrl)}
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px] cursor-pointer"
              >
                <Image
                  src={item.thumbnail}
                  alt={`${item.family} residence`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover film-grade transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                  <div className="w-12 h-12 border border-[#F4F1EA]/80 flex items-center justify-center rounded-[2px] transition-transform duration-300 group-hover:scale-105">
                    <span className="text-[#F4F1EA] text-xs font-serif pl-0.5">
                      ▶
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#0D0E10]/80 px-2 py-0.5 text-[10px] tracking-wider text-[#F4F1EA] uppercase">
                  Duration: {item.duration}
                </div>
              </div>

              <div className="pt-5 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="font-serif text-xl text-[#0D0E10]">
                    {item.family}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#A98A56] mt-0.5">
                    {item.property} — {item.location}
                  </p>
                  <p className="mt-3 text-sm italic text-[#0D0E10]/80 font-light leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item.videoPlaceholderUrl)}
                    className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#A98A56] hover:text-[#927546] transition-colors cursor-pointer"
                  >
                    Watch Story →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Written Chronicles Spread */}
        <section className="mt-24 sm:mt-32 pt-16 hairline-t">
          <div className="pb-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-2">
              Written Testimonials
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              Client Chronicles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8">
            {clientChronicles.map((item, idx) => (
              <div
                key={item.id}
                className={`flex flex-col justify-between ${
                  idx > 0 ? "md:hairline-l md:pl-8 lg:pl-12" : ""
                }`}
              >
                <blockquote className="font-serif text-lg sm:text-xl text-[#0D0E10] font-light leading-relaxed">
                  {item.quote}
                </blockquote>
                <div className="mt-6 pt-4 hairline-t">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#0D0E10] font-medium">
                    {item.author}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#A98A56]">
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-24 py-16 px-8 sm:px-12 bg-[#0D0E10] text-[#F4F1EA] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Ready to Write Your Own Story?
            </h2>
            <p className="mt-2 text-sm text-[#F4F1EA]/75 font-light">
              Let’s create a home that you’ll love to tell stories about.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#F4F1EA] text-[#0D0E10] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px] whitespace-nowrap"
          >
            Book a Private Consultation
          </Link>
        </section>
      </div>

      {/* Video Modal Lightbox */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0D0E10]/95 flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative w-full max-w-4xl aspect-[16/9] bg-black rounded-[2px] overflow-hidden border border-[#A98A56]">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 text-[#F4F1EA] bg-[#0D0E10] px-3 py-1.5 text-xs uppercase tracking-widest border border-[#A98A56] hover:bg-[#A98A56] hover:text-[#0D0E10]"
            >
              Close ✕
            </button>
            <iframe
              src={activeVideo}
              title="KaiRose Client Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
