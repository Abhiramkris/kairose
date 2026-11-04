"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { videoTestimonials } from "@/content/testimonials";

export function VideoRail() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // First 3 testimonials for the homepage
  const homepageVideos = videoTestimonials.slice(0, 3);

  return (
    <section className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 hairline-b gap-6">
          <div>
            <Eyebrow number="02">Voices</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] tracking-tight">
              Voices of KaiRose. Real Homes. Real Stories.
            </h2>
            <p className="mt-3 text-sm text-[#0D0E10]/70 max-w-lg">
              Hear from the families whose sanctuaries we’ve crafted.
            </p>
          </div>

          <Link
            href="/testimonials"
            className="group inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
          >
            <span>View All Client Stories</span>
            <span className="ml-2 text-[#A98A56] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Desktop Rail / Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-12">
          {homepageVideos.map((item) => (
            <div key={item.id} className="flex flex-col group">
              {/* Still Frame Thumbnail with Play Affordance */}
              <div
                onClick={() => setActiveVideo(item.videoPlaceholderUrl)}
                className="relative aspect-[16/9] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px] cursor-pointer"
              >
                <Image
                  src={item.thumbnail}
                  alt={`${item.family} residence interior`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover film-grade transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Minimalist Play affordance — no generic colorful play buttons */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/15 transition-colors">
                  <div className="w-12 h-12 border border-[#F4F1EA]/80 flex items-center justify-center rounded-[2px] backdrop-none transition-transform duration-300 group-hover:scale-105">
                    <span className="text-[#F4F1EA] text-xs font-serif tracking-widest pl-0.5">
                      ▶
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-[#0D0E10]/80 px-2 py-0.5 text-[10px] tracking-wider text-[#F4F1EA] uppercase">
                  {item.duration}
                </div>
              </div>

              {/* Text Info & Quote */}
              <div className="pt-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-lg text-[#0D0E10]">
                    {item.family}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#A98A56] mt-0.5">
                    {item.property}
                  </p>
                  <blockquote className="mt-3 text-sm italic text-[#0D0E10]/80 font-light leading-relaxed">
                    “{item.quote}”
                  </blockquote>
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
            </div>
          ))}
        </div>
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
    </section>
  );
}
