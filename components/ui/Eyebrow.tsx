import React from "react";

interface EyebrowProps {
  number?: string;
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ number, children, className = "" }: EyebrowProps) {
  return (
    <div className={`eyebrow mb-3 select-none ${className}`}>
      {number && <span className="text-[#A98A56] font-medium tracking-widest">{number} —</span>}
      <span className="text-[#A98A56] uppercase tracking-[0.18em] font-medium text-[11px]">
        {children}
      </span>
    </div>
  );
}
