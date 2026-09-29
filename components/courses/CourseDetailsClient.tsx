"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  Calendar,
  Award,
  BookOpen,
  CheckCircle2,
  Download,
  Share2,
  Sparkles,
  Brain,
  MessageCircle,
  Puzzle,
  Trophy,
  Globe,
  Monitor,
  UserCheck,
  School,
  FileCheck,
  Activity,
  Layers,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Course, getRelatedCourses } from "@/lib/courseData";
import CourseCurriculumAccordion from "./CourseCurriculumAccordion";
import CourseGalleryLightbox from "./CourseGalleryLightbox";
import CourseEnrolModal from "./CourseEnrolModal";
import CourseReviewsSlider from "./CourseReviewsSlider";
import CourseFaqAccordion from "./CourseFaqAccordion";

interface CourseDetailsClientProps {
  course: Course;
  relatedCourses: Course[];
}

export default function CourseDetailsClient({
  course,
  relatedCourses,
}: CourseDetailsClientProps) {
  const [isEnrolModalOpen, setIsEnrolModalOpen] = useState(false);

  const handleDownloadBrochure = () => {
    // Trigger brochure download or alert
    const link = document.createElement("a");
    link.href = "#";
    alert(`Downloading brochure for ${course.title}...`);
  };

  // Outcome icons mapping
  const outcomeIcons = [
    <Sparkles key="1" className="w-6 h-6 text-[#2C5F8A]" />,
    <Brain key="2" className="w-6 h-6 text-[#2C5F8A]" />,
    <MessageCircle key="3" className="w-6 h-6 text-[#2C5F8A]" />,
    <Users key="4" className="w-6 h-6 text-[#2C5F8A]" />,
    <Puzzle key="5" className="w-6 h-6 text-[#2C5F8A]" />,
    <Trophy key="6" className="w-6 h-6 text-[#2C5F8A]" />,
  ];

  // Highlights cards data
  const highlights = [
    {
      icon: <Layers className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Practical, Job-Oriented Training",
      description: "Skills you can take straight into the classroom, not just theory.",
    },
    {
      icon: <Activity className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Interactive Learning",
      description: "Discussions, demonstrations, and practical exercises that keep learning active.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Expert Trainers",
      description: "Learn from AYAN's experienced trainers, backed by more than a decade of teacher training.",
    },
    {
      icon: <School className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Flexible Learning Modes",
      description: "On-campus, hybrid, live on Zoom, and self-paced options to fit your schedule.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Continuous Assessment",
      description: "Regular assignments and feedback so you always know your progress.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Career Support",
      description: "Active teaching vacancies shared across our school network.",
    },
  ];

  return (
    <div className="bg-white">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#87CEEB]/15 via-[#87CEEB]/5 to-white pt-10 pb-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge & Level */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-[#2C5F8A] text-white px-3.5 py-1.5 rounded-full text-xs font-poppins font-semibold tracking-wide uppercase shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#FFD166]" />
                  {course.badge}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#87CEEB]/20 text-[#2C5F8A] px-3 py-1 rounded-full text-xs font-semibold">
                  <Star className="w-3 h-3 text-[#2C5F8A] fill-[#2C5F8A]" />
                  Level: {course.level}
                </span>
                <span className="inline-flex items-center gap-1 bg-[#FFD166]/30 text-slate-800 px-3 py-1 rounded-full text-xs font-medium">
                  {course.category}
                </span>
              </div>

              {/* Course Title */}
              <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2C5F8A] leading-tight">
                {course.title}
              </h1>

              {/* Short Description */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {course.shortDescription}
              </p>

              {/* Specs Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Age Group</span>
                  <span className="font-poppins font-semibold text-xs text-[#2C5F8A] truncate block mt-0.5">
                    {course.ageGroup}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                  <span className="font-poppins font-semibold text-xs text-[#2C5F8A] truncate block mt-0.5">
                    {course.duration}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Difficulty</span>
                  <span className="font-poppins font-semibold text-xs text-[#2C5F8A] truncate block mt-0.5">
                    {course.level}
                  </span>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-2xs text-left">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Mode</span>
                  <span className="font-poppins font-semibold text-xs text-[#2C5F8A] truncate block mt-0.5">
                    {course.mode}
                  </span>
                </div>
              </div>

              {/* Schedule Info */}
              <div className="flex items-center gap-2 bg-[#87CEEB]/15 p-3 rounded-2xl text-xs text-[#2C5F8A] font-medium border border-[#87CEEB]/30">
                <Calendar className="w-4 h-4 shrink-0 text-[#2C5F8A]" />
                <span><strong>Schedule:</strong> {course.schedule}</span>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEnrolModalOpen(true)}
                  className="px-8 py-4 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold rounded-2xl shadow-xl shadow-[#2C5F8A]/20 transition-all hover:scale-105 active:scale-95 text-base flex items-center gap-2 cursor-pointer"
                >
                  Enrol Now
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={handleDownloadBrochure}
                  className="px-6 py-4 bg-white hover:bg-slate-50 text-[#2C5F8A] font-poppins font-semibold rounded-2xl border-2 border-[#2C5F8A]/20 hover:border-[#2C5F8A] transition-all text-base flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#2C5F8A]" />
                  Download Brochure
                </button>
              </div>
            </div>

            {/* Right Hero Column - Image & Floating Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={course.heroImage || course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Highlight 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-[#FFD166]/30 text-slate-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#2C5F8A]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs text-[#2C5F8A]">Established in 2010</h4>
                  <p className="text-[11px] text-slate-500">Pakistan&apos;s trusted Montessori trainers</p>
                </div>
              </div>

              {/* Floating Highlight 2 */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/30 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#2C5F8A]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs text-[#2C5F8A]">Verified Certificate</h4>
                  <p className="text-[11px] text-slate-500">{course.certification}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. COURSE OVERVIEW */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src={course.image}
                  alt="Course Overview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2C5F8A] text-white p-4 rounded-2xl shadow-lg font-poppins font-bold text-xs text-center">
                <span className="block text-xl text-[#FFD166]">100%</span>
                Job-Oriented
              </div>
            </div>

            {/* Right Overview Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                  Detailed Information
                </span>
                <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A] mt-1">
                  Course Overview & Objectives
                </h2>
              </div>

              {/* Full Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {course.fullDescription}
              </p>

              {/* Purpose */}
              <div className="bg-slate-50 p-5 rounded-2xl border-l-4 border-[#2C5F8A] space-y-1">
                <h3 className="font-poppins font-bold text-sm text-[#2C5F8A]">
                  Purpose of the Course
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.purpose}
                </p>
              </div>

              {/* Who Should Join */}
              <div className="bg-[#87CEEB]/10 p-5 rounded-2xl border-l-4 border-[#87CEEB] space-y-1">
                <h3 className="font-poppins font-bold text-sm text-[#2C5F8A]">
                  Who Should Join?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {course.whoShouldJoin}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 pt-2">
                <h3 className="font-poppins font-bold text-base text-[#2C5F8A]">
                  Benefits of Taking This Course:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {course.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. WHAT STUDENTS WILL LEARN */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Core Competencies
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              What Students Will Learn
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The core skills and competencies you will develop by the end of this course.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.outcomes.map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/20 flex items-center justify-center">
                  {outcomeIcons[idx % outcomeIcons.length]}
                </div>
                <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                  {outcome.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. COURSE CURRICULUM */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Syllabus Timeline
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Course Curriculum & Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Explore the module-by-module learning breakdown. Click any module to expand its detailed lessons.
            </p>
          </div>

          <CourseCurriculumAccordion modules={course.modules} />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. COURSE INFORMATION CARD */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-gradient-to-r from-[#2C5F8A] to-[#1E4363] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase font-bold text-[#FFD166] tracking-wider block">
              Key Specifications
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-white">
              Course Information Summary
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Clock className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Course Duration</span>
              <strong className="font-poppins text-sm md:text-base font-bold text-white block">{course.duration}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Users className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Age Group</span>
              <strong className="font-poppins text-sm md:text-base font-bold text-white block">{course.ageGroup}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Globe className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Language</span>
              <strong className="font-poppins text-sm md:text-base font-bold text-white block">{course.language}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <UserCheck className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Class Size</span>
              <strong className="font-poppins text-sm md:text-base font-bold text-white block">{course.classSize}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Award className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Certification</span>
              <strong className="font-poppins text-xs md:text-sm font-bold text-white block">{course.certification}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Calendar className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Class Days</span>
              <strong className="font-poppins text-sm md:text-base font-bold text-white block">{course.classDays}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Clock className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Timing</span>
              <strong className="font-poppins text-xs md:text-sm font-bold text-white block">{course.timing}</strong>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 text-center space-y-2">
              <Monitor className="w-6 h-6 text-[#FFD166] mx-auto" />
              <span className="text-[11px] uppercase font-semibold text-slate-300 block">Mode</span>
              <strong className="font-poppins text-sm md:text-base font-bold text-white block">{course.mode}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. MEET THE TRAINER */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Lead Instructor
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Meet Your Trainer
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Learn directly from AYAN Montessori Institute&apos;s experienced trainers.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Photo */}
              <div className="md:col-span-4 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg border-2 border-[#87CEEB]">
                {course.trainer.photo ? (
                  <Image
                    src={course.trainer.photo}
                    alt={course.trainer.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/40 to-[#2C5F8A]/20 flex items-center justify-center">
                    <GraduationCap className="w-20 h-20 text-[#2C5F8A]" aria-hidden="true" />
                  </div>
                )}
              </div>

              {/* Bio Details */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="inline-block bg-[#87CEEB]/20 text-[#2C5F8A] text-xs font-semibold px-3 py-1 rounded-full mb-1">
                    {course.trainer.experience}
                  </span>
                  <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                    {course.trainer.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {course.trainer.qualification}
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p>{course.trainer.bio}</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-100 text-xs text-slate-700">
                  <strong className="text-[#2C5F8A] font-bold block mb-1">Core Expertise:</strong>
                  {course.trainer.expertise}
                </div>

                <div className="pt-2">
                  <Link
                    href="/trainers"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-[#87CEEB]/20 text-[#2C5F8A] font-poppins font-semibold text-xs rounded-full transition-colors"
                  >
                    View All Faculty Trainers
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. COURSE HIGHLIGHTS */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Why Choose This Program?
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Course Highlights & Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:border-[#87CEEB] hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/20 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-base text-[#2C5F8A]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. GALLERY */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Classroom Moments
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Course Gallery & Activities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any photo to view in high resolution lightbox.
            </p>
          </div>

          <CourseGalleryLightbox gallery={course.gallery} />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. STUDENT & PARENT REVIEWS */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Testimonials
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Student & Parent Reviews
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read real experiences from parents, graduates, and educators who have taken this course.
            </p>
          </div>

          <CourseReviewsSlider />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Got Questions?
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Frequently Asked Questions
            </h2>
          </div>

          <CourseFaqAccordion faqs={course.faqs} />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 11. RELATED COURSES */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                Explore Options
              </span>
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A] mt-1">
                Related Courses You May Like
              </h2>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-poppins font-bold text-[#2C5F8A] hover:underline"
            >
              View All Courses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCourses.map((rel) => (
              <div
                key={rel.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3 p-4">
                  <div className="relative h-40 w-full rounded-xl overflow-hidden">
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="inline-block bg-[#87CEEB]/20 text-[#2C5F8A] text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    {rel.badge}
                  </span>
                  <h3 className="font-poppins font-bold text-sm text-[#2C5F8A] line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.shortDescription}
                  </p>
                </div>

                <div className="p-4 pt-0">
                  <Link
                    href={`/courses/${rel.id}`}
                    className="w-full py-2.5 bg-slate-50 hover:bg-[#2C5F8A] text-[#2C5F8A] hover:text-white font-poppins font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    View Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 12. ENROLMENT CTA */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2C5F8A] via-[#1E4363] to-[#2C5F8A] py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-block bg-[#FFD166] text-slate-900 font-poppins font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                Limited Batch Seats Available
              </span>
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white">
                Ready to Join This Course?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base max-w-2xl">
                Take the next step in your child&apos;s educational journey or advance your professional educator credentials with Ayan Montessori Institute.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEnrolModalOpen(true)}
                  className="px-8 py-4 bg-[#FFD166] hover:bg-[#ffc847] text-slate-900 font-poppins font-bold rounded-2xl shadow-xl transition-all hover:scale-105 text-base cursor-pointer"
                >
                  Enrol Now
                </button>

                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold rounded-2xl border border-white/20 transition-all text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-4 border-white/20 shadow-2xl">
                <GraduationCap className="w-24 h-24 text-[#FFD166]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Enrolment Modal */}
      <CourseEnrolModal
        isOpen={isEnrolModalOpen}
        onClose={() => setIsEnrolModalOpen(false)}
        courseTitle={course.title}
      />
    </div>
  );
}
