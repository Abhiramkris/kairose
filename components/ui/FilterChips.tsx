"use client";

import React from "react";

interface FilterChipsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
  className?: string;
}

export function FilterChips({
  categories,
  activeCategory,
  onSelect,
  className = "",
}: FilterChipsProps) {
  return (
    <div
      role="tablist"
      className={`flex flex-wrap items-center gap-6 sm:gap-8 pb-3 hairline-b ${className}`}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(cat)}
            className={`relative pb-2 text-xs uppercase tracking-[0.18em] transition-colors duration-200 cursor-pointer ${
              isActive
                ? "text-[#0D0E10] font-medium"
                : "text-[#0D0E10]/50 hover:text-[#0D0E10]"
            }`}
          >
            {cat}
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 w-full h-[1.5px] bg-[#A98A56]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
