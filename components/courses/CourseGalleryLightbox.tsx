"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  title: string;
  image: string;
}

interface CourseGalleryLightboxProps {
  gallery: GalleryItem[];
}

export default function CourseGalleryLightbox({
  gallery,
}: CourseGalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % gallery.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/80 via-[#2C5F8A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#FFD166] tracking-wider">
                  Course Gallery
                </span>
                <h4 className="font-poppins font-semibold text-sm sm:text-base text-white line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image & Caption Wrapper */}
          <div
            className="relative max-w-4xl max-h-[80vh] w-full h-[70vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={gallery[selectedIndex].image}
                alt={gallery[selectedIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="font-poppins font-bold text-lg md:text-xl text-white">
                {gallery[selectedIndex].title}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Image {selectedIndex + 1} of {gallery.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
