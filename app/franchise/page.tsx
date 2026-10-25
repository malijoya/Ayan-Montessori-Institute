import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sparkles, ArrowRight, Store, ShieldCheck, GraduationCap, CheckCircle2, PhoneCall, Award } from "lucide-react";

export const metadata = {
  title: "Franchise & Institutional Partnership | AYAN Montessori Institute",
  description: "Join hands with AYAN Montessori Institute. Launch an authorized teacher training center or integrate authentic Montessori systems into your school.",
};

export default function FranchisePage() {
  const models = [
    {
      title: "Teacher Training Center Franchise",
      desc: "Open an authorized AYAN Montessori training center in your city. Deliver certified diploma courses backed by our curriculum, exam systems, and certification.",
      icon: Store,
      badge: "Flagship Model",
    },
    {
      title: "School Montessori Lab Integration",
      desc: "Transform your existing preschool or school branch with certified wooden Montessori apparatus, lab planning, and comprehensive classroom setups.",
      icon: GraduationCap,
      badge: "School Partners",
    },
    {
      title: "In-House Faculty Training",
      desc: "Custom on-campus training workshops and certification modules designed exclusively for your school's early childhood teachers.",
      icon: Award,
      badge: "Corporate & Institutional",
    },
  ];

  const benefits = [
    "17+ Year Legacy of Proven Educational Excellence",
    "Comprehensive Curriculum Guides, Manuals & Lesson Plans",
    "Live Zoom Masterclasses & YouTube Video Archive Access",
    "Centralized Examination & Verified Certification System",
    "Dedicated Marketing, Brand Assets & Student Inflow Support",
    "Continuous Quality Assurance & Master Trainer Mentorship",
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E0F2FE]/60 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-[#2C5F8A]" />
              <span>PARTNERSHIP OPPORTUNITY</span>
            </div>

            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C5F8A] tracking-tight leading-[1.15]">
              AYAN Montessori <span className="text-[#2C5F8A] underline decoration-[#FFD166] decoration-wavy decoration-4">Franchise Program</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Partner with Pakistan&apos;s leading Montessori Teacher Training network. Bring authentic international early education standards, apparatus mastery, and job-oriented diplomas to your community.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#2C5F8A] text-white font-bold text-sm md:text-base hover:bg-[#87CEEB] hover:text-[#2C5F8A] hover:shadow-lg transition-all flex items-center gap-2 group shadow-sm active:scale-95"
              >
                <span>Apply for Franchise Information</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise & Partnership Models */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="COLLABORATION MODELS"
          title="Choose the Right Model for Your Institution"
          subtitle="Whether you are an edupreneur looking to launch a campus or a school owner upgrading your faculty, we have tailored partnership tracks."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => {
            const Icon = model.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] border border-[#87CEEB]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold text-[#2C5F8A] px-3 py-1 bg-slate-100 rounded-full">
                      {model.badge}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-[#2C5F8A]">
                    {model.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-[#2C5F8A] flex items-center gap-1.5 hover:text-[#87CEEB] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* What AYAN Provides */}
      <SectionContainer bg="surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87CEEB]/20 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>FULL ECOSYSTEM SUPPORT</span>
            </div>

            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
              Everything You Need to Run a World-Class Institute
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Franchisees and institutional partners receive complete 360-degree support from curriculum planning and apparatus procurement to teacher manuals, exam systems, and continuous marketing backing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-700">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-montessori-lg space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FFD166]/30 text-[#8F6500] border border-[#FFD166] flex items-center justify-center mx-auto">
                <Store className="w-8 h-8" />
              </div>

              <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                Ready to Partner With Us?
              </h3>

              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                Speak directly with our institutional director to evaluate territorial availability and franchise investment options.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C5F8A] hover:bg-[#87CEEB] text-white hover:text-[#2C5F8A] font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Inquire Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
