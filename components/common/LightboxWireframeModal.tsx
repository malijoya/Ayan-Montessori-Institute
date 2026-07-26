"use client";

import { X, Image as ImageIcon } from "lucide-react";

interface LightboxWireframeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function LightboxWireframeModal({
  isOpen,
  onClose,
  title = "Gallery Lightbox Preview Modal",
}: LightboxWireframeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] mb-4 pr-10">
          {title}
        </h3>

        {/* Large Media Wireframe Placeholder */}
        <div className="w-full h-80 md:h-[420px] rounded-2xl wireframe-block flex flex-col items-center justify-center gap-3 text-slate-400">
          <ImageIcon className="w-16 h-16 text-slate-300" />
          <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Full Size High-Res Image Placeholder
          </span>
          <span className="text-xs text-slate-400">
            Interactive Lightbox View Wireframe
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>Category: Campus Environment & Learning Labs</span>
          <span>Ayan Montessori Institute Media Archive</span>
        </div>
      </div>
    </div>
  );
}
