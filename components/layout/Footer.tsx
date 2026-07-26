"use client";

import Link from "next/link";
import { GraduationCap, Mail, Phone, MapPin, Send, Share2, Globe, MessageCircle, Tv } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C5F8A] text-white pt-16 pb-8 border-t-4 border-[#87CEEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Institute Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#87CEEB] text-[#2C5F8A] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="font-poppins font-bold text-xl text-white">
                Ayan Montessori
              </span>
            </div>
            
            {/* Institute Overview Wireframe Block */}
            <div className="wireframe-block rounded-xl p-3 border-dashed border-white/30 bg-white/5 space-y-2 text-xs">
              <div className="h-2.5 bg-white/20 rounded-full w-full"></div>
              <div className="h-2.5 bg-white/20 rounded-full w-4/5"></div>
              <div className="h-2.5 bg-white/20 rounded-full w-2/3"></div>
            </div>

            <div className="space-y-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#87CEEB] shrink-0" />
                <span className="wireframe-badge bg-white/10 text-white border-white/20">Location Address Block</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#87CEEB] shrink-0" />
                <span className="wireframe-badge bg-white/10 text-white border-white/20">+92 (XXX) 000-0000</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#87CEEB] shrink-0" />
                <span className="wireframe-badge bg-white/10 text-white border-white/20">info@ayanmontessori.edu</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-[#87CEEB] border-b border-[#87CEEB]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-200">
              {["Home", "About Us", "Trainers", "Courses", "Gallery", "Testimonials", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Home" ? "/" : link === "About Us" ? "/about" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
                    className="hover:text-[#87CEEB] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD166] group-hover:w-3 transition-all"></span>
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-[#87CEEB] border-b border-[#87CEEB]/30 pb-2">
              Courses
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-200">
              {[
                "Montessori Teacher Training",
                "Early Childhood Education",
                "Child Psychology & Care",
                "Elementary Pedagogy",
                "Special Needs Education",
              ].map((course, idx) => (
                <li key={course}>
                  <Link 
                    href={`/courses/${idx + 1}`}
                    className="hover:text-[#87CEEB] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB] group-hover:w-3 transition-all"></span>
                    <span>{course}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter + Social Media */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg text-[#87CEEB] border-b border-[#87CEEB]/30 pb-2">
              Newsletter & Socials
            </h3>
            <p className="text-xs text-slate-200">
              Subscribe to stay updated with course offerings & events.
            </p>
            
            {/* Newsletter Input */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-white/10 text-white placeholder-slate-300 border border-white/20 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#87CEEB] pr-10"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 top-1 text-[#2C5F8A] bg-[#FFD166] hover:bg-[#F8C346] w-8 h-8 rounded-full flex items-center justify-center transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Social Media Links Wireframe */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">Follow Us</span>
              <div className="flex items-center gap-2">
                {[Globe, Share2, MessageCircle, Tv].map((Icon, i) => (
                  <div 
                    key={i} 
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#87CEEB] hover:text-[#2C5F8A] border border-white/20 flex items-center justify-center transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            © {new Date().getFullYear()} Ayan Montessori Institute. All Rights Reserved. Architecture Wireframe.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
