import React from "react";
import WireframeCard from "@/components/ui/WireframeCard";
import WireframeBadge from "@/components/ui/WireframeBadge";
import { User, Award, Mail, Globe, Share2 } from "lucide-react";

interface TrainerCardWireframeProps {
  name?: string;
  role?: string;
  experience?: string;
  specialization?: string;
}

export default function TrainerCardWireframe({
  name = "Trainer Full Name Wireframe",
  role = "Senior Montessori Trainer",
  experience = "10+ Years Exp.",
  specialization = "Early Child Development",
}: TrainerCardWireframeProps) {
  return (
    <WireframeCard hoverEffect className="text-center flex flex-col items-center">
      {/* Trainer Avatar Placeholder */}
      <div className="w-24 h-24 rounded-full wireframe-block flex items-center justify-center text-slate-400 mb-4 ring-4 ring-[#87CEEB]/30">
        <User className="w-10 h-10 text-slate-300" />
      </div>

      {/* Name & Role */}
      <h3 className="font-poppins font-bold text-lg text-[#2C5F8A]">
        {name}
      </h3>
      <p className="text-xs font-semibold text-[#87CEEB] uppercase tracking-wider mb-2">
        {role}
      </p>

      {/* Specialization Badge */}
      <div className="mb-3">
        <WireframeBadge label={specialization} variant="accent" />
      </div>

      {/* Experience Tag */}
      <div className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full mb-4">
        <Award className="w-3.5 h-3.5 text-[#2C5F8A]" />
        <span>{experience}</span>
      </div>

      {/* Profile Bio Lines Skeleton */}
      <div className="w-full space-y-1.5 py-2 border-t border-slate-100 mb-4">
        <div className="h-2 bg-slate-200 rounded-full w-full"></div>
        <div className="h-2 bg-slate-200 rounded-full w-5/6 mx-auto"></div>
        <div className="h-2 bg-slate-200 rounded-full w-4/6 mx-auto"></div>
      </div>

      {/* Social / Contact Links */}
      <div className="flex items-center gap-2 pt-2">
        <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#87CEEB] hover:text-[#2C5F8A] flex items-center justify-center text-slate-600 transition-colors cursor-pointer">
          <Mail className="w-4 h-4" />
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#87CEEB] hover:text-[#2C5F8A] flex items-center justify-center text-slate-600 transition-colors cursor-pointer">
          <Globe className="w-4 h-4" />
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#87CEEB] hover:text-[#2C5F8A] flex items-center justify-center text-slate-600 transition-colors cursor-pointer">
          <Share2 className="w-4 h-4" />
        </div>
      </div>
    </WireframeCard>
  );
}
