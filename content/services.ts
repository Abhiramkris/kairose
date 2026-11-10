/**
 * KaiRose Dubai - Dedicated Luxury Services Data
 */

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  headline: string;
  description: string;
  longDescription: string[];
  heroImage: string;
  heroAlt: string;
  gallery: {
    url: string;
    alt: string;
    caption: string;
  }[];
  deliverables: {
    title: string;
    description: string;
  }[];
  methodology: {
    step: string;
    phase: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "space-planning": {
    slug: "space-planning",
    title: "Space Planning & Spatial Architecture",
    shortTitle: "Space Planning",
    category: "Architecture & Structural Flow",
    tagline: "Harmonizing human flow, natural daylight, and volumetric balance across prime Dubai residences.",
    headline: "Mastering Spatial Harmony & Volumetric Architecture.",
    description:
      "Precision spatial programming and structural feasibility tailored for prime villas in Palm Jumeirah, Emirates Hills, and Jumeirah Bay Island.",
    longDescription: [
      "Every extraordinary interior begins with impeccable spatial discipline. At KaiRose, our space planning practice deconstructs conventional room boundaries to uncover latent volumetric potential, intuitive circulation dynamics, and sightline symphonies.",
      "We analyze sun angles, seasonal solar paths across Dubai, and private family lifestyle patterns to calibrate open entertaining expanses against secluded sanctuaries. Through structural wall reconfigurations, ceiling height maximizations, and MEP integration, we lay the definitive architectural foundation.",
    ],
    heroImage: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    heroAlt: "KaiRose Dubai bespoke architectural space planning and residential interior design",
    gallery: [
      {
        url: "/images/hero1/videoframe_1439.png",
        alt: "KaiRose Dubai spatial layout and grand dining hall architecture",
        caption: "Palm Jumeirah Villa • Symmetrical Dining Expanses & Daylit Portals",
      },
      {
        url: "/images/hero1/videoframe_7092.png",
        alt: "KaiRose Dubai Mediterranean stone villa salon with monumental carved fireplace",
        caption: "Emirates Hills Residence • Double-Height Hearth & Circulation Axis",
      },
      {
        url: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
        alt: "KaiRose Dubai luxury master bedroom sanctuary with curved velvet headboard",
        caption: "Dubai Hills Mansion • Private Master Suite Spatial Zoning",
      },
    ],
    deliverables: [
      {
        title: "Volumetric 3D Spatial Modeling",
        description:
          "Millimeter-accurate virtual walkthroughs exploring spatial volume, ceiling heights, and furniture proportion balance before structural work commences.",
      },
      {
        title: "Circulation Flow & Human Dynamics",
        description:
          "Zoning private family quarters from high-society entertaining salons with intuitive transition vestibules and discreet service corridors.",
      },
      {
        title: "Daylight & Solar Orientation Mapping",
        description:
          "Calibrating window apertures, architectural screens, and shading devices against Dubai's intense solar path to optimize natural golden-hour luminescence.",
      },
      {
        title: "Structural Demolition & MEP Schematics",
        description:
          "Engineering coordination for load-bearing partitions, concealed HVAC ducting, acoustic decoupling, and structural slab recessed details.",
      },
    ],
    methodology: [
      {
        step: "01",
        phase: "Spatial Audit & Lifestyle Profiling",
        description: "On-site 3D LiDAR laser scanning, structural verification, and in-depth interview to map your family's daily rhythms.",
      },
      {
        step: "02",
        phase: "Volumetric Zoning & Circulation Blueprints",
        description: "Formulating initial 2D layout iterations and 3D wireframe volume studies optimizing flow, vistas, and daylight.",
      },
      {
        step: "03",
        phase: "Structural & MEP Feasibility Coordination",
        description: "Liaising with structural engineers, MEP consultants, and Dubai development authorities (Trakhees, DDA, Nakheel).",
      },
      {
        step: "04",
        phase: "Full Construction Technical Package",
        description: "Detailed dimensioned architectural floor plans, reflected ceiling plans, door schedules, and flooring transitions.",
      },
      {
        step: "05",
        phase: "Site Supervision & Setout Verification",
        description: "Rigorous physical site setout inspections ensuring wall framing conforms precisely to the approved millimeter grid.",
      },
    ],
    specifications: [
      { label: "Typical Scope", value: "Private Villas, Penthouses & Palatial Estates (5,000 to 35,000 sq.ft)" },
      { label: "Deliverables Format", value: "BIM / AutoCAD / 4K Photorealistic Renders & VR Walkthroughs" },
      { label: "Regulatory Approvals", value: "Dubai Municipality, Nakheel, Emaar, DDA & Trakhees Coordination" },
      { label: "Timeline", value: "3 to 6 Weeks from Initial Site Laser Scan" },
    ],
  },

  "interior-design": {
    slug: "interior-design",
    title: "Turnkey Luxury Interior Design",
    shortTitle: "Interior Design",
    category: "Bespoke Residential Sanctuaries",
    tagline: "Bespoke residential sanctuaries balancing tactile Italian textiles, monolithic stonework, and subtle Arabesque nuances.",
    headline: "Bespoke Residential Sanctuaries of Timeless Grandeur.",
    description:
      "Complete turnkey interior architecture from aesthetic concept to custom millwork fabrication and white-glove private handover.",
    longDescription: [
      "Interior design at KaiRose is an intimate dialogue between architectural structure, tactile materiality, and personal identity. We transcend ephemeral fashion cycles, instead creating timeless living atmospheres characterized by quiet authority, monolithic natural stone, and bespoke joinery.",
      "Working closely with venerable ateliers across Italy, France, and Dubai, our team designs custom millwork, sources rare marble slabs directly from Carrara and Antolini quarries, and curates bespoke furniture pieces that stand as functional works of contemporary sculpture.",
    ],
    heroImage: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    heroAlt: "KaiRose Dubai luxury interior design salon with custom joinery and curated furnishings",
    gallery: [
      {
        url: "/images/hero1/videoframe_10439.png",
        alt: "KaiRose Dubai avant-garde salon with sculpted hot-pink club armchairs",
        caption: "Downtown Penthouse • Sculptural Seating & Curated Contemporary Art",
      },
      {
        url: "/images/hero1/videoframe_7377.png",
        alt: "KaiRose Dubai rose terrazzo double vanity master bath with glowing spherical sconces",
        caption: "Jumeirah Bay Villa • Artisanal Rose Terrazzo & Fluted Brass Joinery",
      },
      {
        url: "/images/hero1/f1a74ff5f63d778540a9cd1b119ac792acb512e6-5400x3877.avif",
        alt: "KaiRose Dubai eclectic vermilion salon with sculptural furnishings",
        caption: "Palm Jumeirah Villa • Vermilion Curving Banquettes & Curated Living",
      },
    ],
    deliverables: [
      {
        title: "Bespoke Material & Finishes Palette",
        description:
          "Curated tactile narratives featuring bookmatched Calacatta marbles, brushed brass trims, hand-troweled Venetian plasters, and French oak parquetry.",
      },
      {
        title: "Artisanal Millwork & Custom Joinery",
        description:
          "Bespoke wardrobes, hidden door systems, custom entertainment consoles, and architectural wall paneling crafted in our dedicated Dubai joinery facility.",
      },
      {
        title: "Exclusive European FF&E Procurement",
        description:
          "Direct procurement and custom commission from premier European design houses including Minotti, Poliform, B&B Italia, and Baxter.",
      },
      {
        title: "Turnkey Project Management & Installation",
        description:
          "End-to-end fit-out supervision, white-glove installation, acoustic dampening, custom drapery dressing, and final atmospheric styling.",
      },
    ],
    methodology: [
      {
        step: "01",
        phase: "Aesthetic Vision & Tactile Material Discovery",
        description: "Exploration of lifestyle desires, moodboard curations, tactile material trays, and design narrative alignment.",
      },
      {
        step: "02",
        phase: "Concept Design & 4K Photorealistic Renders",
        description: "Crafting atmospheric 3D computer visualizations demonstrating true light, shadow, texture, and furniture scale.",
      },
      {
        step: "03",
        phase: "Detail Engineering & Joinery Shop Drawings",
        description: "Exacting technical drawing packages for custom cabinetry, stone cutting schedules, and brass shadow reveals.",
      },
      {
        step: "04",
        phase: "Procurement & Artisanal Fabrication",
        description: "Direct atelier sourcing, marble slab reservation in Italy, and precision millwork manufacturing under strict QA.",
      },
      {
        step: "05",
        phase: "White-Glove Turnkey Handover",
        description: "On-site installation, art placement, professional deep cleaning, and presentation of the completed sanctuary.",
      },
    ],
    specifications: [
      { label: "Typical Scope", value: "Full Turnkey Villa & Penthouse Interior Architecture & Furnishing" },
      { label: "Sourcing", value: "Direct from Italian, French & Portuguese Ateliers + Dubai In-House Joinery" },
      { label: "Material Warranty", value: "10-Year Craftsmanship & Structural Integrity Assurance" },
      { label: "Turnkey Timeline", value: "12 to 24 Weeks depending on villa scale and custom commissions" },
    ],
  },

  "light-design": {
    slug: "light-design",
    title: "Architectural & Circadian Light Design",
    shortTitle: "Light Design",
    category: "Atmospheric & Circadian Illumination",
    tagline: "Architectural circadian lighting schemes calibrated to Dubai's golden sunsets and intimate evening entertaining.",
    headline: "Sculpting Emotion, Drama & Atmosphere Through Light.",
    description:
      "Precision photometric lighting schemes, indirect architectural cove details, and smart circadian systems that elevate luxury interiors.",
    longDescription: [
      "Lighting is the invisible medium that brings architecture to life. In prime Dubai residences, where intense daylight contrasts with starlit desert nights, illumination requires nuanced orchestration rather than overwhelming brightness.",
      "Our lighting design studio approaches each residence with a lighting choreographer's sensibility. We conceal light sources within architectural reveal details, eliminate glare, and implement circadian biological rhythm programming that gently shifts color temperature from invigorating morning light (5000K) to intimate candlelight amber (2200K).",
    ],
    heroImage: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    heroAlt: "KaiRose Dubai circadian architectural lighting and ambient atmospheric design",
    gallery: [
      {
        url: "/images/hero1/videoframe_7377.png",
        alt: "KaiRose Dubai illuminated vanity and spherical wall sconces",
        caption: "Emirates Hills Villa • Fluted Sconces & Shadow-Free Vanity Illumination",
      },
      {
        url: "/images/hero1/videoframe_1439.png",
        alt: "KaiRose Dubai candlelight and ambient dining atmosphere",
        caption: "Palm Jumeirah Penthouse • Atmospheric Evening Illumination & Candlelight",
      },
      {
        url: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
        alt: "KaiRose Dubai cathedral architectural daylighting and clerestory integration",
        caption: "Dubai Hills Mansion • Circadian Daylight Portals & Volumetric Balance",
      },
    ],
    deliverables: [
      {
        title: "Circadian Rhythm Biological Schematics",
        description:
          "Automated dynamic color-tuning schedules calibrated to Dubai's latitude to enhance sleep quality, daytime energy, and evening tranquility.",
      },
      {
        title: "Architectural Indirect Cove & Shadow Reveals",
        description:
          "Concealed linear LED grazing that washes textured Venetian plasters, fluted wood paneling, and floating ceiling coffers with zero visual glare.",
      },
      {
        title: "Statement Luminaire & Chandelier Curation",
        description:
          "Curating bespoke handblown Murano glass, hammered brass, and architectural sculptural light fixtures from Europe's preeminent lighting artisans.",
      },
      {
        title: "Smart Home Scene Programming",
        description:
          "Seamless Lutron / KNX / Crestron scene integration (Welcome, Dining Gala, Gallery Art, Sunset Amber, Night Sanctuary).",
      },
    ],
    methodology: [
      {
        step: "01",
        phase: "Photometric Modeling & Glare Analysis",
        description: "Simulating lux levels, beam angle cut-offs, and light reflectance on marble and textile finishes using Dialux software.",
      },
      {
        step: "02",
        phase: "Reflected Ceiling Plan (RCP) Engineering",
        description: "Drafting detailed architectural RCP drawings integrating downlight apertures, linear slots, and HVAC diffusers into clean ceiling axes.",
      },
      {
        step: "03",
        phase: "Luminaire Specification & Color Binning",
        description: "Specifying museum-grade CRI 97+ architectural luminaires with 2-step MacAdam ellipse consistency to guarantee flawless color rendition.",
      },
      {
        step: "04",
        phase: "Smart Dimming & Driver Infrastructure",
        description: "Coordinating 0-10V, DALI-2, and phase dimming drivers to ensure 0.1% smooth flicker-free dimming across all channels.",
      },
      {
        step: "05",
        phase: "On-Site Night Commissioning & Aiming",
        description: "Final on-site dark-hour focusing of accent spots on art collections and fine-tuning ambient balance across every room.",
      },
    ],
    specifications: [
      { label: "Color Quality", value: "CRI 97+ with 2-Step MacAdam Ellipse consistency (Museum-Grade)" },
      { label: "Dimming Control", value: "0.1% Dim-to-Warm (2700K to 1800K) & Tunable White (2200K to 6500K)" },
      { label: "Smart Integration", value: "Native Lutron HomeWorks QSX / KNX / Crestron Home Compatibility" },
      { label: "Aesthetic Principle", value: "Concealed light sources — 'See the light, never the fixture'" },
    ],
  },
};

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData[slug];
}

export function getAllServices(): ServiceDetail[] {
  return Object.values(servicesData);
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
