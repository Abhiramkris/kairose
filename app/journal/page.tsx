import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { featuredArticle, journalArticles } from "@/content/journal";

export const metadata: Metadata = {
  title: "The KaiRose Journal | Insights, Trends, and Inspiration",
  description:
    "Explore our latest articles on luxury design, architectural stone, bespoke joinery, and the art of living well in Dubai.",
};

export default function JournalPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 hairline-b">
          <Eyebrow>Publication</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0D0E10] tracking-tight mt-2">
            The KaiRose Journal. Insights, Trends, and Inspiration.
          </h1>
          <p className="mt-4 text-base text-[#0D0E10]/75 max-w-xl font-light">
            Explore our latest articles on luxury design, trends, and the art of living well.
          </p>
        </div>

        {/* Featured Article: Large 3:2 image, category eyebrow */}
        <section className="py-16 hairline-b">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative aspect-[3/2] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px]">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover film-grade transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#A98A56] font-medium">
                {featuredArticle.category}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#0D0E10] mt-3">
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="hover:text-[#A98A56] transition-colors"
                >
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="mt-4 text-base text-[#0D0E10]/80 font-light leading-relaxed">
                {featuredArticle.oneLiner}
              </p>

              <div className="mt-8">
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#A98A56] hover:text-[#927546] transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Article Grid */}
        <section className="py-16">
          <div className="pb-8">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#A98A56] font-medium block mb-2">
              Recent Dispatches
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              Article Grid
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {journalArticles.map((article) => (
              <article key={article.id} className="flex flex-col group">
                <Link href={`/journal/${article.slug}`}>
                  <MediaFrame
                    src={article.image}
                    alt={article.title}
                    aspectRatio="3/2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </Link>

                <div className="pt-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#A98A56] block mb-1">
                      {article.category}
                    </span>
                    <h3 className="font-serif text-lg text-[#0D0E10] group-hover:text-[#A98A56] transition-colors">
                      <Link href={`/journal/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-xs text-[#0D0E10]/70 font-light leading-relaxed line-clamp-3">
                      {article.oneLiner}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#0D0E10] hover:text-[#A98A56] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Subscribe to the KaiRose Journal Band */}
        <section className="mt-16 py-16 px-8 sm:px-12 bg-[#E4DCCD] rounded-[2px] hairline flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0D0E10]">
              Subscribe to the KaiRose Journal
            </h2>
            <p className="mt-2 text-sm text-[#0D0E10]/75 font-light">
              Get the latest design trends and insights delivered to your inbox.
            </p>
          </div>

          <SubscribeForm />
        </section>
      </div>
    </div>
  );
}
