import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationWireframe() {
  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors disabled:opacity-40">
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button className="w-10 h-10 rounded-full bg-[#2C5F8A] text-white font-semibold text-sm flex items-center justify-center shadow-sm">
        1
      </button>
      <button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 font-semibold text-sm text-slate-700 flex items-center justify-center transition-colors">
        2
      </button>
      <button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 font-semibold text-sm text-slate-700 flex items-center justify-center transition-colors">
        3
      </button>
      <span className="text-slate-400 text-xs px-1">...</span>
      <button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 font-semibold text-sm text-slate-700 flex items-center justify-center transition-colors">
        8
      </button>
      <button className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors">
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
