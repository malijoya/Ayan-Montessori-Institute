import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignmentClasses[align]}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
          light 
            ? "bg-white/20 text-[#87CEEB] border border-white/30" 
            : "bg-[#87CEEB]/20 text-[#2C5F8A] border border-[#87CEEB]/40"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-poppins font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4 ${
        light ? "text-white" : "text-[#2C5F8A]"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? "text-slate-200" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      )}
      
      {/* Wireframe Placeholder Indicator Bar */}
      <div className="flex items-center gap-1.5 mt-3">
        <div className="w-8 h-1 rounded-full bg-[#87CEEB]"></div>
        <div className="w-2.5 h-1 rounded-full bg-[#FFD166]"></div>
        <div className="w-1.5 h-1 rounded-full bg-[#2C5F8A]"></div>
      </div>
    </div>
  );
}
