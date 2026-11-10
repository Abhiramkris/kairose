"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApproachStep } from "@/lib/supabase";

interface OurApproachSectionProps {
  steps: ApproachStep[];
  onOpenConsultation?: (topic?: string) => void;
}

export function OurApproachSection({
  steps,
  onOpenConsultation,
}: OurApproachSectionProps) {
  return (
    <section id="our-approach" className="w-full bg-[#F8F1E8] py-16 sm:py-24 border-t border-[rgba(69,39,2,0.1)]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] font-normal uppercase tracking-wider">
            Our Approach
          </h2>
        </motion.div>

        {/* 4 Dark Brown Cards: Single-by-single staggered entry with Apple spring and blur */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.85,
                delay: index * 0.12,
                filter: {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.12,
                },
              }}
              onClick={() => onOpenConsultation?.(`Approach Step ${step.stepNumber}: ${step.title}`)}
              className="bg-[#452702] text-white rounded-lg p-5 sm:p-7 min-h-[170px] sm:min-h-[200px] flex flex-col justify-between hover:bg-[#533003] transition-colors duration-300 cursor-pointer shadow-md group hover:shadow-xl"
            >
              {/* Step Number on Top */}
              <span className="font-cradley text-lg sm:text-xl text-[#D6CCBB] group-hover:text-white transition-colors">
                {step.stepNumber}
              </span>

              {/* Step Title in White */}
              <div>
                <h3 className="font-cradley text-lg sm:text-xl md:text-2xl font-normal leading-snug whitespace-pre-line text-white">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="font-montserrat text-[11px] sm:text-xs text-[#EFE6DC]/70 mt-2 font-light hidden sm:block">
                    {step.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
