import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy | KaiRose",
  description: "Standard privacy policy covering data collection, use, and client confidentiality protocols at KaiRose.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="max-w-[68ch] mx-auto">
          <Eyebrow>Legal & Discretion</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#0D0E10] tracking-tight mt-2 pb-8 hairline-b">
            Privacy Policy
          </h1>

          <div className="pt-8 space-y-6 text-sm sm:text-base text-[#0D0E10]/80 font-light leading-relaxed">
            <p className="italic text-[#0D0E10]/60">
              {/* TODO: Standard privacy policy content covering data collection, use, storage, and user rights. To be reviewed by a legal professional. */}
              Standard privacy policy content covering data collection, use, storage, and user rights. To be reviewed by a legal professional.
            </p>

            <h2 className="font-serif text-xl text-[#0D0E10] pt-4">
              1. Information We Collect
            </h2>
            <p>
              KaiRose Interior Design and Technical Services LLC collects contact details (such as your full name, email address, phone number, and architectural floor preferences) submitted voluntarily through our consultation booking systems.
            </p>

            <h2 className="font-serif text-xl text-[#0D0E10] pt-4">
              2. Client Confidentiality Protocols
            </h2>
            <p>
              Given the high-profile nature of residences in Palm Jumeirah, Emirates Hills, and Downtown Dubai, all spatial plans, property valuations, and custom cabinetry blueprints are guarded under rigorous confidentiality protocols. We never share client records with unauthorized third parties.
            </p>

            <h2 className="font-serif text-xl text-[#0D0E10] pt-4">
              3. Data Retention and Rights
            </h2>
            <p>
              You maintain the absolute right to inspect, update, or request the deletion of your personal data stored within our records at any time by contacting hello@kairose.ae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
