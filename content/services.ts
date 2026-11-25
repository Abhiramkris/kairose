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
  "interior-turnkey-fitout": {
    slug: "interior-turnkey-fitout",
    title: "Interior Turnkey Fitout",
    shortTitle: "Turnkey Fitout",
    category: "Turnkey Contracting & Execution",
    tagline: "Comprehensive end-to-end interior fitout solutions from structural execution to bespoke luxury finishing across Dubai.",
    headline: "Turnkey Interior Fitout & Architectural Execution.",
    description: "Full-scope turnkey interior fitout solutions for luxury residences, commercial malls, corporate offices, and hospitality destinations in Dubai and the UAE.",
    longDescription: [
      "KaiRose Interiors delivers complete turnkey interior fit-out solutions, managing every stage of execution from initial design coordination to final handover. Our integrated methodology combines architectural expertise, authority approvals, and rigorous site management.",
      "We orchestrate all civil, MEP, joinery, and specialized finishes with single-point accountability, ensuring flawless craftsmanship, adherence to delivery schedules, and strict compliance with UAE building codes.",
    ],
    heroImage: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
    heroAlt: "KaiRose Dubai luxury turnkey interior fitout and architectural execution",
    gallery: [
      {
        url: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
        alt: "KaiRose Dubai turnkey interior fitout living room",
        caption: "Turnkey Living Space • Precision Joinery & Integrated Lighting",
      },
      {
        url: "/images/hero1/videoframe_7092.png",
        alt: "KaiRose Dubai grand architectural foyer execution",
        caption: "Luxury Residence • Monumental Stonework & Turnkey Coordination",
      },
    ],
    deliverables: [
      { title: "Complete Project Management", description: "Single-point coordination across design, procurement, MEP, civil, and finishing works." },
      { title: "Statutory & Authority Approvals", description: "Dubai Municipality, Civil Defence, and master developer permits handled seamlessly." },
      { title: "Quality & Safety Assurance", description: "Stringent quality benchmarks and British / UAE safety standards on every project site." },
      { title: "Timely Handover Guarantee", description: "Disciplined milestone tracking with transparent progress reporting and snag-free handover." },
    ],
    methodology: [
      { step: "01", phase: "Consultation & Scope Review", description: "Assessing architectural drawings, site conditions, specifications, and project timeline." },
      { step: "02", phase: "Statutory Approvals & MEP Coordination", description: "Securing building permits and engineering schematics before breaking ground." },
      { step: "03", phase: "Civil, MEP & Shell Execution", description: "Demolition, masonry, partition walling, plumbing, HVAC, and electrical first-fix." },
      { step: "04", phase: "Bespoke Joinery & Fitout Finishes", description: "Installation of custom cabinetry, false ceilings, stone cladding, and floor finishes." },
      { step: "05", phase: "Quality Snagging & Project Handover", description: "Comprehensive testing, commissioning, authority sign-off, and turnkey handover." },
    ],
    specifications: [
      { label: "Delivery Model", value: "Comprehensive Design & Build / Turnkey Fit-Out Contract" },
      { label: "Authority Approvals", value: "Dubai Municipality, DCD, Concordia, Trakhees, Nakheel, Emaar" },
      { label: "Sectors Covered", value: "Private Villas, Penthouses, Commercial Malls, Corporate Offices" },
      { label: "Warranty", value: "Comprehensive DLP (Defects Liability Period) & maintenance support" },
    ],
  },
  "joinery-mass-production": {
    slug: "joinery-mass-production",
    title: "Joinery & Mass Production",
    shortTitle: "Joinery & Woodwork",
    category: "Custom Joinery & Manufacturing",
    tagline: "State-of-the-art joinery manufacturing and mass production woodworking tailored for premium developments.",
    headline: "Master Craftsmanship & Industrial Mass Production.",
    description: "In-house joinery manufacturing combining artisanal European craftsmanship with high-capacity mass production for doors, wall paneling, and custom woodwork.",
    longDescription: [
      "Our dedicated joinery facility delivers both bespoke one-of-a-kind architectural millwork and large-scale mass production for high-volume residential and commercial developments.",
      "Equipped with advanced CNC machinery and skilled craftsmen, we shape premium timbers, veneers, and composites into flawless doors, cabinetry, wall claddings, and retail fixtures.",
    ],
    heroImage: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
    heroAlt: "KaiRose Dubai bespoke joinery and mass production woodwork",
    gallery: [
      {
        url: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
        alt: "KaiRose Dubai bespoke wood paneling and cabinetry",
        caption: "Custom Walnut Paneling • Concealed Hardware & Integrated Accents",
      },
    ],
    deliverables: [
      { title: "Bespoke Architectural Joinery", description: "Handcrafted credenzas, reception desks, feature paneling, and vanity consoles." },
      { title: "Industrial Mass Production", description: "High-volume repetitive manufacturing for multi-unit towers, hotels, and retail rollouts." },
      { title: "Veneer Matching & Finishing", description: "Book-matched natural wood veneers, polyurethanes, high-gloss lacquers, and patinas." },
      { title: "Precision On-Site Installation", description: "Millimeter-exact fitting by factory-trained joinery installation teams." },
    ],
    methodology: [
      { step: "01", phase: "Shop Drawings & Material Approval", description: "Detailed 1:1 joinery fabrication drawings, wood samples, and veneer layups." },
      { step: "02", phase: "CNC Precision Machining", description: "Automated cutting, profiling, edge-banding, and mortising for flawless joinery." },
      { step: "03", phase: "Hand Finishing & Lacquering", description: "Multi-stage sanding, hand-staining, and dust-free spray booth lacquer application." },
      { step: "04", phase: "Factory Pre-Assembly", description: "Full dry-run assembly at the factory to verify tolerances before shipping to site." },
      { step: "05", phase: "Site Installation & Inspection", description: "Careful transport, leveling, concealed fastening, and architectural touch-up." },
    ],
    specifications: [
      { label: "Timber Species", value: "European Oak, American Walnut, Teak, Ash, and FSC-certified woods" },
      { label: "Finishes", value: "PU Matte, Satin, High-Gloss Piano Lacquer, Natural Oil, Metallic Liquid" },
      { label: "Machinery", value: "Multi-axis CNC routering, precision edge-banding, robotic spray line" },
      { label: "Capacity", value: "Single bespoke mansions up to multi-story 500+ unit developments" },
    ],
  },
  "gypsum-false-ceiling": {
    slug: "gypsum-false-ceiling",
    title: "Gypsum & Fancy False Ceiling",
    shortTitle: "Gypsum & Ceilings",
    category: "Ceiling Systems & Architectural Moldings",
    tagline: "Sculptural gypsum ceilings, multi-tiered fancy false ceilings, and concealed ambient lighting reveals.",
    headline: "Architectural Gypsum & Sculptural Ceiling Artistry.",
    description: "Bespoke gypsum false ceilings, intricate decorative plasterwork, acoustic ceiling baffles, and integrated lighting troughs engineered with millimeter precision.",
    longDescription: [
      "The ceiling is the fifth wall of luxury architecture. KaiRose designs and executes bespoke gypsum false ceilings that conceal complex MEP ducting while creating stunning spatial depth.",
      "From multi-tier coffered ceilings and organic fluid curves to crisp shadow gaps and indirect LED coves, our master plasterers bring refined architectural character to every room.",
    ],
    heroImage: "/images/hero1/96315a86fbba0e77a988ca09a5f68f567a802826-8574x5430.avif",
    heroAlt: "KaiRose Dubai gypsum decorative ceilings and fancy false ceilings",
    gallery: [
      {
        url: "/images/hero1/videoframe_7377.png",
        alt: "KaiRose Dubai multi-tiered ceiling illumination",
        caption: "Sculptural Coffered Ceiling • Integrated Linear Coves & Ambient Glow",
      },
    ],
    deliverables: [
      { title: "Fancy False Ceilings", description: "Multi-tiered, coffered, curved, and cantilevered ceiling geometries." },
      { title: "Concealed Lighting Reveals", description: "Knife-edge details, perimeter cove lighting pockets, and flush channel tracks." },
      { title: "Acoustic Plaster Solutions", description: "High-performance sound-absorbing gypsum assemblies for home cinemas and salons." },
      { title: "Moisture & Fire-Rated Systems", description: "Water-resistant boards for bathrooms and certified fire-rated partitions." },
    ],
    methodology: [
      { step: "01", phase: "MEP Void & Height Survey", description: "3D laser scan to maximize finished ceiling height while coordinating AC ducts." },
      { step: "02", phase: "Heavy-Gauge Metal Framing", description: "Galvanized steel stud and runner framework with vibration-dampening hangers." },
      { step: "03", phase: "Gypsum Board Fixing & Detailing", description: "Precision fastening of moisture/fire-rated boards with staggered seams." },
      { step: "04", phase: "Joint Taping & Plaster Skimming", description: "Three-coat jointing compound with paper tape, sanded flat to Level 5 finish." },
      { step: "05", phase: "Integrated Lighting & Paint", description: "Installation of LED linear extrusions and premium breathable paint coating." },
    ],
    specifications: [
      { label: "Board Types", value: "Knauf / Gyproc Regular, Moisture-Resistant, Fire-Resistant & Acoustic" },
      { label: "Surface Finish", value: "Level 5 Architectural Plaster Skim Finish" },
      { label: "Profiles", value: "Shadow gaps, knife-edge coves, aluminum architectural trims" },
      { label: "Standards", value: "Compliant with Dubai Civil Defence and ASTM standards" },
    ],
  },
  "civil-works": {
    slug: "civil-works",
    title: "Civil Works & Site Execution",
    shortTitle: "Civil & Execution",
    category: "Civil Contracting & Project Management",
    tagline: "Robust civil contracting, structural modifications, and rigorous on-site execution with uncompromising safety.",
    headline: "Structural Civil Engineering & Flawless Site Execution.",
    description: "Comprehensive civil contracting, structural reconfiguration, blockwork, screeding, waterproofing, and disciplined on-site project management across UAE developments.",
    longDescription: [
      "Behind every breathtaking interior lies robust civil engineering. KaiRose provides end-to-end civil contracting services, handling structural demolition, concrete masonry, flooring substrates, and wet trades.",
      "Our experienced site managers and safety officers oversee daily operations on-site, enforcing strict quality control, timeline compliance, and HSE protocols across residential and commercial projects.",
    ],
    heroImage: "/images/hero1/videoframe_7092.png",
    heroAlt: "KaiRose Dubai civil engineering and dedicated on-site execution",
    gallery: [
      {
        url: "/images/hero1/videoframe_1439.png",
        alt: "KaiRose Dubai marble flooring and structural execution",
        caption: "Civil Execution • Precision Screeding & Italian Stone Laying",
      },
    ],
    deliverables: [
      { title: "Structural Demolition & Openings", description: "Controlled blockwork removal, steel beam retrofits, and door/window enlargements." },
      { title: "Masonry & Wet Trades", description: "Concrete blockwork, thermal insulation, cement plastering, and screeding." },
      { title: "Waterproofing & Substrates", description: "Multi-layer membrane waterproofing for wet areas, balconies, and basements." },
      { title: "On-Site Management & Safety", description: "Full-time site engineers, HSE officers, and daily progress logs." },
    ],
    methodology: [
      { step: "01", phase: "Structural Audit & Permitting", description: "Structural engineer inspection, NOC approvals, and demolition licensing." },
      { step: "02", phase: "Site Protection & Demolition", description: "Dust containment, existing fixture protection, and controlled removals." },
      { step: "03", phase: "Civil Works & Masonry", description: "Erecting block walls, lintels, concrete bases, and screed level checks." },
      { step: "04", phase: "Waterproofing & Flood Testing", description: "Applying elastomeric waterproofing followed by 48-hour standing flood tests." },
      { step: "05", phase: "Finishing Preparation", description: "Smooth screeds, self-leveling underlayments, and handover to finishing teams." },
    ],
    specifications: [
      { label: "Compliance", value: "Dubai Municipality Building Regulations & British Standards (BS)" },
      { label: "Waterproofing", value: "Polyurethane & bituminous membranes with 10-year warranty" },
      { label: "Safety", value: "Zero-harm safety policy, certified PPE, and regular toolbox talks" },
      { label: "Substrates", value: "Laser-leveled screeds, epoxy damp-proof membranes" },
    ],
  },
  "doors-wardrobes": {
    slug: "doors-wardrobes",
    title: "Doors & Wardrobes",
    shortTitle: "Doors & Wardrobes",
    category: "Joinery & Built-in Systems",
    tagline: "Custom architectural doors, bespoke walk-in closets, and illuminated wardrobe systems crafted from exotic timbers.",
    headline: "Bespoke Architectural Doors & Luxury Wardrobes.",
    description: "Handcrafted interior doors, pivot entrance statements, walk-in dressing sanctuaries, and modular wardrobe systems engineered for luxury living.",
    longDescription: [
      "We design, fabricate, and install custom internal doors, monumental pivot entrances, and bespoke walk-in wardrobes tailored to your exact storage needs and design vision.",
      "Every door features acoustic solid cores and concealed European hinges, while our wardrobes incorporate soft-close Italian mechanisms, integrated LED illumination, and leather-lined drawer organizers.",
    ],
    heroImage: "/images/hero1/b0164608867e856c07c82428c576338b3ad41c9b-5400x4084.avif",
    heroAlt: "KaiRose Dubai luxury custom doors and illuminated wardrobe systems",
    gallery: [
      {
        url: "/images/hero1/20f291b13682b88ac6159f8b25f69d05c38387f7-5400x4029.avif",
        alt: "KaiRose Dubai luxury dressing room wardrobe",
        caption: "Master Suite • Smoked Glass Wardrobes & Leather-Clad Drawers",
      },
    ],
    deliverables: [
      { title: "Floor-to-Ceiling Interior Doors", description: "Up to 3.5m tall frameless flush-to-wall doors with magnetic latching." },
      { title: "Walk-In Dressing Sanctuaries", description: "Custom wardrobe systems with tinted glass doors, sensor lighting, and vanity islands." },
      { title: "Specialized Hardware Integration", description: "Concealed 3D adjustable hinges, German magnetic locks, and soft-close slides." },
      { title: "Finishes & Leather Inlays", description: "Natural wood veneers, fluted glass, brushed metallic handles, and genuine leather trays." },
    ],
    methodology: [
      { step: "01", phase: "Storage Inventory & Planning", description: "Categorizing wardrobe contents (hanging, shoe shelves, watches) to optimize volume." },
      { step: "02", phase: "3D CAD & Hardware Specification", description: "Engineering door structures to prevent warping and specifying Blum/Hettich fittings." },
      { step: "03", phase: "Workshop Fabrication", description: "Precision veneering, edge-sealing, and factory assembly of carcases and door leafs." },
      { step: "04", phase: "Sub-Frame & Door Installation", description: "Concealed aluminum sub-frames leveled on site for seamless flush transitions." },
      { step: "05", phase: "Lighting & Hardware Calibration", description: "Connecting magnetic sensors, fine-tuning hinges, and final surface polishing." },
    ],
    specifications: [
      { label: "Door Heights", value: "Standard 2.4m up to monumental 3.5m floor-to-ceiling single leaf" },
      { label: "Hardware Brands", value: "Salice, Blum, Hettich, Sugatsune, Hafele, AGB Magnetic Locks" },
      { label: "Wardrobe Materials", value: "Marine-grade plywood, smoked glass, bronze aluminum framing, alcantara" },
      { label: "Acoustic Rating", value: "Up to 38 dB acoustic reduction on solid-core door assemblies" },
    ],
  },
  "kitchens-metal-works": {
    slug: "kitchens-metal-works",
    title: "Kitchens & Metal Works",
    shortTitle: "Kitchens & Metal",
    category: "Specialized Fabrication & Living Spaces",
    tagline: "German & Italian engineered luxury kitchens, architectural metal fabrications, and structural glass solutions.",
    headline: "High-Performance Kitchens & Precision Metal Craft.",
    description: "Bespoke kitchen architecture with premium stone surfaces, brass inlays, stainless steel fabrications, glass partitions, and specialized upholstery.",
    longDescription: [
      "KaiRose brings culinary elegance and industrial precision to modern homes and commercial venues. We craft fully customized show kitchens and heavy-duty chef prep kitchens alongside architectural metalwork.",
      "From brass feature screens and steel partition doors to quartz island waterfalls and stainless steel worktops, our kitchens and metal fabrications combine ergonomic efficiency with breathtaking aesthetics.",
    ],
    heroImage: "/images/hero1/videoframe_1439.png",
    heroAlt: "KaiRose Dubai luxury bespoke kitchens and architectural metal works",
    gallery: [
      {
        url: "/images/hero1/744469be222c35c89679dab0fece57e1548d5b5a-8448x5770.avif",
        alt: "KaiRose Dubai open luxury kitchen with marble waterfall island",
        caption: "Open Plan Kitchen • Calacatta Marble & Brushed Brass Metalwork",
      },
    ],
    deliverables: [
      { title: "Bespoke Kitchen Architecture", description: "Show kitchens and wet kitchens featuring anti-fingerprint laminates and solid stone." },
      { title: "Architectural Metal Fabrication", description: "Brass inlays, blackened steel room dividers, custom stair railings, and canopy hoods." },
      { title: "Glass Partitions & Enclosures", description: "Fluted, reeded, and tinted tempered glass screens with slimline metal frames." },
      { title: "Integrated Appliance Coordination", description: "Seamless flush fitting for Gaggenau, Miele, Sub-Zero, and Bora cooking systems." },
    ],
    methodology: [
      { step: "01", phase: "Ergonomic Layout & Appliance Audit", description: "Mapping culinary work triangles, refrigeration, and specialized cooktops." },
      { step: "02", phase: "Laser Template of Substrates", description: "Digital templating of walls, floors, and MEP connections for millimetric accuracy." },
      { step: "03", phase: "Carcass & Metal Fabrication", description: "High-density moisture-proof carcases and CNC laser-cut metal components." },
      { step: "04", phase: "Countertop Fabrication & Fitting", description: "Mitred stone waterfall edge fabrication and waterjet sink cutouts." },
      { step: "05", phase: "Appliance Installation & Seal", description: "Appliance leveling, plumbing connection, silicone jointing, and testing." },
    ],
    specifications: [
      { label: "Surfaces", value: "Calacatta Marble, Dekton, Corian, Quartzite, Brushed Stainless Steel" },
      { label: "Metal Finishes", value: "PVD Brass, Antique Bronze, Blackened Steel, Mirror Chrome" },
      { label: "Hardware", value: "Blum Legrabox, motorized Servo-Drive lift systems, soft-close dampers" },
      { label: "Appliances", value: "Engineered for Sub-Zero, Wolf, Miele, Gaggenau, and Bosch integration" },
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
