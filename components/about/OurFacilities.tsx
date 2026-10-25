import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { FileText, Laptop, GraduationCap, Zap, Megaphone, Building2 } from "lucide-react";

export default function OurFacilities() {
  const facilities = [
    {
      name: "Detailed Course Notes & Manuals",
      tag: "Comprehensive Study Notes",
      description: "Access meticulously structured physical and digital study notes, curriculum guides, and pedagogical manuals prepared for every teacher trainee.",
      icon: FileText,
      emoji: "📄",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Online Live & YouTube Archives",
      tag: "Live Online & Recorded Classes",
      description: "Attend interactive live classes on Zoom or review session recordings anytime via our dedicated YouTube channel for flexible revision.",
      icon: Laptop,
      emoji: "💻",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Career-Driven Diplomas",
      tag: "100% Job-Oriented Diplomas",
      description: "Industry-aligned training programs built specifically to give you the practical apparatus mastery and classroom management skills top schools demand.",
      icon: GraduationCap,
      emoji: "🎓",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Self-Paced Learning Tracks",
      tag: "Flexible Self-Paced Options",
      description: "Balance your schedule with our flexible course options, allowing working professionals and mothers to learn at their own pace without missing out.",
      icon: Zap,
      emoji: "⚡",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Active Job Placement Support",
      tag: "Real-Time Job Support & Alerts",
      description: "Never miss an opening! We constantly share real-time job opportunities directly via our social media status updates and student community channels.",
      icon: Megaphone,
      emoji: "📢",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Trusted Alumni Network",
      tag: "Strong Alumni Network in Elite Schools",
      description: "Step into rewarding careers with confidence. A vast network of our successful alumni are already working in prestigious school chains across the region.",
      icon: Building2,
      emoji: "🏫",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="INSTITUTONAL STRENGTHS & FACILITIES"
        title="Why Aspiring Educators Choose AYAN Montessori?"
        subtitle="Your complete learning ecosystem: combining expert instruction, flexible formats, structured study materials, and direct career placement support."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility, idx) => {
          const Icon = facility.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Top Tag with Icon */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-white/60">
                    <span className="text-sm">{facility.emoji}</span>
                    <span className="text-[11px] font-bold text-[#2C5F8A]">{facility.tag}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-[#2C5F8A] flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5 text-[#2C5F8A]" />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-poppins font-bold text-lg text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug">
                    {facility.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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
