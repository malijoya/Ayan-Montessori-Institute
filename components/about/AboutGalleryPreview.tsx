"use client";

import { useState } from "react";
import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import LightboxWireframeModal from "@/components/common/LightboxWireframeModal";
import { ZoomIn, ArrowRight } from "lucide-react";

export default function AboutGalleryPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");

  const photos = [
    {
      id: 1,
      title: "Classroom Practical Life Station",
      category: "Classroom Activities",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Early Reading & Phonics Nook",
      category: "Reading Sessions",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Creative Painting & Art Session",
      category: "Art and Craft",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Nature Exploration & Play",
      category: "Outdoor Learning",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Sensory & Science Experiment",
      category: "Science Discovery",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Annual Sports & Celebration Day",
      category: "School Events",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Group Circle & Storytelling",
      category: "Group Activities",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "Graduation & Diploma Ceremony",
      category: "Celebrations",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const handleOpenLightbox = (title: string) => {
    setSelectedTitle(title);
    setLightboxOpen(true);
  };

  return (
    <SectionContainer bg="surface">
      <SectionHeader
        badge="Life at Ayan Montessori"
        title="Campus Photo Gallery"
        subtitle="Moments of joy, active learning, creative expression, and community celebrations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => handleOpenLightbox(photo.title)}
            className="group relative rounded-3xl overflow-hidden shadow-montessori h-60 bg-slate-100 cursor-pointer"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/90 via-[#2C5F8A]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

            <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
              <div className="flex justify-end">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>

              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFD166] text-[#2C5F8A] inline-block mb-1 shadow-sm">
                  {photo.category}
                </span>
                <h4 className="font-poppins font-bold text-sm text-white group-hover:text-[#87CEEB] transition-colors">
                  {photo.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-sm hover:bg-[#70BDDF] transition-all shadow-md group"
        >
          <span>View Full Gallery</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Lightbox Modal */}
      <LightboxWireframeModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={selectedTitle}
      />
    </SectionContainer>
  );
}
