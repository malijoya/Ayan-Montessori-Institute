import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import { Sparkles, ArrowRight, Award, Laptop, Users, Target, ShieldCheck, Layers } from "lucide-react";

export default function TeachingApproach() {
  const points = [
    {
      title: "Hands-On Apparatus Labs",
      desc: "Intensive tactile practice with certified Montessori materials, translating abstract mathematical and sensorial concepts into real classroom execution.",
      icon: Layers,
    },
    {
      title: "Expert Master Mentorship",
      desc: "Direct guidance from seasoned trainers certified by elite global bodies like AMI and MACTE, ensuring authentic pedagogical standards.",
      icon: Award,
    },
    {
      title: "Hybrid & Live Interaction",
      desc: "Engaging online Zoom sessions and on-campus lab interactions that stimulate collaborative peer learning and dynamic discussions.",
      icon: Laptop,
    },
    {
      title: "Dedicated Trainee Support",
      desc: "Focused guidance and detailed feedback loops, ensuring every adult learner fully masters classroom management and lesson planning.",
      icon: Users,
    },
    {
      title: "Practical Classroom Strategies",
      desc: "Step-by-step training on lesson presentation, material sequencing, and positive behavior management required by top-tier schools.",
      icon: Target,
    },
    {
      title: "Career & Teaching Confidence",
      desc: "Equipping career switchers, teachers, and school founders with the absolute authority and poise needed to lead modern classrooms.",
      icon: ShieldCheck,
    },
  ];

  return (
    <SectionContainer bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: Image */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-slate-50 group">
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
              alt="Montessori Teacher Training in Action"
              className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60">
              <span className="text-xs font-bold text-[#2C5F8A] block uppercase tracking-wider">Methodology</span>
              <span className="text-xs text-slate-600">Authentic Montessori Teacher Training & Classroom Mastery</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Teaching Points & CTA */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87CEEB]/20 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PEDAGOGICAL FRAMEWORK</span>
          </div>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
            Our Professional Training Methodology
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Our training methodology combines authentic Maria Montessori philosophy with modern adult learning principles. We bridge abstract pedagogical theories with practical classroom execution to prepare confident, industry-ready educators.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3 hover:border-[#87CEEB]/40 hover:bg-slate-100/80 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-bold text-sm text-[#2C5F8A]">{pt.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 font-sans leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action button */}
          <div className="pt-2">
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-sm hover:bg-[#70BDDF] hover:shadow-md transition-all group active:scale-95 shadow-sm"
            >
              <span>Meet Our Master Trainers</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
