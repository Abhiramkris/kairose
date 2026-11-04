import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { projectsData } from "@/content/projects";

export function ProjectFeature() {
  return (
    <section className="py-20 lg:py-32 bg-[#F4F1EA] hairline-b">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 hairline-b gap-6">
          <div>
            <Eyebrow number="05">Portfolio</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0D0E10] tracking-tight">
              Recent Projects. Real Homes. Real Luxury.
            </h2>
            <p className="mt-2 text-sm text-[#0D0E10]/70">
              Home Interior Design in Dubai
            </p>
          </div>

          <Link
            href="/projects"
            className="group inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
          >
            <span>View All Projects</span>
            <span className="ml-2 text-[#A98A56] transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* 3 Projects: Alternating 7-col image / 5-col copy */}
        <div className="space-y-20 lg:space-y-32 pt-16">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image side: 7 columns */}
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

                {/* Copy side: 5 columns */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium">
                    {project.type} — {project.location}
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0D0E10] mt-3">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-[#0D0E10]/80 font-light leading-relaxed">
                    {project.designStory}
                  </p>

                  {/* Materials listed as a comma-separated line, not chips */}
                  <div className="mt-6 pt-6 hairline-t">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#0D0E10]/50 block mb-1">
                      Materials
                    </span>
                    <p className="text-xs sm:text-sm text-[#0D0E10]/85 italic font-light">
                      {project.materials.join(", ")}
                    </p>
                  </div>

                  {/* Specs & Timeline line */}
                  <div className="mt-4 text-xs text-[#0D0E10]/60 space-x-4">
                    <span>{project.specs.area}</span>
                    <span>•</span>
                    <span>{project.specs.timeline}</span>
                  </div>

                  {/* CTA: Consult a Designer for This Look */}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
