import React from "react";
import { Image as ImageIcon, ZoomIn } from "lucide-react";

interface GalleryCardWireframeProps {
  title?: string;
  category?: string;
  onOpenLightbox?: () => void;
}

export default function GalleryCardWireframe({
  title = "Gallery Image Title Wireframe",
  category = "Campus & Environment",
  onOpenLightbox,
}: GalleryCardWireframeProps) {
  return (
    <div 
      onClick={onOpenLightbox}
      className="group relative rounded-3xl overflow-hidden wireframe-block h-64 border-2 border-dashed border-slate-300 hover:border-[#2C5F8A] transition-all cursor-pointer shadow-sm hover:shadow-lg"
    >
      {/* Background Graphic Skeleton */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-slate-400 group-hover:scale-105 transition-transform duration-300">
        <ImageIcon className="w-12 h-12 text-slate-300 group-hover:text-[#2C5F8A] transition-colors" />
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Image Item Placeholder
        </span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#2C5F8A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
        <div className="flex justify-end">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold text-[#87CEEB] tracking-widest block mb-1">
            {category}
          </span>
          <h4 className="font-poppins font-bold text-base text-white">
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
}
