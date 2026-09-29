import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, Clock, Users, ArrowRight, CheckCircle } from "lucide-react";
import { courses } from "@/lib/courseData";

export default function UpcomingCourses() {
  // No fixed start dates are published — each intake shows "Admissions Open" and directs to admissions
  const upcomingBatches = courses.filter((course) => course.programType === "diplomas");

  return (
    <SectionContainer bg="primary-light">
      <SectionHeader
        badge="Enrollment Windows"
        title="Upcoming Course Batches"
        subtitle="Admissions are open for our Montessori teacher training diplomas. Reserve your seat in the next intake."
      />

      <div className="space-y-4 max-w-5xl mx-auto">
        {upcomingBatches.map((batch) => (
          <div
            key={batch.id}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#87CEEB]/40 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          >
            {/* Batch Info */}
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFD166]/40 text-[#8F6500]">
                  Admissions Open
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#87CEEB]/20 text-[#2C5F8A]">
                  {batch.badge}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  Next intake: <strong className="text-[#2C5F8A]">Contact admissions for dates</strong>
                </span>
              </div>

              <h3 className="font-poppins font-bold text-xl text-[#2C5F8A]">
                {batch.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-[#2C5F8A]" />
                  <span>{batch.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-[#2C5F8A]" />
                  <span>{batch.format}</span>
                </div>
              </div>
            </div>

            {/* Seat Availability & Action */}
            <div className="flex items-center justify-between lg:flex-col lg:items-end gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
              <div className="text-left lg:text-right">
                <span className="text-[11px] uppercase font-bold text-slate-400 block">Availability</span>
                <span className="text-xs font-extrabold text-[#2C5F8A] bg-[#87CEEB]/20 px-3 py-1 rounded-full inline-block mt-0.5">
                  <Users className="w-3 h-3 inline mr-1" />
                  Limited Seats
                </span>
              </div>

              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-xs hover:bg-[#70BDDF] transition-all shadow-sm flex items-center gap-1.5 group"
              >
                <span>Register Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View All Courses Button */}
      <div className="text-center mt-10">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2C5F8A] text-white font-bold text-sm hover:bg-[#224B6E] transition-all shadow-md group"
        >
          <span>View All Courses</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionContainer>
  );
}
