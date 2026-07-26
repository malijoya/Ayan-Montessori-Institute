import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, Users, ArrowRight, BookOpen } from "lucide-react";

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      title: "Montessori Teacher Diploma (Ages 3-6)",
      category: "Diploma Track",
      description: "Complete professional diploma covering practical life, sensorial refinement, early math, and language pedagogy.",
      duration: "6 Months",
      ageGroup: "Ages 3 - 6 Focus",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      badgeColor: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 2,
      title: "Early Childhood Care & Education Certificate",
      category: "Certificate Track",
      description: "Specialized training in toddler development, brain architecture, child safety, and nutrition management.",
      duration: "3 Months",
      ageGroup: "Ages 0 - 3 Focus",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      badgeColor: "bg-[#FFD166]/40 text-[#8F6500]",
    },
    {
      id: 3,
      title: "Sensorial & Language Pedagogy Masterclass",
      category: "Specialized Workshop",
      description: "Deep dive into Maria Montessori’s phonics framework, vocabulary enhancement, and sensory isolation apparatus.",
      duration: "6 Weeks",
      ageGroup: "Early Years",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      badgeColor: "bg-[#2C5F8A]/10 text-[#2C5F8A]",
    },
    {
      id: 4,
      title: "Practical Life & Fine Motor Mastery",
      category: "Hands-on Workshop",
      description: "Practical guide to setting up self-correction stations, coordination exercises, and grace and courtesy lessons.",
      duration: "4 Weeks",
      ageGroup: "Ages 2.5 - 6 Focus",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      badgeColor: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 5,
      title: "Montessori Elementary Math & Discovery",
      category: "Advanced Diploma",
      description: "Interactive mathematics teaching using golden bead material, stamp games, and geometry cabinet exploration.",
      duration: "4 Months",
      ageGroup: "Ages 6 - 9 Focus",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      badgeColor: "bg-[#FFD166]/40 text-[#8F6500]",
    },
    {
      id: 6,
      title: "Special Needs Inclusive Early Intervention",
      category: "Specialist Certificate",
      description: "Adaptive Montessori strategies tailored for children with neurodiverse learning styles and sensory integration needs.",
      duration: "3 Months",
      ageGroup: "Inclusive Pedagogy",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      badgeColor: "bg-[#2C5F8A]/10 text-[#2C5F8A]",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Academic Programs"
        title="Our Featured Courses"
        subtitle="Accredited diploma and certificate programs designed for aspiring teachers, educators, and dedicated parents."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Course Banner Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${course.badgeColor} backdrop-blur-md shadow-sm`}>
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <h3 className="font-poppins font-bold text-lg text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {course.description}
                </p>

                {/* Course Details Pills */}
                <div className="grid grid-cols-2 gap-2 pt-3 text-xs text-slate-600 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl">
                    <Clock className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                    <span className="truncate font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-50 p-2 rounded-xl">
                    <Users className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                    <span className="truncate font-medium">{course.ageGroup}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* View Details Button Footer */}
            <div className="px-6 pb-6 pt-2">
              <Link
                href={`/courses/${course.id}`}
                className="w-full py-3 rounded-full bg-slate-100 text-[#2C5F8A] font-semibold text-xs hover:bg-[#87CEEB] hover:text-[#2C5F8A] transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
