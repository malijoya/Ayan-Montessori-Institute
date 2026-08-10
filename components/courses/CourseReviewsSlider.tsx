"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface ReviewItem {
  name: string;
  role: string;
  rating: number;
  photo: string;
  review: string;
}

const defaultReviews: ReviewItem[] = [
  {
    name: "Sadia Imran",
    role: "Montessori Teacher Diploma Trainee",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    review: "This diploma completely transformed my teaching career! The 100+ hours of practical lab presentations gave me real confidence. The instructors at Ayan Montessori Institute are extremely supportive.",
  },
  {
    name: "Muhammad Usman",
    role: "Parent of Preschool Student",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    review: "Enrolling my daughter in this programme was the best decision. Her language and problem-solving skills have skyrocketed. The child-friendly, structured environment is truly world-class.",
  },
  {
    name: "Zainab Fatima",
    role: "ECCE Certified Caregiver",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    review: "The curriculum is AMI-aligned and structured brilliantly. I gained hands-on expertise in early child development that helped me secure a senior teacher position immediately after graduation.",
  },
];

interface CourseReviewsSliderProps {
  reviews?: ReviewItem[];
}

export default function CourseReviewsSlider({
  reviews = defaultReviews,
}: CourseReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-gradient-to-br from-white to-[#87CEEB]/10 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-md">
      <Quote className="w-12 h-12 text-[#87CEEB]/30 absolute top-6 right-6" />

      {/* Grid of review cards on md screens, carousel view on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
              idx === currentIndex ? "block" : "hidden md:flex"
            }`}
          >
            <div className="space-y-4">
              {/* Star Ratings */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating
                        ? "text-[#FFD166] fill-[#FFD166]"
                        : "text-slate-200"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-slate-600 italic leading-relaxed">
                &ldquo;{rev.review}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#87CEEB]">
                <Image
                  src={rev.photo}
                  alt={rev.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-poppins font-bold text-sm text-[#2C5F8A]">
                  {rev.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls for Mobile */}
      <div className="flex md:hidden items-center justify-between mt-6 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#2C5F8A] flex items-center justify-center shadow-xs"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-semibold text-slate-500">
          {currentIndex + 1} of {reviews.length}
        </span>
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white border border-slate-200 text-[#2C5F8A] flex items-center justify-center shadow-xs"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
