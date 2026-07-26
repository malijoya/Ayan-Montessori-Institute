import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Heart, Sparkles, Compass, ShieldCheck, Users, BookOpen } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "Treating every child, parent, and educator with deep dignity, empathy, and unconditional positive regard.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Sparkles,
      title: "Creativity",
      description: "Encouraging imaginative expression, artistic exploration, and original problem-solving in every classroom.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Compass,
      title: "Independence",
      description: "Fostering self-reliance, freedom of choice within boundaries, and personal responsibility from early childhood.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description: "Upholding high ethical standards, transparency, and authentic Montessori principles in all our programs.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships between teachers, parents, and trainees to support holistic child growth.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description: "Inspiring a natural, joyful curiosity that drives children and educators to continuously grow and discover.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Guided Principles"
        title="Our Core Values"
        subtitle="The core beliefs that shape our daily interaction with children, parents, and teacher trainees."
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
