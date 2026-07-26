import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeButton from "@/components/ui/WireframeButton";
import TestimonialCardWireframe from "@/components/cards/TestimonialCardWireframe";
import WireframeCard from "@/components/ui/WireframeCard";
import { Users, GraduationCap, Award, Smile } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 1: Hero Section
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A]">
            Community Testimonials & Stories
          </h1>
          <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl mx-auto">
            <div className="h-3 bg-slate-300 rounded-full w-full"></div>
            <div className="h-3 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2. PARENT TESTIMONIALS */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 2: Parent Feedback"
          title="Parent Reviews & Experiences"
          subtitle="How Ayan Montessori Institute Transforms Early Child Learning"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <TestimonialCardWireframe
              key={p}
              author={`Parent ${p} Full Name`}
              relation={`Mother of Child in Level ${p}`}
              type="Parent"
            />
          ))}
        </div>
      </SectionContainer>

      {/* 3. STUDENT TESTIMONIALS */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 3: Student & Trainee Feedback"
          title="Teacher Trainee & Alumni Stories"
          subtitle="Graduates Sharing Their Career Growth & Classroom Mastery"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((s) => (
            <TestimonialCardWireframe
              key={s}
              author={`Trainee ${s} Full Name`}
              relation={`Montessori Diploma Graduate #${s}`}
              type="Student"
            />
          ))}
        </div>
      </SectionContainer>

      {/* 4. STATISTICS SECTION */}
      <SectionContainer bg="primary-light">
        <SectionHeader
          badge="Section 4: Impact Metrics"
          title="Institute Impact & Achievement Stats"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Graduated Teachers", value: "2,500+", icon: GraduationCap },
            { label: "Partner Schools", value: "120+", icon: Award },
            { label: "Satisfaction Rate", value: "99%", icon: Smile },
            { label: "Active Enrollees", value: "450+", icon: Users },
          ].map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <WireframeCard key={idx} hoverEffect className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/30 text-[#2C5F8A] flex items-center justify-center mx-auto">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-poppins font-extrabold text-2xl md:text-3xl text-[#2C5F8A]">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </WireframeCard>
            );
          })}
        </div>
      </SectionContainer>

      {/* 5. CALL TO ACTION */}
      <SectionContainer bg="secondary-dark">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="wireframe-badge bg-white/20 text-[#87CEEB]">Section 5: CTA</span>
          <h2 className="font-poppins font-bold text-3xl text-white">Share Your Experience With Us</h2>
          <WireframeButton label="Submit Testimonial" variant="accent" size="lg" />
        </div>
      </SectionContainer>

    </div>
  );
}
