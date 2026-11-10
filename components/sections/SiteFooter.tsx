"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site-config";

export function SiteFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer id="footer" className="w-full bg-[#EFE6DC] border-t border-black/10 text-[#221E1B] pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-black/10"
        >
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="relative h-12 w-40 sm:h-14 sm:w-48 mb-4">
                <Image
                  src="/images/kairose-logo.png"
                  alt="KaiRose Luxury Interior Design and Architecture Studio Dubai UAE"
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                />
              </div>

              <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#A98A56] font-semibold mb-3">
                Interior Design Studio for Timeless Spaces
              </p>
              <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 max-w-sm leading-relaxed">
                Bespoke residential architecture, luxury villa renovations, and turnkey fit-outs across Dubai’s most distinguished enclaves including Palm Jumeirah, Emirates Hills, and Downtown Dubai.
              </p>
            </div>

            <div className="mt-6 text-xs text-[#221E1B]/70 space-y-1 font-montserrat">
              <p className="font-medium text-[#452702]">Studio Showroom & Office</p>
              <p>{siteConfig.addressToken}</p>
              <p>By Appointment Only • Monday – Saturday (09:00 - 18:00)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#452702] font-semibold block mb-5">
              Navigation
            </span>
            <ul className="space-y-3 font-montserrat text-xs uppercase tracking-[0.14em]">
              <li>
                <Link href="/" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#popular-designs" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  Popular Designs
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#our-approach" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#221E1B]/75 hover:text-[#452702] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries & Newsletter */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#452702] font-semibold block mb-5">
                Private Inquiries
              </span>
              <div className="space-y-2.5 font-montserrat text-xs mb-6">
                <p>
                  <span className="text-[#A98A56] font-medium mr-2">Email:</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-[#452702] hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <span className="text-[#A98A56] font-medium mr-2">Telephone:</span>
                  <a href={siteConfig.phoneCallUrl} className="text-[#452702] hover:underline">
                    {siteConfig.phoneToken}
                  </a>
                </p>
                <p>
                  <span className="text-[#A98A56] font-medium mr-2">WhatsApp:</span>
                  <a href={siteConfig.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="text-[#452702] hover:underline">
                    {siteConfig.whatsAppToken}
                  </a>
                </p>
                <p>
                  <span className="text-[#A98A56] font-medium mr-2">Website:</span>
                  <a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#452702] hover:underline">
                    {siteConfig.websiteDisplay}
                  </a>
                </p>
              </div>

              {/* Private Curation Newsletter */}
              <div>
                <span className="font-montserrat text-[11px] uppercase tracking-wider text-[#452702] font-medium block mb-2">
                  Receive Private Design Monograph
                </span>
                {subscribed ? (
                  <p className="text-xs text-[#452702] font-medium">
                    Thank you. The private edition will be dispatched to your inbox.
                  </p>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] px-3 py-2 text-xs rounded text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#452702] hover:bg-[#5D3503] text-white text-[10px] uppercase tracking-wider font-medium rounded transition-colors"
                    >
                      Join
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-montserrat text-xs text-[#221E1B]/60">
          <p>© 2026 KaiRose Interior Design LLC. All rights reserved. Dubai, United Arab Emirates.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#452702] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#452702] cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-[#452702] cursor-pointer">Dubai Fit-Out Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
