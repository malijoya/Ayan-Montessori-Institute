import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, User, Monitor, Zap, ArrowRight } from "lucide-react";
import { courses } from "@/lib/courseData";

export default function FeaturedCoursesSection() {
  const featured = courses.filter((course) => course.programType === "diplomas");

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Montessori Diplomas"
        title="Featured Courses"
        subtitle="Our flagship Montessori teacher training diplomas — hybrid, live online, and advanced tracks."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featured.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/60 to-transparent"></div>

              {/* Badges on image */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFD166] text-[#2C5F8A] shadow-sm">
                  ★ Featured
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-[#2C5F8A]">
                  {course.badge}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 flex flex-col flex-1">
              <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug">
                {course.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                {course.shortDescription}
              </p>

              {/* Metadata Pills */}
              <div className="grid grid-cols-1 gap-2 text-xs font-medium text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                  {course.formatIcon === "self-paced" ? (
                    <Zap className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  ) : course.formatIcon === "online" ? (
                    <Monitor className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  ) : (
                    <User className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  )}
                  <span>{course.format}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  <span>{course.duration}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full py-3 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-sm hover:bg-[#70BDDF] transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
