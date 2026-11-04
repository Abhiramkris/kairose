"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/content/site-config";

const projectTypes = [
  "Villa",
  "Penthouse",
  "Townhouse",
  "Full Home",
  "Modular Kitchen",
  "Other",
];

const contactMethods = ["Phone", "Email", "WhatsApp"] as const;

export function ContactClient() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Villa",
    details: "",
    preferredContact: "Phone" as (typeof contactMethods)[number],
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (!searchParams) return;
    const intent = searchParams.get("intent");
    const service = searchParams.get("service");
    const ref = searchParams.get("ref");

    if (intent === "quote" && service) {
      const formatted = service.replace(/-/g, " ");
      const matchingType = projectTypes.find((t) =>
        formatted.toLowerCase().includes(t.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        projectType: matchingType || "Other",
        details: `Requesting a formal quotation for: ${formatted.toUpperCase()}.`,
      }));
    } else if (intent === "design" && ref) {
      const formatted = ref.replace(/-/g, " ");
      const matchingType = projectTypes.find((t) =>
        formatted.toLowerCase().includes(t.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        projectType: matchingType || "Other",
        details: `Inquiring about consultation based on project reference: ${formatted.toUpperCase()}.`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFeedback("Thank you. Your consultation request has been lodged. Our studio will connect with you via your preferred channel.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Villa",
          details: "",
          preferredContact: "Phone",
        });
      } else {
        setStatus("error");
        setFeedback("We could not process your submission. Please reach us directly at hello@kairose.ae.");
      }
    } catch {
      setStatus("error");
      setFeedback("We could not process your submission. Please reach us directly at hello@kairose.ae.");
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Inquiry & Studio</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            Contact KaiRose. Let’s Start the Conversation.
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-xl font-light">
            Whether you’re ready to begin your project or simply have a question, we’d love to hear from you.
          </p>
        </div>

        {/* Two-Column Form & Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-16">
          {/* Left: Consultation Form */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl text-[#0D0E10] mb-8">
              Book a Private Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.16em] text-[#0D0E10]/60 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full bg-transparent hairline-b py-3 text-sm text-[#0D0E10] placeholder-[#0D0E10]/35 rounded-none focus:outline-none focus:border-[#A98A56]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.16em] text-[#0D0E10]/60 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-transparent hairline-b py-3 text-sm text-[#0D0E10] placeholder-[#0D0E10]/35 rounded-none focus:outline-none focus:border-[#A98A56]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.16em] text-[#0D0E10]/60 mb-2">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-transparent hairline-b py-3 text-sm text-[#0D0E10] placeholder-[#0D0E10]/35 rounded-none focus:outline-none focus:border-[#A98A56]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-xs uppercase tracking-[0.16em] text-[#0D0E10]/60 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-transparent hairline-b py-3 text-sm text-[#0D0E10] rounded-none focus:outline-none focus:border-[#A98A56]"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-xs uppercase tracking-[0.16em] text-[#0D0E10]/60 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Share details regarding location, timeline, and architectural aspirations..."
                  className="w-full bg-transparent hairline py-3 px-3 text-sm text-[#0D0E10] placeholder-[#0D0E10]/35 rounded-none focus:outline-none focus:border-[#A98A56]"
                />
              </div>

              <div>
                <span className="block text-xs uppercase tracking-[0.16em] text-[#0D0E10]/60 mb-3">
                  Preferred Contact Method
                </span>
                <div className="flex items-center gap-8">
                  {contactMethods.map((method) => (
                    <label key={method} className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#0D0E10] cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={() => setFormData({ ...formData, preferredContact: method })}
                        className="accent-[#A98A56]"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] font-medium transition-colors rounded-[2px] disabled:opacity-50 cursor-pointer"
                >
                  {status === "submitting" ? "Submitting..." : "Request a Consultation"}
                </button>

                <div aria-live="polite" className="text-xs text-[#A98A56]">
                  {feedback}
                </div>
              </div>
            </form>
          </div>

          {/* Right: Reach Us Directly Block */}
          <div className="lg:col-span-5 lg:pl-8 lg:hairline-l flex flex-col justify-between">
            <div>
              <h2 className="font-serif text-2xl text-[#0D0E10] mb-8">
                Reach Us Directly
              </h2>

              <div className="space-y-8 text-sm">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] block mb-1">
                    Address
                  </span>
                  <p className="text-[#0D0E10]/85 font-light">{siteConfig.addressToken}</p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] block mb-1">
                    Phone
                  </span>
                  <p className="text-[#0D0E10]/85 font-light">{siteConfig.phoneToken}</p>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] block mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#0D0E10] hover:text-[#A98A56] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] block mb-1">
                    WhatsApp
                  </span>
                  <a
                    href={siteConfig.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A98A56] hover:underline"
                  >
                    {siteConfig.whatsAppToken}
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] block mb-1">
                    Hours
                  </span>
                  <p className="text-[#0D0E10]/85 font-light">{siteConfig.hours}</p>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-12 hairline-t text-xs text-[#0D0E10]/60 space-y-2">
              <p className="font-medium text-[#0D0E10] uppercase tracking-wider">
                White-Glove Discretion
              </p>
              <p>
                All client architectural plans, floor dimensions, and specifications are treated with absolute privacy under strict non-disclosure protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Visit Our Experience Centre Section */}
        <div id="experience-centre" className="mt-24 sm:mt-32 pt-16 hairline-t">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-2">
                Physical Curation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] tracking-tight">
                Visit Our Experience Centre
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#0D0E10]/80 font-light leading-relaxed">
                Step into our world. Feel the materials, see the finishes, and experience the quality of a KaiRose home firsthand. Our design team will guide you through the possibilities.
              </p>
              <div className="mt-8">
                <a
                  href="#name"
                  className="inline-flex items-center text-xs uppercase tracking-[0.18em] px-6 py-4 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
                >
                  Book a Private Tour
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px]">
              <Image
                src="/images/about/experience-centre.jpg"
                alt="KaiRose Dubai Experience Centre material curation studio"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover film-grade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
