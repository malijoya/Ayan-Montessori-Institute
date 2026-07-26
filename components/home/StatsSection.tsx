"use client";

import { useEffect, useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import { Smile, Award, BookOpen, Clock } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      target: 500,
      suffix: "+",
      label: "Happy Students",
      subText: "Enrolled in early years & elementary tracks",
      icon: Smile,
      bgColor: "bg-[#87CEEB]/20 text-[#2C5F8A] border-[#87CEEB]/40",
    },
    {
      id: 2,
      target: 30,
      suffix: "+",
      label: "Professional Teachers",
      subText: "Certified master Montessori educators",
      icon: Award,
      bgColor: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
    {
      id: 3,
      target: 20,
      suffix: "+",
      label: "Specialized Courses",
      subText: "Diplomas, certificates & workshops",
      icon: BookOpen,
      bgColor: "bg-[#2C5F8A]/10 text-[#2C5F8A] border-[#2C5F8A]/30",
    },
    {
      id: 4,
      target: 10,
      suffix: "+",
      label: "Years of Excellence",
      subText: "Pioneering quality early education",
      icon: Clock,
      bgColor: "bg-[#FFD166]/30 text-[#8F6500] border-[#FFD166]",
    },
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
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 text-center space-y-3 group"
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 rounded-2xl ${stat.bgColor} border flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
              </div>

              {/* Counter Value */}
              <div className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
                {counters[idx]}
                {stat.suffix}
              </div>

              {/* Label & Subtext */}
              <div>
                <h3 className="font-poppins font-bold text-base text-[#2C5F8A]">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-sans">
                  {stat.subText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
