import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Smile, Globe, BookOpen, Cpu, Palette, Atom } from "lucide-react";

export default function CourseCategories() {
  const categories = [
    {
      icon: Smile,
      name: "Early Learning",
      count: 3,
      description: "Montessori-based foundational programmes for toddlers and preschool children.",
      gradient: "from-[#87CEEB]/30 to-[#87CEEB]/10",
      iconBg: "bg-[#87CEEB]/30 text-[#2C5F8A]",
      border: "border-[#87CEEB]/30",
    },
    {
      icon: Globe,
      name: "Language Courses",
      count: 2,
      description: "Spoken English and Arabic language skills for young communicators.",
      gradient: "from-[#FFD166]/30 to-[#FFD166]/10",
      iconBg: "bg-[#FFD166]/40 text-[#8F6500]",
      border: "border-[#FFD166]/40",
    },
    {
      icon: BookOpen,
      name: "Islamic Studies",
      count: 1,
      description: "Quran recitation with Tajweed and Islamic ethics in a nurturing environment.",
      gradient: "from-[#2C5F8A]/10 to-[#2C5F8A]/5",
      iconBg: "bg-[#2C5F8A]/15 text-[#2C5F8A]",
      border: "border-[#2C5F8A]/20",
    },
    {
      icon: Cpu,
      name: "Technology",
      count: 2,
      description: "Computer basics, coding, and IT fundamentals for the digital generation.",
      gradient: "from-[#87CEEB]/30 to-[#87CEEB]/10",
      iconBg: "bg-[#87CEEB]/30 text-[#2C5F8A]",
      border: "border-[#87CEEB]/30",
    },
    {
      icon: Palette,
      name: "Arts & Creativity",
      count: 1,
      description: "Expressive fine arts, craft, and creative media for every young artist.",
      gradient: "from-[#FFD166]/30 to-[#FFD166]/10",
      iconBg: "bg-[#FFD166]/40 text-[#8F6500]",
      border: "border-[#FFD166]/40",
    },
    {
      icon: Atom,
      name: "STEM Education",
      count: 3,
      description: "Robotics, science exploration, and mathematics enrichment programmes.",
      gradient: "from-[#2C5F8A]/10 to-[#2C5F8A]/5",
      iconBg: "bg-[#2C5F8A]/15 text-[#2C5F8A]",
      border: "border-[#2C5F8A]/20",
    },
  ];

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Browse by Subject"
        title="Course Categories"
        subtitle="Find the right programme by exploring our core subject areas — from early childhood to STEM and technology."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className={`relative rounded-3xl p-7 border ${cat.border} bg-gradient-to-br ${cat.gradient} hover:shadow-montessori hover:-translate-y-2 transition-all duration-300 group cursor-pointer overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/30 pointer-events-none"></div>

              <div className="space-y-4 relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${cat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-xl text-[#2C5F8A]">{cat.name}</h3>
                  <p className="text-sm text-slate-600 mt-1 font-sans leading-relaxed">{cat.description}</p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/50">
                  <span className="text-xs font-bold text-[#2C5F8A] bg-white/70 px-3 py-1 rounded-full">
                    {cat.count} {cat.count === 1 ? "Course" : "Courses"}
                  </span>
                  <span className="text-xs font-semibold text-[#2C5F8A] group-hover:underline">Browse →</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
