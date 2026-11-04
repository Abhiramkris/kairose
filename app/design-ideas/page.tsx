import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Design Ideas Gallery | Curated Luxury Interiors Dubai",
  description:
    "Browse our collection of bespoke interiors. Filter by room, style, or popularity across contemporary, Art Deco, and minimal aesthetics.",
};

export default function DesignIdeasPage() {
  return <GalleryClient />;
}
