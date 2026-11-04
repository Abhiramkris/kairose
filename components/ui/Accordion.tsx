"use client";

import React, { useState } from "react";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full hairline-t">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div key={index} className="hairline-b group">
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full py-6 flex items-start justify-between gap-6 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A98A56]"
            >
              <span className="font-serif text-lg md:text-xl text-[#0D0E10] group-hover:text-[#A98A56] transition-colors duration-200">
                {item.question}
              </span>

              {/* Handcrafted CSS lines for plus/minus — no icon fonts */}
              <span
                aria-hidden="true"
                className="relative mt-2.5 w-4 h-4 flex-shrink-0 flex items-center justify-center text-[#0D0E10]"
              >
                {/* Horizontal line */}
                <span className="absolute w-3.5 h-[1px] bg-current" />
                {/* Vertical line (rotates/scales out when open) */}
                <span
                  className={`absolute w-3.5 h-[1px] bg-current transition-transform duration-300 ${
                    isOpen ? "rotate-90 opacity-0" : "rotate-90 opacity-100"
                  }`}
                />
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base leading-relaxed text-[#0D0E10]/80 pr-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
