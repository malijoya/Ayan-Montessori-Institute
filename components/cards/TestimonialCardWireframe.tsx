import React from "react";
import WireframeCard from "@/components/ui/WireframeCard";
import WireframeBadge from "@/components/ui/WireframeBadge";
import { Quote, Star, User } from "lucide-react";

interface TestimonialCardWireframeProps {
  type?: "Parent" | "Student" | "Alumni";
  author?: string;
  relation?: string;
  rating?: number;
}

export default function TestimonialCardWireframe({
  type = "Parent",
  author = "Testimonial Author Name",
  relation = "Mother of 4yo Student",
  rating = 5,
}: TestimonialCardWireframeProps) {
  return (
    <WireframeCard hoverEffect className="flex flex-col justify-between h-full relative">
      <Quote className="w-10 h-10 text-[#87CEEB]/30 absolute top-4 right-4" />
      
      <div className="space-y-4">
        {/* Rating Stars Wireframe */}
        <div className="flex items-center gap-1 text-[#FFD166]">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Badge */}
        <div>
          <WireframeBadge label={`${type} Feedback`} variant={type === "Parent" ? "primary" : "accent"} />
        </div>

        {/* Testimonial Quote Lines Skeleton */}
        <div className="space-y-2 py-2">
          <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
          <div className="h-2.5 bg-slate-200 rounded-full w-11/12"></div>
          <div className="h-2.5 bg-slate-200 rounded-full w-4/5"></div>
          <div className="h-2.5 bg-slate-200 rounded-full w-2/3"></div>
        </div>
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-100">
        <div className="w-11 h-11 rounded-full wireframe-block flex items-center justify-center text-slate-400 shrink-0">
          <User className="w-5 h-5 text-slate-300" />
        </div>
        <div>
          <h4 className="font-poppins font-semibold text-sm text-[#2C5F8A]">
            {author}
          </h4>
          <p className="text-xs text-slate-500">{relation}</p>
        </div>
      </div>
    </WireframeCard>
  );
}
