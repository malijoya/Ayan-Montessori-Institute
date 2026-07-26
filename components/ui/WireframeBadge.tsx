import React from "react";

interface WireframeBadgeProps {
  label: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "neutral";
  size?: "sm" | "md";
}

export default function WireframeBadge({
  label,
  variant = "primary",
  size = "sm",
}: WireframeBadgeProps) {
  const variantClasses = {
    primary: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    secondary: "bg-[#2C5F8A] text-white border-[#2C5F8A]",
    accent: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    outline: "bg-transparent text-slate-700 border-slate-300",
    neutral: "bg-slate-100 text-slate-700 border-slate-200",
  };

  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs font-semibold",
    md: "px-3 py-1 text-sm font-semibold",
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border ${variantClasses[variant]} ${sizeClasses[size]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
      <span>{label}</span>
    </span>
  );
}
