"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface WhyKairoseSectionProps {
  onOpenConsultation?: (topic?: string) => void;
}

export function WhyKairoseSection({ onOpenConsultation }: WhyKairoseSectionProps) {
  return (
    <section id="why-kairose" className="w-full bg-[#F8F1E8] py-16 sm:py-24 border-t border-black/10 overflow-hidden">
      <div className="w-full flex flex-col items-center text-center">
        {/* Section Heading with Blur In */}
        <motion.h2
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
          className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#7E4E15] font-normal uppercase tracking-wider mb-8 sm:mb-12 px-4"
        >
          Why KaiRose
        </motion.h2>

        {/* Central Architectural Line Art Illustration - Refined Luxury Proportions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(14px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 75,
            damping: 18,
            mass: 0.9,
            delay: 0.15,
            filter: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
          }}
          className="w-full mb-8 sm:mb-12 flex justify-center px-4 sm:px-8 lg:px-12"
        >
          <div className="relative w-full max-w-[1200px] aspect-[1774/887] max-h-[580px]">
            <Image
              src="/images/why-kairose.png"
              alt="KaiRose Dubai classical interior architecture drawing, bespoke spatial layout, and custom villa styling"
              fill
              sizes="(max-width: 1200px) 95vw, 1200px"
              className="object-contain object-center"
              priority
            />
          </div>
        </motion.div>

        {/* Section Description Copy: Single-by-single blur reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            delay: 0.28,
            filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 },
          }}
          className="max-w-4xl mx-auto px-4 mb-10 sm:mb-12"
        >
          <p className="font-montserrat font-light text-[17px] sm:text-[20px] md:text-[24px] leading-relaxed md:leading-[1.65] text-[#221E1B]/85">
            Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details and timeless design. Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details and timeless design. Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details and timeless design.
          </p>
        </motion.div>

        {/* CTA Button: Single-by-single spring reveal */}
        <motion.button
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 85,
            damping: 18,
            delay: 0.38,
            filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.38 },
          }}
          onClick={() => onOpenConsultation?.("Why KaiRose Free Online Consultation")}
          className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#452702] hover:bg-[#5D3503] text-white text-xs sm:text-sm uppercase tracking-[0.18em] font-medium rounded-[2px] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Free Online Consultation
        </motion.button>
      </div>
    </section>
  );
}
