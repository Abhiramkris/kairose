import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { projectsData } from "@/content/projects";

export const metadata: Metadata = {
  title: "Recent Projects | Luxury Penthouse & Villa Interiors Dubai",
  description:
    "Explore our portfolio of bespoke interiors across Dubai’s most prestigious addresses: Palm Jumeirah, Emirates Hills, and Downtown Dubai.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Bespoke Commissions</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            Recent Projects. Real Homes. Real Luxury.
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-2xl font-light">
            Explore our portfolio of bespoke interiors across Dubai’s most prestigious addresses.
          </p>
        </div>

        {/* 3 Expanded Projects */}
        <div className="space-y-24 sm:space-y-36 pt-16">
          {projectsData.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <section
                key={project.id}
                id={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Large Hero Image per project */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px] ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover film-grade transition-transform duration-700 ease-out hover:scale-[1.02]"
                  />
                </div>

                {/* Editorial Copy Block */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#A98A56] font-medium">
                    Type: {project.type} — Location: {project.location}
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] mt-3">
                    {project.title}
                  </h2>

                  <div className="mt-6 space-y-4">
                    <p className="text-sm sm:text-base text-[#0D0E10]/80 font-light leading-relaxed">
                      <strong className="font-medium text-[#0D0E10]">Design Story: </strong>
                      {project.designStory}
                    </p>

                    <div className="pt-4 hairline-t">
                      <p className="text-xs uppercase tracking-widest text-[#0D0E10]/50 mb-1">
                        Materials
                      </p>
                      <p className="text-sm text-[#0D0E10]/85 italic font-light">
                        {project.materials.join(", ")}
                      </p>
                    </div>

                    <div className="pt-4 hairline-t">
                      <p className="text-xs uppercase tracking-widest text-[#0D0E10]/50 mb-1">
                        Specs & Timeline
                      </p>
                      <p className="text-sm text-[#0D0E10]/80 font-light">
                        {[
                          project.specs.bedrooms,
                          project.specs.bathrooms,
                          project.specs.area,
                          project.specs.features,
                          `Timeline: ${project.specs.timeline}`,
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/contact?intent=design&ref=${project.slug}`}
                      className="group inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#A98A56] hover:text-[#927546] transition-colors"
                    >
                      <span>Consult a Designer for This Look</span>
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Ready to Start Your Project? Bottom CTA */}
        <section className="mt-24 sm:mt-32 py-16 px-8 sm:px-12 bg-[#0D0E10] text-[#F4F1EA] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Ready to Start Your Project?
            </h2>
            <p className="mt-2 text-sm text-[#F4F1EA]/75 font-light">
              Let’s create a home that tells your story.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] px-8 py-4 bg-[#F4F1EA] text-[#0D0E10] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px] whitespace-nowrap"
          >
            Book a Private Consultation
          </Link>
        </section>
      </div>
    </div>
  );
}
