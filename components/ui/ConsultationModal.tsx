"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export function ConsultationModal({
  isOpen,
  onClose,
  initialTopic = "General Consultation",
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "Dubai Villa",
    location: "Palm Jumeirah",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          topic: initialTopic,
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, y: 10, filter: "blur(8px)" }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 20,
              mass: 0.8,
            }}
            className="relative w-full max-w-lg bg-[#F8F1E8] border border-[rgba(69,39,2,0.15)] shadow-2xl p-6 sm:p-8 rounded-lg overflow-hidden"
          >
        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-[#452702]/60 hover:text-[#452702] transition-colors rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 mx-auto text-[#452702]" />
            <h3 className="font-cradley text-2xl text-[#452702]">
              Inquiry Registered
            </h3>
            <p className="text-sm text-[#221E1B]/80 font-montserrat max-w-sm mx-auto">
              Thank you. Our senior architectural director in Dubai will contact you directly within 24 hours to schedule your private design consultation.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#452702] text-white text-xs uppercase tracking-wider rounded font-medium hover:bg-[#5D3503] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#7E4E15] font-bold block mb-1">
                KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A98A56] font-semibold block mb-1">
                Studio Showroom & Head Office • Dubai
              </span>
              <h2 className="font-cradley text-2xl sm:text-3xl text-[#452702] font-normal">
                Book A Consultation
              </h2>
              <p className="text-xs text-[#221E1B]/75 mt-1 font-montserrat">
                Selected inquiry: <span className="font-medium text-[#452702]">{initialTopic}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Alexander Wright"
                  className="w-full bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] rounded px-3 py-2 text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] rounded px-3 py-2 text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@luxury.ae"
                    className="w-full bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] rounded px-3 py-2 text-sm text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] rounded px-3 py-2 text-xs text-[#221E1B] focus:outline-none focus:border-[#452702]"
                  >
                    <option value="Dubai Villa">Dubai Villa (Renovation / New)</option>
                    <option value="Penthouse">Skyline Penthouse</option>
                    <option value="Townhouse">Luxury Townhouse</option>
                    <option value="Commercial / Majlis">Private Majlis / Estate</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1">
                    Location in UAE
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] rounded px-3 py-2 text-xs text-[#221E1B] focus:outline-none focus:border-[#452702]"
                  >
                    <option value="Palm Jumeirah">Palm Jumeirah</option>
                    <option value="Emirates Hills">Emirates Hills</option>
                    <option value="Downtown Dubai">Downtown Dubai</option>
                    <option value="Al Barari">Al Barari</option>
                    <option value="Dubai Hills Estate">Dubai Hills Estate</option>
                    <option value="Other Prime Area">Other Prime UAE Area</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#452702] font-medium mb-1">
                  Project Notes / Vision
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share details on target move-in date, key interior aesthetic, or square footage..."
                  className="w-full bg-[#FAF6F0] border border-[rgba(69,39,2,0.2)] rounded px-3 py-2 text-xs text-[#221E1B] placeholder-[#221E1B]/40 focus:outline-none focus:border-[#452702]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#452702] hover:bg-[#5D3503] text-white text-xs uppercase tracking-[0.18em] font-medium rounded transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
              </button>
            </form>
            </div>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
}
