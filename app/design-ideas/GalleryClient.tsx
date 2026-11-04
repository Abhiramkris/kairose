"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { designsData } from "@/content/designs";

const roomOptions = [
  "All",
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Wardrobe",
  "Dining Room",
  "Bathroom",
  "Balcony",
];

const styleOptions = [
  "All",
  "Modern",
  "Minimalist",
  "Art Deco",
  "Contemporary",
  "Classic",
  "Bohemian",
  "Industrial",
];

const popularityOptions = [
  "All",
  "Trending Now",
  "Most Viewed",
  "Recently Added",
];

export function GalleryClient() {
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");
  const [selectedPopularity, setSelectedPopularity] = useState("All");

  const trendingThree = designsData.slice(0, 3);

  const filteredDesigns = designsData.filter((item) => {
    if (selectedRoom !== "All" && item.roomType !== selectedRoom) return false;
    if (selectedStyle !== "All" && !item.styleTag.toLowerCase().includes(selectedStyle.toLowerCase())) return false;
    if (selectedPopularity !== "All" && item.popularity !== selectedPopularity) return false;
    return true;
  });

  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Bespoke Gallery</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            Design Ideas. Curated for You.
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-xl font-light">
            Browse our collection of bespoke interiors. Filter by room, style, or popularity.
          </p>
        </div>

        {/* Sticky Filter Bar */}
        <div className="sticky top-20 z-30 bg-[#F4F1EA]/95 backdrop-none py-6 hairline-b flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {/* Room Type Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50">
                Room:
              </span>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="bg-transparent text-xs uppercase tracking-[0.14em] text-[#0D0E10] hairline-b pb-1 rounded-none focus:outline-none focus:border-[#A98A56]"
              >
                {roomOptions.map((room) => (
                  <option key={room} value={room}>
                    {room}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50">
                Style:
              </span>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="bg-transparent text-xs uppercase tracking-[0.14em] text-[#0D0E10] hairline-b pb-1 rounded-none focus:outline-none focus:border-[#A98A56]"
              >
                {styleOptions.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Popularity Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50">
                Popularity:
              </span>
              <select
                value={selectedPopularity}
                onChange={(e) => setSelectedPopularity(e.target.value)}
                className="bg-transparent text-xs uppercase tracking-[0.14em] text-[#0D0E10] hairline-b pb-1 rounded-none focus:outline-none focus:border-[#A98A56]"
              >
                {popularityOptions.map((pop) => (
                  <option key={pop} value={pop}>
                    {pop}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-[#0D0E10]/50">
            Showing {filteredDesigns.length} of {designsData.length} Designs
          </div>
        </div>

        {/* Trending Now. Most Coveted This Month */}
        <section className="py-16 hairline-b">
          <div className="pb-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-2">
              Featured Concepts
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              Trending Now. Most Coveted This Month.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {trendingThree.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <Link href={`/design-ideas/${item.slug}`}>
                  <MediaFrame
                    src={item.image}
                    alt={item.name}
                    aspectRatio="4/5"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className="pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-xl text-[#0D0E10] group-hover:text-[#A98A56] transition-colors">
                      <Link href={`/design-ideas/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#A98A56] mt-1">
                      {item.styleTag}
                    </p>
                  </div>
                  <div className="pt-3">
                    <Link
                      href={`/design-ideas/${item.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Designs Grid (3 columns, 4:5 crops, filterable) */}
        <section className="py-16">
          <div className="pb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              All Designs Grid
            </h2>
          </div>

          {filteredDesigns.length === 0 ? (
            <div className="py-20 text-center text-sm text-[#0D0E10]/60">
              No architectural concepts match the selected combination. Reset filters to explore all creations.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {filteredDesigns.map((item) => (
                <div key={item.id} className="flex flex-col group">
                  <Link href={`/design-ideas/${item.slug}`}>
                    <MediaFrame
                      src={item.image}
                      alt={item.name}
                      aspectRatio="4/5"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="pt-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-serif text-lg text-[#0D0E10] group-hover:text-[#A98A56] transition-colors">
                        <Link href={`/design-ideas/${item.slug}`}>
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-[#A98A56] mt-1">
                        {item.styleTag}
                      </p>
                    </div>

                    <div className="pt-3">
                      <Link
                        href={`/design-ideas/${item.slug}`}
                        className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Bottom CTA Band: "Didn’t find what you’re looking for?" */}
        <section className="mt-16 py-16 px-8 sm:px-12 bg-[#E4DCCD] rounded-[2px] hairline flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              Didn’t find what you’re looking for?
            </h2>
            <p className="mt-2 text-sm text-[#0D0E10]/75 font-light">
              Our designers can create a bespoke design just for you.
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
