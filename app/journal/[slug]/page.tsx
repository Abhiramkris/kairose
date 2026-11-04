import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { featuredArticle, journalArticles } from "@/content/journal";
import { generateArticleSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const allArticles = [featuredArticle, ...journalArticles];

export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Journal Article" };
  return {
    title: `${article.title} | The KaiRose Journal`,
    description: article.oneLiner,
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const jsonLd = generateArticleSchema({
    title: article.title,
    description: article.oneLiner,
    publishedAt: article.publishedAt,
    slug: article.slug,
    category: article.category,
  });

  return (
    <article className="py-16 sm:py-24 bg-[#F4F1EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Article Header */}
        <div className="max-w-3xl mx-auto pb-12 hairline-b">
          <Eyebrow>{article.category}</Eyebrow>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#0D0E10] tracking-tight mt-2 leading-[1.15]">
            {article.title}
          </h1>

          <div className="mt-6 flex items-center gap-6 text-xs uppercase tracking-[0.16em] text-[#0D0E10]/50">
            <span>By KaiRose Editorial</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.publishedAt}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-4xl mx-auto my-12 relative aspect-[16/9] w-full overflow-hidden bg-[#E4DCCD] rounded-[2px]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover film-grade"
          />
        </div>

        {/* Real Written Prose Column (max 68ch) */}
        <div className="max-w-[68ch] mx-auto space-y-6 text-base sm:text-lg text-[#0D0E10]/85 font-light leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="pt-12 mt-12 hairline-t">
            <h3 className="font-serif text-2xl text-[#0D0E10] mb-4">
              Bring This Vision Into Your Residence
            </h3>
            <p className="text-sm text-[#0D0E10]/75 font-light">
              KaiRose collaborates with private homeowners and family offices across Dubai to realize enduring, museum-grade architectural interiors.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center text-xs uppercase tracking-[0.18em] px-6 py-3.5 bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] transition-colors rounded-[2px]"
              >
                Book a Private Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Subscription Band */}
        <div className="max-w-4xl mx-auto mt-20 p-8 sm:p-12 bg-[#E4DCCD] rounded-[2px] hairline flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#0D0E10]">
              Subscribe to The KaiRose Journal
            </h3>
            <p className="text-xs text-[#0D0E10]/70 font-light mt-1">
              Curated perspectives on Dubai interior architecture delivered monthly.
            </p>
          </div>
          <SubscribeForm />
        </div>
      </div>
    </article>
  );
}
