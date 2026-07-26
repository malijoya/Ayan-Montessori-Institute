import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeButton from "@/components/ui/WireframeButton";
import TrainerCardWireframe from "@/components/cards/TrainerCardWireframe";
import WireframeCard from "@/components/ui/WireframeCard";
import { User, Award, CheckCircle, Briefcase } from "lucide-react";

export default function TrainersPage() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 1: Hero Section
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A]">
            Our Expert Montessori Trainers
          </h1>
          <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl mx-auto">
            <div className="h-3 bg-slate-300 rounded-full w-full"></div>
            <div className="h-3 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2. TRAINER GRID */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 2: Faculty Grid"
          title="Meet Our Certified Master Educators"
          subtitle="Experienced Practitioners Dedicated to Professional Teacher Excellence"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((t) => (
            <TrainerCardWireframe
              key={t}
              name={`Master Trainer ${t} Name Wireframe`}
              role={t % 2 === 0 ? "Senior Montessori Instructor" : "Early Childhood Pedagogy Specialist"}
              specialization={t % 3 === 0 ? "Sensorial & Math Modules" : "Child Psychology"}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 3. TRAINER PROFILE CARD LAYOUT (Detailed Spotlight) */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 3: Featured Faculty Profile Spotlight"
          title="Lead Trainer Profile Architecture"
          subtitle="Detailed Profile Card Layout for Master Faculty Members"
        />

        <WireframeCard hoverEffect={false} className="max-w-4xl mx-auto border-2 border-dashed border-[#87CEEB]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Photo Wireframe */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="w-40 h-40 rounded-3xl wireframe-block flex items-center justify-center text-slate-400 ring-8 ring-[#87CEEB]/20">
                <User className="w-16 h-16 text-slate-300" />
              </div>
              <span className="text-xs font-bold text-[#2C5F8A] uppercase mt-3">High-Res Profile Photo</span>
            </div>

            {/* Right Profile Details */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">Lead Faculty Member</span>
                <span className="text-xs font-semibold text-slate-500">15+ Years Experience</span>
              </div>
              
              <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                Head of Montessori Pedagogy - Full Profile
              </h3>
              
              <div className="wireframe-block rounded-2xl p-4 space-y-2">
                <div className="h-2.5 bg-slate-300 rounded-full w-full"></div>
                <div className="h-2.5 bg-slate-300 rounded-full w-11/12"></div>
                <div className="h-2.5 bg-slate-300 rounded-full w-4/5"></div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 pt-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#2C5F8A]" />
                  <span>MA Early Childhood Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#2C5F8A]" />
                  <span>AMI Certified Diploma</span>
                </div>
              </div>
            </div>
          </div>
        </WireframeCard>
      </SectionContainer>

      {/* 4. JOIN OUR TEAM CTA */}
      <SectionContainer bg="primary-light">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="wireframe-badge bg-[#87CEEB] text-[#2C5F8A]">
            Section 4: Faculty Recruitment CTA
          </span>
          <h2 className="font-poppins font-bold text-3xl text-[#2C5F8A]">
            Are You an Experienced Montessori Educator?
          </h2>
          <p className="text-sm text-slate-600">
            Join the faculty network at Ayan Montessori Institute and shape the next generation of child educators.
          </p>
          <WireframeButton
            label="Join Our Team (Apply as Trainer)"
            variant="secondary"
            size="lg"
            icon={<Briefcase className="w-4 h-4" />}
          />
        </div>
      </SectionContainer>

    </div>
  );
}
