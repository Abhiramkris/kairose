# KaiRose Dubai — Design System & Style Specification
*Comprehensive Architectural Style Guide, Design Tokens, Typography, and UI Standards*

---

## 1. Brand Philosophy & Aesthetic Identity

**KaiRose** is an ultra-prime luxury interior architecture and turnkey design studio based in Dubai, United Arab Emirates. The design language expresses **Organic Classical Modernism** and **Quiet Luxury** — pairing European architectural discipline with the warmth of the Arabian desert and tactile, artisanal materiality.

### Core Principles
1. **Architectural Rigor**: Clean geometry, honest proportions, and intentional alignment. Artificial ornamental curves (such as faux arch-top column cutouts) are strictly avoided in favor of crisp rectangular frames and proportional elegance.
2. **Tactile Materiality**: The digital palette evokes raw limestone, warm travertine, tactile linen, burnished brass, fluted walnut millwork, and Nero Marquina marble.
3. **Understated Opulence**: Luxury is communicated through generous negative space, editorial typography, hairline pencil borders, and subdued contrast rather than flashy gradients or saturated brights.

---

## 2. Color Palette & Token Architecture

The color system is rooted in the warm, sun-kissed textures of Dubai and natural Italian stones.

| Token Name | Hex Code | Tailwind Equivalent | Role & Application | Contrast Role |
| :--- | :--- | :--- | :--- | :--- |
| **Alabaster Base** | `#F8F1E8` | `bg-[#F8F1E8]` / `--bg-primary` | Global page background, linen canvas | Primary Canvas |
| **Card Alabaster** | `#FAF6F0` | `bg-[#FAF6F0]` | Project cards, secondary elevation | Subtle Card Surface |
| **Warm Sand / Stone** | `#EFE6DC` | `bg-[#EFE6DC]` | Image placeholders, footer surface | Recessed Surface |
| **Espresso Noir** | `#452702` | `bg-[#452702]` / `text-[#452702]` | **All Primary CTA buttons**, display headings, active indicators | High-Contrast Accent |
| **Espresso Hover** | `#5D3503` | `hover:bg-[#5D3503]` | Primary button hover state | Interactive State |
| **Brushed Champagne**| `#7E4E15` | `text-[#7E4E15]` | Hero brand masthead, luxury highlights | Masthead Gold Tone |
| **Desert Brass** | `#BF771A` | `border-[#BF771A]/35` | Subtle warm accents, border trims | Accent Tone |
| **Studio Brass** | `#A98A56` | `text-[#A98A56]` | Category tags, subheadings, labels | Muted Metadata |
| **Charcoal Ink** | `#221E1B` | `text-[#221E1B]` | Primary editorial body copy | High Readability Body |
| **Deep Onyx** | `#000000` | `text-[#000000]` | Secondary statements, client names | Crisp Display Black |
| **Pure White** | `#FFFFFF` | `text-white` | All primary CTA button text | Button Contrast |
| **Hairline Border** | `rgba(0,0,0,0.10)` | `border-black/10` | 1px architectural pencil border | Subtle Framing |
| **Medium Border** | `rgba(0,0,0,0.15)` | `border-black/15` | Section frames, outer container borders | Defined Framing |

---

## 3. Typography System

The studio uses a dual-type hierarchy: **CradleyTitle** (classical display serif with Caslon/Fraunces proportions) paired with **Montserrat** (geometric sans-serif with bespoke tracking and varied weights).

### Font Stack Definitions
```css
--font-cradley: 'CradleyTitle', var(--font-cinzel), 'Fraunces', Georgia, serif;
--font-montserrat: var(--font-montserrat), -apple-system, BlinkMacSystemFont, sans-serif;
```

### Hierarchy & Figma Exact Specifications

```
Scale Level               Font Family       Weight        Size / Line-Height      Tracking / Style       Color Tone
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Brand Masthead (Hero)     CradleyTitle      Regular (400) 6xl to 9xl (96–128px)   tracking-[0.14em]      #7E4E15
Masthead Tagline          Montserrat        Medium (500)  12px–14px / 16px        tracking-[0.24em]      #221E1B (Caps)
Editorial Headline        Montserrat        SemiBold (600)40px / 49px             tracking-tight         #452702
Editorial Subtitle        Montserrat        Regular (400) 24px / 29px–31px        normal                 #000000
Editorial Quotes          Montserrat        Light (300)   24px / 29px             normal                 #000000
Section Major Titles      CradleyTitle      Regular (400) 32px–48px / 1.2         tracking-wider         #452702 / #7E4E15
Service Menu Items        CradleyTitle      Regular (400) 32px / 36px             underline (active)     #452702
Client Testimonial Name   Montserrat        Medium (500)  40px / 49px             normal                 #000000
Client Location Role      Montserrat        Regular (400) 20px / 24px             normal                 #000000
Card Project Titles       CradleyTitle      Regular (400) 20px–24px / 1.25        normal                 #452702
Navigation Links          Montserrat        Medium (500)  12px–13px / 16px        tracking-[0.18em]      #221E1B/75 (Caps)
Primary Button Text       Montserrat        Regular (400) 18px–20px / 24px        capitalize             #FFFFFF
Secondary Button Text     Montserrat        Medium (500)  11px–12px / 16px        tracking-[0.16em]      #FFFFFF (Caps)
Accordion Question        Montserrat        Medium (500)  16px–18px / 1.35        normal                 #452702
Body / Descriptions       Montserrat        Regular (400) 13px–15px / 1.65        normal                 #221E1B/75
```

---

## 4. Layout Architecture & Spatial Logic

### A. The 5% Margin Grid Rule
- **Site Header & Top Hero 3-Card Grid**: Constrained with `px-[5%]` (or responsive `px-5 sm:px-[5%]`).
- This guarantees a consistent 5% left margin and 5% right margin across desktop viewports, aligning the header logo and hero cards along identical vertical guide axes.

### B. Full-Screen Bleed Rule
- **Centerpiece Hero Banner ("Redefining Luxury Interiors")**:
  - Width: **100% Full Screen Width (`100vw`)** without side margins (`w-full px-0`).
  - Scale: Generous architectural height (`min-h-[460px] sm:min-h-[540px] md:min-h-[620px] lg:min-h-[680px]`).
  - Dividers: Subtle top and bottom hairline borders (`border-y border-black/10`).
  - Readability: Dual atmospheric wash (linear gradient + radial center illumination) ensuring crystal readability of the `#452702` headline and `#000000` subtitle.

### C. Hero 3-Card Frame 9467 (Figma Specs)
- **Aspect Ratio**: `aspect-[303/407]` (Figma 303px width × 407px height).
- **Corner Curvature**: `border-radius: 15px` (`rounded-[15px]`).
- **Gap**: `8px` (`gap-[8px]` / `gap-2`).
- **Borders**: Thin architectural outline (`border border-black/10`).
- **Responsive Behavior**: 2-column layout on mobile, 3-column layout on desktop.

### D. Clean Rectangular Geometry (No Faux Column Arches)
- All design project cards, service images, and FAQ images utilize **crisp rectangular framing** with subtle corner radiuses (`rounded-[4px]` or `rounded-[6px]`).
- Exaggerated arch-top column cutouts (`rounded-t-[100px]`) are eliminated to maintain honest architectural photography.

---

## 5. UI Components & Micro-Interactions

### A. Primary CTA Button (`#452702`)
The unified primary action across the entire website:
```tsx
<button
  className="w-[290px] h-[52px] bg-[#452702] hover:bg-[#5D3503] text-white font-montserrat font-normal text-[20px] leading-[24px] capitalize flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer rounded-[2px]"
>
  Book a Consultation
</button>
```
- **Rules**:
  - Background must **always** be `#452702` (deep espresso brown).
  - Text must **always** be `#FFFFFF` (white).
  - Hover state transitions to `#5D3503`.
  - Corner radius is subtle: `rounded-[2px]`.

### B. Standard Luxury Navigation
The navigation adopts standard luxury studio conventions:
- **Logo**: Full 3D sculpted gold KaiRose emblem + wordmark (`/images/kairose-logo.png`), matching the footer.
- **Links**: Clean text links (`text-xs uppercase tracking-[0.18em] font-medium text-[#221E1B]/75 hover:text-[#452702]`).
- **Active / Hover State**: Subtle animated bottom indicator (`after:h-[1.5px] after:bg-[#452702]`).
- **No Boxed Pills**: Individual rounded pill boxes with borders are avoided in the navbar.

### C. Circular Action Badges
Used on project cards and interactive services:
- **Size**: `44px x 44px` (or `36px–40px` on mobile cards).
- **Style**: White circle (`bg-white` or `bg-[#F8F1E8]/90`) with `ArrowUpRight` icon in `#452702`.
- **Hover**: Inverts to `bg-[#452702] text-white` with slight diagonal translation (`group-hover:translate-x-0.5 group-hover:-translate-y-0.5`).

### D. Accordion UI (FAQ)
- **Dividers**: Single hairline bottom rule (`border-b border-black/10`).
- **Toggle Icon**: Circular border (`border border-black/15`) with `ChevronDown` rotating 180° when open.
- **Typography**: Questions in `#452702` medium, answers in `#221E1B`/80 with smooth expand animation.

---

## 6. Imagery, Media & Photography Guidelines

### Atmosphere & Tone
- **Subjects**: Turnkey Dubai penthouses, Palm Jumeirah villas, Emirates Hills estates, bespoke millwork, sculptural furniture, circadian lighting schemes.
- **Lighting**: Soft natural Mediterranean/Arabian daylight, morning sun, or dusk ambient lighting. Avoid harsh artificial flash or overly saturated HDR.
- **Materials Highlighted**: Fluted oak, brushed champagne bronze, bookmatched travertine, boucle upholstery, monolithic stonework.

### Technical Asset Requirements
- **Format**: Compressed **WebP** with fallback JPEG / PNG.
- **Resolution**: High-density 2x assets optimized for Retina displays.
- **Cumulative Layout Shift (CLS = 0)**: Every image container must have a fixed aspect ratio (`aspect-[303/407]`, `aspect-[4/3]`, `aspect-[3/4]`, `aspect-[2/1]`) or explicit dimensions.
- **Priority Rules**:
  - `fetchpriority="high"` and `priority={true}` applied **only** to the LCP candidate (`hero-card-1.webp` and header logo).
  - Standard below-the-fold images use native `loading="lazy"` with responsive `sizes` attribute.

---

## 7. Motion & Animation Standards

The motion design mirrors the calm, deliberate elegance of ultra-luxury architectural studios:
- **Masthead Ease-In**: Brand title `KAIROSE` animates letter-by-letter with a custom ease-in cubic bezier:
  ```ts
  transition: {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1], // Quintic out
    delay: 0.08 + index * 0.055,
  }
  ```
- **Image Hover Zoom**: Gentle slow-motion scale (`group-hover:scale-105 duration-700 ease-out`).
- **Page Transitions**: Smooth fade and subtle vertical drift (`y: 20` to `y: 0`, opacity 0 to 1).

---

## 8. Dubai Local SEO & Brand Directory Reference

| Signal | Production Value |
| :--- | :--- |
| **Legal Entity** | KaiRose Interior Design and Technical Services LLC |
| **Physical Address** | 112, Makateb Building, Port Saeed Road, Deira, Dubai, UAE |
| **Coordinates** | Latitude: `25.2604`, Longitude: `55.3341` |
| **Geo Meta Tags** | `geo.region: "AE-DU"`, `geo.placename: "Dubai, United Arab Emirates"` |
| **Telephone** | `+971 4 352 2232` |
| **Mobile / WhatsApp** | `+971 54 400 9289` |
| **Email** | `info@kairosegroup.com` / `kairoseinterior@gmail.com` |
| **Operating Hours** | Monday – Saturday: 09:00 – 18:00 (By Appointment Only) |
| **Prime Areas Served** | Palm Jumeirah, Emirates Hills, Downtown Dubai, Dubai Hills Estate, Jumeirah Bay Island, Al Barari, Dubai Marina, Abu Dhabi |
| **Primary Socials** | Instagram: `@kairosedesign`, LinkedIn: `company/kairose-design`, Pinterest: `kairosedesign` |

---
*Maintained as the single source of design truth for KaiRose Dubai.*
