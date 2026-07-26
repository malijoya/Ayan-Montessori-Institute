import React from "react";
import Link from "next/link";
import WireframeCard from "@/components/ui/WireframeCard";
import WireframeBadge from "@/components/ui/WireframeBadge";
import { Clock, Users, ArrowRight, Image as ImageIcon } from "lucide-react";

interface CourseCardWireframeProps {
  title?: string;
  category?: string;
  duration?: string;
  ageGroup?: string;
  courseId?: string | number;
}

export default function CourseCardWireframe({
  title = "Course Title Wireframe Placeholder",
  category = "Montessori Pedagogy",
  duration = "6 Months / 120 Hours",
  ageGroup = "3 - 6 Years Focus",
  courseId = "1",
}: CourseCardWireframeProps) {
  return (
    <WireframeCard hoverEffect borderAccent className="flex flex-col justify-between h-full">
      <div className="space-y-4">
        {/* Media / Image Placeholder Slot */}
        <div className="w-full h-44 rounded-2xl wireframe-block flex flex-col items-center justify-center gap-2 text-slate-400">
          <ImageIcon className="w-8 h-8 text-slate-300" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Course Banner Media
          </span>
        </div>

        {/* Category Tag */}
        <div className="flex items-center justify-between">
          <WireframeBadge label={category} variant="primary" />
          <span className="text-xs font-medium text-[#2C5F8A] bg-slate-100 px-2.5 py-1 rounded-full">
            ID: #{courseId}
          </span>
        </div>

        {/* Title Wireframe */}
        <h3 className="font-poppins font-bold text-lg text-[#2C5F8A] line-clamp-2">
          {title}
        </h3>

        {/* Description Wireframe Skeleton */}
        <div className="space-y-1.5 py-1">
          <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
          <div className="h-2.5 bg-slate-200 rounded-full w-5/6"></div>
          <div className="h-2.5 bg-slate-200 rounded-full w-3/4"></div>
        </div>

        {/* Course Metadata Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl">
            <Clock className="w-3.5 h-3.5 text-[#2C5F8A]" />
            <span className="truncate">{duration}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl">
            <Users className="w-3.5 h-3.5 text-[#2C5F8A]" />
            <span className="truncate">{ageGroup}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-slate-400">Certification</span>
          <span className="text-xs font-semibold text-[#2C5F8A]">Diploma Track</span>
        </div>
        <Link
          href={`/courses/${courseId}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2C5F8A] text-white text-xs font-semibold hover:bg-[#87CEEB] hover:text-[#2C5F8A] transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </WireframeCard>
  );
}
