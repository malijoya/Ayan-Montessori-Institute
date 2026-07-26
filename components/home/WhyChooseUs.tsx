import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { UserCheck, ShieldCheck, Sparkles, Puzzle, Users, Lightbulb } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: "Qualified Teachers",
      description: "Certified Montessori master educators dedicated to nurturing each child's unique pace and intellectual potential.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: ShieldCheck,
      title: "Safe Learning Environment",
      description: "Child-proof spaces with non-toxic wooden apparatus, rounded furniture, and 24/7 security monitoring.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Sparkles,
      title: "Interactive Learning",
      description: "Hands-on Montessori sensory materials that turn abstract math, reading, and science into tangible discovery.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      icon: Puzzle,
      title: "Montessori Activities",
      description: "Structured practical life activities that instill concentration, independence, self-discipline, and motor mastery.",
      color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Low student-to-teacher ratios ensuring customized individual attention and close observation for every student.",
      color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      icon: Lightbulb,
      title: "Modern Teaching Methods",
      description: "Blending classic Maria Montessori philosophy with modern early childhood cognitive development research.",
      color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
  ];

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Core Strengths"
        title="Why Parents Choose Us"
        subtitle="Nurturing young minds through world-class Montessori pedagogy, dedicated care, and inspiring environments."
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
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
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
