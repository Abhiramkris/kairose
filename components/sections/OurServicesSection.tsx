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

const serviceItems = [
  {
    id: "interior-turnkey-fitout",
    slug: "interior-turnkey-fitout",
    title: "Interior Turnkey Fitout",
    image: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    alt: "KaiRose Dubai luxury turnkey interior fitout and bespoke architecture",
    description: "End-to-end luxury fit-out, MEP coordination, civil execution, and premium finishes across Dubai.",
  },
  {
    id: "joinery-mass-production",
    slug: "joinery-mass-production",
    title: "Joinery & Mass Production",
    image: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    alt: "KaiRose Dubai bespoke joinery, mass production woodwork, and architectural cabinetry",
    description: "State-of-the-art joinery manufacturing, mass production facilities, and custom architectural woodwork.",
  },
  {
    id: "gypsum-false-ceiling",
    slug: "gypsum-false-ceiling",
    title: "Gypsum & False Ceiling",
    image: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    alt: "KaiRose Dubai gypsum decorative ceilings, fancy false ceilings, and ambient lighting reveals",
    description: "Architectural gypsum detailing, fancy false ceilings, acoustic baffles, and integrated lighting troughs.",
  },
  {
    id: "civil-works",
    slug: "civil-works",
    title: "Civil & Site Execution",
    image: "/images/hero1/videoframe_7092.png",
    alt: "KaiRose Dubai civil engineering, structural works, and dedicated site execution",
    description: "Turnkey civil engineering, structural reconfiguration, blockwork, screeding, and site project management.",
  },
  {
    id: "doors-wardrobes",
    slug: "doors-wardrobes",
    title: "Doors & Wardrobes",
    image: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    alt: "KaiRose Dubai luxury custom doors, walk-in closets, and bespoke wardrobe systems",
    description: "Bespoke internal doors, acoustic solid-core portals, walk-in closets, and illuminated wardrobe systems.",
  },
  {
    id: "kitchens-metal-works",
    slug: "kitchens-metal-works",
    title: "Kitchens & Metal Works",
    image: "/images/hero1/videoframe_1439.png",
    alt: "KaiRose Dubai modern luxury kitchens, architectural metal fabrication, and glass features",
    description: "German and Italian engineered kitchens, custom metal fabrication, brass inlays, and structural glass works.",
  },
];

export function OurServicesSection({
  onOpenConsultation,
}: OurServicesSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeService = serviceItems[selectedIndex];

  // Viewport scroll tracking for smooth interaction
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 35%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0 && latest <= 1) {
      const count = serviceItems.length;
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
      className="w-full bg-[#F8F1E8] py-16 sm:py-24 md:py-28 border-t border-black/10"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-center">
        {/* Luxury Outer Frame */}
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
          className="w-full max-w-[1360px] min-h-[580px] sm:min-h-[660px] md:min-h-[720px] border border-black/15 rounded-[6px] p-6 sm:p-10 md:p-12 lg:p-16 flex items-center justify-center bg-[#FAF6F0]/80 shadow-sm"
        >
          {/* Split Layout: Services Menu on Left, Photo Showcase on Right */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* Left Column: Services Menu with Bold, Large Typography */}
            <div className="w-full lg:w-[500px] xl:w-[560px] flex flex-col items-start justify-center flex-shrink-0">
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
                <span className="w-2.5 h-2.5 rounded-full bg-[#7E4E15]" />
                <h3 className="font-montserrat font-bold text-xs sm:text-sm uppercase tracking-[0.24em] text-[#7E4E15]">
                  Our Services
                </h3>
              </motion.div>

              {/* Service Items: Prominent, Bolder, Larger Typography */}
              <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-4.5 w-full">
                {serviceItems.map((item, idx) => {
                  const isSelected = selectedIndex === idx;

                  return (
                    <motion.div
                      key={item.id + idx}
                      initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        type: "spring",
                        stiffness: 85,
                        damping: 18,
                        mass: 0.8,
                        delay: 0.12 + idx * 0.06,
                        filter: {
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.12 + idx * 0.06,
                        },
                      }}
                    >
                      <Link
                        href={`/services/${item.slug}`}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        onFocus={() => setSelectedIndex(idx)}
                        className={`group block text-left font-cradley text-[23px] xs:text-[25px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] tracking-[0.02em] uppercase leading-[1.18] transition-all duration-200 cursor-pointer select-none ${
                          isSelected
                            ? "text-[#452702] font-semibold underline decoration-[#7E4E15] decoration-2 underline-offset-6 sm:underline-offset-8 translate-x-1.5 sm:translate-x-2"
                            : "text-[#452702]/80 hover:text-[#452702] font-medium hover:translate-x-1.5"
                        }`}
                      >
                        <span>{item.title}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Core Capabilities Ribbon */}
              <div className="mt-8 pt-5 border-t border-black/10 w-full">
                <p className="text-[11px] sm:text-xs font-montserrat uppercase tracking-[0.14em] text-[#7E4E15] font-semibold leading-relaxed">
                  Specialized Capabilities: Glass Works • Signages • Upholstery • Commercial Malls • Corporate Offices
                </p>
              </div>

              {/* Quick Directory Link & Inquiry */}
              <div className="mt-5 pt-4 border-t border-black/10 w-full flex items-center justify-between text-xs sm:text-[13px] font-montserrat tracking-wider uppercase">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[#452702] hover:text-[#7E4E15] hover:underline font-bold"
                >
                  <span>Explore Full Services Directory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenConsultation(`Services Consultation: ${activeService.title}`)
                    }
                    className="text-[#7E4E15] hover:text-[#452702] hover:underline font-bold cursor-pointer"
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
              className="relative w-full lg:flex-1 h-[360px] sm:h-[460px] md:h-[540px] lg:h-[600px] xl:h-[640px] rounded-[6px] overflow-hidden bg-[#EFE6DC] shadow-md border border-black/10 group"
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
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
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

              {/* Service Label Badge */}
              <Link
                href={`/services/${activeService.slug}`}
                className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-10 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-2.5 sm:py-3 rounded-[3px] border border-black/5 shadow-sm hover:bg-[#452702] hover:text-white transition-colors group/label cursor-pointer"
              >
                <span className="font-montserrat text-xs sm:text-[13px] uppercase tracking-wider text-[#452702] group-hover/label:text-white font-bold">
                  {activeService.title}
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
