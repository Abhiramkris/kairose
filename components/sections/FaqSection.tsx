"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaqItem } from "@/lib/supabase";

interface FaqSectionProps {
  faqs: FaqItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#F8F1E8] py-16 sm:py-24 border-t border-black/10">
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
            Frequently Asked Question
          </h2>
        </motion.div>

        {/* Split Grid: Left Accordion, Right Rectangular Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: FAQ Accordion with single-by-single blur entry */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    type: "spring",
                    stiffness: 85,
                    damping: 18,
                    mass: 0.85,
                    delay: index * 0.08,
                    filter: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.08,
                    },
                  }}
                  className="border-b border-black/10 pb-4 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left py-2 font-montserrat text-base sm:text-lg text-[#452702] font-medium group cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center border border-black/15 text-[#452702] transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#452702] text-white" : "group-hover:border-[#452702]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          mass: 0.7,
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 pb-2 text-sm text-[#221E1B]/80 font-montserrat leading-relaxed pr-6">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Clean Rectangular Interior Photo with Apple spring and blur */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, filter: "blur(14px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 75,
                damping: 18,
                mass: 0.9,
                delay: 0.2,
                filter: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
              }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] rounded-[6px] overflow-hidden shadow-md border border-black/10 bg-[#EFE6DC]"
            >
              <Image
                src="/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif"
                alt="KaiRose Dubai luxury residential living salon with bespoke architectural archways, curated lighting, and Italian furnishings"
                fill
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-center"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
