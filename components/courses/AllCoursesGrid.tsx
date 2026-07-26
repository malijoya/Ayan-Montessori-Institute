import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, Users, ArrowRight, BarChart3 } from "lucide-react";

export default function AllCoursesGrid() {
  const courses = [
    {
      id: 4,
      title: "Montessori Foundation Programme",
      description: "Introductory Montessori immersion for toddlers covering sensorial exploration, practical life, and early language.",
      ageGroup: "Ages 2.5–4",
      duration: "3 Months",
      level: "Foundation",
      category: "Early Learning",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 5,
      title: "Preschool Programme",
      description: "Full-day Montessori preschool experience developing cognitive, social, and motor skills through structured play.",
      ageGroup: "Ages 3–5",
      duration: "1 Year",
      level: "Beginner",
      category: "Early Learning",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 6,
      title: "Kindergarten Level",
      description: "Structured Montessori kindergarten preparing children for formal schooling with advanced pre-literacy and numeracy.",
      ageGroup: "Ages 5–6",
      duration: "1 Year",
      level: "Intermediate",
      category: "Early Learning",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 7,
      title: "Spoken English for Kids",
      description: "Interactive conversational English sessions using stories, drama, phonics, and engaging multimedia activities.",
      ageGroup: "Ages 4–10",
      duration: "3 Months",
      level: "Beginner–Advanced",
      category: "Language Courses",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#FFD166]/30 text-[#8F6500]",
    },
    {
      id: 8,
      title: "Arabic Language Course",
      description: "Foundation Arabic reading, writing, and conversation skills for young learners in a supportive classroom.",
      ageGroup: "Ages 5–12",
      duration: "4 Months",
      level: "Beginner",
      category: "Language Courses",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#FFD166]/30 text-[#8F6500]",
    },
    {
      id: 9,
      title: "Quran with Tajweed",
      description: "Systematic Quran recitation with correct Tajweed rules guided by qualified teachers in a peaceful setting.",
      ageGroup: "Ages 5–14",
      duration: "6 Months",
      level: "All Levels",
      category: "Islamic Studies",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#2C5F8A]/10 text-[#2C5F8A]",
    },
    {
      id: 10,
      title: "Computer Basics for Kids",
      description: "Child-friendly introduction to computers, typing, internet safety, presentations, and basic applications.",
      ageGroup: "Ages 6–12",
      duration: "6 Weeks",
      level: "Beginner",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 11,
      title: "IT Course — Coding & Web",
      description: "Hands-on introduction to block coding, Scratch programming, and beginner HTML/CSS for digital natives.",
      ageGroup: "Ages 8–14",
      duration: "3 Months",
      level: "Intermediate",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      id: 12,
      title: "Robotics for Kids",
      description: "LEGO-based and sensor robotics workshops developing logical thinking, teamwork, and engineering fundamentals.",
      ageGroup: "Ages 7–13",
      duration: "6 Weeks",
      level: "Beginner–Intermediate",
      category: "STEM Education",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#FFD166]/30 text-[#8F6500]",
    },
    {
      id: 13,
      title: "Creative Arts & Craft",
      description: "Expressive fine arts programme covering painting, clay modelling, collage, and seasonal creative projects.",
      ageGroup: "Ages 3–10",
      duration: "4 Weeks",
      level: "All Levels",
      category: "Arts & Creativity",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#2C5F8A]/10 text-[#2C5F8A]",
    },
    {
      id: 14,
      title: "Mathematics Skills Booster",
      description: "Abacus-based and Montessori golden bead math enrichment to sharpen arithmetic, pattern recognition, and problem-solving.",
      ageGroup: "Ages 5–10",
      duration: "6 Weeks",
      level: "Intermediate",
      category: "STEM Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#FFD166]/30 text-[#8F6500]",
    },
    {
      id: 15,
      title: "Science Exploration Club",
      description: "Fun lab-based science experiments in chemistry, physics, biology, and environmental science for young explorers.",
      ageGroup: "Ages 6–12",
      duration: "6 Weeks",
      level: "All Levels",
      category: "STEM Education",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      badge: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Complete Catalogue"
        title="All Courses & Programmes"
        subtitle="Browse our full range of academic and enrichment programmes for every child and aspiring educator."
        align="left"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col"
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-slate-100">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${course.badge}`}>
                  {course.category}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-3 flex flex-col flex-1">
              <h3 className="font-poppins font-bold text-base text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug line-clamp-2">
                {course.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-2">
                {course.description}
              </p>

              {/* Meta */}
              <div className="grid grid-cols-3 gap-1.5 text-[10px] font-semibold text-slate-600 border-t border-slate-100 pt-3">
                <div className="flex flex-col items-center bg-slate-50 px-2 py-1.5 rounded-xl gap-0.5">
                  <Users className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  <span className="text-center leading-tight">{course.ageGroup}</span>
                </div>
                <div className="flex flex-col items-center bg-slate-50 px-2 py-1.5 rounded-xl gap-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  <span className="text-center leading-tight">{course.duration}</span>
                </div>
                <div className="flex flex-col items-center bg-slate-50 px-2 py-1.5 rounded-xl gap-0.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#2C5F8A]" />
                  <span className="text-center leading-tight">{course.level}</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2">
                <Link
                  href={`/courses/${course.id}`}
                  className="w-full py-2.5 rounded-full bg-slate-100 text-[#2C5F8A] font-bold text-xs hover:bg-[#87CEEB] transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
