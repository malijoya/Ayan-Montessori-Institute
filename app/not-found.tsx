"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Home,
  BookOpen,
  Users,
  Image as ImageIcon,
  MessageCircle,
  Mail,
  Search,
  ArrowLeft,
  Sparkles,
  Compass,
} from "lucide-react";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/courses");
    }
  };

  const popularDestinations = [
    {
      name: "Home Page",
      description: "Welcome to Ayan Montessori Institute",
      href: "/",
      icon: Home,
      color: "bg-[#87CEEB]/20 text-[#2C5F8A]",
    },
    {
      name: "Explore Courses",
      description: "Montessori & early learning programmes",
      href: "/courses",
      icon: BookOpen,
      color: "bg-[#FFD166]/30 text-slate-900",
    },
    {
      name: "Meet Our Trainers",
      description: "Dedicated AMI educators & staff",
      href: "/trainers",
      icon: Users,
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "Campus Gallery",
      description: "Photos & video moments from classroom life",
      href: "/gallery",
      icon: ImageIcon,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "Parent Reviews",
      description: "Real feedback from our institute community",
      href: "/testimonials",
      icon: MessageCircle,
      color: "bg-rose-100 text-rose-700",
    },
    {
      name: "Contact Admissions",
      description: "Get in touch for registration & tours",
      href: "/contact",
      icon: Mail,
      color: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 sm:py-16 md:py-24 bg-gradient-to-b from-[#E0F2FE]/50 via-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Graphic & Badge */}
        <div className="relative inline-block">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 mx-auto rounded-3xl overflow-hidden shadow-xl ring-4 ring-[#87CEEB]/30 bg-white">
            <Image
              src="/404-illustration.png"
              alt="404 Page Lost in Playtime Illustration"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating 404 Badge */}
          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#FFD166] text-slate-900 font-poppins font-extrabold text-lg sm:text-2xl px-4 py-2 rounded-2xl shadow-lg border-2 border-white rotate-3">
            404
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 bg-[#87CEEB]/20 border border-[#87CEEB]/40 text-[#2C5F8A] font-poppins font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Page Not Found
          </span>

          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A] leading-tight">
            Oops! This Page Seems to Have <span className="text-[#FFD166]">Wandered Off</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-inter">
            The page you are looking for might have been moved, renamed, or doesn&apos;t exist anymore. Don&apos;t worry — let&apos;s get you right back on track!
          </p>
        </div>

        {/* Quick Search Input */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for courses or topics..."
              className="w-full pl-11 pr-28 py-3.5 bg-white border-2 border-[#87CEEB]/50 rounded-full text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2C5F8A] focus:ring-4 focus:ring-[#87CEEB]/20 shadow-md transition-all"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold text-xs rounded-full transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            id="404-home-btn"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFD166]" />
            Return to Home Page
          </Link>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 font-poppins font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            id="404-courses-btn"
          >
            <BookOpen className="w-4 h-4" />
            Explore Courses
          </Link>
        </div>

        {/* Popular Destinations Directory */}
        <div className="pt-8 border-t border-slate-200/80 max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-poppins font-bold text-slate-400 uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#87CEEB]" />
            Or Explore Popular Destinations
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {popularDestinations.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#87CEEB]/40 transition-all duration-300 flex items-start gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xs text-[#2C5F8A] group-hover:text-[#87CEEB] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-1 leading-snug mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
