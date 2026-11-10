"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/content/site-config";

const heroSlides = [
  {
    image: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    title: "Redefining Luxury Interiors.",
    subtitle: "Bespoke designs for the discerning few. From concept to completion, we craft spaces that speak to your soul.",
  },
  {
    image: "/images/hero1/videoframe_7092.png",
    title: "Transforming Spaces. Creating Excellence.",
    subtitle: "Complete Interior Fit-Out, MEP and Building Maintenance Solutions across Dubai’s most prestigious estates.",
  },
  {
    image: "/images/hero1/videoframe_1439.png",
    title: "Timeless Craftsmanship & Precision.",
    subtitle: "Artisanal detailing, hand-brushed brass joinery, and monolithic architectural design tailored to your lifestyle.",
  },
  {
    image: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    title: "Panoramic Skyline Sanctuaries.",
    subtitle: "Double-height living spaces framed by floor-to-ceiling glass, balancing boundless views with tactile domestic warmth.",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    projectType: "Penthouse",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleQuickInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactData.name,
          email: `${contactData.phone.replace(/[^0-9]/g, "") || "client"}@consultation.kairose.ae`,
          phone: contactData.phone,
          projectType: contactData.projectType,
          details: `Quick hero inquiry for ${contactData.projectType} consultation.`,
        }),
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-[92vh] h-auto overflow-hidden bg-[#0D0E10] flex flex-col justify-between">
      {/* Background Slideshow with Real Curated Photographs */}
      {heroSlides.map((s, idx) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center film-grade"
          />
        </div>
      ))}

      {/* Atmospheric Scrim for Legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none z-10"
      />

      {/* Slide Navigation Bars (Top-Right Subtle Indicator) */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 pt-8 flex items-center justify-end">
        <div className="flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`h-[2px] transition-all duration-500 cursor-pointer ${
                i === currentSlide ? "w-8 bg-[#A98A56]" : "w-4 bg-[#F4F1EA]/40 hover:bg-[#F4F1EA]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Main Content & Hero Small Consultation Card */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 pb-12 sm:pb-16 pt-20 sm:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Monograph Headline and Subcopy */}
          <div className="lg:col-span-7">
            <Eyebrow className="!text-[#A98A56]">
              By Appointment — Dubai
            </Eyebrow>

            <h1 className="font-serif text-[clamp(36px,5vw,80px)] text-[#F4F1EA] font-normal leading-[1.08] tracking-[-0.03em] mt-3">
              {slide.title}
            </h1>

            <p className="mt-5 text-sm sm:text-base text-[#F4F1EA]/85 font-light leading-relaxed max-w-xl">
              {slide.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
              <Link
                href="/contact"
                className="group relative inline-flex items-center text-xs uppercase tracking-[0.18em] px-6 py-3.5 bg-[#A98A56] text-[#0D0E10] font-medium transition-colors hover:bg-[#F4F1EA] rounded-[2px]"
              >
                <span>Book a Private Consultation</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#F4F1EA] hover:text-[#A98A56] transition-colors py-3.5"
              >
                <span>Explore Portfolio →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Realistic Consultation Inquiry Card with Direct Contact Button */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0D0E10]/95 border border-[#A98A56]/60 p-6 sm:p-7 rounded-[2px] text-[#F4F1EA]">
              <div className="flex items-center justify-between pb-3 hairline-dark-b mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#A98A56] font-medium block">
                    Fast-Track Inquiry
                  </span>
                  <h2 className="font-serif text-lg text-[#F4F1EA]">
                    Consult a Senior Designer
                  </h2>
                </div>
                <div className="text-[10px] text-[#F4F1EA]/50 uppercase tracking-widest text-right">
                  Dubai, UAE
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-6 text-center space-y-2">
                  <p className="font-serif text-base text-[#A98A56]">
                    Thank you.
                  </p>
                  <p className="text-xs text-[#F4F1EA]/80 font-light">
                    Your request has been received. Our senior design team will reach out discreetly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickInquiry} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full bg-[#17191C] border border-[#D6CCBB]/20 px-3 py-2.5 text-xs text-[#F4F1EA] placeholder-[#F4F1EA]/40 rounded-[2px] focus:outline-none focus:border-[#A98A56]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Phone (+971 ...)"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full bg-[#17191C] border border-[#D6CCBB]/20 px-3 py-2.5 text-xs text-[#F4F1EA] placeholder-[#F4F1EA]/40 rounded-[2px] focus:outline-none focus:border-[#A98A56]"
                    />

                    <select
                      value={contactData.projectType}
                      onChange={(e) => setContactData({ ...contactData, projectType: e.target.value })}
                      className="w-full bg-[#17191C] border border-[#D6CCBB]/20 px-3 py-2.5 text-xs text-[#F4F1EA] rounded-[2px] focus:outline-none focus:border-[#A98A56]"
                    >
                      <option value="Penthouse">Penthouse</option>
                      <option value="Villa">Villa</option>
                      <option value="Townhouse">Townhouse</option>
                      <option value="Full Home">Full Home</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                    </select>
                  </div>

                  {/* Submission and Direct Contact Action Row */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="submit"
                      className="w-full text-xs uppercase tracking-[0.18em] py-3 bg-[#A98A56] hover:bg-[#F4F1EA] text-[#0D0E10] font-medium transition-colors rounded-[2px] cursor-pointer"
                    >
                      Request a Consultation →
                    </button>

                    <a
                      href={siteConfig.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] py-2.5 border border-[#A98A56]/60 text-[#A98A56] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
                    >
                      Direct WhatsApp Contact
                    </a>
                  </div>

                  <div className="pt-2 hairline-dark-t flex items-center justify-between text-[10px] text-[#F4F1EA]/50 font-light">
                    <span>By Appointment Only</span>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-[#A98A56] transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
