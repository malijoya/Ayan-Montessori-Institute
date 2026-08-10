"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface CourseFaqAccordionProps {
  faqs: FaqItem[];
}

export default function CourseFaqAccordion({ faqs }: CourseFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-white ${
              isOpen
                ? "border-[#2C5F8A] shadow-md ring-2 ring-[#87CEEB]/20"
                : "border-slate-200 hover:border-[#87CEEB]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? "bg-[#2C5F8A] text-white"
                      : "bg-[#87CEEB]/20 text-[#2C5F8A]"
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h3 className="font-poppins font-semibold text-base md:text-lg text-[#2C5F8A]">
                  {faq.question}
                </h3>
              </div>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 text-[#2C5F8A] shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-[#87CEEB]/30" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
