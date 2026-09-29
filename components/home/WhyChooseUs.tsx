import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap, Puzzle, Globe, ClipboardList, Briefcase, CalendarClock } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Master Trainers",
      description: "Learn directly from seasoned, internationally accredited master trainers with credentials from AMI (Holland) and MACTE. Receive personalized mentorship throughout your learning journey.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Puzzle,
      title: "Hands-On Apparatus Labs",
      description: "Train in fully equipped, real-world Montessori apparatus labs. Build authentic practical skills and classroom confidence before you graduate.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Globe,
      title: "Internationally Aligned Curriculum",
      description: "Master early childhood pedagogy with a comprehensive curriculum designed to meet global standards and modern educational practices.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      icon: ClipboardList,
      title: "Practical Classroom Management",
      description: "Go beyond theory with specialized modules on child psychology, lesson planning, observation techniques, and effective classroom design.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Briefcase,
      title: "Career & Job Placement Support",
      description: "Earn a 100% job-oriented credential recognized by premier schools. We continuously source and share active teaching vacancies across our network to give you a direct head start in your career.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: CalendarClock,
      title: "Flexible Professional Learning",
      description: "Designed for working professionals, career switchers, and full-time students with flexible weekday, weekend, and workshop schedules.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
  ];

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Core Strengths"
        title="Why Choose Ayan Montessori Institute?"
        subtitle="For over 17 years, we’ve empowered 10,000+ teachers and partnered with top schools nationwide. Our programs feature elite trainers certified by AMI (Holland) and MACTE to set the gold standard in Montessori education."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Container with Hover Scale */}
                <div className={`w-14 h-14 rounded-2xl ${feature.color} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-montserrat">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#2C5F8A] opacity-80 group-hover:opacity-100">
                <span>Key Feature Pillar #{idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#87CEEB] group-hover:w-4 transition-all"></span>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
