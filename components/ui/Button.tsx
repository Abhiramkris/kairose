import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline-dark" | "outline-light";
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  // Border-radius strictly capped at 2px or square. No pills. No drop shadows.
  const baseClasses =
    "inline-flex items-center justify-center text-xs uppercase tracking-[0.18em] px-6 py-4 font-medium transition-all duration-300 rounded-[2px] disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

  const variantClasses = {
    primary:
      "bg-[#0D0E10] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10] border border-[#0D0E10] hover:border-[#A98A56]",
    secondary:
      "bg-[#E4DCCD] text-[#0D0E10] hover:bg-[#D6CCBB] border border-[#D6CCBB]",
    "outline-dark":
      "border border-[#0D0E10] text-[#0D0E10] hover:bg-[#0D0E10] hover:text-[#F4F1EA]",
    "outline-light":
      "border border-[#A98A56] text-[#F4F1EA] hover:bg-[#A98A56] hover:text-[#0D0E10]",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
}
