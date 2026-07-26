import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeButton from "@/components/ui/WireframeButton";
import FacilityCardWireframe from "@/components/cards/FacilityCardWireframe";
import GalleryCardWireframe from "@/components/cards/GalleryCardWireframe";
import { Target, Eye, Heart, Sparkles, Building, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 1: Hero Section
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A]">
            About Ayan Montessori Institute
          </h1>
          <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl mx-auto">
            <div className="h-3 bg-slate-300 rounded-full w-full"></div>
            <div className="h-3 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <SectionContainer bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
              Section 2: Our Story
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Our Heritage & Foundation Story
            </h2>
            <div className="wireframe-block rounded-2xl p-6 space-y-3">
              <div className="h-3 bg-slate-300 rounded-full w-full"></div>
              <div className="h-3 bg-slate-300 rounded-full w-11/12"></div>
              <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
              <div className="h-3 bg-slate-300 rounded-full w-full"></div>
              <div className="h-3 bg-slate-300 rounded-full w-2/3"></div>
            </div>
          </div>
          <div className="w-full h-80 rounded-3xl wireframe-block flex flex-col items-center justify-center text-slate-400 gap-2 p-6 shadow-md">
            <Building className="w-12 h-12 text-slate-300" />
            <span className="text-sm font-bold text-[#2C5F8A] uppercase">
              Institute Founder / Campus Heritage Image Container
            </span>
          </div>
        </div>
      </SectionContainer>

      {/* 3. MISSION */}
      <SectionContainer bg="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-64 rounded-3xl wireframe-block flex flex-col items-center justify-center text-slate-400 gap-2">
            <Target className="w-12 h-12 text-[#2C5F8A]" />
            <span className="text-xs font-bold uppercase text-[#2C5F8A]">Mission Media Graphic</span>
          </div>
          <div className="space-y-4">
            <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
              Section 3: Mission
            </span>
            <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
              Our Educational Mission
            </h2>
            <div className="wireframe-block rounded-2xl p-5 space-y-2">
              <div className="h-3 bg-slate-300 rounded-full w-full"></div>
              <div className="h-3 bg-slate-300 rounded-full w-11/12"></div>
              <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 4. VISION */}
      <SectionContainer bg="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
              Section 4: Vision
            </span>
            <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
              Our Future Vision
            </h2>
            <div className="wireframe-block rounded-2xl p-5 space-y-2">
              <div className="h-3 bg-slate-300 rounded-full w-full"></div>
              <div className="h-3 bg-slate-300 rounded-full w-11/12"></div>
              <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
            </div>
          </div>
          <div className="w-full h-64 rounded-3xl wireframe-block flex flex-col items-center justify-center text-slate-400 gap-2 order-1 md:order-2">
            <Eye className="w-12 h-12 text-[#2C5F8A]" />
            <span className="text-xs font-bold uppercase text-[#2C5F8A]">Vision Illustration Container</span>
          </div>
        </div>
      </SectionContainer>

      {/* 5. CORE VALUES */}
      <SectionContainer bg="primary-light">
        <SectionHeader
          badge="Section 5: Core Principles"
          title="Our Core Values"
          subtitle="The Fundamental Beliefs Guiding Our Montessori Philosophy"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Child Respect & Autonomy", "Holistic Development", "Inclusive Learning Ecosystem"].map((val, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-[#87CEEB]/30 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFD166]/30 text-[#8F6500] flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">{val}</h3>
              <div className="wireframe-block rounded-xl p-3 space-y-1.5">
                <div className="h-2 bg-slate-300 rounded-full w-full"></div>
                <div className="h-2 bg-slate-300 rounded-full w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 6. FACILITIES */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 6: Infrastructure"
          title="Institute Facilities & Labs"
          subtitle="World-Class Equipment & Montessori Apparatus Labs"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((f) => (
            <FacilityCardWireframe key={f} title={`Facility Module ${f} Wireframe`} category="Campus Amenity" />
          ))}
        </div>
      </SectionContainer>

      {/* 7. GALLERY PREVIEW */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 7: Photo Gallery"
          title="Campus Life Preview"
          subtitle="Moments from Training Workshops & Child Activities"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((g) => (
            <GalleryCardWireframe key={g} title={`About Gallery Photo ${g}`} category="Institute Life" />
          ))}
        </div>
      </SectionContainer>

      {/* 8. PARTNERS / CLIENTS */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 8: Collaborations"
          title="Affiliations & Educational Partners"
          subtitle="Recognized by Leading Accreditation Boards & Schools"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((p) => (
            <div key={p} className="h-24 rounded-2xl wireframe-block flex flex-col items-center justify-center text-slate-400 gap-1">
              <Handshake className="w-6 h-6 text-slate-300" />
              <span className="text-[10px] font-bold text-slate-500 uppercase">Partner Logo {p}</span>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 9. CTA */}
      <SectionContainer bg="secondary-dark">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="wireframe-badge bg-white/20 text-[#87CEEB]">Section 9: CTA</span>
          <h2 className="font-poppins font-bold text-3xl text-white">Join Our Community Today</h2>
          <WireframeButton label="Contact Us" variant="accent" size="lg" />
        </div>
      </SectionContainer>

    </div>
  );
}
