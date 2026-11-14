"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroData } from "@/lib/supabase";

interface HeroMockupProps {
  data: HeroData;
  onOpenConsultation?: (topic?: string) => void;
}

export function HeroMockup({ data, onOpenConsultation }: HeroMockupProps) {
  // Responsive mobile touch check for lightweight scroll calculations
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // High-resolution WebP images from designer's PDF with SEO-optimized alt descriptions
  const cards = [
    {
      url: "/images/hero1/videoframe_1439.png",
      alt: "KaiRose Dubai royal dining salon with arched windows, stone fireplace, and white peacock centerpiece",
    },
    {
      url: "/images/hero1/videoframe_7092.png",
      alt: "KaiRose Dubai Mediterranean stone villa salon with monumental carved fireplace and exposed timber beams",
    },
    {
      url: "/images/hero1/videoframe_10439.png",
      alt: "KaiRose Dubai avant-garde salon with sculpted hot-pink club armchairs and chartreuse fireplace mantel",
    },
  ];

  const brandLetters = Array.from(data.brandTitle || "KAIROSE");

  // Parallax Scroll Tracking for Top 3 Cards
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cardsScrollY } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "end start"],
  });

  // Unified level parallax transform ensuring all cards remain at the EXACT same level
  const cardsUnifiedY = useTransform(cardsScrollY, [0, 1], [0, 35]);

  // Subtle internal liquid translate for the images inside the cards
  const imgY = useTransform(cardsScrollY, [0, 1], ["-5%", "5%"]);

  // Parallax Scroll Tracking for Section 2 (Kinetic Typography + Rising Portrait Parallax)
  const section2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: section2ScrollY } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"],
  });

  // Opposing Kinetic Typography: Row 1 goes Left-to-Right, Row 2 goes Right-to-Left on scroll
  const xRow1 = useTransform(section2ScrollY, (v) => {
    const start = isMobile ? -14 : -32;
    const end = isMobile ? 4 : 12;
    return `${start + v * (end - start)}%`;
  });

  const xRow2 = useTransform(section2ScrollY, (v) => {
    const start = isMobile ? 4 : 12;
    const end = isMobile ? -14 : -32;
    return `${start + v * (end - start)}%`;
  });

  // Foreground Portrait Image: rises UPWARDS with scroll parallax over the moving text and background
  const portraitY = useTransform(section2ScrollY, (v) => {
    const range = isMobile ? 30 : 140;
    return (0.5 - v) * 2 * range;
  });

  const portraitScale = useTransform(section2ScrollY, (v) => {
    if (isMobile) return 1;
    return 0.96 + Math.sin(v * Math.PI) * 0.06;
  });

  // Subtle background zoom/drift
  const bgY = useTransform(section2ScrollY, (v) => {
    const pct = isMobile ? 2 : 6;
    return `${(v - 0.5) * 2 * pct}%`;
  });

  return (
    <section className="relative w-full bg-[#F8F1E8] pt-4 sm:pt-7 pb-12 sm:pb-16 overflow-hidden">
      {/* =========================================================================
          Part 1: Header Brand Title, Tagline & 3 Cards (End-to-End with 5% side margins)
          ========================================================================= */}
      <div className="w-full px-[5%] flex flex-col items-center text-center pb-4 sm:pb-6">
        {/* Animated Brand Title: Reduced Letter-Spacing & Tight Luxury Kerning */}
        <h1
          aria-label={data.brandTitle}
          className="font-cradley text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.02em] sm:tracking-[0.03em] text-[#7E4E15] font-normal uppercase select-none mb-1.5 flex items-center justify-center overflow-hidden"
        >
          {brandLetters.map((char, index) => (
            <span
              key={`${char}-${index}`}
              className="inline-block overflow-hidden pb-1"
            >
              <motion.span
                className="inline-block will-change-transform"
                initial={{ y: "115%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 17,
                  mass: 0.8,
                  delay: 0.08 + index * 0.055,
                  filter: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 + index * 0.055 },
                }}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Brand Tagline with reduced vertical spacing */}
        <motion.p
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.85,
            delay: 0.3,
            filter: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
          }}
          className="font-montserrat text-xs sm:text-sm uppercase tracking-[0.16em] text-[#221E1B] font-medium mb-5 sm:mb-7"
        >
          {data.brandTagline}
        </motion.p>

        {/* 3 Cards: Perfectly Aligned on the Same Level with Unified Parallax Depth */}
        <div ref={cardsContainerRef} className="w-full mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-[12px] items-start justify-center">
            {cards.map((item, index) => {
              const isThird = index === 2;

              return (
                <motion.div
                  key={item.url}
                  initial={{ opacity: 0, filter: "blur(14px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.35 + index * 0.12,
                  }}
                  style={{ y: cardsUnifiedY }}
                  className={`relative flex flex-col will-change-transform ${
                    isThird ? "hidden md:flex" : "flex"
                  }`}
                >
                  {/* Rectangle 138, 139, 140: Longer vertical architectural proportions, border-radius: 15px, end-to-end width, light thin black border */}
                  <div className="relative w-full aspect-[303/520] min-h-[380px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-[640px] max-h-[740px] overflow-hidden rounded-[15px] shadow-sm bg-[#EFE6DC] border border-black/10 group">
                    <motion.div
                      style={{ y: imgY, scale: 1.08 }}
                      className="relative w-full h-full will-change-transform"
                    >
                      <Image
                        src={item.url}
                        alt={item.alt}
                        fill
                        priority={index === 0}
                        fetchPriority={index === 0 ? "high" : undefined}
                        sizes="(max-width: 768px) 48vw, 30vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </motion.div>
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================================
          Part 2: Kinetic Typography & Rising Portrait Parallax (matches user reference)
          ========================================================================= */}
      <div ref={section2Ref} className="w-full mt-10 sm:mt-16">
        <div className="relative w-full min-h-[680px] sm:min-h-[760px] md:min-h-[840px] lg:min-h-[900px] overflow-hidden flex items-center justify-center border-y border-black/10 shadow-sm select-none">
          {/* Background Layer with Subtle Parallax Float */}
          <motion.div
            style={{ y: bgY, scale: 1.12 }}
            className="absolute inset-0 w-full h-[120%] -top-[10%] transform-gpu will-change-transform"
          >
            <Image
              src="/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif"
              alt="KaiRose Dubai cathedral villa salon with timber trusses and panoramic arched window"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            {/* Atmospheric cinematic darkening washes ensuring crystal readability of typography and portrait */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/45 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/60 pointer-events-none"
            />
          </motion.div>

          {/* Kinetic Typography Mid-Layer: Opposing Scroll Rows */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col justify-center space-y-4 sm:space-y-8 md:space-y-12 overflow-hidden pointer-events-none z-10"
          >
            {/* Row 1: Left to Right on scroll */}
            <motion.div
              style={{ x: xRow1 }}
              className="whitespace-nowrap flex items-center space-x-8 sm:space-x-12 transform-gpu will-change-transform opacity-80 sm:opacity-90"
            >
              <span className="font-cradley text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[135px] font-light text-white tracking-tight uppercase">
                MODERN | LUXURY • ARCHITECTURAL EXCELLENCE • TIMELESS SPACES • KAIROSE DUBAI • MODERN | LUXURY • ARCHITECTURAL EXCELLENCE
              </span>
            </motion.div>

            {/* Row 2: Right to Left on scroll */}
            <motion.div
              style={{ x: xRow2 }}
              className="whitespace-nowrap flex items-center space-x-8 sm:space-x-12 transform-gpu will-change-transform opacity-80 sm:opacity-90"
            >
              <span className="font-cradley text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[135px] font-light text-white tracking-tight uppercase">
                REDEFINING LUXURY • TIMELESS SPACES • PRIVATE RESIDENCES • TURNKEY FIT-OUT • REDEFINING LUXURY • TIMELESS SPACES
              </span>
            </motion.div>
          </div>

          {/* Foreground Layer: Editorial Content Card + Rising Parallax Portrait Image */}
          <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 py-16 sm:py-24">
            {/* Left Column: Frosted Luxury Editorial Card */}
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
              className="w-full lg:max-w-[540px] bg-black/55 backdrop-blur-md p-6 sm:p-10 rounded-[6px] border border-white/20 shadow-2xl text-left"
            >
              <h2 className="font-montserrat font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 leading-tight">
                Redefining Luxury Interiors.
              </h2>
              <p className="font-montserrat text-sm sm:text-base md:text-lg text-[#F8F1E8]/90 font-light leading-relaxed mb-7 max-w-lg">
                Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details and timeless design.
              </p>
              <button
                onClick={() => onOpenConsultation?.("Hero Book A Consultation")}
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-[#F8F1E8] hover:bg-white text-[#452702] font-montserrat font-medium text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 shadow-lg cursor-pointer rounded-[2px]"
              >
                Book a Consultation
              </button>
            </motion.div>

            {/* Right Column: Rising Portrait Image overlapping text & background on scroll */}
            <motion.div
              style={{ y: portraitY, scale: portraitScale }}
              className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[500px] aspect-[3/3.8] sm:aspect-[3/3.6] rounded-[6px] overflow-hidden border border-white/30 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] group bg-[#16120E] flex-shrink-0 transform-gpu will-change-transform"
            >
              <Image
                src="/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif"
                alt="KaiRose Dubai haute couture master bedroom sanctuary with curved velvet headboard"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 500px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
