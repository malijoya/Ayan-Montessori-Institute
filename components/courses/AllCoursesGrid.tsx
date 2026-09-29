"use client";

import { useState } from "react";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, Users, ArrowRight, BarChart3 } from "lucide-react";
import { courses, type CourseProgramType } from "@/lib/courseData";
import CourseSearchFilter, { emptyCourseFilters, type CourseFilters } from "./CourseSearchFilter";

const badgeColors: Record<CourseProgramType, string> = {
  diplomas: "bg-[#87CEEB]/20 text-[#2C5F8A]",
  short: "bg-[#FFD166]/30 text-[#8F6500]",
  skills: "bg-[#2C5F8A]/10 text-[#2C5F8A]",
};

export default function AllCoursesGrid() {
  const [filters, setFilters] = useState<CourseFilters>(emptyCourseFilters);

  const query = filters.search.trim().toLowerCase();
  const visibleCourses = courses.filter(
    (course) =>
      (!filters.category || course.programType === filters.category) &&
      (!filters.mode || course.mode === filters.mode) &&
      (!filters.duration || course.duration === filters.duration) &&
      (!query ||
        [course.title, course.badge, course.category, course.shortDescription, course.format]
          .join(" ")
          .toLowerCase()
          .includes(query))
  );
  return (
    <SectionContainer bg="white" id="all-courses">
      <SectionHeader
        badge="Complete Catalogue"
        title="All Courses & Programmes"
        subtitle="Browse our full range of Montessori diplomas, certificate courses, workshops, and professional skills programmes."
        align="left"
      />

      <CourseSearchFilter filters={filters} onChange={setFilters} resultCount={visibleCourses.length} />

      {visibleCourses.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-100">
          <p className="text-sm text-slate-600">No courses match your filters.</p>
          <button
            type="button"
            onClick={() => setFilters(emptyCourseFilters)}
            className="mt-4 px-5 py-2.5 rounded-full bg-[#2C5F8A] text-white text-xs font-bold hover:bg-[#224B6E] transition-all cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${badgeColors[course.programType]}`}>
                  {course.badge}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3 flex flex-col flex-1">
              <h3 className="font-poppins font-bold text-base text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug line-clamp-2">
                {course.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-montserrat line-clamp-2">
                {course.shortDescription}
              </p>

              {/* Meta */}
              <div className="grid grid-cols-3 gap-1.5 text-[10px] font-semibold text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex flex-col items-center bg-slate-50 px-2 py-1.5 rounded-xl gap-0.5">
                  <Users className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  <span className="text-center leading-tight">{course.ageGroup}</span>
                </div>
                <div className="flex flex-col items-center bg-slate-50 px-2 py-1.5 rounded-xl gap-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  <span className="text-center leading-tight">{course.duration}</span>
                </div>
                <div className="flex flex-col items-center bg-slate-50 px-2 py-1.5 rounded-xl gap-0.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  <span className="text-center leading-tight">{course.level}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full py-2.5 rounded-full bg-slate-100 text-[#2C5F8A] font-bold text-xs hover:bg-[#87CEEB] transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
