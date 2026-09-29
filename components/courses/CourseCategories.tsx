import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { GraduationCap, Zap, MessageCircle, CheckCircle2 } from "lucide-react";
import { courses, programTypeLabels, type CourseProgramType } from "@/lib/courseData";

const categories: {
  type: CourseProgramType;
  icon: typeof GraduationCap;
  description: string;
  gradient: string;
  iconBg: string;
  border: string;
}[] = [
  {
    type: "diplomas",
    icon: GraduationCap,
    description: "6-month and 1-year Montessori teacher training diplomas — hybrid, live online, and advanced tracks.",
    gradient: "from-[#87CEEB]/30 to-[#87CEEB]/10",
    iconBg: "bg-[#87CEEB]/30 text-[#2C5F8A]",
    border: "border-[#87CEEB]/30",
  },
  {
    type: "short",
    icon: Zap,
    description: "Self-paced Montessori / ECE certification and specialised English & Urdu phonics workshops.",
    gradient: "from-[#FFD166]/30 to-[#FFD166]/10",
    iconBg: "bg-[#FFD166]/40 text-[#8F6500]",
    border: "border-[#FFD166]/40",
  },
  {
    type: "skills",
    icon: MessageCircle,
    description: "Spoken English and communication mastery for teachers and working professionals.",
    gradient: "from-[#2C5F8A]/10 to-[#2C5F8A]/5",
    iconBg: "bg-[#2C5F8A]/15 text-[#2C5F8A]",
    border: "border-[#2C5F8A]/20",
  },
];

export default function CourseCategories() {
  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Browse by Program"
        title="Course Categories"
        subtitle="Find the right program for your goals — from full Montessori diplomas to short courses and professional skills."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const categoryCourses = courses.filter((course) => course.programType === cat.type);
          return (
            <Link
              key={cat.type}
              href="#all-courses"
              className={`relative rounded-3xl p-7 border ${cat.border} bg-gradient-to-br ${cat.gradient} hover:shadow-montessori hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col`}
            >
              {/* Background decoration */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/30 pointer-events-none"></div>

              <div className="space-y-4 relative z-10 flex flex-col flex-1">
                <div className={`w-14 h-14 rounded-2xl ${cat.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-xl text-[#2C5F8A]">{programTypeLabels[cat.type]}</h3>
                  <p className="text-sm text-slate-600 mt-1 font-montserrat leading-relaxed">{cat.description}</p>
                </div>

                <ul className="space-y-1.5 flex-1">
                  {categoryCourses.map((course) => (
                    <li key={course.id} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2C5F8A] shrink-0 mt-0.5" />
                      <span>
                        {course.title}
                        {course.programType === "diplomas" && ` (${course.mode})`}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-2 border-t border-white/50">
                  <span className="text-xs font-bold text-[#2C5F8A] bg-white/70 px-3 py-1 rounded-full">
                    {categoryCourses.length} {categoryCourses.length === 1 ? "Course" : "Courses"}
                  </span>
                  <span className="text-xs font-semibold text-[#2C5F8A] group-hover:underline">Browse →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionContainer>
  );
}
