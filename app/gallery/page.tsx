"use client";

import { useState } from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import GalleryCardWireframe from "@/components/cards/GalleryCardWireframe";
import FilterBarWireframe from "@/components/common/FilterBarWireframe";
import LightboxWireframeModal from "@/components/common/LightboxWireframeModal";

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleOpenLightbox = (title: string) => {
    setSelectedTitle(title);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 1: Hero Section
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A]">
            Institute Photo & Activity Gallery
          </h1>
          <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl mx-auto">
            <div className="h-3 bg-slate-300 rounded-full w-full"></div>
            <div className="h-3 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <SectionContainer bg="surface" className="py-6">
        <div className="space-y-3">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 2: Category Filter Bar
          </span>
          <FilterBarWireframe
            categories={[
              "All Media",
              "Classrooms & Labs",
              "Teacher Workshops",
              "Child Activities",
              "Convocation & Events",
            ]}
          />
        </div>
      </SectionContainer>

      {/* 3. IMAGE GRID */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 3: Responsive Gallery Grid"
          title="Campus Life & Practical Training Highlights"
          subtitle="Click Any Image Card to Open Fullscreen Lightbox Preview"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <GalleryCardWireframe
              key={item}
              title={`Gallery Image #${item} Wireframe Title`}
              category={item % 2 === 0 ? "Classroom Environment" : "Practical Lab Session"}
              onOpenLightbox={() => handleOpenLightbox(`Gallery Image Item #${item} Wireframe`)}
            />
          ))}
        </div>
      </SectionContainer>

      {/* 4. LIGHTBOX PLACEHOLDER MODAL */}
      <LightboxWireframeModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={selectedTitle}
      />

    </div>
  );
}
