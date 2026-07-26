import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { UserCheck, Sparkles, UserRound, Lightbulb, Users, Wrench } from "lucide-react";

export default function WhyOurCourses() {
  const benefits = [
    {
      icon: UserCheck,
      title: "Qualified Instructors",
      description: "AMI-certified master educators with years of classroom experience and continuous professional development.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Sparkles,
      title: "Hands-on Activities",
      description: "Every lesson incorporates tactile Montessori materials and real-world experiments to cement learning.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: UserRound,
      title: "Individual Attention",
      description: "Close observation of each child's progress with personalised learning plans and one-to-one guidance.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      icon: Lightbulb,
      title: "Interactive Learning",
      description: "Engaging group projects, role-play, storytelling, and collaborative discovery tasks in every session.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Limited enrolment per batch ensures quality attention, a calm atmosphere, and meaningful teacher connections.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Wrench,
      title: "Practical Skills",
      description: "Developing life-ready competencies including self-care, social etiquette, responsibility, and focused concentration.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Our Advantage"
        title="Why Choose Our Courses?"
        subtitle="Every programme at Ayan Montessori is built on a foundation of quality, care, and research-backed pedagogy."
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
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {b.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
