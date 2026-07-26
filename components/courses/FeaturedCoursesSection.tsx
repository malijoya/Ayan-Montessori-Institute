import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock, Users, Calendar, ArrowRight, Star } from "lucide-react";

export default function FeaturedCoursesSection() {
  const featured = [
    {
      id: 1,
      title: "Montessori Teacher Diploma — Primary Level (Ages 3–6)",
      category: "Diploma Track",
      description:
        "Our flagship accredited programme covering all five Montessori curriculum areas: Practical Life, Sensorial, Language, Mathematics, and Cultural Studies — with 100+ hours of supervised lab practice.",
      ageGroup: "Educator Diploma",
      duration: "6 Months",
      schedule: "Sat & Sun — 10 AM to 1 PM",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
      rating: 4.9,
    },
    {
      id: 2,
      title: "Early Childhood Care & Education Certificate",
      category: "Certificate",
      description:
        "Focused certification in toddler brain development, child safety protocols, nutritional care management, and designing responsive indoor and outdoor play environments.",
      ageGroup: "Ages 0–3 Focus",
      duration: "3 Months",
      schedule: "Mon & Wed — 4 PM to 6:30 PM",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Preschool & Kindergarten Programme",
      category: "Early Learning",
      description:
        "A full academic year of child-centered Montessori learning for children aged 3–5. Covers pre-reading, pre-writing, number concepts, art, and social development in a prepared environment.",
      ageGroup: "Ages 3–5",
      duration: "1 Academic Year",
      schedule: "Mon–Fri — 8 AM to 12 PM",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
      rating: 5.0,
    },
  ];

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Flagship Programmes"
        title="Featured Courses"
        subtitle="Our most popular and highly-rated academic programmes, designed for children and aspiring educators."
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
                  {course.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                <Star className="w-3.5 h-3.5 text-[#FFD166] fill-current" />
                <span className="text-xs font-bold text-[#2C5F8A]">{course.rating}</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 flex flex-col flex-1">
              <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors leading-snug">
                {course.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                {course.description}
              </p>

              {/* Metadata Pills */}
              <div className="grid grid-cols-1 gap-2 text-xs font-medium text-slate-600 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                  <Users className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  <span>{course.ageGroup}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                  <span>{course.schedule}</span>
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
