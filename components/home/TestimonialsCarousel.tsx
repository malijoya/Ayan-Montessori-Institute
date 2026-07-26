"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      id: 1,
      name: "Ayesha Rahman",
      relation: "Mother of Rayan (Age 4)",
      roleTag: "Parent Review",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      review:
        "Enrolling my son at Ayan Montessori Institute was the best decision we ever made. The teachers are incredibly attentive, and Rayan has developed amazing independence, self-confidence, and a genuine love for reading and math!",
    },
    {
      id: 2,
      name: "Dr. Tariq Mahmood",
      relation: "Father of Anaya (Age 5)",
      roleTag: "Parent Review",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      review:
        "The Montessori practical apparatus and calm classroom atmosphere are phenomenal. My daughter handles tasks with precision and focus that astound us. Truly a premium educational institute with heart.",
    },
    {
      id: 3,
      name: "Sadaf Fatima",
      relation: "Montessori Diploma Graduate (Batch 20)",
      roleTag: "Trainee Review",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      rating: 5,
      review:
        "The Teacher Training Diploma at Ayan Montessori equipped me with deep pedagogical knowledge and 100+ hours of practical lab hands-on experience. I secured a lead teacher position immediately after graduation!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Community Feedback"
        title="What Parents & Trainees Say"
        subtitle="Real stories of growth, confidence, and educational transformation from our Montessori family."
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Testimonial Card Display */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-montessori-lg transition-all duration-500 relative">
          
          <Quote className="w-16 h-16 text-[#87CEEB]/25 absolute top-6 right-8 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-[#FFD166]">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans italic">
              "{testimonials[currentIndex].review}"
            </p>

            {/* Author Profile Footer */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover ring-4 ring-[#87CEEB]/30 shadow-sm"
              />
              <div>
                <h4 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                  {testimonials[currentIndex].name}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {testimonials[currentIndex].relation}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFD166]"></span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2C5F8A] bg-[#87CEEB]/20 px-2 py-0.5 rounded-full">
                    {testimonials[currentIndex].roleTag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls (Arrows & Indicators) */}
        <div className="flex items-center justify-between pt-8">
          {/* Navigation Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#2C5F8A]" : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-[#2C5F8A] hover:bg-[#87CEEB] hover:border-[#87CEEB] hover:text-[#2C5F8A] shadow-sm flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-12 h-12 rounded-full border border-slate-200 bg-white text-[#2C5F8A] hover:bg-[#87CEEB] hover:border-[#87CEEB] hover:text-[#2C5F8A] shadow-sm flex items-center justify-center transition-all active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}
