"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/content/services";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ConsultationModal } from "@/components/ui/ConsultationModal";

interface ServiceDetailClientProps {
  service: ServiceDetail;
  otherServices: ServiceDetail[];
}

export function ServiceDetailClient({
  service,
  otherServices,
}: ServiceDetailClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState(`Service Inquiry: ${service.title}`);

  const handleOpenConsultation = (topic?: string) => {
    setModalTopic(topic || `Service Inquiry: ${service.title}`);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F1E8] text-[#221E1B] flex flex-col font-montserrat selection:bg-[#452702] selection:text-white">
      {/* 1. Global Luxury Header */}
      <SiteHeader onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <div className="w-full border-b border-black/10 bg-[#FAF6F0]/80">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between text-xs tracking-wider uppercase">
            <div className="flex items-center space-x-2 text-[#221E1B]/70 font-medium">
              <Link href="/" className="hover:text-[#452702] transition-colors">
                Home
              </Link>
              <span className="text-black/30">/</span>
              <Link href="/services" className="hover:text-[#452702] transition-colors">
                Services
              </Link>
              <span className="text-black/30">/</span>
              <span className="text-[#452702] font-semibold">{service.shortTitle}</span>
            </div>

            <Link
              href="/#our-services"
              className="inline-flex items-center gap-1.5 text-[#452702] hover:underline font-medium lowercase first-letter:uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Services</span>
            </Link>
          </div>
        </div>

        {/* 2. Hero Section: Grand Architectural Masthead */}
        <section className="relative w-full pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            {/* Category Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[3px] bg-[#FAF6F0] border border-black/10 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#7E4E15]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#452702] font-semibold">
                {service.category}
              </span>
            </motion.div>

            {/* Service Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-cradley text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#452702] leading-[1.08] tracking-tight uppercase mb-6 max-w-5xl"
            >
              {service.title}
            </motion.h1>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-montserrat text-lg sm:text-xl md:text-2xl text-[#221E1B]/80 font-light leading-relaxed max-w-3xl mb-10"
            >
              {service.tagline}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <button
                type="button"
                onClick={() => handleOpenConsultation(`Consultation: ${service.title}`)}
                className="px-8 sm:px-10 py-4 bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-[2px]"
              >
                Inquire For This Service
              </button>
              <a
                href="#deliverables"
                className="px-8 py-4 bg-[#FAF6F0] hover:bg-white text-[#452702] border border-black/15 font-montserrat text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer rounded-[2px]"
              >
                View Deliverables
              </a>
            </motion.div>

            {/* Full-Scale Showcase Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, filter: "blur(14px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[380px] md:min-h-[520px] rounded-[6px] overflow-hidden border border-black/15 shadow-xl bg-[#EFE6DC]"
            >
              <Image
                src={service.heroImage}
                alt={service.heroAlt}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none"
              />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white max-w-xl">
                <span className="font-montserrat text-xs uppercase tracking-[0.24em] font-semibold text-[#D6CCBB] block mb-2">
                  Featured Execution
                </span>
                <p className="font-montserrat text-base sm:text-lg font-light leading-snug drop-shadow-md">
                  {service.headline}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Specifications Ribbon */}
        <section className="w-full bg-[#FAF6F0] border-b border-black/10 py-10 sm:py-12">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {service.specifications.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    type: "spring",
                    stiffness: 85,
                    damping: 18,
                    delay: index * 0.08,
                  }}
                  className="p-5 bg-white/70 rounded-[4px] border border-black/10 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-montserrat font-semibold uppercase tracking-[0.2em] text-[#7E4E15] mb-2 block">
                    {spec.label}
                  </span>
                  <span className="font-montserrat text-sm md:text-base text-[#221E1B] font-medium leading-snug">
                    {spec.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Editorial Narrative & Core Deliverables Grid */}
        <section id="deliverables" className="w-full py-20 sm:py-28 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Architectural Narrative */}
              <div className="lg:col-span-5">
                <span className="w-2 h-2 rounded-full bg-[#452702] inline-block mb-3" />
                <h2 className="font-montserrat text-xs uppercase tracking-[0.24em] font-semibold text-[#452702] mb-3">
                  Our Philosophy & Approach
                </h2>
                <h3 className="font-cradley text-3xl sm:text-4xl text-[#452702] leading-tight uppercase mb-6">
                  {service.headline}
                </h3>
                <div className="space-y-5 text-[#221E1B]/85 font-montserrat font-light text-base sm:text-lg leading-relaxed">
                  {service.longDescription.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[#FAF6F0] rounded-[4px] border border-black/10 flex items-start gap-4">
                  <ShieldCheck className="w-6 h-6 text-[#7E4E15] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-[#452702] mb-1">
                      KaiRose Standard of Excellence
                    </h4>
                    <p className="font-montserrat text-xs text-[#221E1B]/75 leading-relaxed">
                      Every project is led by a dedicated senior design director with verified Dubai authority licensing and international atelier partnerships.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: 4 Deliverables Cards */}
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15] block mb-3">
                  Scope of Work
                </span>
                <h2 className="font-cradley text-3xl sm:text-4xl text-[#452702] leading-tight uppercase mb-8">
                  Core Architectural Deliverables
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.deliverables.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        mass: 0.85,
                        delay: index * 0.1,
                      }}
                      className="p-6 sm:p-7 bg-white rounded-[4px] border border-black/10 shadow-sm hover:border-[#452702]/40 transition-colors duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 rounded-full bg-[#F8F1E8] border border-black/10 flex items-center justify-center text-[#452702] mb-4">
                          <Check className="w-4 h-4" />
                        </div>
                        <h4 className="font-montserrat font-semibold text-base sm:text-lg text-[#452702] mb-2.5">
                          {item.title}
                        </h4>
                        <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 5-Stage Methodology Timeline */}
        <section className="w-full bg-[#FAF6F0]/60 py-20 sm:py-28 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 text-center">
            <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15] block mb-3">
              The Journey
            </span>
            <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] leading-tight uppercase mb-6">
              5-Stage Project Methodology
            </h2>
            <p className="font-montserrat text-sm sm:text-base text-[#221E1B]/75 font-light max-w-2xl mx-auto mb-16">
              A meticulously engineered execution sequence guaranteeing transparent milestones, cost certainty, and unmatched craftsmanship from inception to handover.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 text-left">
              {service.methodology.map((m, idx) => (
                <motion.div
                  key={m.step}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    mass: 0.85,
                    delay: idx * 0.09,
                  }}
                  className="p-6 bg-white rounded-[4px] border border-black/10 shadow-sm flex flex-col justify-between group hover:border-[#452702] transition-colors"
                >
                  <div>
                    <span className="font-cradley text-4xl text-[#7E4E15]/30 group-hover:text-[#7E4E15] transition-colors block mb-4">
                      {m.step}
                    </span>
                    <h3 className="font-montserrat font-semibold text-sm sm:text-base text-[#452702] mb-2 leading-snug">
                      {m.phase}
                    </h3>
                    <p className="font-montserrat text-xs text-[#221E1B]/75 font-light leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Curated Gallery Showcase */}
        <section className="w-full py-20 sm:py-28 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
              <div>
                <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15] block mb-2">
                  Portfolio Highlights
                </span>
                <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] uppercase">
                  Featured Spatial Works
                </h2>
              </div>
              <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/70 font-light max-w-md mt-4 md:mt-0">
                Selected villa and penthouse concepts engineered and fitted out under the {service.shortTitle} discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {service.gallery.map((g, index) => (
                <motion.div
                  key={g.url}
                  initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    delay: index * 0.12,
                  }}
                  className="flex flex-col group"
                >
                  <div className="relative w-full aspect-[4/5] rounded-[4px] overflow-hidden bg-[#EFE6DC] border border-black/10 mb-4 shadow-sm">
                    <Image
                      src={g.url}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <span className="font-montserrat text-xs font-medium text-[#452702] tracking-wide">
                    {g.caption}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Dedicated Consultation CTA Section */}
        <section className="w-full bg-[#FAF6F0] py-20 sm:py-28 border-b border-black/10 text-center">
          <div className="max-w-[1000px] mx-auto px-5 sm:px-10">
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#7E4E15] block mb-3">
              Commence Your Journey
            </span>
            <h2 className="font-cradley text-3xl sm:text-5xl md:text-6xl text-[#452702] leading-tight uppercase mb-6">
              Commission {service.shortTitle}
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#221E1B]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a private design consultation with our senior architects in Port Saeed or request a bespoke on-site appraisal at your Dubai residence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenConsultation(`Book Consultation: ${service.title}`)}
                className="px-10 py-4 bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-[2px]"
              >
                Book A Private Consultation
              </button>
              <a
                href="https://wa.me/971544009289"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-[#F8F1E8] text-[#452702] border border-black/15 font-montserrat text-xs sm:text-sm uppercase tracking-[0.18em] font-medium transition-all duration-300 cursor-pointer rounded-[2px]"
              >
                WhatsApp Senior Director
              </a>
            </div>
          </div>
        </section>

        {/* 8. Explore Other Services Section */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#7E4E15] block mb-1">
                  Full Capabilities
                </span>
                <h2 className="font-cradley text-2xl sm:text-3xl text-[#452702] uppercase">
                  Explore Complementary Services
                </h2>
              </div>
              <Link
                href="/services"
                className="text-xs font-montserrat uppercase tracking-[0.18em] text-[#452702] hover:underline font-semibold flex items-center gap-1"
              >
                <span>View All Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group p-6 sm:p-8 bg-[#FAF6F0] rounded-[6px] border border-black/10 hover:border-[#452702] transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#7E4E15] block mb-2">
                        {other.category}
                      </span>
                      <h3 className="font-cradley text-2xl sm:text-3xl text-[#452702] group-hover:translate-x-1 transition-transform uppercase">
                        {other.shortTitle}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#452702] group-hover:bg-[#452702] group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 font-light leading-relaxed mt-4">
                    {other.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Global Luxury Footer */}
      <SiteFooter />

      {/* 10. Interactive Consultation Booking Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic={modalTopic}
      />
    </div>
  );
}
