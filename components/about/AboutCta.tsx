import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function AboutCta() {
  return (
    <SectionContainer bg="secondary-dark" className="relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#87CEEB] border border-white/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open</span>
          </div>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Join Our <span className="text-[#FFD166]">Learning Family</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-xl">
            Give your child the foundation for a lifetime of curiosity, independence, and achievement. Contact our admissions desk to schedule a personal campus tour today.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#FFD166] text-[#2C5F8A] font-bold text-sm md:text-base hover:bg-[#F8C346] hover:shadow-lg transition-all flex items-center gap-2 shadow-md group active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border-2 border-white/80 text-white font-bold text-sm md:text-base hover:bg-white hover:text-[#2C5F8A] transition-all flex items-center gap-2 shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-white/20 bg-white/10 backdrop-blur-md p-4">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
              alt="Children Reading Together"
              className="w-full h-[320px] sm:h-[360px] object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
