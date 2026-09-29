"use client";

import { useState } from "react";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, User, Zap, Monitor, ArrowRight, type LucideIcon } from "lucide-react";
import { courses, type CourseFormatIcon, type CourseProgramType } from "@/lib/courseData";

type CourseFilter = "all" | CourseProgramType;

const filters: { id: CourseFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "diplomas", label: "Montessori Diplomas" },
  { id: "short", label: "Short Courses" },
  { id: "skills", label: "Professional Skills" },
];

const formatIcons: Record<CourseFormatIcon, LucideIcon> = {
  trainer: User,
  "self-paced": Zap,
  online: Monitor,
};

const badgeColors = [
  "bg-[#87CEEB]/20 text-[#2C5F8A]",
  "bg-[#FFD166]/40 text-[#8F6500]",
  "bg-[#2C5F8A]/10 text-[#2C5F8A]",
];

export default function FeaturedCourses() {
  const [activeFilter, setActiveFilter] = useState<CourseFilter>("all");

  const visibleCourses =
    activeFilter === "all" ? courses : courses.filter((course) => course.programType === activeFilter);

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Academic & Professional Programs"
        title="Our Featured Courses"
        subtitle="Professional diplomas, certifications, and skill-building programs designed for aspiring educators, teachers, and professionals."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 -mt-4 mb-10" role="tablist" aria-label="Filter courses">
        {filters.map((filter) => {
          const active = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
                active
                  ? "bg-[#2C5F8A] text-white border-[#2C5F8A] shadow-md"
                  : "bg-white text-[#2C5F8A] border-slate-200 hover:border-[#87CEEB] hover:bg-[#87CEEB]/10"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleCourses.map((course) => {
          const FormatIcon = formatIcons[course.formatIcon];
          const badgeColor = badgeColors[(course.id - 1) % badgeColors.length];
          return (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Course Banner Image Container */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${badgeColor} backdrop-blur-md shadow-sm`}>
                      {course.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-montserrat">
                    {course.shortDescription}
                  </p>

                  {/* Course Meta Fields */}
                  <div className="space-y-2 pt-3 text-xs text-slate-600 border-t border-slate-100">
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                      <Clock className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl">
                      <FormatIcon className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                      <span className="font-medium">{course.format}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* View Details Button Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full py-3 rounded-full bg-slate-100 text-[#2C5F8A] font-semibold text-xs hover:bg-[#87CEEB] hover:text-[#2C5F8A] transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
