"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Quote,
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  SmilePlus,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Trophy,
  BookOpen,
} from "lucide-react";

import {
  parentTestimonials,
  studentTestimonials,
  videoTestimonials,
  successStories,
  testimonialStats,
  featuredTestimonial,
  testimonialCategories,
  Testimonial,
  VideoTestimonial,
} from "@/lib/testimonialData";
import TestimonialVideoModal from "./TestimonialVideoModal";

// ─────────────────────────────────────────────
// Helper: Star Rating renderer
// ─────────────────────────────────────────────
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sz = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${sz} ${i < rating ? "fill-[#FFD166] text-[#FFD166]" : "text-slate-200 fill-slate-200"}`}
        />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Helper: Animated counter
// ─────────────────────────────────────────────
function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = end % 1 !== 0;
          const steps = 60;
          const interval = duration / steps;
          let current = 0;
          const increment = end / steps;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
          }, interval);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {end % 1 !== 0 ? count.toFixed(1) : count}
      {suffix}
    </span>
  );
}

// Map stat icon names to lucide components
function StatIcon({ name }: { name: string }) {
  const cls = "w-7 h-7 text-[#2C5F8A]";
  switch (name) {
    case "SmilePlus":      return <SmilePlus className={cls} />;
    case "HeartHandshake": return <HeartHandshake className={cls} />;
    case "Star":           return <Star className={cls + " fill-[#2C5F8A]"} />;
    case "GraduationCap":  return <GraduationCap className={cls} />;
    default:               return <Sparkles className={cls} />;
  }
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────
export default function TestimonialsPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // ── Filter parent testimonials by category ──
  const filteredParent = useMemo(() => {
    if (activeCategory === "All" || activeCategory === "Parents") return parentTestimonials;
    if (activeCategory === "Students") return [];
    return parentTestimonials.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  // Show student section only for All / Students
  const showStudentSection =
    activeCategory === "All" || activeCategory === "Students";

  // ── Carousel helpers ──
  const prevSlide = useCallback(() => {
    setCarouselIndex((i) => (i === 0 ? studentTestimonials.length - 1 : i - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCarouselIndex((i) => (i === studentTestimonials.length - 1 ? 0 : i + 1));
  }, []);

  // Touch swipe on carousel
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  const openVideo = (video: VideoTestimonial) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden min-h-[540px] md:min-h-[620px] flex items-center">
        {/* Background image */}
        <Image
          src="/testimonials-hero.jpg"
          alt="Parent and child learning together at Ayan Montessori Institute"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F8A]/90 via-[#2C5F8A]/70 to-[#87CEEB]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl space-y-6">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#FFD166]/20 border border-[#FFD166]/40 text-[#FFD166] font-poppins font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Parent &amp; Student Reviews
            </span>

            {/* Heading */}
            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              What Parents and{" "}
              <span className="text-[#FFD166]">Students</span>{" "}
              Say About Us
            </h1>

            {/* Sub text */}
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl">
              The experiences of our parents and students reflect our unwavering commitment to quality education,
              holistic child development, and a nurturing learning environment.
            </p>

            {/* CTA */}
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 font-poppins font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              id="hero-explore-courses"
            >
              Explore Our Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 56" className="w-full h-14 fill-white" preserveAspectRatio="none">
            <path d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. STATISTICS                                                  */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonialStats.map((stat) => (
              <div
                key={stat.id}
                className="group flex flex-col items-center text-center gap-3 bg-gradient-to-b from-[#E0F2FE]/60 to-white rounded-2xl p-6 md:p-8 border border-[#87CEEB]/30 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#87CEEB]/20 flex items-center justify-center group-hover:bg-[#87CEEB]/40 transition-colors">
                  <StatIcon name={stat.icon} />
                </div>
                <div className="font-poppins font-extrabold text-3xl md:text-4xl text-[#2C5F8A]">
                  <AnimatedCounter end={stat.numericEnd} suffix={stat.suffix} />
                </div>
                <p className="text-slate-600 font-inter text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED TESTIMONIAL                                        */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#E0F2FE]/70 via-white to-[#E0F2FE]/40 border-y border-[#87CEEB]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Featured Review
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              A Story That Speaks for Itself
            </h2>
          </div>

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#87CEEB]/20 overflow-hidden">
            {/* Background decorative quotes */}
            <Quote className="absolute top-6 left-6 w-20 h-20 text-[#87CEEB]/10 fill-[#87CEEB]/10" />
            <Quote className="absolute bottom-6 right-6 w-20 h-20 text-[#FFD166]/10 fill-[#FFD166]/10 rotate-180" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-[#87CEEB]/40 shadow-lg">
                  <Image
                    src={featuredTestimonial.photo}
                    alt={featuredTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <StarRating rating={featuredTestimonial.rating} size="lg" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <Quote className="w-8 h-8 text-[#FFD166] fill-[#FFD166] mx-auto md:mx-0" />
                <blockquote className="text-slate-700 text-sm md:text-base leading-relaxed italic font-inter">
                  &ldquo;{featuredTestimonial.review}&rdquo;
                </blockquote>
                <div>
                  <p className="font-poppins font-bold text-[#2C5F8A] text-base">
                    {featuredTestimonial.name}
                  </p>
                  <p className="text-slate-500 text-xs">{featuredTestimonial.relation}</p>
                  <span className="inline-block mt-2 bg-[#FFD166]/20 text-[#2C5F8A] text-xs font-semibold px-3 py-1 rounded-full">
                    {featuredTestimonial.courseOrClass}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. CATEGORY FILTER TABS (placed before grid for UX flow)      */}
      {/* ============================================================ */}
      <section className="pt-14 md:pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Browse by Category
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              All Reviews &amp; Experiences
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {testimonialCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-poppins font-semibold text-xs transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#2C5F8A] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-[#87CEEB]/30 hover:text-[#2C5F8A]"
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. PARENT TESTIMONIALS GRID                                    */}
      {/* ============================================================ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredParent.length === 0 ? (
            <div className="text-center py-20 text-slate-400 font-inter">
              No parent reviews in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredParent.map((t: Testimonial) => (
                <ParentCard key={t.id} testimonial={t} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. STUDENT TESTIMONIALS — CAROUSEL                             */}
      {/* ============================================================ */}
      {showStudentSection && (
        <section className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                Our Little Learners
              </span>
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
                What Our Students Say
              </h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto">
                Hear directly from the young explorers who make Ayan Montessori Institute come alive every day.
              </p>
            </div>

            {/* Carousel */}
            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Cards track */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                >
                  {studentTestimonials.map((st) => (
                    <div key={st.id} className="w-full flex-shrink-0 px-4 md:px-16">
                      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#87CEEB]/20 text-center space-y-5">
                        {/* Avatar */}
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-[#FFD166]/50 shadow-md bg-[#E0F2FE]">
                          <Image
                            src={st.photo}
                            alt={st.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <StarRating rating={st.rating} size="sm" />
                        <blockquote className="text-slate-700 text-sm md:text-base italic leading-relaxed font-inter">
                          &ldquo;{st.review}&rdquo;
                        </blockquote>
                        <div>
                          <p className="font-poppins font-bold text-[#2C5F8A] text-sm">{st.name}</p>
                          <p className="text-slate-400 text-xs">{st.courseOrClass}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-[#2C5F8A] hover:bg-[#2C5F8A] hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Previous student testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-[#2C5F8A] hover:bg-[#2C5F8A] hover:text-white transition-colors cursor-pointer z-10"
                aria-label="Next student testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {studentTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`rounded-full transition-all duration-300 cursor-pointer ${
                      i === carouselIndex
                        ? "w-6 h-2.5 bg-[#2C5F8A]"
                        : "w-2.5 h-2.5 bg-slate-200 hover:bg-[#87CEEB]"
                    }`}
                    aria-label={`Go to student ${i + 1}`}
                    aria-pressed={i === carouselIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/* 6. VIDEO TESTIMONIALS                                          */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-[#2C5F8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-[#FFD166] tracking-wider block">
              Real Stories
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
              Watch Their Stories
            </h2>
            <p className="text-blue-200 text-sm max-w-xl mx-auto">
              Hear from our community in their own words. Real families, real experiences, real transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {videoTestimonials.map((vid) => (
              <div
                key={vid.id}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#FFD166]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                onClick={() => openVideo(vid)}
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#2C5F8A]/60 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#FFD166] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-slate-900 fill-slate-900 ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <p className="font-poppins font-bold text-white text-sm">{vid.name}</p>
                  <p className="text-blue-200 text-xs leading-relaxed">{vid.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#FFD166] text-xs font-semibold mt-1">
                    <Play className="w-3 h-3 fill-[#FFD166]" />
                    Watch Story
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SUCCESS STORIES                                             */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Learning Journeys
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Learning Journeys That Inspire Us
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Every child has a unique story. Here are a few that remind us why we do what we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.studentName}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/70 to-transparent" />
                  {/* Achievement badge */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-flex items-center gap-1.5 bg-[#FFD166] text-slate-900 text-xs font-poppins font-bold px-3 py-1.5 rounded-full">
                      <Trophy className="w-3.5 h-3.5" />
                      {story.achievement}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div>
                    <p className="font-poppins font-bold text-[#2C5F8A] text-base">{story.studentName}</p>
                    <p className="text-xs text-slate-400">{story.courseOrClass}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 font-inter line-clamp-4">
                    {story.story}
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-[#2C5F8A] hover:text-[#FFD166] font-poppins font-semibold text-xs transition-colors cursor-pointer"
                    aria-label={`Read more about ${story.studentName}`}
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. LEAVE A REVIEW                                              */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-[#E0F2FE]/60 via-white to-[#E0F2FE]/40 border-y border-[#87CEEB]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
            Your Voice Matters
          </span>
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
            Share Your Experience
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We would love to hear about your experience with Ayan Montessori Institute. Your feedback
            helps us grow and inspires other families to make the best choice for their children.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* Google Reviews — connect URL later */}
            <a
              href="#"
              id="leave-google-review"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#2C5F8A] text-[#2C5F8A] hover:bg-[#2C5F8A] hover:text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-full shadow-sm transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Leave a Google Review
            </a>

            {/* Internal form — connect route later */}
            <button
              type="button"
              id="leave-website-review"
              className="inline-flex items-center gap-2 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 font-poppins font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <Star className="w-4 h-4 fill-slate-900" />
              Leave a Review
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10. FINAL CTA                                                  */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2C5F8A] via-[#1E4363] to-[#2C5F8A] py-16 md:py-20 text-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#87CEEB]/10 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#FFD166]/10 translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[#FFD166] text-slate-900 font-poppins font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            Begin the Journey
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Ready to Begin Your Child&apos;s{" "}
            <span className="text-[#FFD166]">Learning Journey?</span>
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Join hundreds of families who have trusted Ayan Montessori Institute to give their children
            the gift of authentic, joyful, and purposeful early education.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/courses"
              id="cta-explore-courses"
              className="inline-flex items-center gap-2 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 font-poppins font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              id="cta-contact-us"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-poppins font-bold text-sm px-8 py-4 rounded-full transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video modal */}
      <TestimonialVideoModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
}

// ─────────────────────────────────────────────
// Parent Card (extracted for cleanliness)
// ─────────────────────────────────────────────
function ParentCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Card top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#87CEEB] to-[#2C5F8A]" />

      <div className="p-6 flex-1 flex flex-col gap-4">
        {/* Header row */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#87CEEB]/40 flex-shrink-0 bg-[#E0F2FE]">
            <Image src={t.photo} alt={t.name} fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="font-poppins font-bold text-[#2C5F8A] text-sm truncate">{t.name}</p>
            <p className="text-slate-400 text-xs truncate">{t.relation}</p>
          </div>
          <div className="ml-auto flex-shrink-0">
            <StarRating rating={t.rating} />
          </div>
        </div>

        {/* Review */}
        <blockquote className="text-slate-600 text-sm leading-relaxed font-inter flex-1 italic line-clamp-5">
          &ldquo;{t.review}&rdquo;
        </blockquote>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="bg-[#E0F2FE] text-[#2C5F8A] text-xs font-semibold px-3 py-1 rounded-full">
            {t.courseOrClass}
          </span>
          {t.date && (
            <span className="text-slate-400 text-xs">{t.date}</span>
          )}
        </div>
      </div>
    </div>
  );
}
