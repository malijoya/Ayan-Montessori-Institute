import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sparkles, ArrowRight, Briefcase, FileCheck, Users, Megaphone, CheckCircle2, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Career & Job Placement Support | AYAN Montessori Institute",
  description: "Explore 100% career-oriented job placement support, resume reviews, mock teaching demos, and exclusive school hiring opportunities for our certified educators.",
};

export default function JobPlacementPage() {
  const steps = [
    {
      step: "01",
      title: "Pedagogical Resume & Portfolio",
      desc: "Our career advisors guide you in building a professional educator CV highlighting your apparatus mastery, lesson presentations, and Montessori certifications.",
      icon: FileCheck,
    },
    {
      step: "02",
      title: "Classroom Demo & Interview Prep",
      desc: "Practice apparatus presentations and classroom management scenarios in our labs to ace real-world school interview demonstrations.",
      icon: Users,
    },
    {
      step: "03",
      title: "Real-Time Job Alerts & Channels",
      desc: "Immediate job vacancies shared directly through our WhatsApp community groups, student status updates, and institute bulletin boards.",
      icon: Megaphone,
    },
    {
      step: "04",
      title: "Direct Placement Referrals",
      desc: "Direct recommendations and priority interviews at top-tier Montessori preschools and elite private school networks looking for our graduates.",
      icon: Briefcase,
    },
  ];

  const highlights = [
    "10,000+ Educators Trained & Placed Nationwide",
    "Direct Ties with Reputed School Chains in Islamabad, Rawalpindi & Beyond",
    "Continuous Mentorship Even After Course Completion",
    "Opportunities for Local, Online, and International Teaching Positions",
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
              <span>CAREER SUCCESS & EMPOWERMENT</span>
            </div>

            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C5F8A] tracking-tight leading-[1.15]">
              Job Placement & <span className="text-[#2C5F8A] underline decoration-[#FFD166] decoration-wavy decoration-4">Career Support</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              We don&apos;t just train you; we launch your teaching career. Discover how AYAN Montessori Institute connects certified trainees with prestigious preschools and school systems across the country.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-[#2C5F8A] text-white font-bold text-sm md:text-base hover:bg-[#87CEEB] hover:text-[#2C5F8A] hover:shadow-lg transition-all flex items-center gap-2 group shadow-sm active:scale-95"
              >
                <span>Connect with Placement Advisor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Job Placement Works */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="CAREER ROADMAP"
          title="How Our Placement Ecosystem Works"
          subtitle="A structured 4-step pathway designed to transition you from trainee to highly sought-after classroom educator."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] border border-[#87CEEB]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-[#87CEEB] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Highlights & Assurance */}
      <SectionContainer bg="surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87CEEB]/20 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE AYAN ADVANTAGE</span>
            </div>

            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
              Why Leading Schools Prefer AYAN Certified Educators
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-sans">
              Schools look for teachers who are ready on day one. Because our diplomas mandate rigorous hands-on apparatus practice, child psychology, and authentic lesson design, AYAN graduates stand out in every interview demo.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#87CEEB] shrink-0" />
                  <span className="text-sm font-semibold text-slate-700">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-montessori-lg space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#FFD166]/30 text-[#8F6500] border border-[#FFD166] flex items-center justify-center mx-auto">
                <Briefcase className="w-8 h-8" />
              </div>

              <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                Are You a School Administrator Hiring?
              </h3>

              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                Connect with our placement cell to hire verified, certified Montessori teachers and early childhood specialists for your campus.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C5F8A] hover:bg-[#87CEEB] text-white hover:text-[#2C5F8A] font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Teacher Resumes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
