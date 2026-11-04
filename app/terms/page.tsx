import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Terms & Conditions | KaiRose",
  description: "Standard terms and conditions covering service agreements, payment terms, and warranties at KaiRose.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[#F4F1EA]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="max-w-[68ch] mx-auto">
          <Eyebrow>Agreement</Eyebrow>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#0D0E10] tracking-tight mt-2 pb-8 hairline-b">
            Terms & Conditions
          </h1>

          <div className="pt-8 space-y-6 text-sm sm:text-base text-[#0D0E10]/80 font-light leading-relaxed">
            <p className="italic text-[#0D0E10]/60">
              {/* TODO: Standard terms and conditions covering service agreements, payment terms, project timelines, warranties, and liability. To be reviewed by a legal professional. */}
              Standard terms and conditions covering service agreements, payment terms, project timelines, warranties, and liability. To be reviewed by a legal professional.
            </p>

            <h2 className="font-serif text-xl text-[#0D0E10] pt-4">
              1. Commission & Service Scope
            </h2>
            <p>
              All architectural joinery, 3D visualizations, space planning, and fit-out operations executed by KaiRose are governed by bespoke bilateral project contracts finalized prior to procurement.
            </p>

            <h2 className="font-serif text-xl text-[#0D0E10] pt-4">
              2. Timelines and Guarantees
            </h2>
            <p>
              Our 45-day Move-in Guarantee for modular solutions and 90-day benchmark for comprehensive home interiors commence upon final approval of civil drawings and site access clearance. Conditions apply in accordance with building management guidelines.
            </p>

            <h2 className="font-serif text-xl text-[#0D0E10] pt-4">
              3. 10-Year Craftsmanship Warranty
            </h2>
            <p>
              Custom joinery, cabinetry hardware, and monolithic stone fabrications delivered under our turnkey agreements carry a 10-Year Craftsmanship Warranty against manufacturing defects and structural fatigue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
