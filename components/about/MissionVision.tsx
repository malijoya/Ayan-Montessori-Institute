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
            To bridge the gap between early childhood philosophy and real-world classroom execution by delivering rigorous, job-oriented Montessori teacher training. We empower aspiring educators and school professionals with elite pedagogical skills, hands-on apparatus mastery, and practical mentorship to transform classrooms nationwide.
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
            To be recognized as the premier center of excellence in professional teacher development and Montessori education across the region. We envision a thriving network of expert educators equipped to unlock the highest cognitive, social, and emotional potential in every generation of children.
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
