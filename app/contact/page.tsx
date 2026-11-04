import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact KaiRose | Book a Private Consultation",
  description:
    "Schedule your private, no-obligation design consultation. Connect with our senior interior design and architecture studio in Dubai.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4F1EA] p-16 text-xs uppercase tracking-widest text-[#0D0E10]/50">Loading contact suite...</div>}>
      <ContactClient />
    </Suspense>
  );
}
