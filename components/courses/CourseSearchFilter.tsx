"use client";

import { useState } from "react";
import { Search, ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";

export default function CourseSearchFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [duration, setDuration] = useState("");

  const reset = () => {
    setSearch("");
    setCategory("");
    setAgeGroup("");
    setDuration("");
  };

  const categories = ["Early Learning", "Language Courses", "Islamic Studies", "Technology", "Arts & Creativity", "STEM Education"];
  const ageGroups = ["Ages 2–4", "Ages 3–6", "Ages 5–9", "Ages 6–12", "Adult/Trainer"];
  const durations = ["4 Weeks", "6 Weeks", "3 Months", "6 Months", "1 Year"];

  return (
    <section className="bg-white py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-[#2C5F8A]" />
            <h2 className="font-poppins font-bold text-lg text-[#2C5F8A]">Search & Filter Courses</h2>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] text-sm font-bold">
            <span>12</span>
            <span className="font-medium text-slate-500">courses available</span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="bg-slate-50 rounded-3xl border border-slate-100 p-5 sm:p-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses by name, topic, or keyword..."
              className="w-full bg-white border border-slate-200 rounded-full text-slate-800 text-sm pl-12 pr-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] focus:border-transparent transition-all placeholder:text-slate-400 shadow-sm"
            />
          </div>

          {/* Dropdown Filters + Reset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Category */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full text-sm text-slate-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Age Group */}
            <div className="relative">
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full text-sm text-slate-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none cursor-pointer"
              >
                <option value="">All Age Groups</option>
                {ageGroups.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Duration */}
            <div className="relative">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full text-sm text-slate-700 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none cursor-pointer"
              >
                <option value="">All Durations</option>
                {durations.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>

            {/* Reset Button */}
            <button
              onClick={reset}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-[#2C5F8A] hover:text-[#2C5F8A] transition-all group"
            >
              <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
