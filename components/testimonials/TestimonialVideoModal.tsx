"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { VideoTestimonial } from "@/lib/testimonialData";

interface Props {
  video: VideoTestimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TestimonialVideoModal({ video, isOpen, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Video testimonial"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 16:9 iframe */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={video.videoUrl}
            title={video.name}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Caption */}
        <div className="px-5 py-4 space-y-1">
          <p className="font-poppins font-bold text-white text-sm">{video.name}</p>
          <p className="text-slate-400 text-xs">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
