export interface NavItem {
  label: string;
  href: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Philosophy", href: "/#philosophy" },
  { label: "Projects", href: "/projects" },
  { label: "Design Ideas", href: "/design-ideas" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  curation: [
    { label: "The Trending Edit", href: "/#trending" },
    { label: "Design Ideas Gallery", href: "/design-ideas" },
    { label: "Recent Projects", href: "/projects" },
    { label: "Signature Services", href: "/services" },
  ],
  company: [
    { label: "About KaiRose", href: "/about" },
    { label: "Client Chronicles", href: "/testimonials" },
    { label: "The KaiRose Journal", href: "/journal" },
    { label: "Frequently Asked Questions", href: "/faqs" },
    { label: "Experience Centre", href: "/contact#experience-centre" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
