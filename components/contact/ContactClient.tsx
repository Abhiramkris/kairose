"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { siteConfig } from "@/content/site-config";

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Turnkey Luxury Villa",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          topic: `Contact Page Inquiry: ${formData.projectType}`,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F1E8] text-[#221E1B] flex flex-col font-montserrat selection:bg-[#452702] selection:text-white">
      {/* 1. Global Navigation Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="w-full bg-[#FAF6F0] border-b border-black/10 py-3.5">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between font-montserrat text-xs uppercase tracking-[0.16em]">
            <div className="flex items-center gap-2 text-[#452702]/70">
              <Link href="/" className="hover:text-[#452702] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#452702] font-semibold">Contact Us</span>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#452702] hover:underline font-medium lowercase first-letter:uppercase"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
          </div>
        </div>

        {/* Hero Masthead - Dedicated Contact Focus */}
        <section className="w-full py-16 sm:py-20 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.85,
              }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-cradley text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#452702] font-normal uppercase tracking-[0.06em] leading-[1.08]">
                Contact Us
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Main Contact Section: Studio Showroom & Head Office Details + Inquiry Form */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Studio Showroom & Head Office Details */}
              <motion.div
                initial={{ opacity: 0, x: -25, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: 0.1,
                }}
                className="lg:col-span-5 flex flex-col space-y-6"
              >
                {/* Official Studio Card */}
                <div className="bg-[#452702] text-[#F8F1E8] p-8 sm:p-10 rounded-[6px] shadow-xl flex flex-col justify-between">
                  <div>
                    <span className="text-[#D6CCBB] font-montserrat text-xs uppercase tracking-[0.24em] font-semibold block mb-2">
                      Studio Showroom & Head Office
                    </span>

                    <h2 className="font-cradley text-lg sm:text-xl text-white font-normal uppercase leading-snug mb-6">
                      KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC
                    </h2>

                    <div className="space-y-5 font-montserrat text-xs sm:text-[13px] text-[#F8F1E8]/90">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                            Studio Showroom & Office Address
                          </span>
                          <p className="leading-relaxed text-[#F8F1E8]/90">
                            112, Makateb Building, Port Saeed,
                            <br />
                            PO Box 98845, Deira, Dubai,
                            <br />
                            United Arab Emirates.
                          </p>
                          <a
                            href="https://maps.google.com/?q=Makateb+Building+Port+Saeed+Deira+Dubai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-[#D6CCBB] hover:underline font-medium mt-1.5"
                          >
                            <span>Open in Google Maps</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      {/* Telephone */}
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                            Telephone
                          </span>
                          <a
                            href={siteConfig.phoneCallUrl}
                            className="text-sm sm:text-base text-white font-medium hover:underline block"
                          >
                            {siteConfig.phoneToken}
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                            WhatsApp Official Line
                          </span>
                          <a
                            href={siteConfig.whatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-white font-medium hover:underline block"
                          >
                            {siteConfig.whatsAppToken}
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                            E-Mail
                          </span>
                          <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm sm:text-base text-white font-medium hover:underline block"
                          >
                            {siteConfig.email}
                          </a>
                        </div>
                      </div>

                      {/* Website */}
                      <div className="flex items-start gap-3">
                        <Globe className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                            Official Website
                          </span>
                          <a
                            href={siteConfig.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm sm:text-base text-white font-medium hover:underline block"
                          >
                            {siteConfig.websiteDisplay}
                          </a>
                        </div>
                      </div>

                      {/* Office Hours */}
                      <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                        <Clock className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                            Showroom & Office Hours
                          </span>
                          <p className="text-xs text-[#F8F1E8]/85 leading-relaxed">
                            Monday – Saturday: 09:00 AM – 06:00 PM (GST)
                            <br />
                            <span className="text-[#D6CCBB]">By Appointment Only</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={siteConfig.whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FAF6F0] hover:bg-white text-[#452702] font-montserrat text-xs uppercase tracking-wider font-semibold rounded-[3px] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={siteConfig.phoneCallUrl}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 border border-white text-white hover:bg-white hover:text-[#452702] font-montserrat text-xs uppercase tracking-wider font-semibold rounded-[3px] transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Direct</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Dedicated Contact & Consultation Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, x: 25, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: 0.15,
                }}
                className="lg:col-span-7"
              >
                <div className="bg-[#FAF6F0] p-8 sm:p-12 rounded-[6px] border border-black/10 shadow-sm relative">
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#452702]/15 bg-[#F8F1E8] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7E4E15] font-montserrat font-medium mb-3">
                      Send an Inquiry
                    </span>
                    <h3 className="font-cradley text-2xl sm:text-3xl text-[#452702] font-normal leading-snug">
                      Schedule a Consultation
                    </h3>
                    <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 mt-2">
                      Please submit your details below. Our technical and design team will contact you directly within 24 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-10 text-center space-y-4">
                      <CheckCircle2 className="w-12 h-12 mx-auto text-[#452702]" />
                      <h4 className="font-cradley text-2xl text-[#452702]">
                        Inquiry Received Successfully
                      </h4>
                      <p className="text-sm text-[#221E1B]/80 font-montserrat max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out to <strong>KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC</strong>. We will review your project requirements and connect with you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-4 px-6 py-2.5 bg-[#452702] text-white text-xs uppercase tracking-wider rounded font-medium hover:bg-[#5D3503] transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block font-montserrat text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Dr. Alexander Wright"
                          className="w-full bg-[#F8F1E8] border border-[rgba(69,39,2,0.2)] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                        />
                      </div>

                      {/* Contact Channels Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email */}
                        <div>
                          <label className="block font-montserrat text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="name@example.com"
                            className="w-full bg-[#F8F1E8] border border-[rgba(69,39,2,0.2)] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block font-montserrat text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1.5">
                            Telephone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="+971 50 123 4567"
                            className="w-full bg-[#F8F1E8] border border-[rgba(69,39,2,0.2)] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                          />
                        </div>
                      </div>

                      {/* Project Type */}
                      <div>
                        <label className="block font-montserrat text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1.5">
                          Project Scope *
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) =>
                            setFormData({ ...formData, projectType: e.target.value })
                          }
                          className="w-full bg-[#F8F1E8] border border-[rgba(69,39,2,0.2)] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#221E1B] focus:outline-none focus:border-[#452702]"
                        >
                          <option value="Turnkey Luxury Villa">Turnkey Luxury Villa</option>
                          <option value="Penthouse & Residential Architecture">Penthouse & Residential Architecture</option>
                          <option value="Commercial Mall & Retail Fit-Out">Commercial Mall & Retail Fit-Out</option>
                          <option value="Corporate Office Interior & MEP">Corporate Office Interior & MEP</option>
                          <option value="Event Venue & Hospitality Space">Event Venue & Hospitality Space</option>
                          <option value="Building Technical Maintenance">Building Technical Maintenance</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block font-montserrat text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1.5">
                          Project Details *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Describe your property, location, timeline, and specific design or technical requirements..."
                          className="w-full bg-[#F8F1E8] border border-[rgba(69,39,2,0.2)] rounded px-3.5 py-2.5 text-xs sm:text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702] resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer rounded-[3px] text-center disabled:opacity-60"
                      >
                        {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry to KaiRose Studio"}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Luxury Footer */}
      <SiteFooter />
    </div>
  );
}
