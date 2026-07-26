"use client";

import { useState } from "react";
import { Filter } from "lucide-react";

interface FilterBarWireframeProps {
  categories?: string[];
  onSelectCategory?: (category: string) => void;
}

export default function FilterBarWireframe({
  categories = [
    "All Categories",
    "Teacher Training",
    "Early Childhood",
    "Child Psychology",
    "Elementary Pedagogy",
    "Special Education",
  ],
  onSelectCategory,
}: FilterBarWireframeProps) {
  const [active, setActive] = useState(categories[0]);

  const handleSelect = (cat: string) => {
    setActive(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-2 scrollbar-none max-w-full">
      <div className="flex items-center gap-2 shrink-0 pr-2 border-r border-slate-200 text-xs font-semibold text-slate-500">
        <Filter className="w-4 h-4 text-[#2C5F8A]" />
        <span>Filters:</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {categories.map((cat) => {
          const isSelected = active === cat;
          return (
            <button
              key={cat}
              onClick={() => handleSelect(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? "bg-[#2C5F8A] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
