"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Mail,
  Globe,
  MapPin,
  CheckCircle2,
  Clock,
  Compass,
  Building2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { ConsultationModal } from "@/components/ui/ConsultationModal";
import { siteConfig } from "@/content/site-config";

export function AboutClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState("About Page Inquiry");

  const handleOpenConsultation = (topic?: string) => {
    setModalTopic(topic || "About Page Inquiry");
    setModalOpen(true);
  };

  const whatWeDoItems = [
    {
      num: "01",
      badge: "Design & Visualization",
      title: "Interior Design",
      description:
        "Space planning, 3D visualizations, material selection, and bespoke furniture design tailored to individual client lifestyle rhythms.",
      image: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
      alt: "KaiRose Dubai bespoke interior design master bedroom with custom curved velvet headboard",
      features: [
        "Volumetric Space Planning",
        "Photorealistic 3D Visualizations",
        "Material & Stone Selection",
        "Bespoke Furniture Design",
      ],
    },
    {
      num: "02",
      badge: "Engineering & Civil Work",
      title: "Flawless Execution",
      description:
        "Civil work, MEP (Mechanical, Electrical, Plumbing), contracting, custom fabrication, and meticulous site supervision by veteran engineers.",
      image: "/images/hero1/videoframe_7377.png",
      alt: "KaiRose Dubai flawless execution rose terrazzo vanity and custom brass fabrication",
      features: [
        "Civil Construction & Contracting",
        "Full MEP Engineering (Mechanical, Electrical, Plumbing)",
        "Custom Joinery & Millwork Fabrication",
        "Rigorous On-Site Supervision",
      ],
    },
    {
      num: "03",
      badge: "Single-Point Accountability",
      title: "Turnkey Management",
      description:
        "Single-point accountability from the initial design concept through authority approvals to the final white-glove handover.",
      image: "/images/hero1/videoframe_1439.png",
      alt: "KaiRose Dubai turnkey management royal dining hall and luxury interior fit-out",
      features: [
        "End-to-End Single-Point Accountability",
        "Dubai Authority Approvals (DM, DCD, Tecom, Nakheel)",
        "Timeline & Procurement Control",
        "Turnkey Handover & Warranty",
      ],
    },
  ];

  const whyChooseUsItems = [
    {
      icon: Compass,
      title: "Design Meets Reality",
      description:
        "Because we execute what we design, there are no miscommunications between the architect and the contractor. What is drawn on the blueprint is built with millimeter fidelity.",
      stat: "100%",
      statLabel: "Design-to-Build Fidelity",
    },
    {
      icon: Sparkles,
      title: "Uncompromising Quality",
      description:
        "We partner with trusted European craftsmen and premier material suppliers to guarantee flawless finishes, hand-selected natural stone, and artisanal joinery.",
      stat: "10-Yr",
      statLabel: "Craftsmanship Warranty",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Rigorous project management and milestones tracking ensure your commercial, hospitality, or residential space is completed strictly on schedule.",
      stat: "On Time",
      statLabel: "Guaranteed Handover",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      title: "In-Depth Consultation",
      description:
        "We begin with a comprehensive discovery session to understand spatial functionality, lifestyle objectives, and budget parameters.",
    },
    {
      step: "02",
      title: "Spatial & Budget Insights",
      description:
        "We analyze flow, circulation, and MEP constraints, leveraging insights to establish a transparent, realistic framework.",
    },
    {
      step: "03",
      title: "Layout & Material Selection",
      description:
        "Guiding decisions on architectural layout, 3D renders, rare marble slabs, and custom finishes to define the complete scope.",
    },
    {
      step: "04",
      title: "Precision Execution & Handover",
      description:
        "Our in-house technical and civil teams execute the build with flawless craftsmanship right through final white-glove delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F1E8] text-[#221E1B] flex flex-col font-montserrat selection:bg-[#452702] selection:text-white">
      {/* 1. Global Luxury Header */}
      <SiteHeader onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1 w-full">
        {/* Breadcrumb Navigation */}
        <div className="w-full border-b border-black/10 bg-[#FAF6F0]/80">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between text-xs tracking-wider uppercase">
            <div className="flex items-center space-x-2 text-[#221E1B]/70 font-medium">
              <Link href="/" className="hover:text-[#452702] transition-colors">
                Home
              </Link>
              <span className="text-black/30">/</span>
              <span className="text-[#452702] font-semibold">About Us</span>
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

        {/* 2. Hero Masthead & Who We Are */}
        <section className="w-full py-16 sm:py-24 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            {/* Eyebrow & Title */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.85,
                filter: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              }}
              className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
            >
              <div className="flex justify-center mb-3.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#452702]/15 bg-[#FAF6F0] text-[10px] sm:text-xs uppercase tracking-[0.24em] text-[#7E4E15] font-montserrat font-medium shadow-[0_1px_4px_rgba(69,39,2,0.04)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E4E15]" />
                  About KaiRose Dubai
                </span>
              </div>

              <h1 className="font-cradley text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#452702] font-normal uppercase tracking-[0.06em] leading-[1.08] mb-6">
                Who We Are
              </h1>

              <div className="w-16 h-[2px] bg-[#7E4E15]/30 mx-auto mb-6" />
            </motion.div>

            {/* Split Narrative & Hero Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Left Column: Who We Are Narrative */}
              <motion.div
                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  mass: 0.85,
                }}
                className="lg:col-span-7 flex flex-col justify-center space-y-6"
              >
                <div className="inline-flex items-center gap-2 text-xs font-montserrat uppercase tracking-[0.2em] text-[#7E4E15] font-semibold">
                  <Building2 className="w-4 h-4 text-[#7E4E15]" />
                  <span>Licensed Dubai Turnkey Contractor & Design Studio</span>
                </div>

                <h2 className="font-cradley text-2xl sm:text-3xl md:text-4xl text-[#452702] font-normal leading-snug">
                  Transforming Visions into Stunning, Functional Realities Across the UAE.
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#221E1B]/80 font-light leading-relaxed">
                  <p>
                    <strong className="font-medium text-[#452702]">
                      KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC
                    </strong>{" "}
                    was founded by industry veterans specializing in construction, interior design, and turnkey execution. Backed by a team of seasoned professionals, KAIROSE delivers expert solutions across interior architecture, building maintenance, and seamless project execution.
                  </p>
                  <p>
                    We design and optimize interior spaces around how our clients live, work, and interact. Our primary objective is to transform our clients&apos; visions into stunning, functional realities.
                  </p>
                  <p>
                    Our diverse portfolio encompasses the execution of premium residential spaces, event venues, commercial malls, and corporate offices. Headquartered in the heart of Dubai, KAIROSE provides comprehensive solutions to clients across the entire United Arab Emirates.
                  </p>
                </div>

                {/* Key Portfolio Pillars Badges */}
                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Premium Residential",
                    "Event Venues",
                    "Commercial Malls",
                    "Corporate Offices",
                  ].map((sector) => (
                    <div
                      key={sector}
                      className="p-3 bg-[#FAF6F0] border border-black/10 rounded-[4px] text-center"
                    >
                      <span className="block text-[11px] sm:text-xs uppercase tracking-wider font-medium text-[#452702]">
                        {sector}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: High-Res Hero Imagery from hero1 */}
              <motion.div
                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  mass: 0.85,
                  delay: 0.15,
                }}
                className="lg:col-span-5 flex flex-col space-y-4"
              >
                {/* Main Image Frame - Clean Rectangular Frame */}
                <div className="relative w-full aspect-[4/4.8] rounded-[6px] overflow-hidden bg-[#EFE6DC] border border-black/10 shadow-lg group">
                  <Image
                    src="/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif"
                    alt="KaiRose Dubai cathedral villa architectural living space with exposed timber trusses"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <span className="text-[10px] uppercase font-montserrat tracking-[0.2em] font-semibold text-[#F8F1E8]/90 block">
                      Architectural Excellence
                    </span>
                    <h3 className="font-cradley text-lg sm:text-xl font-normal">
                      Turnkey Villa & Commercial Fit-Out
                    </h3>
                  </div>
                </div>

                {/* Secondary Image Strip */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-[#EFE6DC] border border-black/10">
                    <Image
                      src="/images/hero1/videoframe_7092.png"
                      alt="KaiRose Dubai stone villa fireplace salon"
                      fill
                      sizes="220px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden bg-[#EFE6DC] border border-black/10">
                    <Image
                      src="/images/hero1/videoframe_10439.png"
                      alt="KaiRose Dubai avant-garde salon"
                      fill
                      sizes="220px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Section: WHAT WE DO */}
        <section className="w-full py-16 sm:py-24 bg-[#FAF6F0] border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.85,
              }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#452702]/15 bg-[#F8F1E8] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7E4E15] font-montserrat font-medium shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E4E15]" />
                  Core Capabilities
                </span>
              </div>
              <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] font-normal uppercase tracking-[0.06em] mb-4">
                What We Do
              </h2>
              <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 font-light leading-relaxed">
                From concept blueprints to building maintenance and turnkey handover, we offer full-spectrum architectural and engineering solutions.
              </p>
            </motion.div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {whatWeDoItems.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35, filter: "blur(12px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    delay: idx * 0.1,
                  }}
                  className="flex flex-col bg-[#F8F1E8] border border-black/10 rounded-[6px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {/* Clean Rectangular Image Header */}
                  <div className="relative w-full aspect-[16/10] bg-[#EFE6DC] border-b border-black/10 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-[3px] bg-[#FAF6F0]/90 backdrop-blur-md border border-black/10 text-[9px] sm:text-[10px] uppercase font-montserrat tracking-[0.16em] text-[#452702] font-semibold">
                      {item.badge}
                    </span>
                    <span className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-[#452702] text-white flex items-center justify-center font-mono text-xs font-medium">
                      {item.num}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-cradley text-xl sm:text-2xl text-[#452702] font-normal uppercase mb-3">
                        {item.title}
                      </h3>
                      <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/80 font-light leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="space-y-2.5 pt-2 border-t border-black/10 mb-6">
                        {item.features.map((feat) => (
                          <div key={feat} className="flex items-start space-x-2 text-xs text-[#221E1B]/75">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#7E4E15] mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleOpenConsultation(`Inquire: ${item.title}`)}
                      className="w-full py-2.5 sm:py-3 bg-[#452702] hover:bg-[#5D3503] text-white text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium rounded-[3px] transition-colors duration-200 cursor-pointer text-center"
                    >
                      Inquire For This Service
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Section: WHY CHOOSE US */}
        <section className="w-full py-16 sm:py-24 bg-[#F8F1E8] border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 18,
                mass: 0.85,
              }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <div className="flex justify-center mb-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#452702]/15 bg-[#FAF6F0] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7E4E15] font-montserrat font-medium shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E4E15]" />
                  The KaiRose Advantage
                </span>
              </div>
              <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] font-normal uppercase tracking-[0.06em] mb-4">
                Why Choose Us
              </h2>
              <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/75 font-light leading-relaxed">
                By uniting architectural design and in-house contracting under one unified team, we ensure complete alignment, flawless craftsmanship, and adherence to timelines.
              </p>
            </motion.div>

            {/* Why Choose Us Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {whyChooseUsItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 18,
                      delay: idx * 0.12,
                    }}
                    className="bg-[#FAF6F0] border border-black/10 rounded-[6px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-300"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-[#EFE6DC] border border-black/10 flex items-center justify-center text-[#452702] mb-6">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="font-cradley text-xl sm:text-2xl text-[#452702] font-normal uppercase mb-3 leading-snug">
                        {item.title}
                      </h3>

                      <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/80 font-light leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/10 flex items-baseline justify-between">
                      <span className="font-cradley text-2xl text-[#7E4E15] font-normal">
                        {item.stat}
                      </span>
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-montserrat text-[#221E1B]/60 font-medium">
                        {item.statLabel}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Section: OUR APPROACH */}
        <section className="w-full py-16 sm:py-24 bg-[#FAF6F0] border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#452702]/15 bg-[#F8F1E8] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7E4E15] font-montserrat font-medium mb-3.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7E4E15]" />
                  Methodology & Execution
                </span>
                <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] font-normal uppercase tracking-[0.06em] mb-4">
                  Our Approach
                </h2>
                <p className="font-montserrat text-xs sm:text-sm text-[#221E1B]/80 font-light leading-relaxed">
                  Our process begins with an in-depth consultation to understand spatial functionality, client objectives, and budget parameters. We leverage these insights to guide decisions on layout, material selection, and premium finishes, establishing a defined scope of work before execution begins.
                </p>
              </div>

              <div className="lg:col-span-7">
                {/* 4 Steps Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {approachSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-5 bg-[#F8F1E8] border border-black/10 rounded-[6px] shadow-xs"
                    >
                      <span className="font-mono text-xs text-[#7E4E15] font-semibold tracking-wider block mb-1.5">
                        STEP {step.step}
                      </span>
                      <h3 className="font-cradley text-base sm:text-lg text-[#452702] font-normal mb-2">
                        {step.title}
                      </h3>
                      <p className="font-montserrat text-xs text-[#221E1B]/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Section: READY TO TRANSFORM YOUR SPACE & CONTACT DETAILS */}
        <section className="w-full py-16 sm:py-24 bg-[#F8F1E8]">
          <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
              {/* Left Column: CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                }}
                className="lg:col-span-7 bg-[#FAF6F0] border border-black/10 rounded-[6px] p-8 sm:p-12 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#452702]/15 bg-[#F8F1E8] text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#7E4E15] font-montserrat font-medium mb-4">
                    Begin Your Transformation
                  </span>

                  <h2 className="font-cradley text-3xl sm:text-4xl md:text-5xl text-[#452702] font-normal uppercase tracking-[0.04em] leading-tight mb-5">
                    Ready to Transform Your Space? Why Wait?
                  </h2>

                  <p className="font-montserrat text-sm sm:text-base text-[#221E1B]/80 font-light leading-relaxed mb-8">
                    Don&apos;t let your dream interior remain just an idea. Whether you are looking to design a luxurious home, an efficient corporate office, or a standout retail space, our team is ready to bring it to life. We handle the entire journey—from the first sketch to the final execution—so you can enjoy a stress-free transformation.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
                  <button
                    onClick={() => handleOpenConsultation("About CTA: Transform Your Space")}
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer rounded-[3px] text-center"
                  >
                    Book a Consultation
                  </button>

                  <a
                    href={siteConfig.phoneCallUrl}
                    className="w-full sm:w-auto px-7 py-3.5 border border-[#452702] text-[#452702] hover:bg-[#452702] hover:text-white font-montserrat font-medium text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-[3px] text-center inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Direct: {siteConfig.phoneToken}</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Official Contact Us Details */}
              <motion.div
                initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 18,
                  delay: 0.12,
                }}
                className="lg:col-span-5 bg-[#452702] text-[#F8F1E8] rounded-[6px] p-8 sm:p-10 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <span className="text-[#D6CCBB] font-montserrat text-xs uppercase tracking-[0.24em] font-semibold block mb-3">
                    Contact Us At
                  </span>

                  <h3 className="font-cradley text-lg sm:text-xl text-white font-normal uppercase leading-snug mb-1">
                    KAIROSE INTERIOR DESIGN AND TECHNICAL SERVICES LLC
                  </h3>
                  <p className="font-montserrat text-xs text-[#D6CCBB] font-semibold uppercase tracking-wider mb-6">
                    Studio Showroom & Head Office
                  </p>

                  <div className="space-y-5 font-montserrat text-xs sm:text-[13px] text-[#F8F1E8]/90">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                          Company Name
                        </span>
                        <span>{siteConfig.legalName}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                          Address
                        </span>
                        <p className="leading-relaxed">
                          112, Makateb Building, Port Saeed,
                          <br />
                          PO Box 98845, Deira, Dubai, UAE.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                          Telephone
                        </span>
                        <a
                          href={siteConfig.phoneCallUrl}
                          className="hover:underline text-white font-medium"
                        >
                          {siteConfig.phoneToken}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                          E-Mail
                        </span>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="hover:underline text-white font-medium"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-4 h-4 text-[#D6CCBB] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                          Website
                        </span>
                        <a
                          href={siteConfig.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-white font-medium"
                        >
                          {siteConfig.websiteDisplay}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/15">
                  <a
                    href={siteConfig.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#FAF6F0] hover:bg-white text-[#452702] font-montserrat font-medium text-xs uppercase tracking-[0.16em] transition-colors rounded-[3px] flex items-center justify-center gap-2"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Global Luxury Footer */}
      <SiteFooter />

      {/* 8. Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTopic={modalTopic}
      />
    </div>
  );
}
