"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
}

interface FAQAccordionWireframeProps {
  items?: FAQItem[];
}

export default function FAQAccordionWireframe({
  items = [
    { id: 1, question: "What are the eligibility requirements for Montessori Teacher Training?" },
    { id: 2, question: "How long are the course modules and what is the schedule?" },
    { id: 3, question: "Are diplomas internationally recognized by Montessori boards?" },
    { id: 4, question: "Is hands-on lab environment practice provided during training?" },
    { id: 5, question: "What job placement support does Ayan Montessori Institute offer?" },
  ],
}: FAQAccordionWireframeProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="font-poppins font-semibold text-[#2C5F8A] text-sm md:text-base">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#2C5F8A]" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50 space-y-2">
                <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                <div className="h-2.5 bg-slate-200 rounded-full w-11/12"></div>
                <div className="h-2.5 bg-slate-200 rounded-full w-3/4"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
