import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import { Star, Quote, ArrowRight } from "lucide-react";

export default function FeaturedTestimonial() {
  return (
    <SectionContainer bg="surface">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-montessori-lg relative overflow-hidden space-y-6">
          <Quote className="w-20 h-20 text-[#87CEEB]/20 absolute top-4 right-6 pointer-events-none" />

          <div className="flex items-center gap-1 text-[#FFD166]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans italic relative z-10">
            "Ayan Montessori Institute has completely transformed my child's learning journey. The warmth of the teachers, the authentic Montessori apparatus, and the focus on fostering independence are unmatched. My daughter looks forward to going to school every single morning!"
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                alt="Parent Featured Reviewer"
                className="w-14 h-14 rounded-full object-cover ring-4 ring-[#87CEEB]/30 shadow-sm"
              />
              <div>
                <h4 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                  Mrs. Saima Ali
                </h4>
                <p className="text-xs text-slate-500 font-semibold">
                  Mother of Hamza (Age 4) — Primary Montessori Level
                </p>
              </div>
            </div>

            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-xs hover:bg-[#70BDDF] transition-all shadow-sm group"
            >
              <span>Read More Testimonials</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
