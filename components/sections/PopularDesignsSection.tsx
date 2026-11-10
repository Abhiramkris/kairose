"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DesignProject } from "@/lib/supabase";

interface PopularDesignsSectionProps {
  designs: DesignProject[];
  onOpenConsultation?: (topic?: string) => void;
}

const categories = ["All", "Living", "Kitchen", "Bedroom", "Wardrobe", "Dining"] as const;

export function PopularDesignsSection({
  designs,
  onOpenConsultation,
}: PopularDesignsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Dynamic category project count
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: designs.length };
    designs.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, [designs]);

  const filteredDesigns =
    activeCategory === "All"
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  return (
    <section id="popular-designs" className="w-full bg-[#F8F1E8] py-16 sm:py-24 border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Heading & Luxury Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="text-center mb-8 sm:mb-10"
        >
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#452702]/15 bg-[#FAF6F0] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7E4E15] font-montserrat font-medium shadow-[0_1px_4px_rgba(69,39,2,0.04)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7E4E15]" />
              Curated Portfolio Index
            </span>
          </div>

          <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#452702] font-normal uppercase tracking-[0.06em] leading-tight mb-3">
            Popular Designs
          </h2>

          <p className="max-w-2xl mx-auto font-montserrat text-xs sm:text-sm text-[#221E1B]/70 font-light leading-relaxed">
            Explore our award-winning private residences, penthouses, and turnkey architectural commissions crafted across Dubai&apos;s most prestigious enclaves.
          </p>
        </motion.div>

        {/* Category Filter Pills: Architectural Segmented Control with Sliding Spring Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 18,
            delay: 0.1,
            filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
          }}
          className="flex items-center justify-center mb-10 sm:mb-14 px-2"
        >
          <div className="inline-flex items-center p-1 sm:p-1.5 bg-[#FAF6F0] border border-black/10 rounded-full shadow-[0_2px_12px_rgba(69,39,2,0.04)] overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const count = categoryCounts[cat] ?? 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs uppercase tracking-[0.16em] font-montserrat font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 sm:gap-2 ${
                    isActive
                      ? "text-white"
                      : "text-[#452702]/70 hover:text-[#452702] hover:bg-black/[0.03]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="popularDesignsActiveFilter"
                      className="absolute inset-0 bg-[#452702] rounded-full shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                  <span
                    className={`relative z-10 text-[9px] sm:text-[10px] tabular-nums font-mono px-1.5 py-0.5 rounded-full transition-colors ${
                      isActive
                        ? "bg-white/20 text-[#FAF6F0]"
                        : "bg-black/5 text-[#452702]/60"
                    }`}
                  >
                    {count < 10 ? `0${count}` : count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Design Cards Grid: Single-by-Single Apple Spring & Blur Entry */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDesigns.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                transition={{
                  type: "spring",
                  stiffness: 75,
                  damping: 17,
                  mass: 0.85,
                  delay: (index % 3) * 0.08,
                  filter: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (index % 3) * 0.08,
                  },
                }}
                className="flex flex-col bg-[#FAF6F0] border border-black/10 rounded-[6px] p-3 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Clean Rectangular Image Container - No Rounded Column Arch */}
                <div className="relative w-full aspect-[4/4.5] sm:aspect-[3/3.8] rounded-[4px] overflow-hidden bg-[#EFE6DC] border border-black/10 mb-4 sm:mb-5 group">
                  <Image
                    src={item.imageUrl}
                    alt={`KaiRose Dubai ${item.title} — Luxury ${item.category.toLowerCase()} interior design and bespoke architecture`}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Frosted Category Badge on top-left of image */}
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 rounded-[3px] bg-[#FAF6F0]/90 backdrop-blur-md border border-black/10 text-[9px] sm:text-[10px] uppercase font-montserrat tracking-[0.16em] text-[#452702] font-semibold shadow-xs pointer-events-none">
                    {item.category}
                  </span>

                  {/* Circular ↗ Arrow Button */}
                  <button
                    type="button"
                    aria-label={`View ${item.title}`}
                    onClick={() => onOpenConsultation?.(`Design: ${item.title}`)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-[#F8F1E8]/90 hover:bg-[#452702] text-[#452702] hover:text-white rounded-full flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cradley text-lg sm:text-2xl text-[#452702] font-normal mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Button: #452702, text white */}
                  <button
                    onClick={() => onOpenConsultation?.(`Design: ${item.title}`)}
                    className="w-full py-2.5 sm:py-3 bg-[#452702] hover:bg-[#5D3503] text-white text-[10px] sm:text-xs uppercase tracking-[0.16em] font-medium rounded transition-colors duration-200 cursor-pointer text-center mt-2"
                  >
                    {item.ctaText}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
