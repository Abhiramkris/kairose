"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FilterChips } from "@/components/ui/FilterChips";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { designsData } from "@/content/designs";

const filterCategories = ["All", "Living", "Kitchen", "Bedroom", "Wardrobe", "Dining"];

export function TrendingGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Show all designs or filter dynamically
  const filteredDesigns = designsData.filter((item) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Living") return item.roomType === "Living Room";
    if (activeCategory === "Kitchen") return item.roomType === "Kitchen";
    if (activeCategory === "Bedroom") return item.roomType === "Bedroom";
    if (activeCategory === "Wardrobe") return item.roomType === "Wardrobe";
    if (activeCategory === "Dining") return item.roomType === "Dining Room";
    return true;
  });

  return (
    <section id="trending" className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 hairline-b gap-6">
          <div>
            <Eyebrow number="04">Recent Trends at Your Home</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0D0E10] tracking-tight">
              Recent Trends at Your Home. Make Yours Like This.
            </h2>
            <p className="mt-3 text-sm text-[#0D0E10]/70 max-w-xl font-light">
              Explore our coveted signature aesthetics and tailor any architectural concept directly to your residence with our master craftsmen.
            </p>
          </div>

          <Link
            href="/design-ideas"
            className="group inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
          >
            <span>View All Trends</span>
            <span className="ml-2 text-[#A98A56] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Filter Chips */}
        <div className="pt-8">
          <FilterChips
            categories={filterCategories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        {/* Grid of Trendy Designs with Dedicated "Make Yours Like This" CTA Card Treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 pt-12">
          {filteredDesigns.map((design) => (
            <div
              key={design.id}
              className="flex flex-col group p-4 bg-[#F4F1EA] hover:bg-[#E4DCCD]/40 hairline rounded-[2px] transition-colors duration-300"
            >
              <Link href={`/design-ideas/${design.slug}`}>
                <MediaFrame
                  src={design.image}
                  alt={design.name}
                  aspectRatio="4/5"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>

              {/* Caption & Actions */}
              <div className="pt-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#A98A56] font-medium font-sans">
                      {design.styleTag}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#0D0E10]/40">
                      {design.roomType}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#0D0E10] group-hover:text-[#A98A56] transition-colors">
                    <Link href={`/design-ideas/${design.slug}`}>
                      {design.name}
                    </Link>
                  </h3>

                  {design.description && (
                    <p className="mt-2 text-xs text-[#0D0E10]/70 font-light leading-relaxed line-clamp-2">
                      {design.description}
                    </p>
                  )}
                </div>

                {/* CTAs: Make Yours Like This primary button + View Details secondary */}
                <div className="pt-6 mt-4 hairline-t flex items-center justify-between gap-4">
                  <Link
                    href={`/contact?intent=design&ref=${design.slug}`}
                    className="inline-flex items-center justify-center text-[11px] uppercase tracking-[0.18em] px-4 py-2.5 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] font-medium transition-colors rounded-[2px] select-none"
                  >
                    Make Yours Like This →
                  </Link>

                  <Link
                    href={`/design-ideas/${design.slug}`}
                    className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/70 hover:text-[#A98A56] transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
