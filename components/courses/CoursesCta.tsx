import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";

export default function CoursesCta() {
  return (
    <SectionContainer bg="secondary-dark" className="relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

        {/* Left content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#87CEEB] border border-white/20 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Admissions Open</span>
          </div>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Ready to Begin Your{" "}
            <span className="text-[#FFD166]">Teaching Journey?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-montserrat max-w-xl">
            Seats are limited in every batch. Secure your place today and train with Pakistan&apos;s most trusted name in Montessori teacher training.
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

          <p className="text-xs text-slate-300 pt-1">
            Admissions Helpline: +92 (300) 123-4567 &nbsp;|&nbsp; Mon–Sat, 9 AM – 5 PM
          </p>
        </div>

        {/* Right: Illustration Image */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-white/20 bg-white/10 backdrop-blur-md p-4">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop"
              alt="Trainees in a Montessori workshop"
              className="w-full h-[320px] sm:h-[360px] object-cover rounded-2xl"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FFD166] text-[#2C5F8A] flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </div>
              <div>
                <span className="font-poppins font-bold text-xs text-[#2C5F8A] block">100% Job-Oriented Programs</span>
                <span className="text-[11px] text-slate-600">Career support for every graduate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
