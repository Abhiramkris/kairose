export interface JournalArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  oneLiner: string;
  readTime: string;
  publishedAt: string;
  image: string;
  content: string[];
}

export const featuredArticle: JournalArticle = {
  id: "styles-2025",
  slug: "8-interior-design-styles-that-will-define-2025",
  category: "Design Trends",
  title: "8 Interior Design Styles That Will Define 2025",
  oneLiner: "From Bohemian to Art Deco, discover the styles shaping luxury interiors this year.",
  readTime: "6 min read",
  publishedAt: "2025-01-15",
  image: "/images/journal/styles-2025.jpg",
  content: [
    "Luxury interior design in Dubai has reached an inflection point where superficial spectacle gives way to material integrity and bespoke craftsmanship. In 2025, our clients seek spaces that resonate on an emotional level—architectural sanctuaries that balance commanding skyline views with quiet tactile intimacy.",
    "From rich Art Deco geometry celebrated through Calacatta marble and hand-brushed brass to the understated elegance of modern minimalism, the styles defining this year prioritize authentic permanence over transient trends.",
    "Key movements include Bohemian warmth with natural woven textures, tailored Italian joinery with integrated low-glare illumination, and monolithic stone centerpieces that ground grand double-height living spaces.",
    "The guiding principle remains clear: an enduring home is crafted not by accumulating ornamentation, but by executing every joint, reveal, and hairline detail with uncompromising mastery.",
  ],
};

export const journalArticles: JournalArticle[] = [
  {
    id: "marble-guide",
    slug: "the-ultimate-guide-to-marble-types-finishes-and-care",
    category: "Material Guide",
    title: "The Ultimate Guide to Marble: Types, Finishes, and Care",
    oneLiner: "An in-depth exploration of Calacatta, Statuario, and honed finishes for discerning residences.",
    readTime: "5 min read",
    publishedAt: "2025-01-28",
    image: "/images/journal/marble-guide.jpg",
    content: [
      "Natural stone is the tactile soul of the luxury residence. Understanding the nuances between Calacatta veining and Nero Marquina depth allows homeowners to choose finishes that mature with grace.",
      "Honed surfaces offer a velvety, tactile warmth that diffuses harsh desert sunlight, while polished slabs provide monumental drama in grand entry foyers and master bathrooms.",
    ],
  },
  {
    id: "penthouse-spotlight",
    slug: "inside-the-palm-jumeirah-penthouse-a-design-story",
    category: "Project Spotlight",
    title: "Inside the Palm Jumeirah Penthouse: A Design Story",
    oneLiner: "Balancing Art Deco grandeur with intimate domestic warmth overlooking the Arabian Gulf.",
    readTime: "7 min read",
    publishedAt: "2025-02-04",
    image: "/images/journal/penthouse-spotlight.jpg",
    content: [
      "Perched high above the Palm Jumeirah crescent, this 6,500 sq. ft. residence presented a singular architectural challenge: how to frame panoramic vistas while retaining sanctuary-like intimacy.",
      "By contrasting gold-leaf architectural ceilings with deep emerald velvet upholstery, our design team established a grounded, luxurious rhythm throughout.",
    ],
  },
  {
    id: "bespoke-kitchen-rise",
    slug: "the-rise-of-the-bespoke-kitchen-why-custom-is-the-new-standard",
    category: "Trends",
    title: "The Rise of the Bespoke Kitchen: Why Custom is the New Standard",
    oneLiner: "How fluted glass, concealed appliances, and architectural islands redefined culinary spaces.",
    readTime: "4 min read",
    publishedAt: "2025-02-12",
    image: "/images/journal/bespoke-kitchen.jpg",
    content: [
      "The kitchen has evolved beyond utility into the primary architectural hearth of the modern residence. Pre-fabricated cabinetry cannot accommodate the tailored joinery required for luxury entertaining.",
      "Our bespoke approach integrates gold-lit fluted glass storage with monolithic marble islands that serve as both culinary prep stations and elegant social hubs.",
    ],
  },
  {
    id: "designer-questions",
    slug: "10-questions-to-ask-your-interior-designer-before-you-hire-them",
    category: "Tips & Advice",
    title: "10 Questions to Ask Your Interior Designer Before You Hire Them",
    oneLiner: "Essential guidance for navigating white-glove turnkey interior commissions in the UAE.",
    readTime: "6 min read",
    publishedAt: "2025-02-19",
    image: "/images/journal/designer-questions.jpg",
    content: [
      "Commissioning an interior design studio is an intimate partnership. Prior to signing agreements, prospective clients must understand turnkey oversight, procurement timelines, and craftsmanship warranties.",
      "This practical checklist arms you with the critical inquiries needed to ensure flawless delivery from vision to reveal.",
    ],
  },
];
