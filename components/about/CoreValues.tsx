import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Award, Sparkles, Compass, ShieldCheck, Users, BookOpen } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Award,
      title: "Pedagogical Rigor",
      description: "Upholding authentic Maria Montessori methodologies through deep academic discipline, structured curricula, and professional standards.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Sparkles,
      title: "Practical Mastery",
      description: "Bridging theory and execution by ensuring every trainee gains hands-on confidence with real Montessori apparatus and classroom management labs.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Compass,
      title: "Professional Growth",
      description: "Equipping educators and career switchers with 100% job-oriented skills, leadership confidence, and sustainable career pathways.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      description: "Maintaining absolute honesty, clear communication, and ethical leadership across all our online, on-campus, and in-house training programs.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Users,
      title: "Dedicated Mentorship",
      description: "Fostering a supportive, interactive community where expert master trainers guide trainees every step of the way.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: BookOpen,
      title: "Lifelong Development",
      description: "Continuously adapting our training modules to meet modern educational demands, digital tools, and evolving global school standards.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="GUIDED PRINCIPLES"
        title="Our Core Values"
        subtitle="The foundational principles that drive our commitment to professional teacher training, academic rigor, and educator success."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((val, idx) => {
          const Icon = val.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group space-y-4"
            >
              <div className={`w-14 h-14 rounded-2xl ${val.color} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7" />
              </div>

              <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors">
                {val.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {val.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
