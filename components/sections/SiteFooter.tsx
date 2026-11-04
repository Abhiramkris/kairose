import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/content/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-[#0D0E10] text-[#F4F1EA] hairline-dark-t pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 hairline-dark-b">
          {/* Brand Monograph Statement with Official Logo */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="relative h-14 w-44 mb-4">
                <Image
                  src="/images/kairose-logo.png"
                  alt="KaiRose Interior Design LLC"
                  fill
                  sizes="200px"
                  className="object-contain object-left"
                />
              </div>

              <p className="text-xs uppercase tracking-[0.2em] text-[#A98A56]">
                Bespoke Interior Architecture — Dubai
              </p>
              <p className="mt-6 text-sm text-[#F4F1EA]/70 max-w-sm leading-relaxed font-light">
                {siteConfig.subcopy}
              </p>
            </div>

            <div className="mt-8 pt-6 hairline-dark-t text-xs text-[#F4F1EA]/50 space-y-1">
              <p>{siteConfig.addressToken}</p>
              <p>{siteConfig.hours}</p>
            </div>
          </div>

          {/* Curation Links */}
          <div className="md:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-6">
              Portfolio
            </span>
            <ul className="space-y-3.5 text-xs uppercase tracking-[0.14em]">
              {footerNavigation.curation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#F4F1EA]/70 hover:text-[#F4F1EA] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Links */}
          <div className="md:col-span-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-6">
              The Studio
            </span>
            <ul className="space-y-3.5 text-xs uppercase tracking-[0.14em]">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#F4F1EA]/70 hover:text-[#F4F1EA] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-6">
              Inquiries
            </span>
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#F4F1EA]/40 uppercase tracking-widest block text-[10px]">
                  Email
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#F4F1EA] hover:text-[#A98A56] tracking-wide transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <span className="text-[#F4F1EA]/40 uppercase tracking-widest block text-[10px]">
                  Direct Desk
                </span>
                <span className="text-[#F4F1EA]/70">{siteConfig.phoneToken}</span>
              </div>
              <div>
                <span className="text-[#F4F1EA]/40 uppercase tracking-widest block text-[10px]">
                  WhatsApp Channel
                </span>
                <a
                  href={siteConfig.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A98A56] hover:underline tracking-wide"
                >
                  {siteConfig.whatsAppToken}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F4F1EA]/40">
          <p>© 2025 {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#F4F1EA]/80 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
