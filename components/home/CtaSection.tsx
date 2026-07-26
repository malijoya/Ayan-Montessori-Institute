import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import { ArrowRight, PhoneCall, Sparkles, HeartHandshake } from "lucide-react";

export default function CtaSection() {
  return (
    <SectionContainer bg="secondary-dark" className="relative overflow-hidden">
      {/* Background Decorative Blur Circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Side Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#87CEEB] border border-white/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open for Next Batch</span>
          </div>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Give Your Child the <span className="text-[#FFD166]">Best Start</span> Today
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-xl">
            Whether you are looking to enroll your child in an inspiring Montessori classroom or looking to launch a rewarding career in early childhood teaching, Ayan Montessori Institute is here to guide your path.
          </p>

          {/* Action Buttons */}
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

          {/* Support Helpline Note */}
          <p className="text-xs text-slate-300 flex items-center gap-2 pt-2">
            <HeartHandshake className="w-4 h-4 text-[#87CEEB]" />
            <span>Admissions Desk Helpline: +92 (300) 123-4567 | Mon – Sat (9AM – 5PM)</span>
          </p>
        </div>

        {/* Right Side Illustration Frame */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-white/20 bg-white/10 backdrop-blur-md p-4">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
              alt="Children Learning Illustration Frame"
              className="w-full h-[320px] sm:h-[360px] object-cover rounded-2xl"
            />
            
            {/* Floating Overlay Badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white text-slate-800 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#87CEEB] text-[#2C5F8A] flex items-center justify-center font-bold text-sm shrink-0">
                100%
              </div>
              <div>
                <span className="font-poppins font-bold text-xs text-[#2C5F8A] block">Nurturing Growth</span>
                <span className="text-[11px] text-slate-600">Child-centered environment & expert faculty</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
