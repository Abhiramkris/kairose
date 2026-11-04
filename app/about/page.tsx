import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "About KaiRose | Crafting Sanctuaries Since Day One",
  description:
    "KaiRose blends Hawaiian Kai (sea) and Rose (elegance). Discover our philosophy of bespoke craftsmanship, Italian marble, and white-glove turnkey delivery.",
};

const values = [
  {
    title: "Craftsmanship",
    desc: "Every joint, finish, and detail executed with precision and care.",
  },
  {
    title: "Bespoke Service",
    desc: "No templates. Every design created from scratch for your unique needs.",
  },
  {
    title: "White-Glove Experience",
    desc: "We handle everything with discretion and professionalism.",
  },
  {
    title: "Timeless Design",
    desc: "Interiors designed for longevity, not just trends.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Studio Heritage</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            About KaiRose. Crafting Sanctuaries Since Day One.
          </h1>
        </div>

        {/* Our Story */}
        <section className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center hairline-b">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block">
              Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10]">
              Our Story
            </h2>
            <div className="space-y-4 text-base text-[#0D0E10]/80 font-light leading-relaxed">
              <p>
                KaiRose was founded on a simple belief: your home should be your sanctuary. We are designers, craftsmen, and project managers passionate about creating spaces that are beautiful and deeply personal.
              </p>
              <p>
                From first consultation to final reveal, we deliver an exceptional experience built on craftsmanship, premium materials, and listening to our clients.
              </p>
              <p>
                Our name blends “Kai” (sea in Hawaiian) and “Rose” (beauty and elegance)—fluid and adaptable, yet timeless and elegant.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px]">
            <Image
              src="/images/about/studio-materials.jpg"
              alt="KaiRose design studio desk with tactile material samples"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover film-grade"
            />
          </div>
        </section>

        {/* What We Stand For (Hairline-separated list, NOT cards) */}
        <section className="py-16 sm:py-24 hairline-b">
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-2">
            Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] mb-12">
            What We Stand For
          </h2>

          <div className="divide-y divide-[#D6CCBB]">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
              >
                <div className="md:col-span-2 text-xs uppercase tracking-[0.2em] text-[#A98A56]">
                  0{i + 1}
                </div>
                <div className="md:col-span-4 font-serif text-xl sm:text-2xl text-[#0D0E10]">
                  {v.title}
                </div>
                <div className="md:col-span-6 text-sm sm:text-base text-[#0D0E10]/75 font-light">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Minds Behind KaiRose */}
        <section className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center hairline-b">
          <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px] lg:order-1">
            <Image
              src="/images/about/architect-drawing.jpg"
              alt="Architectural studio detailing drawings and material boards"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover film-grade"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block">
              The Collective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10]">
              The Minds Behind KaiRose
            </h2>
            <p className="text-base text-[#0D0E10]/80 font-light leading-relaxed">
              Our team of award-winning designers, skilled craftsmen, and experienced project managers brings experience from Dubai, London, and Milan. We are united by a passion for beautiful, functional spaces that enhance our clients’ lives.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 py-16 px-8 sm:px-12 bg-[#0D0E10] text-[#F4F1EA] rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F4F1EA]">
              Let’s Create Something Beautiful Together.
            </h2>
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
