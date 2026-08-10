"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GalleryItem } from "@/lib/galleryData";

interface GalleryLightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxModalProps) {
  useEffect(() => {
    if (!isOpen || currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const prev = (currentIndex - 1 + items.length) % items.length;
        onNavigate(prev);
      } else if (e.key === "ArrowRight") {
        const next = (currentIndex + 1) % items.length;
        onNavigate(next);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prev = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prev);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = (currentIndex + 1) % items.length;
    onNavigate(next);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Image & Information Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-[75vh] flex flex-col items-center justify-center animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>

        {/* Footer Caption Info */}
        <div className="mt-4 text-center max-w-2xl px-4 space-y-1.5">
          <div className="flex items-center justify-center gap-2">
            <span className="bg-[#87CEEB] text-slate-900 font-poppins font-bold text-[10px] uppercase px-3 py-0.5 rounded-full">
              {currentItem.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Image {currentIndex + 1} of {items.length}
            </span>
          </div>

          <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
            {currentItem.title}
          </h3>

          {currentItem.caption && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
              {currentItem.caption}
            </p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 sm:right-8 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
