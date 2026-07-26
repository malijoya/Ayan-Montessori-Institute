import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen, GraduationCap, Star, Pencil } from "lucide-react";

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E0F2FE]/60 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
      {/* Background blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#2C5F8A]/8 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT: Content */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Our Courses</span>
            </div>

            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C5F8A] tracking-tight leading-[1.15]">
              Discover the Right Course for Every{" "}
              <span className="underline decoration-[#FFD166] decoration-wavy decoration-4">
                Stage of Learning
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
              From our authentic Montessori early learning programmes to specialist teacher training diplomas, every course at Ayan Montessori Institute is crafted to inspire curiosity, build confidence, and lay strong academic foundations.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-sm md:text-base hover:bg-[#70BDDF] hover:shadow-lg transition-all flex items-center gap-2 group shadow-sm active:scale-95"
              >
                <span>Enrol Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              {[
                { val: "12+", label: "Programmes" },
                { val: "6", label: "Categories" },
                { val: "500+", label: "Graduates" },
              ].map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-poppins font-extrabold text-2xl text-[#2C5F8A]">{s.val}</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Image + Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#87CEEB] via-[#FFD166] to-[#2C5F8A] opacity-30 blur-lg"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-white bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
                  alt="Children Learning Together at Ayan Montessori"
                  className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/40 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FFD166] text-[#2C5F8A] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2C5F8A] block">Expert-Led Programmes</span>
                    <span className="text-[11px] text-slate-500">Certified Montessori methodology</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-montessori border border-slate-100 flex items-center gap-3 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/30 text-[#2C5F8A] flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C5F8A] block">12+ Courses</span>
                  <span className="text-[10px] text-slate-500">All age groups covered</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-montessori border border-slate-100 flex items-center gap-3 animate-float-medium z-20">
                <div className="w-10 h-10 rounded-xl bg-[#FFD166]/40 text-[#8F6500] flex items-center justify-center">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C5F8A] block">4.9 / 5 Rating</span>
                  <span className="text-[10px] text-slate-500">Parent satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
