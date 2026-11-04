import React from "react";

interface RuleProps {
  orientation?: "horizontal" | "vertical";
  dark?: boolean;
  className?: string;
}

export function Rule({ orientation = "horizontal", dark = false, className = "" }: RuleProps) {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={`w-[1px] h-full ${dark ? "bg-[rgba(214,204,187,0.2)]" : "bg-[#D6CCBB]"} ${className}`}
      />
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={`h-[1px] w-full ${dark ? "bg-[rgba(214,204,187,0.2)]" : "bg-[#D6CCBB]"} ${className}`}
    />
  );
}
