import SectionContainer from "@/components/ui/SectionContainer";
import { Sparkles, Heart, Puzzle, UserCheck, Compass, Award } from "lucide-react";

export default function TeachingApproach() {
  const points = [
    {
      title: "Hands-on Learning",
      desc: "Tactile Montessori apparatus that transforms abstract concepts into tangible experiences.",
      icon: Sparkles,
    },
    {
      title: "Child-Centred Education",
      desc: "Honoring each child's individual pace, interests, and natural learning timeline.",
      icon: Heart,
    },
    {
      title: "Interactive Activities",
      desc: "Engaging group and independent tasks that stimulate cognitive and social growth.",
      icon: Puzzle,
    },
    {
      title: "Personalised Attention",
      desc: "Small teacher-to-student ratios for close observation and tailored instruction.",
      icon: UserCheck,
    },
    {
      title: "Practical Life Skills",
      desc: "Daily life exercises that build fine motor coordination, order, and self-reliance.",
      icon: Compass,
    },
    {
      title: "Confidence Building",
      desc: "Encouraging self-correction and mastery to foster a resilient, confident learner.",
      icon: Award,
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
              alt="Montessori Teaching Approach in Action"
              className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/50 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60">
              <span className="text-xs font-bold text-[#2C5F8A] block uppercase tracking-wider">Methodology</span>
              <span className="text-xs text-slate-600">Scientifically proven Maria Montessori pedagogical framework</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Teaching Points */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87CEEB]/20 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pedagogical Framework</span>
          </div>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
            Our Teaching Approach
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Our educational approach combines the classic Maria Montessori philosophy with modern early childhood cognitive development standards. We create prepared environments that encourage self-directed activity and collaborative play.
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
                    <p className="text-xs text-slate-600 mt-0.5 font-sans leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
