"use client";

import { useEffect, useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import { GraduationCap, Award, BookOpen, Clock } from "lucide-react";

export default function AboutAchievements() {
  const stats = [
    { target: 10000, suffix: "+", label: "TEACHERS TRAINED", icon: GraduationCap, color: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40" },
    { target: 10, suffix: "+", label: "CERTIFIED TRAINERS", icon: Award, color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]" },
    { target: 10, suffix: "+", label: "TRAINING PROGRAMS", icon: BookOpen, color: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30" },
    { target: 16, suffix: "+", label: "YEARS OF EXCELLENCE", icon: Clock, color: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, index) => {
          const target = stats[index].target;
          const increment = Math.ceil(target / steps);
          if (count + increment >= target) {
            return target;
          }
          return count + increment;
        })
      );
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <SectionContainer bg="primary-light" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 text-center space-y-3 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${stat.color} border flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>
              <div className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
                {counters[idx].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
