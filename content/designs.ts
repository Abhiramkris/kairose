export interface DesignItem {
  id: string;
  slug: string;
  name: string;
  roomType: "Living Room" | "Kitchen" | "Bedroom" | "Wardrobe" | "Dining Room" | "Bathroom" | "Balcony";
  style: "Art Deco" | "Contemporary" | "Classic Glamour" | "Modern Minimal" | "Bohemian" | "Industrial" | "Minimalist";
  styleTag: string;
  popularity: "Trending Now" | "Most Viewed" | "Recently Added";
  image: string;
  description?: string;
  materialPalette?: string[];
  specifications?: Record<string, string>;
  costAndTimeline?: {
    startingPrice: string;
    timeline: string;
    warranty: string;
  };
  relatedSlugs?: string[];
}

export const designsData: DesignItem[] = [
  {
    id: "midnight-marble-kitchen",
    slug: "the-midnight-marble-kitchen",
    name: "The Midnight Marble Kitchen",
    roomType: "Kitchen",
    style: "Art Deco",
    styleTag: "Art Deco / Modern Minimal",
    popularity: "Trending Now",
    image: "/images/designs/midnight-marble-kitchen.jpg",
    description:
      "Inspired by Art Deco glamour, this kitchen is a study in contrasts. Deep midnight blue cabinetry meets dramatic Calacatta marble veining, while brushed brass hardware adds warmth. The custom island serves as both prep space and gathering point. Every detail—from fluted glass doors to gold-lit shelving—makes cooking feel like an occasion.",
    materialPalette: [
      "Calacatta Marble (Countertops and Backsplash)",
      "Midnight Blue Lacquered Cabinets",
      "Brushed Brass Hardware",
      "Fluted Glass Cabinet Doors",
      "Gold-Lit Integrated Shelving",
      "Dark Oak Flooring",
    ],
    specifications: {
      "Style": "Art Deco / Modern Minimal",
      "Room Size": "12 x 10 feet (approx.)",
      "Storage": "Full-height cabinets, deep drawers, pull-out pantry",
      "Appliances": "Integrated oven, induction cooktop, concealed range hood",
      "Special Features": "Gold-lit shelving, fluted glass, soft-close hardware",
    },
    costAndTimeline: {
      startingPrice: "AED 75,000*",
      timeline: "45-Day Delivery",
      warranty: "10-Year Craftsmanship Warranty",
    },
    relatedSlugs: [
      "the-walnut-brass-kitchen",
      "the-chefs-kitchen",
      "the-ivory-dining-room",
    ],
  },
  {
    id: "golden-hour-living-room",
    slug: "the-golden-hour-living-room",
    name: "The Golden Hour Living Room",
    roomType: "Living Room",
    style: "Contemporary",
    styleTag: "Contemporary Luxe",
    popularity: "Trending Now",
    image: "/images/designs/golden-hour-living-room.jpg",
    description: "Bathed in warm amber light, an expansive lounge pairing floor-to-ceiling panoramic glass with custom linen upholstery and travertine accents.",
    materialPalette: ["Honed Travertine", "Brushed Bronze", "Belgian Linen", "Smoked Oak"],
    specifications: {
      "Style": "Contemporary Luxe",
      "Ceiling Height": "3.8m",
      "Features": "Architectural recessed coving, concealed motorized sheer drapery",
    },
    costAndTimeline: {
      startingPrice: "AED 120,000*",
      timeline: "45-Day Delivery",
      warranty: "10-Year Craftsmanship Warranty",
    },
    relatedSlugs: ["the-brass-velvet-lounge", "the-gold-leaf-ceiling-living-room"],
  },
  {
    id: "emerald-suite-bedroom",
    slug: "the-emerald-suite-bedroom",
    name: "The Emerald Suite Bedroom",
    roomType: "Bedroom",
    style: "Classic Glamour",
    styleTag: "Classic Glamour",
    popularity: "Trending Now",
    image: "/images/designs/emerald-suite-bedroom.jpg",
    description: "An intimate sanctuary draped in deep emerald velvet with hand-crafted walnut panelling and soft, indirect perimeter lighting.",
    materialPalette: ["Deep Emerald Velvet", "American Walnut", "Brushed Brass", "Hand-Tufted Wool"],
    specifications: {
      "Style": "Classic Glamour",
      "Acoustics": "Padded wall panels with sound insulation",
      "Lighting": "Multi-tier low-glare scene controllers",
    },
    costAndTimeline: {
      startingPrice: "AED 95,000*",
      timeline: "45-Day Delivery",
      warranty: "10-Year Craftsmanship Warranty",
    },
    relatedSlugs: ["the-silk-sapphire-bedroom", "the-onyx-wardrobe"],
  },
  {
    id: "onyx-wardrobe",
    slug: "the-onyx-wardrobe",
    name: "The Onyx Wardrobe",
    roomType: "Wardrobe",
    style: "Modern Minimal",
    styleTag: "Modern Minimal",
    popularity: "Most Viewed",
    image: "/images/designs/onyx-wardrobe.jpg",
  },
  {
    id: "ivory-dining-room",
    slug: "the-ivory-dining-room",
    name: "The Ivory Dining Room",
    roomType: "Dining Room",
    style: "Art Deco",
    styleTag: "Art Deco",
    popularity: "Most Viewed",
    image: "/images/designs/ivory-dining-room.jpg",
  },
  {
    id: "brass-velvet-lounge",
    slug: "the-brass-velvet-lounge",
    name: "The Brass & Velvet Lounge",
    roomType: "Living Room",
    style: "Contemporary",
    styleTag: "Contemporary Luxe",
    popularity: "Trending Now",
    image: "/images/designs/brass-velvet-lounge.jpg",
  },
  {
    id: "marble-master-bath",
    slug: "the-marble-master-bath",
    name: "The Marble Master Bath",
    roomType: "Bathroom",
    style: "Classic Glamour",
    styleTag: "Classic Glamour",
    popularity: "Recently Added",
    image: "/images/designs/marble-master-bath.jpg",
  },
  {
    id: "gold-leaf-ceiling-living-room",
    slug: "the-gold-leaf-ceiling-living-room",
    name: "The Gold Leaf Ceiling Living Room",
    roomType: "Living Room",
    style: "Art Deco",
    styleTag: "Art Deco",
    popularity: "Most Viewed",
    image: "/images/designs/gold-leaf-ceiling-living-room.jpg",
  },
  {
    id: "walnut-brass-kitchen",
    slug: "the-walnut-brass-kitchen",
    name: "The Walnut & Brass Kitchen",
    roomType: "Kitchen",
    style: "Modern Minimal",
    styleTag: "Modern Minimal",
    popularity: "Recently Added",
    image: "/images/designs/walnut-brass-kitchen.jpg",
  },
  {
    id: "silk-sapphire-bedroom",
    slug: "the-silk-sapphire-bedroom",
    name: "The Silk & Sapphire Bedroom",
    roomType: "Bedroom",
    style: "Classic Glamour",
    styleTag: "Classic Glamour",
    popularity: "Recently Added",
    image: "/images/designs/silk-sapphire-bedroom.jpg",
  },
  {
    id: "terrace-oasis",
    slug: "the-terrace-oasis",
    name: "The Terrace Oasis",
    roomType: "Balcony",
    style: "Bohemian",
    styleTag: "Bohemian",
    popularity: "Most Viewed",
    image: "/images/designs/terrace-oasis.jpg",
  },
  {
    id: "sculptural-staircase",
    slug: "the-sculptural-staircase",
    name: "The Sculptural Staircase",
    roomType: "Living Room",
    style: "Contemporary",
    styleTag: "Contemporary Luxe",
    popularity: "Recently Added",
    image: "/images/designs/sculptural-staircase.jpg",
  },
  {
    id: "reading-nook",
    slug: "the-reading-nook",
    name: "The Reading Nook",
    roomType: "Living Room",
    style: "Minimalist",
    styleTag: "Minimalist",
    popularity: "Recently Added",
    image: "/images/designs/reading-nook.jpg",
  },
  {
    id: "grand-foyer",
    slug: "the-grand-foyer",
    name: "The Grand Foyer",
    roomType: "Living Room",
    style: "Art Deco",
    styleTag: "Art Deco",
    popularity: "Most Viewed",
    image: "/images/designs/grand-foyer.jpg",
  },
  {
    id: "chefs-kitchen",
    slug: "the-chefs-kitchen",
    name: "The Chef’s Kitchen",
    roomType: "Kitchen",
    style: "Industrial",
    styleTag: "Industrial",
    popularity: "Recently Added",
    image: "/images/designs/chefs-kitchen.jpg",
  },
];
