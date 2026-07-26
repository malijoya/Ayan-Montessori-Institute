import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "surface" | "primary-light" | "secondary-dark";
}

export default function SectionContainer({
  children,
  className = "",
  id,
  bg = "white",
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white text-slate-800",
    surface: "bg-slate-50 text-slate-800 border-y border-slate-100",
    "primary-light": "bg-[#E0F2FE]/50 text-slate-800 border-y border-[#87CEEB]/20",
    "secondary-dark": "bg-[#2C5F8A] text-white",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
