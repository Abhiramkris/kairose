import type { Metadata } from "next";
import { TestimonialsClient } from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Client Testimonials & Stories | KaiRose Luxury Interiors",
  description:
    "Voices of KaiRose. Real homes, real stories. Watch verified client films from Palm Jumeirah, Emirates Hills, and Downtown Dubai.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
