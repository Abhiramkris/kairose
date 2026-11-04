import React from "react";
import Image from "next/image";

interface MediaFrameProps {
  src: string;
  alt: string;
  aspectRatio?: "4/5" | "16/9" | "21/9" | "1/1" | "3/2" | "auto";
  priority?: boolean;
  captionTitle?: string;
  captionSubtitle?: string;
  className?: string;
  sizes?: string;
}

export function MediaFrame({
  src,
  alt,
  aspectRatio = "4/5",
  priority = false,
  captionTitle,
  captionSubtitle,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: MediaFrameProps) {
  const aspectClass = {
    "4/5": "aspect-[4/5]",
    "16/9": "aspect-[16/9]",
    "21/9": "aspect-[21/9]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
    "auto": "aspect-auto",
  }[aspectRatio];

  return (
    <div className={`group block relative overflow-hidden bg-[#E4DCCD] rounded-[2px] ${className}`}>
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover film-grade transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {(captionTitle || captionSubtitle) && (
        <div className="pt-3 pb-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          {captionTitle && (
            <h3 className="font-serif text-lg text-[#0D0E10] font-normal tracking-tight">
              {captionTitle}
            </h3>
          )}
          {captionSubtitle && (
            <p className="text-xs uppercase tracking-[0.14em] text-[#A98A56] mt-0.5">
              {captionSubtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
