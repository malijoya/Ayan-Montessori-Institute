"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Star, GraduationCap, Award, CheckCircle2, Users, Briefcase } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E0F2FE]/60 via-white to-slate-50 py-16 lg:py-24 border-b border-slate-100">
      {/* Decorative Soft Background Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#87CEEB]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FFD166]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#2C5F8A]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            
            {/* Small Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-[#2C5F8A] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Welcome to Ayan Montessori Institute</span>
            </div>

            {/* Large Main Heading */}
            <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] text-[#2C5F8A] tracking-tight leading-[1.2]">
              Pakistan&apos;s <span className="text-[#2C5F8A] underline decoration-[#FFD166] decoration-wavy decoration-4 underline-offset-4">Most Trusted Name</span> in Montessori Teacher Training — Established in 2010
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-montserrat">
              For over a decade, AYAN Montessori Institute has been shaping the educators who shape young minds. With AMI &amp; MACTE-certified trainers, internationally recognized curricula, and a legacy of excellence, we don&apos;t just teach the Montessori method — we set the standard for it in Pakistan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/courses"
                className="px-8 py-3.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-sm md:text-base hover:bg-[#70BDDF] hover:shadow-lg transition-all flex items-center gap-2 group shadow-sm active:scale-95"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border-2 border-[#2C5F8A] text-[#2C5F8A] font-bold text-sm md:text-base hover:bg-[#2C5F8A] hover:text-white transition-all shadow-sm active:scale-95"
              >
                Contact Us
              </Link>
            </div>

            {/* Feature Highlights Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
                <span>Online Live at Zoom</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
                <span>On-Campus Classes</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
                <span>In-House Training Programs</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Large Montessori Image & Floating Elements */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Image Container */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Border Ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#87CEEB] via-[#FFD166] to-[#2C5F8A] opacity-30 blur-lg"></div>

              <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-white bg-white group">
                <Image
                  src="/images/hero-img.jpg"
                  alt="Ayan Montessori Institute teacher training workshop"
                  width={1195}
                  height={896}
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-[30%_center] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/40 via-transparent to-transparent"></div>
                
                {/* Bottom Image Tagline */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#FFD166] text-[#2C5F8A] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#2C5F8A] block">Montessori Certified</span>
                      <span className="text-[11px] text-slate-500 block">Child-Centered Learning</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#87CEEB]/30 text-[#2C5F8A] font-bold text-[10px] uppercase">
                    Active Lab
                  </span>
                </div>
              </div>

              {/* FLOATING DECORATIVE BADGES */}
              
              {/* Floating Badge 1: Top Left - Master Trainers */}
              <div className="absolute -top-5 -left-5 bg-white p-3 rounded-2xl shadow-montessori border border-slate-100 flex items-center gap-3 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/30 text-[#2C5F8A] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C5F8A] block">AMI &amp; MACTE Master Trainers</span>
                  <span className="text-[10px] text-slate-500">World-Class Mentorship</span>
                </div>
              </div>

              {/* Floating Badge 2: Right Middle - Educators Trained */}
              <div className="absolute top-1/3 -right-6 bg-white p-3 rounded-2xl shadow-montessori border border-slate-100 hidden sm:flex items-center gap-3 animate-float-medium z-20">
                <div className="w-10 h-10 rounded-xl bg-[#2C5F8A]/10 text-[#2C5F8A] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C5F8A] block">10,000+ Educators Trained</span>
                  <span className="flex items-center gap-1 text-[10px] text-slate-500">
                    <span className="flex text-[#FFD166]" aria-label="5 star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </span>
                    Rated Training
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Left - Job-Oriented Diplomas */}
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-2xl shadow-montessori border border-slate-100 flex items-center gap-3 animate-float-medium z-20">
                <div className="w-10 h-10 rounded-xl bg-[#FFD166]/40 text-[#8F6500] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#2C5F8A] block">100% Job-Oriented Diplomas</span>
                  <span className="text-[10px] text-slate-500">Real-Time Career Updates</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
