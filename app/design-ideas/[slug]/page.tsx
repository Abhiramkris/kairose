import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { designsData } from "@/content/designs";
import { siteConfig } from "@/content/site-config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return designsData.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const design = designsData.find((d) => d.slug === slug);
  if (!design) return { title: "Design Detail" };
  return {
    title: `${design.name} | KaiRose Design Ideas`,
    description: design.description || `${design.name} - ${design.styleTag} bespoke interior curation.`,
  };
}

export default async function DesignDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const design = designsData.find((d) => d.slug === slug);

  if (!design) {
    notFound();
  }

  // Related designs
  const relatedDesigns = designsData.filter((d) =>
    design.relatedSlugs?.includes(d.slug)
  ).slice(0, 3);

  const fallbackRelated = relatedDesigns.length > 0 ? relatedDesigns : designsData.filter(d => d.slug !== slug).slice(0, 3);

  return (
    <article className="bg-[#F4F1EA]">
      {/* 1. Full-Bleed Hero Image with design name and style tag overlaid bottom-left */}
      <section className="relative w-full h-[75vh] sm:h-[85vh] bg-[#0D0E10] overflow-hidden">
        <Image
          src={design.image}
          alt={design.name}
          fill
          priority
          sizes="100vw"
          className="object-cover film-grade"
        />

        {/* Text legibility scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none"
        />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-16 pb-12 sm:pb-16">
            <Eyebrow className="!text-[#A98A56]">
              {design.styleTag}
            </Eyebrow>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F1EA] font-normal tracking-tight mt-2 max-w-3xl">
              {design.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Desktop Sticky Action Rail */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Column */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            {/* The Story Behind This Design */}
            <section className="hairline-b pb-16">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-3">
                Narrative
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
                The Story Behind This Design
              </h2>
              <div className="mt-6 text-base text-[#0D0E10]/80 font-light leading-relaxed space-y-4">
                <p>
                  {design.description ||
                    "An architectural dialogue between natural stone integrity and bespoke tailored millwork, sculpted to elevate daily living into an artful ritual."}
                </p>
              </div>
            </section>

            {/* Material Palette */}
            {design.materialPalette && (
              <section className="hairline-b pb-16">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-3">
                  Tactile Finishes
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10] mb-8">
                  Material Palette
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {design.materialPalette.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 py-3 hairline-b"
                    >
                      <span className="text-xs uppercase tracking-widest text-[#A98A56] font-sans">
                        0{idx + 1}
                      </span>
                      <span className="text-sm text-[#0D0E10] font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Specifications as definition list */}
            {design.specifications && (
              <section className="hairline-b pb-16">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-3">
                  Technical Parameters
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10] mb-8">
                  Specifications
                </h2>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                  {Object.entries(design.specifications).map(([key, val]) => (
                    <div key={key} className="py-3 hairline-b">
                      <dt className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50 mb-1">
                        {key}
                      </dt>
                      <dd className="text-sm text-[#0D0E10] font-light">{val}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            {/* Cost & Timeline Band on --sand */}
            {design.costAndTimeline && (
              <section className="p-8 sm:p-10 bg-[#E4DCCD] rounded-[2px] hairline">
                <h2 className="font-serif text-xl sm:text-2xl text-[#0D0E10] mb-6">
                  Cost & Timeline
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                  <div className="hairline-b sm:hairline-b-0 sm:hairline-r sm:pr-6 pb-4 sm:pb-0">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50 block mb-1">
                      Starting Price
                    </span>
                    <p className="font-serif text-2xl text-[#0D0E10]">
                      {design.costAndTimeline.startingPrice}
                    </p>
                  </div>

                  <div className="hairline-b sm:hairline-b-0 sm:hairline-r sm:pr-6 pb-4 sm:pb-0">
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50 block mb-1">
                      Delivery Window
                    </span>
                    <p className="font-serif text-2xl text-[#0D0E10]">
                      {design.costAndTimeline.timeline}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#0D0E10]/50 block mb-1">
                      Craftsmanship Guarantee
                    </span>
                    <p className="font-serif text-2xl text-[#0D0E10]">
                      {design.costAndTimeline.warranty}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-[11px] text-[#0D0E10]/60 italic">
                  *Price is indicative and may vary based on materials and customization.
                </p>
              </section>
            )}
          </div>

          {/* Sticky Desktop Action Rail / Mobile Bottom Sticky */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 sm:p-8 bg-[#F4F1EA] hairline rounded-[2px] space-y-5">
              <h3 className="font-serif text-xl text-[#0D0E10]">
                Commission This Concept
              </h3>
              <p className="text-xs text-[#0D0E10]/70 font-light leading-relaxed">
                Connect directly with our senior architectural lead to adapt these finishes to your floor plan.
              </p>

              <div className="space-y-3 pt-2">
                <Link
                  href={`/contact?intent=design&ref=${design.slug}`}
                  className="block w-full text-center text-xs uppercase tracking-[0.18em] px-5 py-3.5 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
                >
                  Consult a Designer for This Look
                </Link>

                <Link
                  href={`/contact?intent=quote&service=${design.slug}`}
                  className="block w-full text-center text-xs uppercase tracking-[0.18em] px-5 py-3.5 bg-[#E4DCCD] text-[#0D0E10] hover:bg-[#D6CCBB] transition-colors rounded-[2px]"
                >
                  Get a Quote for This Design
                </Link>

                <a
                  href={siteConfig.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs uppercase tracking-[0.18em] px-5 py-3.5 border border-[#A98A56] text-[#A98A56] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
                >
                  Chat with Us on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* You May Also Like */}
        <section className="mt-24 sm:mt-32 pt-16 hairline-t">
          <div className="pb-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-2">
              Related Inspirations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {fallbackRelated.map((item) => (
              <div key={item.id} className="flex flex-col group">
                <Link href={`/design-ideas/${item.slug}`}>
                  <MediaFrame
                    src={item.image}
                    alt={item.name}
                    aspectRatio="4/5"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </Link>
                <div className="pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-xl text-[#0D0E10] group-hover:text-[#A98A56] transition-colors">
                      <Link href={`/design-ideas/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#A98A56] mt-1">
                      {item.styleTag}
                    </p>
                  </div>
                  <div className="pt-3">
                    <Link
                      href={`/design-ideas/${item.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
