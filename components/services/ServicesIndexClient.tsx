"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/content/services";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

interface ServicesIndexClientProps {
  services: ServiceDetail[];
}

export function ServicesIndexClient({ services }: ServicesIndexClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("Services Directory Consultation");

  const handleOpenConsultation = (topic?: string) => {
    setModalTopic(topic || "Services Directory Consultation");
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F1E8] text-[#221E1B] flex flex-col font-montserrat selection:bg-[#452702] selection:text-white">
      {/* 1. Global Header */}
      <SiteHeader onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1 w-full">
        {/* Breadcrumb */}
        <div className="w-full border-b border-black/10 bg-[#FAF6F0]/80">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between text-xs tracking-wider uppercase">
            <div className="flex items-center space-x-2 text-[#221E1B]/70 font-medium">
              <Link href="/" className="hover:text-[#452702] transition-colors">
                Home
              </Link>
              <span className="text-black/30">/</span>
              <span className="text-[#452702] font-semibold">Services</span>
            </div>
            <Link
              href="/"
              className="text-[#452702] hover:underline font-medium lowercase first-letter:uppercase"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* 2. Hero Header */}
        <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 text-center">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15] block mb-3">
              Comprehensive Architectural Disciplines
            </span>
            <h1 className="font-cradley text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#452702] leading-[1.08] tracking-tight uppercase mb-6 max-w-5xl mx-auto">
              Our Architectural Services
            </h1>
            <p className="font-montserrat text-base sm:text-lg md:text-xl text-[#221E1B]/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
              From volumetric master space planning to turnkey Italian fit-outs and circadian architectural lighting, we orchestrate prime Dubai residences with uncompromised precision.
            </p>
            <button
              onClick={() => handleOpenConsultation("General Services Inquiry")}
              className="px-8 sm:px-10 py-4 bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-[2px]"
            >
              Book Studio Consultation
            </button>
          </div>
        </section>

        {/* 3. Detailed Services Showcase (Alternating Layouts) */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 space-y-20 sm:space-y-28">
            {services.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    mass: 0.85,
                  }}
                  className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 p-8 sm:p-12 lg:p-16 rounded-[8px] border border-black/10 bg-[#FAF6F0]/70 shadow-sm ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15] block mb-2">
                      0{index + 1} • {service.category}
                    </span>
                    <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] uppercase leading-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="font-montserrat text-sm sm:text-base text-[#221E1B]/80 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Deliverables Highlights */}
                    <div className="space-y-2.5 mb-8 w-full">
                      {service.deliverables.slice(0, 3).map((d) => (
                        <div key={d.title} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#EFE6DC] flex items-center justify-center text-[#452702] flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="font-montserrat text-xs sm:text-sm text-[#221E1B] font-medium">
                            {d.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Direct Page Link */}
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow hover:shadow-md cursor-pointer rounded-[2px] group"
                    >
                      <span>Explore {service.shortTitle}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Image Column */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full lg:w-1/2 relative aspect-[16/10] sm:aspect-[16/9] rounded-[6px] overflow-hidden border border-black/10 group cursor-pointer shadow-md bg-[#EFE6DC]"
                  >
                    <Image
                      src={service.heroImage}
                      alt={service.heroAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"
                    />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#452702] group-hover:bg-[#452702] group-hover:text-white transition-colors shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-xs font-montserrat font-medium uppercase tracking-wider bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-[2px] border border-white/10">
                      {service.shortTitle}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* 4. Global Footer */}
      <SiteFooter />

      {/* 5. Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic={modalTopic}
      />
    </div>
  );
}
