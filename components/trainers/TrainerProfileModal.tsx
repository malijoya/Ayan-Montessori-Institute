"use client";

import Image from "next/image";
import Link from "next/link";
import {
  X,
  Award,
  BookOpen,
  CheckCircle2,
  Mail,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { Trainer } from "@/lib/trainerData";

interface TrainerProfileModalProps {
  trainer: Trainer | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function TrainerProfileModal({
  trainer,
  isOpen,
  onClose,
}: TrainerProfileModalProps) {
  if (!isOpen || !trainer) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Trainer Large Photo */}
            <div className="md:col-span-5 relative h-64 md:h-72 w-full rounded-2xl overflow-hidden shadow-lg border-2 border-[#87CEEB]">
              <Image
                src={trainer.photo}
                alt={trainer.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            {/* Basic Info */}
            <div className="md:col-span-7 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 bg-[#87CEEB]/20 text-[#2C5F8A] px-3 py-1 rounded-full text-xs font-semibold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  {trainer.experience}
                </span>
                <span className="bg-[#FFD166]/30 text-slate-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Faculty Member
                </span>
              </div>

              <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
                {trainer.name}
              </h2>

              <p className="text-sm font-semibold text-slate-700">
                {trainer.title}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Award className="w-4 h-4 text-[#2C5F8A] shrink-0" />
                <span>{trainer.qualification}</span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                <strong className="text-[#2C5F8A] block mb-0.5">Specialisation:</strong>
                {trainer.specialisation}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                {trainer.socials.linkedin && (
                  <a
                    href={trainer.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {trainer.socials.twitter && (
                  <a
                    href={trainer.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
                {trainer.socials.email && (
                  <a
                    href={`mailto:${trainer.socials.email}`}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-2 border-t border-slate-100 pt-5">
            <h3 className="font-poppins font-bold text-base text-[#2C5F8A]">
              Biography
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {trainer.bio}
            </p>
          </div>

          {/* Teaching Philosophy */}
          <div className="bg-[#87CEEB]/10 p-4 rounded-2xl border-l-4 border-[#87CEEB] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#2C5F8A]">
              <HeartHandshake className="w-4 h-4" />
              <span>Teaching Philosophy</span>
            </div>
            <p className="text-xs sm:text-sm italic text-slate-700 leading-relaxed">
              &ldquo;{trainer.teachingPhilosophy}&rdquo;
            </p>
          </div>

          {/* Courses Taught */}
          <div className="space-y-2">
            <h3 className="font-poppins font-bold text-base text-[#2C5F8A] flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#87CEEB]" />
              Courses & Programs Taught
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {trainer.coursesTaught.map((courseName, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs font-medium text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
                  <span>{courseName}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              Close Profile
            </button>

            <Link
              href="/courses"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-[#2C5F8A] hover:bg-[#1E4363] text-white text-xs font-poppins font-bold flex items-center gap-2 shadow-md transition-all"
            >
              View Courses Taught
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
