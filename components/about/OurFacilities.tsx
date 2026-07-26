import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Monitor, Puzzle, BookOpen, Smile, Trees, Palette, Cpu, ShieldCheck } from "lucide-react";

export default function OurFacilities() {
  const facilities = [
    {
      name: "Smart Classrooms",
      description: "Sunlit, climate-controlled rooms equipped with child-proportioned furniture and interactive learning displays.",
      icon: Monitor,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Montessori Learning Materials",
      description: "Comprehensive inventory of certified wooden sensorial, language, math, and practical life apparatus.",
      icon: Puzzle,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Children's Library",
      description: "Cozy reading nooks filled with age-appropriate picture books, phonics readers, and storybooks.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Indoor Activity Area",
      description: "Spacious carpeted zone for gross motor exercises, rhythm & movement, and group circle sessions.",
      icon: Smile,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Outdoor Playground",
      description: "Secure outdoor space with safe turf, balance beams, organic gardens, and physical play structures.",
      icon: Trees,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Art & Craft Studio",
      description: "Dedicated creative studio stocked with non-toxic paints, clay, easel stands, and crafting supplies.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Computer & Tech Lab",
      description: "Teacher training computer lab for digital pedagogy coursework, research, and material printing.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Safe & Secure Campus",
      description: "24/7 CCTV security coverage, verified visitor check-ins, biometric gates, and first aid stations.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="World-Class Environment"
        title="Our Facilities"
        subtitle="Explore our modern, safe, and child-friendly campus engineered for curiosity and exploration."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((facility, idx) => {
          const Icon = facility.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-[#2C5F8A] flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-poppins font-bold text-base text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors">
                    {facility.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {facility.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
