"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Hammer,
  Settings,
  DoorClosed,
  Layers,
  UtensilsCrossed,
  Wrench,
  Home,
  HardHat,
  Maximize2,
  Tv,
  Armchair,
  Building2,
  Store,
  Building,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceItem } from "@/lib/supabase";

interface OurServicesSectionProps {
  services?: ServiceItem[];
  onOpenConsultation?: (topic?: string) => void;
}

export interface BrochureService {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  alt: string;
  column: 1 | 2;
}

const brochureServices: BrochureService[] = [
  // Column 1 (Joinery, Fabrication & Custom Woodwork)
  {
    id: "joinery",
    title: "Joinery",
    icon: Hammer,
    image: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    alt: "KaiRose Dubai bespoke architectural joinery, wall paneling, and custom craftsmanship",
    column: 1,
  },
  {
    id: "mass-production",
    title: "Mass Production",
    icon: Settings,
    image: "/images/hero1/f1a74ff5f63d778540a9cd1b119ac792acb512e6-5400x3877.avif",
    alt: "KaiRose Dubai high-capacity precision mass production for commercial and residential developments",
    column: 1,
  },
  {
    id: "doors",
    title: "Doors",
    icon: DoorClosed,
    image: "/images/hero1/videoframe_7092.png",
    alt: "KaiRose Dubai luxury architectural entrance doors, pivot systems, and acoustic portals",
    column: 1,
  },
  {
    id: "wardrobes",
    title: "Wardrobes",
    icon: Layers,
    image: "/images/hero1/videoframe_7377.png",
    alt: "KaiRose Dubai bespoke walk-in wardrobes, custom closets, and fluted glass dressing suites",
    column: 1,
  },
  {
    id: "kitchens",
    title: "Kitchens",
    icon: UtensilsCrossed,
    image: "/images/hero1/videoframe_1439.png",
    alt: "KaiRose Dubai luxury European bespoke kitchens, marble islands, and integrated cabinetry",
    column: 1,
  },
  {
    id: "metal-works",
    title: "Metal Works",
    icon: Wrench,
    image: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    alt: "KaiRose Dubai custom architectural metal works, brass screens, and structural trims",
    column: 1,
  },

  // Column 2 (Interior Turnkey Fitout & Technical Contracting)
  {
    id: "interior-turnkey-fitout",
    title: "Interior Turnkey Fitout",
    icon: Home,
    image: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    alt: "KaiRose Dubai complete interior turnkey fit-out execution from design to handover",
    column: 2,
  },
  {
    id: "gypsum-false-ceiling",
    title: "Gypsum & Fancy False Ceiling",
    icon: Layers,
    image: "/images/hero1/videoframe_10439.png",
    alt: "KaiRose Dubai decorative gypsum false ceilings, coffered designs, and ambient cove lighting",
    column: 2,
  },
  {
    id: "civil-works",
    title: "Civil Works",
    icon: HardHat,
    image: "/images/hero1/videoframe_7092.png",
    alt: "KaiRose Dubai civil contracting, masonry, floor screeding, and space modifications",
    column: 2,
  },
  {
    id: "glass-works",
    title: "Glass Works",
    icon: Maximize2,
    image: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    alt: "KaiRose Dubai architectural glass works, frameless partitions, mirrors, and balustrades",
    column: 2,
  },
  {
    id: "signages",
    title: "Signages",
    icon: Tv,
    image: "/images/hero1/f1a74ff5f63d778540a9cd1b119ac792acb512e6-5400x3877.avif",
    alt: "KaiRose Dubai bespoke architectural 3D illuminated signages and corporate wayfinding",
    column: 2,
  },
  {
    id: "upholstery",
    title: "Upholstery",
    icon: Armchair,
    image: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    alt: "KaiRose Dubai custom luxury velvet upholstery, acoustic wall paneling, and tailored furnishings",
    column: 2,
  },
  {
    id: "site-execution",
    title: "Site Execution",
    icon: Building2,
    image: "/images/hero1/videoframe_1439.png",
    alt: "KaiRose Dubai on-site MEP supervision, civil execution, and rigorous quality control",
    column: 2,
  },
];

const sectors = [
  { name: "Commercial Malls", icon: Store },
  { name: "Corporate Offices", icon: Building },
  { name: "Residential Spaces", icon: Home },
  { name: "Event Venues", icon: Sparkles },
];

export function OurServicesSection({
  onOpenConsultation,
}: OurServicesSectionProps) {
  const [activeId, setActiveId] = useState<string>("interior-turnkey-fitout");

  const activeItem =
    brochureServices.find((s) => s.id === activeId) || brochureServices[0];

  const col1 = brochureServices.filter((s) => s.column === 1);
  const col2 = brochureServices.filter((s) => s.column === 2);

  return (
    <section
      id="our-services"
      className="w-full bg-[#F8F1E8] py-16 sm:py-24 md:py-28 border-t border-black/10"
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-center">
        {/* Luxury Outer Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="w-full max-w-[1360px] border border-black/15 rounded-[6px] p-6 sm:p-10 md:p-12 lg:p-14 bg-[#FAF6F0]/80 shadow-sm"
        >
          {/* Split Layout: Left Showcase Photo & Right Services Directory */}
          <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
            {/* Left Column: Showcase Photography with Smooth Crossfade */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 18,
                mass: 0.9,
                delay: 0.15,
                filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
              }}
              className="relative w-full lg:w-[420px] xl:w-[460px] min-h-[340px] sm:min-h-[420px] lg:min-h-[580px] rounded-[6px] overflow-hidden bg-[#EFE6DC] shadow-md border border-black/10 flex-shrink-0 group flex flex-col justify-end"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.alt}
                    fill
                    sizes="(max-width: 1024px) 95vw, 460px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Active Service Showcase Caption Card */}
              <div className="relative z-10 m-4 sm:m-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-[4px] border border-black/10 shadow-xl flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-montserrat uppercase tracking-[0.22em] text-[#7E4E15] font-semibold block mb-1">
                    Featured Discipline
                  </span>
                  <h4 className="font-montserrat font-bold text-xs sm:text-sm text-[#452702] uppercase tracking-wide">
                    {activeItem.title}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenConsultation?.(`Service Consultation: ${activeItem.title}`)
                  }
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#452702] hover:bg-[#7E4E15] text-white flex items-center justify-center transition-colors shadow flex-shrink-0 cursor-pointer"
                  aria-label={`Book consultation for ${activeItem.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>
              </div>
            </motion.div>

            {/* Right Column: Title, Dual-Column Services List, and Sectors */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header matching company brochure */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#7E4E15]" />
                    <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15]">
                      KaiRose Turnkey Capabilities
                    </span>
                  </div>

                  <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] uppercase tracking-wide leading-tight">
                    Our Services
                  </h2>
                  <div className="w-16 h-1 bg-[#7E4E15] rounded-full mt-3" />
                </div>

                {/* Two-Column Services Grid with Center Divider */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-2 sm:gap-y-2.5">
                  {/* Column 1 */}
                  <div className="space-y-1.5 sm:space-y-2">
                    {col1.map((service) => {
                      const isActive = activeId === service.id;
                      const IconComponent = service.icon;

                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            setActiveId(service.id);
                            onOpenConsultation?.(`Service Inquiry: ${service.title}`);
                          }}
                          onMouseEnter={() => setActiveId(service.id)}
                          onFocus={() => setActiveId(service.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 sm:py-2.5 rounded-[4px] text-left transition-all duration-200 cursor-pointer group ${
                            isActive
                              ? "bg-[#7E4E15]/10 translate-x-1 shadow-xs"
                              : "hover:bg-black/[0.03] hover:translate-x-0.5"
                          }`}
                        >
                          <span
                            className={`w-7 h-7 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                              isActive
                                ? "bg-[#7E4E15] text-white"
                                : "text-[#7E4E15] bg-[#7E4E15]/10 group-hover:bg-[#7E4E15]/20"
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </span>

                          <span
                            className={`font-montserrat text-xs sm:text-[13px] tracking-[0.12em] uppercase transition-colors ${
                              isActive
                                ? "text-[#452702] font-semibold underline decoration-[#7E4E15] decoration-2 underline-offset-4"
                                : "text-[#221E1B]/85 group-hover:text-[#452702] font-medium"
                            }`}
                          >
                            {service.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Vertical Divider for multi-column layout */}
                  <div
                    aria-hidden="true"
                    className="hidden sm:block absolute left-1/2 top-1 bottom-1 w-px bg-gradient-to-b from-[#7E4E15]/15 via-[#7E4E15]/40 to-[#7E4E15]/15 -translate-x-1/2 pointer-events-none"
                  />

                  {/* Column 2 */}
                  <div className="space-y-1.5 sm:space-y-2 sm:pl-3">
                    {col2.map((service) => {
                      const isActive = activeId === service.id;
                      const IconComponent = service.icon;

                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            setActiveId(service.id);
                            onOpenConsultation?.(`Service Inquiry: ${service.title}`);
                          }}
                          onMouseEnter={() => setActiveId(service.id)}
                          onFocus={() => setActiveId(service.id)}
                          className={`w-full flex items-center gap-3 px-3 py-2 sm:py-2.5 rounded-[4px] text-left transition-all duration-200 cursor-pointer group ${
                            isActive
                              ? "bg-[#7E4E15]/10 translate-x-1 shadow-xs"
                              : "hover:bg-black/[0.03] hover:translate-x-0.5"
                          }`}
                        >
                          <span
                            className={`w-7 h-7 rounded-[4px] flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                              isActive
                                ? "bg-[#7E4E15] text-white"
                                : "text-[#7E4E15] bg-[#7E4E15]/10 group-hover:bg-[#7E4E15]/20"
                            }`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </span>

                          <span
                            className={`font-montserrat text-xs sm:text-[13px] tracking-[0.12em] uppercase transition-colors ${
                              isActive
                                ? "text-[#452702] font-semibold underline decoration-[#7E4E15] decoration-2 underline-offset-4"
                                : "text-[#221E1B]/85 group-hover:text-[#452702] font-medium"
                            }`}
                          >
                            {service.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Key Sectors Strip matching brochure */}
                <div className="mt-7 pt-5 border-t border-[#7E4E15]/25">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] sm:text-[11px] font-montserrat uppercase tracking-[0.2em] text-[#7E4E15] font-semibold">
                      Key Portfolio Sectors
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {sectors.map((sector) => {
                      const SectorIcon = sector.icon;
                      return (
                        <div
                          key={sector.name}
                          className="flex items-center gap-2 px-2.5 py-2 rounded-[4px] bg-white/70 border border-black/10 shadow-xs"
                        >
                          <SectorIcon className="w-3.5 h-3.5 text-[#7E4E15] flex-shrink-0" />
                          <span className="font-montserrat text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#452702] truncate">
                            {sector.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Directory & Inquiry Links */}
              <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs font-montserrat tracking-wider uppercase">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[#452702] hover:text-[#7E4E15] hover:underline font-semibold"
                >
                  <span>Explore Full Services Directory</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {onOpenConsultation && (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenConsultation(
                        `Services Consultation: ${activeItem.title}`
                      )
                    }
                    className="px-4 py-2 bg-[#452702] hover:bg-[#5D3503] text-white rounded-[2px] transition-colors font-medium cursor-pointer shadow-xs"
                  >
                    Inquire for {activeItem.title}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
