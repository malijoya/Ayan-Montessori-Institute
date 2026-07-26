import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeButton from "@/components/ui/WireframeButton";
import CourseCardWireframe from "@/components/cards/CourseCardWireframe";
import TestimonialCardWireframe from "@/components/cards/TestimonialCardWireframe";
import FacilityCardWireframe from "@/components/cards/FacilityCardWireframe";
import GalleryCardWireframe from "@/components/cards/GalleryCardWireframe";
import { ArrowRight, CheckCircle2, Play, Sparkles, GraduationCap, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E0F2FE]/40 via-white to-slate-50 py-20 md:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content Layout */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 1: Hero Section Layout</span>
              </span>

              <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2C5F8A] tracking-tight leading-tight">
                Hero Headline Wireframe Title Placeholder
              </h1>

              {/* Tagline / Subtitle Wireframe Box */}
              <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-xl">
                <div className="h-3 bg-slate-300 rounded-full w-full"></div>
                <div className="h-3 bg-slate-300 rounded-full w-11/12"></div>
                <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
              </div>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <WireframeButton
                  label="Explore Courses CTA"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                />
                <WireframeButton
                  label="Watch Institute Video"
                  variant="outline"
                  size="lg"
                  icon={<Play className="w-4 h-4" />}
                />
              </div>

              {/* Key Highlights Wireframe Bar */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2C5F8A]" />
                  <span>Certified Montessori Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2C5F8A]" />
                  <span>100% Practical Training Labs</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Graphic Container Wireframe */}
            <div className="lg:col-span-5">
              <div className="w-full h-[400px] md:h-[460px] rounded-3xl wireframe-block flex flex-col items-center justify-center gap-4 text-slate-400 p-8 shadow-xl relative">
                <div className="w-20 h-20 rounded-full bg-[#87CEEB]/30 border-2 border-[#87CEEB] flex items-center justify-center text-[#2C5F8A]">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-[#2C5F8A]">
                  Hero Visual / Video Media Frame
                </span>
                <span className="text-xs text-slate-400 text-center max-w-xs">
                  Interactive Banner Container with Floating Stat Cards
                </span>

                {/* Floating Stat Card Badge 1 */}
                <div className="absolute top-6 left-6 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFD166]/30 text-[#8F6500] font-bold flex items-center justify-center text-xs">
                    98%
                  </div>
                  <div>
                    <div className="h-2 w-16 bg-slate-300 rounded-full mb-1"></div>
                    <div className="h-2 w-10 bg-slate-200 rounded-full"></div>
                  </div>
                </div>

                {/* Floating Stat Card Badge 2 */}
                <div className="absolute bottom-6 right-6 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/30 text-[#2C5F8A] font-bold flex items-center justify-center text-xs">
                    5K+
                  </div>
                  <div>
                    <div className="h-2 w-20 bg-slate-300 rounded-full mb-1"></div>
                    <div className="h-2 w-12 bg-slate-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 2: Core Strengths"
          title="Why Choose Ayan Montessori Institute"
          subtitle="Structural Breakdown of Key Educational Pillars and Values"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Pillar 1: Expert Montessori Faculty", "Pillar 2: Child-Centered Pedagogy", "Pillar 3: Modern Practical Labs", "Pillar 4: Career & Diploma Support"].map((feature, i) => (
            <FacilityCardWireframe key={i} title={feature} category="Key Pillar" />
          ))}
        </div>
      </SectionContainer>

      {/* 3. FEATURED COURSES */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 3: Academic Programs"
          title="Featured Courses & Diplomas"
          subtitle="Explore Flagship Teacher Training & Early Childhood Education Programs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((idx) => (
            <CourseCardWireframe
              key={idx}
              courseId={idx}
              title={`Featured Course ${idx} Title Wireframe`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <WireframeButton
            label="View All Courses"
            variant="outline"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          />
        </div>
      </SectionContainer>

      {/* 4. UPCOMING COURSES */}
      <SectionContainer bg="primary-light">
        <SectionHeader
          badge="Section 4: Upcoming Batches"
          title="Upcoming Course Batches"
          subtitle="Next Enrollment Windows & Class Timelines"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[1, 2].map((batch) => (
            <div key={batch} className="bg-white rounded-3xl p-6 border border-[#87CEEB]/40 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="wireframe-badge bg-[#FFD166]/40 text-[#8F6500]">Batch #{batch} Enrollment</span>
                <span className="text-xs font-semibold text-[#2C5F8A] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  Starting Soon
                </span>
              </div>
              <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                Upcoming Batch Program Title #{batch}
              </h3>
              <div className="wireframe-block rounded-xl p-3 space-y-1.5">
                <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                <div className="h-2.5 bg-slate-200 rounded-full w-4/5"></div>
              </div>
              <WireframeButton label="Reserve Seat Wireframe" variant="primary" size="sm" fullWidth />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 5. LEARNING ENVIRONMENT PREVIEW */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 5: Campus Preview"
          title="Learning Environment & Facilities"
          subtitle="Spacious, Safe, and Stimulating Montessori Environments"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((env) => (
            <GalleryCardWireframe key={env} title={`Learning Zone ${env} Wireframe`} category="Facility Preview" />
          ))}
        </div>
      </SectionContainer>

      {/* 6. TESTIMONIALS PREVIEW */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 6: Parent & Student Feedback"
          title="Testimonials & Success Stories"
          subtitle="What Our Parents, Trainees, and Educators Say"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((t) => (
            <TestimonialCardWireframe
              key={t}
              author={`Reviewer ${t} Name Wireframe`}
              type={t === 1 ? "Parent" : t === 2 ? "Student" : "Alumni"}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 7. CALL TO ACTION */}
      <SectionContainer bg="secondary-dark" className="relative overflow-hidden">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="wireframe-badge bg-white/20 text-[#87CEEB] border-white/30">
            Section 7: Call To Action
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
            Begin Your Montessori Journey Today
          </h2>
          <div className="wireframe-block rounded-2xl p-4 bg-white/5 border-white/20 space-y-2">
            <div className="h-3 bg-white/20 rounded-full w-full"></div>
            <div className="h-3 bg-white/20 rounded-full w-3/4 mx-auto"></div>
          </div>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <WireframeButton label="Enroll Now" variant="accent" size="lg" />
            <WireframeButton label="Contact Admissions" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#2C5F8A]" />
          </div>
        </div>
      </SectionContainer>

    </div>
  );
}
