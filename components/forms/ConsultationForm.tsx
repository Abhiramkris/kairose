"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

export function ConsultationForm() {
  const searchParams = useSearchParams();
  const initialDetails = React.useMemo(() => {
    if (!searchParams) return "";
    const intent = searchParams.get("intent");
    const service = searchParams.get("service");
    const ref = searchParams.get("ref");
    if (intent === "quote" && service) {
      return `Inquiring for formal quotation regarding: ${service.replace(/-/g, " ").toUpperCase()}`;
    }
    if (intent === "design" && ref) {
      return `Consultation request inspired by design reference: ${ref.replace(/-/g, " ").toUpperCase()}`;
    }
    return "";
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: initialDetails,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you. Your consultation request has been received. Our studio will reach out discreetly.");
        setFormData({ name: "", email: "", phone: "", details: "" });
      } else {
        setStatus("error");
        setMessage("Unable to submit. Please contact us directly at info@kairosegroup.com.");
      }
    } catch {
      setStatus("error");
      setMessage("Unable to submit. Please contact us directly at info@kairosegroup.com.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="home-name" className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/60 mb-2">
            Name
          </label>
          <input
            id="home-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            className="w-full bg-transparent hairline-dark-b py-3 text-sm text-[#F4F1EA] placeholder-[#F4F1EA]/30 focus:border-[#A98A56] rounded-none focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="home-email" className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/60 mb-2">
            Email
          </label>
          <input
            id="home-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@domain.com"
            className="w-full bg-transparent hairline-dark-b py-3 text-sm text-[#F4F1EA] placeholder-[#F4F1EA]/30 focus:border-[#A98A56] rounded-none focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="home-phone" className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/60 mb-2">
            Phone
          </label>
          <input
            id="home-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 000 0000"
            className="w-full bg-transparent hairline-dark-b py-3 text-sm text-[#F4F1EA] placeholder-[#F4F1EA]/30 focus:border-[#A98A56] rounded-none focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="home-details" className="block text-xs uppercase tracking-[0.16em] text-[#F4F1EA]/60 mb-2">
            Tell us about your project
          </label>
          <input
            id="home-details"
            type="text"
            required
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="Location, property type, scope"
            className="w-full bg-transparent hairline-dark-b py-3 text-sm text-[#F4F1EA] placeholder-[#F4F1EA]/30 focus:border-[#A98A56] rounded-none focus:outline-none"
          />
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#F4F1EA] text-[#0D0E10] hover:bg-[#A98A56] hover:text-[#0D0E10] font-medium transition-colors rounded-[2px] disabled:opacity-50 cursor-pointer"
        >
          {status === "submitting" ? "Submitting..." : "Request a Consultation"}
        </button>

        <div aria-live="polite" className="text-xs text-[#A98A56]">
          {message}
        </div>
      </div>
    </form>
  );
}
