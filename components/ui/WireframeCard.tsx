import React from "react";

interface WireframeCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderAccent?: boolean;
}

export default function WireframeCard({
  children,
  className = "",
  hoverEffect = true,
  borderAccent = false,
}: WireframeCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl border border-slate-100 p-6 md:p-7 shadow-sm transition-all duration-300 ${
        hoverEffect ? "hover:shadow-xl hover:-translate-y-1 hover:border-[#87CEEB]/30" : ""
      } ${borderAccent ? "border-t-4 border-t-[#87CEEB]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
