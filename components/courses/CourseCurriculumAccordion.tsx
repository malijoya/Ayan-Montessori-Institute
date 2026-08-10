"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { CourseModule } from "@/lib/courseData";

interface CourseCurriculumAccordionProps {
  modules: CourseModule[];
}

export default function CourseCurriculumAccordion({
  modules,
}: CourseCurriculumAccordionProps) {
  // Open the first module by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {modules.map((mod, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#2C5F8A] bg-white shadow-md"
                : "border-slate-200 bg-white hover:border-[#87CEEB]"
            }`}
          >
            {/* Accordion Header */}
            <button
              type="button"
              onClick={() => toggleModule(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-poppins font-bold text-sm transition-colors ${
                    isOpen
                      ? "bg-[#2C5F8A] text-white"
                      : "bg-[#87CEEB]/20 text-[#2C5F8A]"
                  }`}
                >
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-base md:text-lg text-[#2C5F8A]">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {mod.lessons.length} Lessons & Hands-on Activities
                  </p>
                </div>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 text-[#2C5F8A] transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#87CEEB]/30" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {/* Accordion Body */}
            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {mod.lessons.map((lesson, lIdx) => (
                    <li
                      key={lIdx}
                      className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs hover:border-[#87CEEB]/50 transition-all"
                    >
                      <CheckCircle className="w-4 h-4 text-[#87CEEB] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">
                        {lesson}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
