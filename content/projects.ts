export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  type: string;
  location: string;
  designStory: string;
  materials: string[];
  specs: {
    bedrooms?: string;
    bathrooms?: string;
    area: string;
    features: string;
    timeline: string;
  };
  heroImage: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "palm-jumeirah-penthouse",
    slug: "the-palm-jumeirah-penthouse",
    title: "The Palm Jumeirah Penthouse",
    type: "Penthouse",
    location: "Palm Jumeirah, Dubai",
    designStory:
      "Art Deco-inspired penthouse with custom gold-leaf ceilings, bespoke velvet furnishings, and sweeping skyline views. Balances grandeur with intimacy.",
    materials: [
      "Gold Leaf Ceilings",
      "Calacatta Marble",
      "Deep Emerald Velvet",
      "Brushed Brass",
      "Custom Silk Rugs",
    ],
    specs: {
      bedrooms: "4 Bedrooms",
      bathrooms: "5 Bathrooms",
      area: "6,500 sq. ft.",
      features: "Private Terrace with Skyline Views",
      timeline: "120 Days",
    },
    heroImage: "/images/hero1/videoframe_1439.png",
  },
  {
    id: "emirates-hills-villa",
    slug: "the-emirates-hills-villa",
    title: "The Emirates Hills Villa",
    type: "Villa",
    location: "Emirates Hills, Dubai",
    designStory:
      "Grand entertaining villa with double-height living room, custom onyx dining table, and private spa bathroom. Blends indoor and outdoor living with floor-to-ceiling windows.",
    materials: [
      "Onyx",
      "Dark Walnut",
      "Gold-Tinted Glass",
      "Silk Rugs",
      "Natural Stone",
    ],
    specs: {
      bedrooms: "6 Bedrooms",
      bathrooms: "8 Bathrooms",
      area: "12,000 sq. ft.",
      features: "Private Pool and Spa",
      timeline: "180 Days",
    },
    heroImage: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
  },
  {
    id: "downtown-townhouse",
    slug: "the-downtown-townhouse",
    title: "The Downtown Townhouse",
    type: "Townhouse",
    location: "Downtown Dubai",
    designStory:
      "Smart, stylish layouts across three floors with hidden storage and custom joinery. Modern, functional palette of matte gold, light oak, and textured wallpaper.",
    materials: [
      "Matte Gold Fixtures",
      "Light Oak",
      "Textured Wallpaper",
      "Marble Accents",
      "Custom Joinery",
    ],
    specs: {
      bedrooms: "3 Bedrooms",
      bathrooms: "4 Bathrooms",
      area: "4,200 sq. ft.",
      features: "Private Garden",
      timeline: "90 Days",
    },
    heroImage: "/images/hero1/videoframe_7092.png",
  },
];
