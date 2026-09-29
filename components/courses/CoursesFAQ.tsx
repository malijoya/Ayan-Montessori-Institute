"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function CoursesFAQ() {
  const faqs = [
    {
      question: "Who can join AYAN Montessori Institute's courses?",
      answer:
        "Our programs are designed for adults — aspiring Montessori teachers, working teachers and teaching assistants, career switchers, parents, and professionals. No prior Montessori experience is required for our diplomas or certificate course.",
    },
    {
      question: "Which learning modes are available?",
      answer:
        "Depending on the course, you can study on campus, in hybrid batches (on-campus plus online), live on Zoom, or fully self-paced. Each course page lists its learning mode.",
    },
    {
      question: "What is the difference between the 6-month and 1-year diplomas?",
      answer:
        "The 6-month diploma covers core Montessori philosophy, apparatus handling, and classroom management. The 1-year diploma goes further, with extensive practical lab work, child psychology, and classroom leadership.",
    },
    {
      question: "Are certificates provided on completion?",
      answer:
        "Yes. Diploma graduates receive an AYAN Montessori Institute diploma, and certificate course, workshop, and Spoken English participants receive a certificate on successful completion.",
    },
    {
      question: "How do I enrol?",
      answer:
        "Choose your course, then contact our admissions team or submit an enquiry through the Contact page. Admissions will confirm the next intake, timings, and fees.",
    },
    {
      question: "Do you help graduates find teaching jobs?",
      answer:
        "Yes. Our programs are job-oriented, and we continuously source and share active teaching vacancies across our school network with our graduates.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our programs, learning modes, and enrolment."
      />

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-3 pr-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#87CEEB] text-[#2C5F8A]" : "bg-slate-100 text-slate-500"}`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="font-poppins font-semibold text-sm md:text-base text-[#2C5F8A]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#2C5F8A]" : ""}`}
                />
              </button>

              {/* Animated Answer Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/50">
                  <p className="text-sm text-slate-600 leading-relaxed font-montserrat pl-11">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
