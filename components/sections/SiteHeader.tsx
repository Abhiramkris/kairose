"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";

interface SiteHeaderProps {
  onOpenConsultation?: (topic?: string) => void;
}

export function SiteHeader({ onOpenConsultation }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Project", href: "/#popular-designs" },
    { label: "Services", href: "/#our-services" },
    { label: "Blog", href: "/#faq" },
    { label: "Contact", href: "/#footer" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-black/10 transition-colors duration-200">
      <div className="w-full px-5 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Left: Full KaiRose 3D Gold Logo (same as footer) */}
        <Link href="/" className="group flex items-center">
          <div className="relative h-10 w-36 sm:h-12 sm:w-44 transition-transform group-hover:scale-[1.02] duration-200">
            <Image
              src="/images/kairose-logo.png"
              alt="KaiRose Luxury Interior Design Studio Dubai"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Center: Standard Luxury Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-9">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative font-montserrat text-xs sm:text-[13px] uppercase tracking-[0.18em] font-medium text-[#221E1B]/75 hover:text-[#452702] transition-colors duration-200 py-1.5 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#452702] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right: Brand CTA Button (#452702 with white text) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => onOpenConsultation?.("Header Inquiry")}
            className="px-6 py-2.5 bg-[#452702] hover:bg-[#5D3503] text-white text-xs font-montserrat font-medium rounded-[2px] shadow-sm hover:shadow transition-all duration-200 cursor-pointer tracking-wider uppercase"
          >
            Contact Studio
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#221E1B] focus:outline-none"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <span
              className={`w-full h-[1.5px] bg-[#221E1B] transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-[#221E1B] transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-[#221E1B] transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F1E8] border-b border-black/10 px-6 py-6 flex flex-col gap-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3 font-montserrat text-xs uppercase tracking-[0.16em]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 text-[#221E1B]/85 hover:text-[#452702] border-b border-black/5 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation?.("Mobile Menu Inquiry");
              }}
              className="w-full py-3 bg-[#452702] text-white text-xs uppercase tracking-wider font-medium rounded-[2px] shadow-sm"
            >
              Contact Studio
            </button>
            <a
              href={siteConfig.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 border border-[#452702] text-[#452702] text-xs uppercase tracking-wider font-medium rounded-[2px]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
