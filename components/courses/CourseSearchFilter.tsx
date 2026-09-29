"use client";

import { Search, ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import { courses, programTypeLabels, type CourseProgramType } from "@/lib/courseData";

export interface CourseFilters {
  search: string;
  category: CourseProgramType | "";
  mode: string;
  duration: string;
}

export const emptyCourseFilters: CourseFilters = {
  search: "",
  category: "",
  mode: "",
  duration: "",
};

// Filter options are derived from the course catalog so they never drift from it
const modes = Array.from(new Set(courses.map((c) => c.mode)));
const durations = Array.from(new Set(courses.map((c) => c.duration)));

interface CourseSearchFilterProps {
  filters: CourseFilters;
  onChange: (filters: CourseFilters) => void;
  resultCount: number;
}

export default function CourseSearchFilter({ filters, onChange, resultCount }: CourseSearchFilterProps) {
  const update = (patch: Partial<CourseFilters>) => onChange({ ...filters, ...patch });

  return (
    <div className="mb-10">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-[#2C5F8A]" />
          <h2 className="font-poppins font-bold text-lg text-[#2C5F8A]">Search & Filter Courses</h2>
        </div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] text-sm font-bold">
          <span>{resultCount}</span>
          <span className="font-medium text-slate-500">
            {resultCount === 1 ? "course" : "courses"} available
          </span>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="bg-slate-50 rounded-3xl border border-slate-100 p-5 sm:p-6 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            placeholder="Search courses by name, topic, or keyword..."
            aria-label="Search courses"
            className="w-full bg-white border border-slate-200 rounded-full text-slate-800 text-sm pl-12 pr-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-transparent transition-all placeholder:text-slate-400 shadow-sm"
          />
        </div>

        {/* Dropdown Filters + Reset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Category */}
          <div className="relative">
            <select
              value={filters.category}
              onChange={(e) => update({ category: e.target.value as CourseFilters["category"] })}
              aria-label="Filter by category"
              className="w-full bg-white border border-slate-200 rounded-full text-sm text-slate-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              {(Object.keys(programTypeLabels) as CourseProgramType[]).map((key) => (
                <option key={key} value={key}>{programTypeLabels[key]}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Mode */}
          <div className="relative">
            <select
              value={filters.mode}
              onChange={(e) => update({ mode: e.target.value })}
              aria-label="Filter by learning mode"
              className="w-full bg-white border border-slate-200 rounded-full text-sm text-slate-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none cursor-pointer"
            >
              <option value="">All Learning Modes</option>
              {modes.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Duration */}
          <div className="relative">
            <select
              value={filters.duration}
              onChange={(e) => update({ duration: e.target.value })}
              aria-label="Filter by duration"
              className="w-full bg-white border border-slate-200 rounded-full text-sm text-slate-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none cursor-pointer"
            >
              <option value="">All Durations</option>
              {durations.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Reset Button */}
          <button
            type="button"
            onClick={() => onChange(emptyCourseFilters)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-[#2C5F8A] hover:text-[#2C5F8A] transition-all group cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
