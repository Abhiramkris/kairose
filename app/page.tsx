"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[100svh] w-full bg-[#0D0E10] text-[#F4F1EA] flex flex-col justify-between overflow-hidden">
      {/* Background Dusk Penthouse Real Photograph with low-key grade */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/dubai-penthouse-dusk.jpg"
          alt="KaiRose Luxury Dubai Penthouse Interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 film-grade"
        />
        {/* Subtle dark gradient overlay for typographic legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#0D0E10]/90 via-[#0D0E10]/75 to-[#0D0E10]/95"
        />
      </div>

      {/* Top Bar: Location & Appointment Badge */}
      <header className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 pt-8 sm:pt-12 flex items-center justify-between">
        <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#A98A56] font-medium">
          Dubai, UAE • By Appointment Only
        </div>

        <a
          href={siteConfig.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] px-4 py-2 border border-[#A98A56]/60 text-[#A98A56] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
        >
          Direct WhatsApp
        </a>
      </header>

      {/* Centerpiece: Official KaiRose Logo + Coming Soon Monograph Announcement */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12 flex flex-col items-center text-center">
        {/* Official Gold KaiRose Logo */}
        <div className="relative w-64 sm:w-80 md:w-96 h-24 sm:h-28 md:h-32 mb-8">
          <Image
            src="/images/kairose-logo.png"
            alt="KaiRose Interior Design"
            fill
            priority
            sizes="(max-width: 768px) 320px, 400px"
            className="object-contain"
          />
        </div>

        {/* Small Eyebrow Label */}
        <div className="eyebrow mb-3 !text-[#A98A56]">
          <span className="text-[#A98A56] uppercase tracking-[0.22em] font-medium text-[11px] sm:text-xs">
            Bespoke Interior Architecture
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F4F1EA] font-normal tracking-tight leading-[1.1] mb-6">
          Crafting Sanctuaries. <br className="hidden sm:inline" />
          <span className="text-[#A98A56]">Coming Soon.</span>
        </h1>

        {/* Subtitle verbatim from brand brief */}
        <p className="text-sm sm:text-base text-[#F4F1EA]/80 font-light max-w-lg leading-relaxed mb-10">
          Bespoke designs for the discerning few. From concept to completion, we craft spaces that speak to your soul.
        </p>

        {/* VIP Early Access & Consultation Request Form */}
        <div className="w-full max-w-md">
          {submitted ? (
            <div className="p-6 bg-[#0D0E10]/80 border border-[#A98A56]/60 rounded-[2px] text-center space-y-2">
              <p className="font-serif text-lg text-[#A98A56]">
                Invitation Registered.
              </p>
              <p className="text-xs text-[#F4F1EA]/75 font-light">
                Our studio will discreetly share the private preview with you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleInquiry} className="flex flex-col sm:flex-row items-stretch gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[#17191C]/90 border border-[#D6CCBB]/30 px-4 py-3.5 text-xs text-[#F4F1EA] placeholder-[#F4F1EA]/40 rounded-[2px] focus:outline-none focus:border-[#A98A56]"
              />
              <button
                type="submit"
                disabled={submitting}
                className="text-xs uppercase tracking-[0.18em] px-6 py-3.5 bg-[#A98A56] hover:bg-[#F4F1EA] text-[#0D0E10] font-medium transition-colors rounded-[2px] cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                {submitting ? "..." : "Notify Me"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer: Direct Desk & Discretion Notice */}
      <footer className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 pb-8 sm:pb-12 pt-6 hairline-dark-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4F1EA]/50 font-light">
        <p>
          © 2025 KaiRose Interior Design and Technical Services LLC.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-[#A98A56] transition-colors"
          >
            {siteConfig.email}
          </a>
          <span>•</span>
          <span>By Appointment Only</span>
        </div>
      </footer>
    </div>
  );
}
