import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { UserCheck, Puzzle, Globe, CalendarClock, Briefcase, Award } from "lucide-react";

export default function WhyOurCourses() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Expert Master Trainers",
      description: "Learn from AYAN's experienced trainers and receive personal mentorship throughout your course.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Puzzle,
      title: "Hands-On Apparatus Practice",
      description: "Build practical skills with real Montessori apparatus, not just theory.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Globe,
      title: "Internationally Aligned Curriculum",
      description: "Course content designed around global standards and modern early childhood practice.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      icon: CalendarClock,
      title: "Flexible Learning Modes",
      description: "Choose hybrid, live on Zoom, or self-paced study to fit around work and family.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Award,
      title: "Recognised Credentials",
      description: "Earn a 100% job-oriented diploma or certificate valued by schools across Pakistan.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "We share active teaching vacancies across our school network to give graduates a head start.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Our Advantage"
        title="Why Choose Our Courses?"
        subtitle="Every program at AYAN Montessori Institute is built to turn aspiring educators into confident, job-ready teachers."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {benefits.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group space-y-4"
            >
              <div className={`w-14 h-14 rounded-2xl ${b.color} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-montserrat">
                {b.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
