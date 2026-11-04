"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mainNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F4F1EA]/95 backdrop-none hairline-b transition-colors duration-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        {/* Monograph Wordmark */}
        <Link href="/" className="group flex flex-col">
          <span className="font-serif text-2xl tracking-[-0.03em] font-normal text-[#0D0E10] group-hover:text-[#A98A56] transition-colors duration-200">
            {siteConfig.name}
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#A98A56]">
            Dubai
          </span>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em]">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#0D0E10]/75 hover:text-[#0D0E10] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Primary Header Action */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.18em] px-5 py-2.5 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] border border-[#0D0E10] hover:border-[#A98A56] transition-colors duration-200 rounded-[2px]"
          >
            By Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle Button (Handcrafted lines) */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#0D0E10] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A98A56]"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4F1EA] hairline-b px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-5 text-sm uppercase tracking-[0.18em]">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0D0E10] hover:text-[#A98A56] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 hairline-t">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center text-xs uppercase tracking-[0.18em] px-6 py-3.5 bg-[#0D0E10] text-[#F4F1EA] rounded-[2px]"
            >
              Book a Private Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
