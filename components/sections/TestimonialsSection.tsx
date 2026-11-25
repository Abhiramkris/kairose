"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialItem } from "@/lib/supabase";

interface TestimonialsSectionProps {
  testimonial?: TestimonialItem;
  onOpenConsultation?: (topic?: string) => void;
}

export interface ClientReview {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  quote: string;
}

const clientReviews: ClientReview[] = [
  {
    id: "review-1",
    name: "Dr. Ajith Kumar",
    role: "Private Homeowner",
    location: "Palm Jumeirah Villa",
    projectType: "Turnkey Luxury Villa",
    rating: 5,
    quote:
      "KaiRose transformed our villa into an absolute masterpiece. The craftsmanship and attention to detail were beyond anything we imagined, and their engineering team handed over the project ahead of schedule.",
  },
  {
    id: "review-2",
    name: "The Sharma Family",
    role: "Villa Residents",
    location: "Emirates Hills Sanctuary",
    projectType: "Full Architectural Fit-Out",
    rating: 5,
    quote:
      "They didn’t just design our home; they deeply understood our family’s lifestyle and spatial flow. From bespoke Italian joinery to acoustic gypsum ceilings, the execution was flawless.",
  },
  {
    id: "review-3",
    name: "Swati & Gaurav",
    role: "Penthouse Owners",
    location: "Downtown Dubai",
    projectType: "Turnkey Penthouse Renovation",
    rating: 5,
    quote:
      "Our experience was completely seamless. Having a single point of accountability manage design coordination, authority approvals, and bespoke finishes gave us total peace of mind.",
  },
  {
    id: "review-4",
    name: "Puja Bhatia",
    role: "Private Client",
    location: "Dubai Hills Estate",
    projectType: "Bespoke Residential Interior",
    rating: 5,
    quote:
      "KaiRose delivered a level of refined luxury that exceeded our highest expectations. The material palette, ambient lighting integration, and custom marble detailing are simply world-class.",
  },
  {
    id: "review-5",
    name: "The Kapoor Family",
    role: "Estate Homeowners",
    location: "Jumeirah Golf Estates",
    projectType: "Bespoke Joinery & Fit-Out",
    rating: 5,
    quote:
      "The white-glove turnkey service made what could have been a complex project completely effortless. Transparent timelines, flawless site supervision, and uncompromising finishing quality.",
  },
  {
    id: "review-6",
    name: "Tariq Al Mansoori",
    role: "Managing Director",
    location: "DIFC Corporate Headquarters",
    projectType: "Commercial Turnkey Fit-Out",
    rating: 5,
    quote:
      "From acoustic space programming to premium architectural glass and MEP execution, KaiRose demonstrated exemplary site coordination. They met every stringent commercial requirement on schedule.",
  },
];

export function TestimonialsSection({
  onOpenConsultation,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, clientReviews.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-[#F8F1E8] py-16 sm:py-24 border-t border-black/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Section Heading & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              mass: 0.85,
              filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#7E4E15]" />
              <span className="text-xs uppercase tracking-[0.24em] font-semibold text-[#7E4E15]">
                Client Experiences
              </span>
            </div>
            <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] uppercase tracking-wide leading-tight">
              Testimonials
            </h2>
            <p className="font-montserrat text-sm sm:text-base text-[#221E1B] font-normal mt-2 max-w-xl">
              Authentic stories from our bespoke residential and commercial commissions across the UAE.
            </p>
          </motion.div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-black/15 bg-[#FAF6F0] hover:bg-[#452702] text-[#452702] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-black/15 bg-[#FAF6F0] hover:bg-[#452702] text-[#452702] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer group"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex -mx-3"
            animate={{
              x: `-${currentIndex * (100 / itemsPerPage)}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 32,
              mass: 0.8,
            }}
          >
            {clientReviews.map((review) => (
              <div
                key={review.id}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex"
              >
                {/* Clean Luxury Card */}
                <div className="w-full bg-[#FAF6F0] border border-black/10 rounded-[6px] p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 relative group">
                  {/* Top Bar: 5 Stars + Project Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-1 text-[#7E4E15]">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-current text-[#7E4E15]"
                          />
                        ))}
                      </div>

                      <span className="text-[10px] font-montserrat uppercase tracking-[0.16em] font-semibold text-[#7E4E15] bg-[#7E4E15]/10 px-2.5 py-1 rounded-[2px] truncate max-w-[160px]">
                        {review.projectType}
                      </span>
                    </div>

                    {/* Subtle Quote Icon */}
                    <Quote className="w-7 h-7 text-[#7E4E15]/25 mb-3 -scale-x-100" />

                    {/* Quote Text */}
                    <p className="font-montserrat font-normal text-sm sm:text-[15px] text-[#221E1B] leading-relaxed italic mb-6">
                      “{review.quote}”
                    </p>
                  </div>

                  {/* Card Footer: Author & Verification */}
                  <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-3 mt-auto">
                    <div>
                      <h3 className="font-montserrat font-semibold text-sm sm:text-[15px] text-[#452702] leading-tight">
                        {review.name}
                      </h3>
                      <p className="text-xs text-[#221E1B]/65 font-medium mt-0.5">
                        {review.role} • {review.location}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-montserrat font-medium text-[#7E4E15] flex-shrink-0 bg-white/70 px-2 py-1 rounded-[2px] border border-black/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7E4E15]" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots & Consultation CTA */}
        <div className="mt-8 sm:mt-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentIndex
                    ? "w-8 h-2 bg-[#7E4E15]"
                    : "w-2 h-2 bg-[#7E4E15]/30 hover:bg-[#7E4E15]/60"
                }`}
              />
            ))}
          </div>

          {/* Quick CTA */}
          {onOpenConsultation && (
            <button
              type="button"
              onClick={() => onOpenConsultation("Testimonials Consultation Inquiry")}
              className="text-xs uppercase tracking-[0.18em] font-montserrat font-semibold text-[#452702] hover:text-[#7E4E15] transition-colors cursor-pointer"
            >
              Share Your Project Vision →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
