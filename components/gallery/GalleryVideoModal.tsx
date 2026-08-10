"use client";

import { X } from "lucide-react";
import { VideoMedia } from "@/lib/galleryData";

interface GalleryVideoModalProps {
  video: VideoMedia | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryVideoModal({
  video,
  isOpen,
  onClose,
}: GalleryVideoModalProps) {
  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white border-b border-slate-800">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#87CEEB] tracking-wider block">
              Institute Video Tour
            </span>
            <h3 className="font-poppins font-bold text-sm sm:text-base line-clamp-1">
              {video.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video w-full bg-slate-950">
          <iframe
            src={`${video.videoUrl}?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Caption */}
        <div className="p-4 bg-slate-900 text-slate-300 text-xs sm:text-sm">
          {video.description}
        </div>
      </div>
    </div>
  );
}
