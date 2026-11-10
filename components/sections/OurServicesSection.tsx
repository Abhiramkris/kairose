"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ServiceItem } from "@/lib/supabase";

interface OurServicesSectionProps {
  services?: ServiceItem[];
  onOpenConsultation?: (topic?: string) => void;
}

const figmaServiceItems = [
  {
    id: "space-planning-1",
    slug: "space-planning",
    title: "space planning",
    image: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    alt: "KaiRose Dubai bespoke architectural space planning and residential interior design",
    description: "Volumetric spatial modeling, daylight analysis, and circulation dynamics.",
  },
  {
    id: "interior-design-1",
    slug: "interior-design",
    title: "Interior design",
    image: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    alt: "KaiRose Dubai luxury interior design salon with custom joinery and curated furnishings",
    description: "Bespoke residential sanctuaries, Italian stonework, and custom joinery.",
  },
  {
    id: "light-design-1",
    slug: "light-design",
    title: "Light design",
    image: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    alt: "KaiRose Dubai circadian architectural lighting and ambient atmospheric design",
    description: "Circadian biological lighting, indirect cove reveals, and smart scenes.",
  },
  {
    id: "interior-design-2",
    slug: "interior-design",
    title: "Interior design",
    image: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    alt: "KaiRose Dubai monumental grand entrance foyer and bespoke architectural details",
    description: "Grand entrance architecture and bespoke European furniture curation.",
  },
  {
    id: "light-design-2",
    slug: "light-design",
    title: "Light design",
    image: "/images/hero1/videoframe_7377.png",
    alt: "KaiRose Dubai sculptural ceiling illumination and luxury villa lighting",
    description: "Sculptural ceiling illuminations and statement European chandeliers.",
  },
  {
    id: "space-planning-2",
    slug: "space-planning",
    title: "space planning",
    image: "/images/hero1/videoframe_1439.png",
    alt: "KaiRose Dubai spatial layout and custom marble dining room architecture",
    description: "Structural wall reconfiguration, MEP coordination, and dining portals.",
  },
];

export function OurServicesSection({
  onOpenConsultation,
}: OurServicesSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeService = figmaServiceItems[selectedIndex];

  // Viewport-driven scroll synchronization: active item advances as user scrolls through the section
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 35%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0 && latest <= 1) {
      const count = figmaServiceItems.length;
      const calculatedIndex = Math.min(Math.floor(latest * count), count - 1);
      if (calculatedIndex !== selectedIndex) {
        setSelectedIndex(calculatedIndex);
      }
    }
  });

  return (
    <section
      ref={sectionRef}
      id="our-services"
      className="w-full bg-[#F8F1E8] py-16 sm:py-24 md:py-32 border-t border-black/10"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-center">
        {/* Expansive Luxury Outer Frame */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="w-full max-w-[1360px] min-h-[580px] sm:min-h-[660px] md:min-h-[720px] border border-black/15 rounded-[6px] p-6 sm:p-10 md:p-12 lg:p-16 flex items-center justify-center bg-[#FAF6F0]/60 shadow-sm"
        >
          {/* Large Split Layout */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Column: Generous Service Menu with Click-Through & Hover */}
            <div className="w-full lg:w-[480px] xl:w-[540px] flex flex-col items-start justify-center flex-shrink-0">
              {/* Header Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 18,
                  delay: 0.1,
                  filter: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
                }}
                className="flex items-center gap-3 mb-6 sm:mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#452702]" />
                <h3 className="font-montserrat font-semibold text-xs sm:text-sm uppercase tracking-[0.24em] text-[#452702]">
                  Our Services
                </h3>
              </motion.div>

              {/* Service Items: Grand Scale Typography with Direct Navigation Links */}
              <div className="flex flex-col space-y-2.5 sm:space-y-3.5 md:space-y-4 w-full">
                {figmaServiceItems.map((item, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <motion.div
                      key={item.id + idx}
                      initial={{ opacity: 0, x: -25, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        type: "spring",
                        stiffness: 85,
                        damping: 18,
                        mass: 0.8,
                        delay: 0.15 + idx * 0.07,
                        filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 + idx * 0.07 },
                      }}
                    >
                      <Link
                        href={`/services/${item.slug}`}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        onFocus={() => setSelectedIndex(idx)}
                        className={`group block text-left font-cradley text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[44px] leading-[1.2] transition-all cursor-pointer select-none ${
                          isSelected
                            ? "underline text-[#452702] drop-shadow-[0_4px_6px_rgba(0,0,0,0.12)] font-normal translate-x-2"
                            : "text-[#452702]/65 hover:text-[#452702] font-normal hover:translate-x-1"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span>{item.title}</span>
                          {isSelected && (
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-montserrat uppercase tracking-wider font-semibold text-[#7E4E15]">
                              Open Page →
                            </span>
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Directory Link */}
              <div className="mt-8 pt-6 border-t border-black/10 w-full flex items-center justify-between text-xs font-montserrat tracking-wider uppercase">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[#452702] hover:underline font-semibold"
                >
                  <span>Explore Full Services Directory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Services Consultation: ${activeService.title}`)}
                    className="text-[#7E4E15] hover:underline font-medium cursor-pointer"
                  >
                    Quick Inquiry
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Expansive Showcase Image (Click opens service page) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 18,
                mass: 0.9,
                delay: 0.25,
                filter: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
              }}
              className="relative w-full lg:flex-1 h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] xl:h-[620px] rounded-[6px] overflow-hidden bg-[#EFE6DC] shadow-md border border-black/10 group"
            >
              <Link
                href={`/services/${activeService.slug}`}
                aria-label={`Open ${activeService.title} dedicated page`}
                className="absolute inset-0 block cursor-pointer z-0"
              >
                {/* Dynamic Image with crossfade transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.image}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.alt}
                      fill
                      sizes="(max-width: 1024px) 95vw, 750px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority={selectedIndex === 0}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none"
                    />
                  </motion.div>
                </AnimatePresence>
              </Link>

              {/* Direct Open Page Action Button */}
              <Link
                href={`/services/${activeService.slug}`}
                aria-label={`Open ${activeService.title} dedicated page`}
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-[#452702] hover:text-white text-[#452702] transition-colors duration-200 cursor-pointer group/btn z-10"
              >
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>

              {/* Service Label & Click-Through Badge */}
              <Link
                href={`/services/${activeService.slug}`}
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-[3px] border border-black/5 shadow-sm hover:bg-[#452702] hover:text-white transition-colors group/label cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="font-montserrat text-xs uppercase tracking-wider text-[#452702] group-hover/label:text-white font-semibold capitalize">
                    {activeService.title}
                  </span>
                  <span className="text-[11px] text-[#7E4E15] group-hover/label:text-white/90 font-medium">
                    • View Page →
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
