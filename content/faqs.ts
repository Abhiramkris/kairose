export interface FaqItem {
  question: string;
  answer: string;
}

// Frequently Asked Questions (FAQs)
export const homepageFaqs: FaqItem[] = [
  {
    question: "What services does KaiRose Interiors provide?",
    answer:
      "KaiRose Interiors offers comprehensive interior design, fit-out, renovation, and technical services, including gypsum works, painting, flooring, carpentry, electrical, plumbing, and HVAC solutions.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We undertake residential, commercial, retail, office, hospitality, and other interior fit-out projects, delivering solutions tailored to each client’s requirements.",
  },
  {
    question: "Do you provide complete turnkey interior fit-out solutions?",
    answer:
      "Yes. We offer end-to-end interior fit-out solutions, from initial planning and design coordination to execution, finishing, and project handover.",
  },
  {
    question: "Can you customize interior designs according to our requirements and budget?",
    answer:
      "Absolutely. We work closely with our clients to develop practical, aesthetically appealing, and cost-effective solutions that reflect their preferences, functional needs, and budget.",
  },
  {
    question: "Do you provide renovation and refurbishment services?",
    answer:
      "Yes. We provide renovation, remodeling, refurbishment, and interior upgrading services for existing residential and commercial spaces.",
  },
  {
    question: "Do you provide electrical, plumbing, and air-conditioning services?",
    answer:
      "Yes. Our technical services include electrical installations, plumbing and sanitary works, and air-conditioning installation and maintenance, subject to applicable project requirements.",
  },
  {
    question: "How long does an interior fit-out project take?",
    answer:
      "Project timelines depend on the size, scope, complexity, and specific requirements of the project. We provide an estimated completion schedule after reviewing the project details.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "You can contact our team through our website, phone, email, or WhatsApp. Share your project requirements, and our team will assist you with the next steps and quotation process.",
  },
  {
    question: "Do you maintain quality and safety standards during project execution?",
    answer:
      "Yes. We prioritize quality workmanship, appropriate materials, site safety, and professional project coordination throughout the execution process.",
  },
  {
    question: "Why should I choose KaiRose Interiors?",
    answer:
      "KaiRose Interiors is committed to delivering quality workmanship, innovative solutions, transparent communication, and reliable project execution. Our goal is to transform spaces into functional, elegant, and inspiring environments while building long-term client relationships.",
  },
];

export const fullFaqs: FaqItem[] = homepageFaqs;
