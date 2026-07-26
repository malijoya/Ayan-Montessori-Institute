import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeButton from "@/components/ui/WireframeButton";
import WireframeInput from "@/components/ui/WireframeInput";
import CourseCardWireframe from "@/components/cards/CourseCardWireframe";
import FilterBarWireframe from "@/components/common/FilterBarWireframe";
import PaginationWireframe from "@/components/common/PaginationWireframe";
import { Search } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 1: Hero Section
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A]">
            Explore Montessori Courses & Diplomas
          </h1>
          <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl mx-auto">
            <div className="h-3 bg-slate-300 rounded-full w-full"></div>
            <div className="h-3 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2 & 3. SEARCH BAR & CATEGORY FILTER */}
      <SectionContainer bg="surface" className="py-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
              Sections 2 & 3: Course Search & Category Filters
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Bar Input */}
            <div className="lg:col-span-5">
              <WireframeInput
                placeholder="Search courses by keyword, topic, or diploma..."
                icon={<Search className="w-4 h-4" />}
              />
            </div>
            {/* Category Filters */}
            <div className="lg:col-span-7">
              <FilterBarWireframe />
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 4. COURSE GRID */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 4: Course Catalog Grid"
          title="All Available Academic Programs"
          subtitle="Select a Course to View Detailed Curriculum & Module Outlines"
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <CourseCardWireframe
              key={idx}
              courseId={idx}
              title={`Course Program Wireframe #${idx}`}
              category={idx % 2 === 0 ? "Teacher Diploma" : "Early Childhood Certificate"}
            />
          ))}
        </div>

        {/* 5. PAGINATION */}
        <div className="mt-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center mb-2">
            Section 5: Pagination Wireframe
          </span>
          <PaginationWireframe />
        </div>
      </SectionContainer>

      {/* 6. CALL TO ACTION */}
      <SectionContainer bg="secondary-dark">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="wireframe-badge bg-white/20 text-[#87CEEB]">Section 6: CTA</span>
          <h2 className="font-poppins font-bold text-3xl text-white">Need Guidance Choosing a Course?</h2>
          <div className="wireframe-block rounded-2xl p-4 bg-white/5 border-white/20 space-y-2">
            <div className="h-2.5 bg-white/20 rounded-full w-full"></div>
            <div className="h-2.5 bg-white/20 rounded-full w-3/4 mx-auto"></div>
          </div>
          <WireframeButton label="Request Academic Counseling" variant="accent" size="lg" />
        </div>
      </SectionContainer>

    </div>
  );
}
