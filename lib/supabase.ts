import { createClient } from "@supabase/supabase-js";

// Optional environment variables for Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// ==========================================
// Types
// ==========================================

export interface HeroData {
  brandTitle: string;
  brandTagline: string;
  headline: string;
  description: string;
  ctaText: string;
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  accentBadge?: string;
}

export interface DesignProject {
  id: string;
  title: string;
  category: "Living" | "Kitchen" | "Bedroom" | "Wardrobe" | "Dining";
  description: string;
  imageUrl: string;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  quote: string;
  videoThumbnail: string;
  videoUrl?: string;
  ctaText: string;
}

export interface ApproachStep {
  stepNumber: string;
  title: string;
  subtitle?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// ==========================================
// Default Curated Luxury Assets & Content (Dubai)
// ==========================================

export const defaultHeroData: HeroData = {
  brandTitle: "KAIROSE",
  brandTagline: "INTERIOR DESIGN STUDIO FOR TIMELESS SPACES",
  headline: "Redefining Luxury Interiors.",
  description:
    "Bespoke spaces shaped around your lifestyle, bringing together considered materials, purposeful details and timeless design.",
  ctaText: "Book A Consultation",
  images: [
    {
      url: "/images/hero1/videoframe_1439.png",
      alt: "KaiRose Dubai royal dining salon with arched windows and white peacock centerpiece",
    },
    {
      url: "/images/hero1/videoframe_7092.png",
      alt: "KaiRose Dubai Mediterranean stone villa salon with monumental carved fireplace",
    },
    {
      url: "/images/hero1/videoframe_10439.png",
      alt: "KaiRose Dubai avant-garde salon with sculpted hot-pink club armchairs",
    },
  ],
};

export const defaultServices: ServiceItem[] = [
  {
    id: "space-planning-1",
    title: "SPACE PLANNING",
    category: "Architecture",
    description:
      "Harmonizing human flow, natural daylight, and spatial volume across prime Dubai villas and penthouses.",
    imageUrl: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    accentBadge: "Master Spatial Layout",
  },
  {
    id: "interior-design-1",
    title: "INTERIOR DESIGN",
    category: "Turnkey Design",
    description:
      "Bespoke residential sanctuaries balancing tactile Italian textiles, monolithic stonework, and subtle Arabesque nuances.",
    imageUrl: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    accentBadge: "Full Concept to Handover",
  },
  {
    id: "light-design-1",
    title: "LIGHT DESIGN",
    category: "Atmospheric Illumination",
    description:
      "Architectural circadian lighting schemes calibrated to Dubai's golden sunsets and intimate evening entertaining.",
    imageUrl: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    accentBadge: "Custom Fixtures & Ambiance",
  },
  {
    id: "interior-design-2",
    title: "INTERIOR DESIGN",
    category: "Custom Joinery",
    description:
      "Tailored millwork, handcrafted fluted walnut paneling, and concealed acoustic integration.",
    imageUrl: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    accentBadge: "Artisanal Millwork",
  },
  {
    id: "light-design-2",
    title: "LIGHT DESIGN",
    category: "Sculptural Lighting",
    description:
      "Statement handblown crystal and burnished bronze chandeliers curated from European ateliers.",
    imageUrl: "/images/hero1/videoframe_7377.png",
    accentBadge: "Signature Illuminations",
  },
  {
    id: "space-planning-2",
    title: "SPACE PLANNING",
    category: "Indoor-Outdoor Flow",
    description:
      "Seamless transitions from interior lounges to terrace majlis and private infinity poolscapes.",
    imageUrl: "/images/hero1/videoframe_1439.png",
    accentBadge: "Terrace & Majlis Flow",
  },
];

export const defaultPopularDesigns: DesignProject[] = [
  {
    id: "palazzo-tuscan-hearth",
    title: "Palazzo Tuscan Hearth",
    category: "Living",
    description:
      "Tuscan-inspired stone villa salon framed with a monumental carved fireplace, exposed timber beams, and bespoke velvet seating.",
    imageUrl: "/images/hero1/videoframe_7092.png",
    ctaText: "Make it Yours",
  },
  {
    id: "cathedral-arched-villa",
    title: "Cathedral Arched Villa",
    category: "Living",
    description:
      "Double-height living pavilion with soaring timber trusses, expansive arched fenestration, and organic linen banquettes.",
    imageUrl: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    ctaText: "Make it Yours",
  },
  {
    id: "haute-couture-master-suite",
    title: "Haute Couture Master Suite",
    category: "Bedroom",
    description:
      "Sanctuary master suite detailed with a custom geometric arched headboard, ceramic bead pendant drops, and tactile sage limewash walls.",
    imageUrl: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    ctaText: "Make it Yours",
  },
  {
    id: "royal-peacock-pavilion",
    title: "The Royal Peacock Pavilion",
    category: "Dining",
    description:
      "Regal grand dining room centered beneath an oval marble table, sculptural candles, arched garden windows, and a heritage fireplace.",
    imageUrl: "/images/hero1/videoframe_1439.png",
    ctaText: "Make it Yours",
  },
  {
    id: "rose-terrazzo-vanity-suite",
    title: "Rose Terrazzo Vanity Suite",
    category: "Wardrobe",
    description:
      "Haute couture dressing suite and master vanity featuring fluted brass handles, rose terrazzo slabs, and glowing bubble sconces.",
    imageUrl: "/images/hero1/videoframe_7377.png",
    ctaText: "Make it Yours",
  },
  {
    id: "botanical-halo-dining-room",
    title: "Botanical Halo Dining Room",
    category: "Dining",
    description:
      "Maximalist dining hall wrapped in midnight floral tapestries, centered beneath an architectural brass halo chandelier.",
    imageUrl: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    ctaText: "Make it Yours",
  },
  {
    id: "emerald-heritage-salon",
    title: "Emerald Heritage Salon",
    category: "Living",
    description:
      "Moody heritage green lounge integrating glazed ceramic tile hearth, bespoke floral upholstery, and warm brass accents.",
    imageUrl: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    ctaText: "Make it Yours",
  },
  {
    id: "vermilion-eclectic-lounge",
    title: "Vermilion Eclectic Lounge",
    category: "Kitchen",
    description:
      "Curated social entertaining lounge and culinary salon featuring sculptural vermilion sofas and bespoke architectural joinery.",
    imageUrl: "/images/hero1/f1a74ff5f63d778540a9cd1b119ac792acb512e6-5400x3877.avif",
    ctaText: "Make it Yours",
  },
  {
    id: "avant-garde-pop-salon",
    title: "Avant-Garde Pop Salon",
    category: "Living",
    description:
      "High-fashion private salon with sculptural hot pink armchairs, chartreuse fireplace mantel, and bespoke lighting.",
    imageUrl: "/images/hero1/videoframe_10439.png",
    ctaText: "Make it Yours",
  },
];

export const defaultTestimonial: TestimonialItem = {
  id: "dr-ajith-kumar",
  clientName: "Dr. Ajith Kumar",
  clientRole: "-HomeOwner Dubai",
  quote:
    "KaiRose transformed our villa into a masterpiece. The attention to detail was beyond anything we imagined. They finished ahead of schedule",
  videoThumbnail: "/images/hero1/videoframe_7092.png",
  ctaText: "Begin Your Journey",
};

export const defaultApproachSteps: ApproachStep[] = [
  {
    stepNumber: "1.",
    title: "Private Consultation",
    subtitle: "In-depth spatial and lifestyle curation",
  },
  {
    stepNumber: "2.",
    title: "Design Curation",
    subtitle: "Tactile material selection and 3D architectural renders",
  },
  {
    stepNumber: "3.",
    title: "Premium Execution",
    subtitle: "Turnkey fit-out with dedicated engineering supervision",
  },
  {
    stepNumber: "4.",
    title: "The Reveal",
    subtitle: "White-glove handover of your bespoke sanctuary",
  },
];

export const defaultFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What services are included?",
    answer:
      "KaiRose delivers end-to-end luxury architectural interior design: initial conceptualization, 3D photorealistic renderings, Dubai Municipality / master developer NOC permits, turnkey fit-out execution, custom Italian joinery, and full white-glove styling.",
  },
  {
    id: "faq-2",
    question: "What are the timelines?",
    answer:
      "Turnkey villa renovations and penthouse fit-outs typically span between 8 to 16 weeks depending on structural modifications, permit approvals, and bespoke furniture procurement.",
  },
  {
    id: "faq-3",
    question: "How does the pricing and consultation work?",
    answer:
      "We provide a transparent milestone-based structure tailored to your property’s square footage and finishes. Our initial consultation outlines project scope, preliminary budgeting, and timeline guarantees.",
  },
  {
    id: "faq-4",
    question: "Do you handle Dubai Municipality and developer NOC approvals?",
    answer:
      "Yes. Our engineering division manages 100% of regulatory approvals, including Dubai Municipality, Civil Defense, and developer NOCs (Emaar, Nakheel, Dubai Holding, Meraas).",
  },
];

// ==========================================
// Safe Fetch Helpers (Supabase with Fallback)
// ==========================================

export async function getHeroContent(): Promise<HeroData> {
  if (!supabase) return defaultHeroData;
  try {
    const { data, error } = await supabase
      .from("homepage_hero")
      .select("*")
      .single();
    if (error || !data) return defaultHeroData;
    return {
      brandTitle: data.brand_title || defaultHeroData.brandTitle,
      brandTagline: data.brand_tagline || defaultHeroData.brandTagline,
      headline: data.headline || defaultHeroData.headline,
      description: data.description || defaultHeroData.description,
      ctaText: data.cta_text || defaultHeroData.ctaText,
      images: Array.isArray(data.images) && data.images.length > 0 ? data.images : defaultHeroData.images,
    };
  } catch {
    return defaultHeroData;
  }
}

export async function getServices(): Promise<ServiceItem[]> {
  if (!supabase) return defaultServices;
  try {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return defaultServices;
    return data.map((item) => ({
      id: item.id || item.slug,
      title: item.title,
      category: item.category || "Interior",
      description: item.description,
      imageUrl: item.image_url || defaultServices[0].imageUrl,
      accentBadge: item.badge,
    }));
  } catch {
    return defaultServices;
  }
}

export async function getPopularDesigns(category?: string): Promise<DesignProject[]> {
  if (!supabase) {
    if (!category || category === "All") return defaultPopularDesigns;
    return defaultPopularDesigns.filter((item) => item.category === category);
  }
  try {
    let query = supabase.from("popular_designs").select("*").order("sort_order", { ascending: true });
    if (category && category !== "All") {
      query = query.eq("category", category);
    }
    const { data, error } = await query;
    if (error || !data || data.length === 0) {
      if (!category || category === "All") return defaultPopularDesigns;
      return defaultPopularDesigns.filter((item) => item.category === category);
    }
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      description: item.description,
      imageUrl: item.image_url,
      ctaText: item.cta_text || "Make it Yours",
    }));
  } catch {
    if (!category || category === "All") return defaultPopularDesigns;
    return defaultPopularDesigns.filter((item) => item.category === category);
  }
}

export async function getTestimonial(): Promise<TestimonialItem> {
  if (!supabase) return defaultTestimonial;
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .limit(1)
      .single();
    if (error || !data) return defaultTestimonial;
    return {
      id: data.id,
      clientName: data.client_name || defaultTestimonial.clientName,
      clientRole: data.client_role || defaultTestimonial.clientRole,
      quote: data.quote || defaultTestimonial.quote,
      videoThumbnail: data.video_thumbnail || defaultTestimonial.videoThumbnail,
      videoUrl: data.video_url,
      ctaText: data.cta_text || defaultTestimonial.ctaText,
    };
  } catch {
    return defaultTestimonial;
  }
}

export async function getFaqs(): Promise<FaqItem[]> {
  if (!supabase) return defaultFaqs;
  try {
    const { data, error } = await supabase
      .from("faqs")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error || !data || data.length === 0) return defaultFaqs;
    return data.map((item) => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
    }));
  } catch {
    return defaultFaqs;
  }
}
