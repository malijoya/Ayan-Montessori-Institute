import React from "react";
import WireframeCard from "@/components/ui/WireframeCard";
import { Sparkles } from "lucide-react";

interface FacilityCardWireframeProps {
  title?: string;
  category?: string;
}

export default function FacilityCardWireframe({
  title = "Facility Title Wireframe",
  category = "Learning Environment",
}: FacilityCardWireframeProps) {
  return (
    <WireframeCard hoverEffect className="space-y-4">
      {/* Icon Wireframe Badge */}
      <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] flex items-center justify-center">
        <Sparkles className="w-6 h-6" />
      </div>

      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {category}
        </span>
        <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
          {title}
        </h3>
      </div>

      {/* Facility Description Wireframe Skeleton */}
      <div className="space-y-1.5 py-1">
        <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
        <div className="h-2.5 bg-slate-200 rounded-full w-5/6"></div>
        <div className="h-2.5 bg-slate-200 rounded-full w-2/3"></div>
      </div>

      {/* Feature Bullet List Skeleton */}
      <div className="space-y-2 pt-2 border-t border-slate-100">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FFD166]"></div>
            <div className="h-2 bg-slate-200 rounded-full w-3/4"></div>
          </div>
        ))}
      </div>
    </WireframeCard>
  );
}
