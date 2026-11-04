export interface ServiceItem {
  id: string;
  slug: string;
  index: string;
  title: string;
  oneLiner: string;
  description: string;
  included: string[];
  previewImage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "luxury-interior-design",
    slug: "luxury-interior-design",
    index: "01",
    title: "Luxury Interior Design",
    oneLiner: "Bespoke, high-end interiors with premium materials.",
    description: "Bespoke, high-end interiors with premium materials and finishes, tailored to your lifestyle and personality.",
    included: [
      "Concept Development",
      "3D Visualization",
      "Material Selection",
      "Custom Furniture Design",
      "Project Management",
    ],
    previewImage: "/images/services/luxury-interior-design.jpg",
  },
  {
    id: "villa-interior-design",
    slug: "villa-interior-design",
    index: "02",
    title: "Villa Interior Design",
    oneLiner: "Whole-villa design and fit-out.",
    description: "Whole-villa design and fit-out from grand living areas to private suites, handling every detail from concept to installation.",
    included: [
      "Space Planning",
      "Architectural Coordination",
      "Custom Joinery",
      "Landscaping Integration",
      "Smart Home Integration",
    ],
    previewImage: "/images/services/villa-interior-design.jpg",
  },
  {
    id: "penthouse-interior-design",
    slug: "penthouse-interior-design",
    index: "03",
    title: "Penthouse Interior Design",
    oneLiner: "Sky-high homes designed around views.",
    description: "Sky-high homes designed around skyline views and entertaining, maximizing view impact while creating intimate, functional spaces.",
    included: [
      "View Optimization",
      "Entertainment Spaces",
      "Custom Lighting Design",
      "Luxury Material Sourcing",
      "Audio-Visual Integration",
    ],
    previewImage: "/images/services/penthouse-interior-design.jpg",
  },
  {
    id: "townhouse-interior-design",
    slug: "townhouse-interior-design",
    index: "04",
    title: "Townhouse Interior Design",
    oneLiner: "Smart, stylish layouts across every floor.",
    description: "Smart, stylish layouts across every floor, optimizing space and flow so every level serves a purpose.",
    included: [
      "Multi-Level Space Planning",
      "Storage Solutions",
      "Custom Joinery",
      "Color Consultation",
      "Project Management",
    ],
    previewImage: "/images/services/townhouse-interior-design.jpg",
  },
  {
    id: "turnkey-interior-design",
    slug: "turnkey-interior-design",
    index: "05",
    title: "Turnkey Interior Design",
    oneLiner: "Design, joinery, and fit-out by one team.",
    description: "Design, joinery, and fit-out delivered by one team—ready to move in. You hand us the keys; we hand them back to a finished home.",
    included: [
      "End-to-End Project Management",
      "Design and Build",
      "Custom Joinery",
      "Site Supervision",
      "Final Styling and Handover",
    ],
    previewImage: "/images/services/turnkey-interior-design.jpg",
  },
];
