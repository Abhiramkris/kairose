"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { TestimonialItem } from "@/lib/supabase";

interface TestimonialsSectionProps {
  testimonial: TestimonialItem;
  onOpenConsultation?: (topic?: string) => void;
}

export function TestimonialsSection({
  testimonial,
  onOpenConsultation,
}: TestimonialsSectionProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section id="testimonials" className="w-full bg-[#F8F1E8] py-16 sm:py-24 border-t border-black/10">
      <div className="w-full px-4 sm:px-6 flex flex-col items-center">
        {/* Section Heading with Blur In */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#7E4E15] font-normal uppercase tracking-wider">
            Testimonials
          </h2>
        </motion.div>

        {/* Rectangle 148: width: 933px, min-height: 474px, light thin black border */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            type: "spring",
            stiffness: 75,
            damping: 18,
            mass: 0.9,
            filter: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className="w-full max-w-[933px] min-h-[474px] border border-black/15 rounded-[4px] p-6 sm:p-8 md:p-9 flex items-center justify-center"
        >
          {/* Frame 9474: width: 826px, gap: 68px */}
          <div className="w-full max-w-[826px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[68px]">
            {/* Rectangle 150: width: 297px, height: 417px, light thin black border */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.85,
                delay: 0.1,
                filter: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
              }}
              className="relative w-full md:w-[297px] h-[340px] sm:h-[380px] md:h-[417px] rounded-[4px] overflow-hidden bg-[#D9D9D9] flex-shrink-0 group border border-black/10"
            >
              <Image
                src={testimonial.videoThumbnail}
                alt={`KaiRose Dubai luxury villa client review video featuring ${testimonial.clientName} - ${testimonial.clientRole}`}
                fill
                sizes="(max-width: 768px) 85vw, 297px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsPlayingVideo(true)}
                  aria-label="Play testimonial video"
                  className="w-14 h-14 rounded-full bg-[#F8F1E8] text-[#452702] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 cursor-pointer mb-3"
                >
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </button>
                <span className="text-xs font-montserrat uppercase tracking-[0.16em] text-white/95 font-medium">
                  Testimonial Video
                </span>
              </div>
            </motion.div>

            {/* Frame 9473: Single-by-single staggered entry with Apple spring and blur */}
            <div className="w-full md:w-[461px] flex flex-col items-start text-left gap-[18px] sm:gap-[22px]">
              {/* Dr. Ajith Kumar */}
              <motion.h3
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 18,
                  mass: 0.85,
                  delay: 0.15,
                  filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
                }}
                className="font-montserrat font-medium text-[30px] sm:text-[36px] md:text-[40px] leading-[1.2] md:leading-[49px] text-[#000000]"
              >
                {testimonial.clientName}
              </motion.h3>

              {/* -HomeOwner Dubai */}
              <motion.p
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 18,
                  mass: 0.85,
                  delay: 0.25,
                  filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
                }}
                className="font-montserrat font-normal text-[17px] sm:text-[20px] leading-[24px] text-[#000000] -mt-1 sm:-mt-2"
              >
                {testimonial.clientRole}
              </motion.p>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  mass: 0.85,
                  delay: 0.35,
                  filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
                }}
                className="font-montserrat font-light text-[17px] sm:text-[20px] md:text-[24px] leading-[1.35] md:leading-[29px] text-[#000000]"
              >
                {testimonial.quote}
              </motion.p>

              {/* Group 9620 / Rectangle 149 */}
              <motion.div
                initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 18,
                  delay: 0.45,
                  filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
                }}
                className="pt-2"
              >
                <button
                  onClick={() => onOpenConsultation?.("Testimonial Begin Your Journey")}
                  className="w-[197px] h-[33px] bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat font-normal text-[15px] leading-[18px] flex items-center justify-center transition-colors cursor-pointer rounded-none"
                >
                  Begin Your Journey
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Preview Modal */}
      {isPlayingVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-2xl bg-[#0D0E10] rounded-lg overflow-hidden p-4">
            <div className="relative aspect-video w-full bg-black flex items-center justify-center text-white text-center p-6">
              <div>
                <Play className="w-12 h-12 mx-auto mb-3 text-[#A98A56]" />
                <h4 className="font-cradley text-xl mb-1">{testimonial.clientName} - Client Story</h4>
                <p className="text-xs text-white/70 max-w-md mx-auto">
                  “KaiRose transformed our villa into a masterpiece. They finished ahead of schedule.”
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="px-5 py-2 bg-[#F8F1E8] text-[#452702] text-xs uppercase tracking-wider font-medium rounded cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
