"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function CoursesFAQ() {
  const faqs = [
    {
      question: "Which age groups are accepted at Ayan Montessori Institute?",
      answer:
        "We welcome children from as young as 2.5 years through to age 14 across our various programmes. Our Montessori early learning programmes cater to ages 2.5–6, while our enrichment and specialised courses accept children up to age 14. Our educator diploma programmes are open to adults of all ages.",
    },
    {
      question: "How do I enrol my child in a course?",
      answer:
        "Enrolment is simple. Browse our course catalogue, select your preferred programme, and either visit our campus or submit your application online. Our admissions team will contact you within 48 hours to confirm your child's place and schedule an orientation session.",
    },
    {
      question: "Are certificates provided upon course completion?",
      answer:
        "Yes. All students who complete a programme receive an official Ayan Montessori Institute certificate of completion. Diploma-level teacher training graduates receive an internationally recognised Montessori teaching diploma accredited by our academic board.",
    },
    {
      question: "Can parents visit the campus before enrolment?",
      answer:
        "Absolutely! We encourage all parents to schedule a guided campus tour before enrolling. You can explore our classrooms, meet our teaching staff, and observe our Montessori environment in action. Tours are available Monday through Saturday by appointment.",
    },
    {
      question: "Are trial or demo classes available?",
      answer:
        "Yes, we offer a complimentary one-day trial session for new students. This helps children settle in comfortably and allows parents to assess whether the programme is the right fit before making a full commitment.",
    },
    {
      question: "What teaching methodology is used at Ayan Montessori?",
      answer:
        "We follow the authentic Maria Montessori pedagogical framework, which centres on child-led learning, hands-on materials, freedom within structured boundaries, and individualised progression. Our classrooms are carefully prepared environments that promote independence, concentration, and joyful discovery.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Everything parents need to know about our programmes, enrolment process, and classroom experience."
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
                  <p className="text-sm text-slate-600 leading-relaxed font-sans pl-11">
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
