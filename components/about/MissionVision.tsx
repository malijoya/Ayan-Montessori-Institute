import SectionContainer from "@/components/ui/SectionContainer";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <SectionContainer bg="surface">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* MISSION CARD */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 space-y-4 group">
          <div className="w-16 h-16 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] border border-[#87CEEB]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Target className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Our Purpose</span>
          <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            To provide an authentic, holistic, and nurturing Montessori educational experience that respects each child's unique developmental timeline. We strive to cultivate independent thinkers, creative problem solvers, and compassionate global citizens through hands-on learning and dedicated teacher training.
          </p>
        </div>

        {/* VISION CARD */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 space-y-4 group">
          <div className="w-16 h-16 rounded-2xl bg-[#FFD166]/30 text-[#8F6500] border border-[#FFD166] flex items-center justify-center group-hover:scale-110 transition-transform">
            <Eye className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Our Future</span>
          <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">Our Vision</h3>
          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            To be recognized as a premier center of excellence in early childhood Montessori education and professional teacher training across the region. We envision a world where every child receives the foundation to reach their highest cognitive, social, and emotional potential.
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
