import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeButton from "@/components/ui/WireframeButton";
import WireframeCard from "@/components/ui/WireframeCard";
import WireframeBadge from "@/components/ui/WireframeBadge";
import FAQAccordionWireframe from "@/components/common/FAQAccordionWireframe";
import TestimonialCardWireframe from "@/components/cards/TestimonialCardWireframe";
import TrainerCardWireframe from "@/components/cards/TrainerCardWireframe";
import { 
  Clock, 
  Users, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  FileText, 
  Download,
  Share2
} from "lucide-react";

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
                  Section 1: Dynamic Course Hero (ID: #{params.id || "1"})
                </span>
                <WireframeBadge label="Montessori Diploma" variant="primary" />
              </div>

              <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2C5F8A]">
                Course Title Wireframe Placeholder (Dynamic ID: #{params.id || "1"})
              </h1>

              {/* Tagline Skeleton */}
              <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl">
                <div className="h-3 bg-slate-300 rounded-full w-full"></div>
                <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
              </div>

              {/* Quick Specs Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-[#2C5F8A]" /> 6 Months Duration
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Users className="w-4 h-4 text-[#2C5F8A]" /> Target: 3-6 Years Pedagogy
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-[#2C5F8A]" /> Weekend & Weekday Batches
                </span>
              </div>
            </div>

            {/* Quick Action Widget Card */}
            <div className="lg:col-span-4">
              <WireframeCard borderAccent hoverEffect={false} className="space-y-4">
                <div className="text-center pb-3 border-b border-slate-100">
                  <span className="text-xs uppercase font-bold text-slate-400">Enrollment Fee</span>
                  <div className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                    Tuition Wireframe Box
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span>Certificate:</span>
                    <strong className="text-[#2C5F8A]">Institute Diploma</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span>Practical Labs:</span>
                    <strong className="text-[#2C5F8A]">100 Hours</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Assessment:</span>
                    <strong className="text-[#2C5F8A]">Portfolio & Exam</strong>
                  </div>
                </div>

                <WireframeButton label="Enroll in Course" variant="primary" size="lg" fullWidth />
                <WireframeButton label="Download Syllabus PDF" variant="outline" size="sm" fullWidth icon={<Download className="w-3.5 h-3.5" />} />
              </WireframeCard>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COURSE OVERVIEW */}
      <SectionContainer bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            
            <div className="space-y-4">
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
                Section 2: Course Overview
              </span>
              <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                Comprehensive Course Overview
              </h2>
              <div className="wireframe-block rounded-2xl p-5 space-y-2.5">
                <div className="h-3 bg-slate-300 rounded-full w-full"></div>
                <div className="h-3 bg-slate-300 rounded-full w-11/12"></div>
                <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
                <div className="h-3 bg-slate-300 rounded-full w-full"></div>
              </div>
            </div>

            {/* 3. OBJECTIVES */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
                Section 3: Learning Objectives
              </span>
              <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                What You Will Master
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((obj) => (
                  <div key={obj} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2C5F8A] shrink-0 mt-0.5" />
                    <div className="space-y-1.5 w-full">
                      <div className="h-3 bg-slate-300 rounded-full w-4/5"></div>
                      <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 & 5. CURRICULUM & MODULES */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
                Sections 4 & 5: Curriculum & Course Modules
              </span>
              <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                Detailed Course Syllabus & Modules
              </h2>
              <div className="space-y-4">
                {["Module 1: Montessori Philosophy & Foundations", "Module 2: Exercises of Practical Life (EPL)", "Module 3: Sensorial Education & Apparatus", "Module 4: Mathematics & Language Pedagogy"].map((mod, mIdx) => (
                  <div key={mIdx} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <h3 className="font-poppins font-semibold text-lg text-[#2C5F8A]">{mod}</h3>
                      <span className="text-xs font-semibold text-slate-500">3 Weeks / 20 Hours</span>
                    </div>
                    <div className="wireframe-block rounded-xl p-3 space-y-1.5">
                      <div className="h-2.5 bg-slate-200 rounded-full w-full"></div>
                      <div className="h-2.5 bg-slate-200 rounded-full w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Specifications: 6. Trainer Info, 7. Duration, 8. Age Group, 9. Schedule */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 6. TRAINER INFO */}
            <div className="space-y-3">
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
                Section 6: Instructor Profile
              </span>
              <TrainerCardWireframe name="Assigned Lead Instructor" role="Course Director" />
            </div>

            {/* 7, 8, 9. DURATION, AGE GROUP, SCHEDULE */}
            <WireframeCard hoverEffect={false} className="space-y-4">
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
                Sections 7, 8, 9: Course Logistics
              </span>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block">Section 7: Duration</span>
                  <div className="font-poppins font-semibold text-[#2C5F8A]">6 Months Total (120 Hours)</div>
                </div>
                
                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block">Section 8: Age Group Target</span>
                  <div className="font-poppins font-semibold text-[#2C5F8A]">Early Years (3 - 6 Years)</div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase text-slate-400 block">Section 9: Class Schedule</span>
                  <div className="font-poppins font-semibold text-[#2C5F8A]">Saturdays & Sundays (10:00 AM - 1:00 PM)</div>
                </div>
              </div>
            </WireframeCard>

          </div>
        </div>
      </SectionContainer>

      {/* 10. FAQS */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 10: Course FAQs"
          title="Frequently Asked Questions About This Program"
        />
        <FAQAccordionWireframe />
      </SectionContainer>

      {/* 11. STUDENT REVIEWS */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 11: Trainee Feedback"
          title="Student Reviews & Trainee Ratings"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((rev) => (
            <TestimonialCardWireframe key={rev} author={`Graduate ${rev} Review`} type="Student" />
          ))}
        </div>
      </SectionContainer>

      {/* 12. ENROLLMENT CTA */}
      <SectionContainer bg="secondary-dark">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="wireframe-badge bg-white/20 text-[#87CEEB]">
            Section 12: Final Enrollment Call To Action
          </span>
          <h2 className="font-poppins font-bold text-3xl text-white">
            Ready to Enroll in This Diploma Program?
          </h2>
          <WireframeButton label="Apply Now for Next Batch" variant="accent" size="lg" />
        </div>
      </SectionContainer>

    </div>
  );
}
