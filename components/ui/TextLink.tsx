import React from "react";
import Link from "next/link";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "brass" | "ink" | "light";
  className?: string;
  external?: boolean;
}

export function TextLink({
  href,
  children,
  variant = "brass",
  className = "",
  external = false,
}: TextLinkProps) {
  const colorMap = {
    brass: "text-[#A98A56] hover:text-[#927546]",
    ink: "text-[#0D0E10] hover:text-[#A98A56]",
    light: "text-[#F4F1EA] hover:text-[#A98A56]",
  };

  const lineBg = variant === "light" ? "bg-[#A98A56]" : "bg-[#A98A56]";

  const content = (
    <span
      className={`group relative inline-flex items-center gap-1.5 text-sm tracking-wide transition-colors duration-300 ${colorMap[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden="true"
        className={`absolute bottom-[-2px] left-0 h-[1px] w-full ${lineBg} origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-110`}
      />
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={href}>{content}</Link>;
}
