"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Eye,
  Play,
  ArrowRight,
  Calendar,
  Clock,
  Film,
  Camera,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

import {
  galleryItems,
  galleryCategories,
  featuredMoments,
  videoMedia,
  socialPosts,
  GalleryItem,
  VideoMedia,
} from "@/lib/galleryData";
import GalleryLightboxModal from "./GalleryLightboxModal";
import GalleryVideoModal from "./GalleryVideoModal";

export default function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<VideoMedia | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Filter items dynamically based on selected category
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const openVideo = (video: VideoMedia) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="bg-white">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#87CEEB]/20 via-[#87CEEB]/5 to-white pt-12 pb-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 bg-[#87CEEB]/20 text-[#2C5F8A] px-4 py-1.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider">
                <Camera className="w-4 h-4" />
                Our Gallery
              </span>

              <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2C5F8A] leading-tight">
                A Glimpse Into Life at Ayan Montessori Institute
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore our visual story. Our gallery showcases authentic child-centred learning, creative arts, physical sports, annual celebrations, and educator training moments across our institute.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold rounded-2xl shadow-xl shadow-[#2C5F8A]/20 transition-all hover:scale-105 active:scale-95 text-base flex items-center gap-2"
                >
                  Explore Our Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Quick Counter Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
                <div>
                  <strong className="font-poppins font-extrabold text-xl sm:text-2xl text-[#2C5F8A] block">500+</strong>
                  <span className="text-xs text-slate-500 font-medium">Activity Photos</span>
                </div>
                <div>
                  <strong className="font-poppins font-extrabold text-xl sm:text-2xl text-[#2C5F8A] block">8</strong>
                  <span className="text-xs text-slate-500 font-medium">Media Categories</span>
                </div>
                <div>
                  <strong className="font-poppins font-extrabold text-xl sm:text-2xl text-[#2C5F8A] block">100%</strong>
                  <span className="text-xs text-slate-500 font-medium">Authentic Moments</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop"
                  alt="Montessori classroom learning environment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Highlight */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FFD166]/30 text-slate-800 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#2C5F8A]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs text-[#2C5F8A]">Prepared Environment</h4>
                  <p className="text-[11px] text-slate-500">Child-centred spaces</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. GALLERY CATEGORY FILTER */}
      {/* ---------------------------------------------------- */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-0 z-20 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat;
              const count =
                cat === "All"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2.5 rounded-full text-xs font-poppins font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? "bg-[#2C5F8A] text-white shadow-md shadow-[#2C5F8A]/20 scale-105"
                      : "bg-slate-100 hover:bg-[#87CEEB]/20 text-slate-700 hover:text-[#2C5F8A]"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. MAIN PHOTO GALLERY */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Photo Showcase
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Campus Media & Activity Highlights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Showing {filteredItems.length} photos in &ldquo;{activeCategory}&rdquo;. Click any photo card to open in full-screen Lightbox.
            </p>
          </div>

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className={`group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 ${
                  item.span || ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/90 via-[#2C5F8A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                  <div className="flex justify-between items-start">
                    <span className="bg-[#FFD166] text-slate-900 font-poppins font-bold text-[10px] uppercase px-3 py-0.5 rounded-full shadow-xs">
                      {item.category}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h4 className="font-poppins font-bold text-base text-white line-clamp-1">
                      {item.title}
                    </h4>
                    {item.caption && (
                      <p className="text-xs text-slate-200 line-clamp-2 mt-1 font-normal">
                        {item.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. FEATURED MOMENTS */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Annual Milestones
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A]">
              Special Moments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Highlighting major institutional celebrations, exhibitions, and annual events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredMoments.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4 p-5">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-[#2C5F8A] text-[10px] font-poppins font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {m.date}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                    {m.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. VIDEO / MEDIA SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Video Showcase
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A]">
              Experience Our Learning Environment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Watch video walkthroughs of our classrooms, diploma lab sessions, and toddler care rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoMedia.map((vid) => (
              <div
                key={vid.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 p-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div
                    onClick={() => openVideo(vid)}
                    className="relative h-52 w-full rounded-2xl overflow-hidden cursor-pointer group/vid"
                  >
                    <Image
                      src={vid.thumbnail}
                      alt={vid.title}
                      fill
                      className="object-cover group-hover/vid:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover/vid:bg-black/50 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FFD166] text-slate-900 flex items-center justify-center shadow-2xl group-hover/vid:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-slate-900 ml-1" />
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {vid.duration}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                    {vid.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {vid.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => openVideo(vid)}
                  className="w-full py-3 bg-slate-50 hover:bg-[#2C5F8A] hover:text-white text-[#2C5F8A] font-poppins font-bold text-xs rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Film className="w-4 h-4" />
                  Watch Video Tour
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. INSTAGRAM / SOCIAL MEDIA PREVIEW */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-1">
              <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                Social Feed
              </span>
              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
                Follow Our Journey
              </h2>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold text-xs rounded-full shadow-md transition-all flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4 text-[#FFD166]" />
              Follow Us on Instagram
            </a>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialPosts.map((post) => (
              <a
                key={post.id}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-44 rounded-2xl overflow-hidden border border-slate-100 shadow-xs block"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2C5F8A]/80 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-white text-xs">
                  <InstagramIcon className="w-5 h-5 text-[#FFD166]" />
                  <p className="text-[10px] line-clamp-3 leading-snug">
                    {post.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. CALL TO ACTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#87CEEB] via-[#2C5F8A] to-[#2C5F8A] py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6 relative z-10">
          <span className="inline-block bg-[#FFD166] text-slate-900 font-poppins font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs">
            Visit Our Institute
          </span>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Come and See the Difference
          </h2>

          <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
            Experience our authentic Montessori prepared classrooms in person. Schedule a campus visit or talk to our admissions desk today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/courses"
              className="px-8 py-4 bg-[#FFD166] hover:bg-[#ffc847] text-slate-900 font-poppins font-bold rounded-2xl shadow-xl transition-all hover:scale-105 text-base"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold rounded-2xl border border-white/20 transition-all text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      <GalleryLightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

      {/* Interactive Video Modal */}
      <GalleryVideoModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
