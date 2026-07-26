"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trainers", href: "/trainers" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#87CEEB] rounded-xl p-1"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#87CEEB]/20 border border-[#87CEEB] flex items-center justify-center text-[#2C5F8A] group-hover:bg-[#87CEEB] group-hover:text-white transition-all shadow-sm">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="font-poppins font-bold text-lg text-[#2C5F8A] block leading-tight">
              Ayan Montessori
            </span>
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase block">
              Institute Architecture
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "bg-[#2C5F8A] text-white shadow-sm font-semibold"
                  : "text-slate-600 hover:text-[#2C5F8A] hover:bg-slate-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-semibold text-sm hover:bg-[#70BDDF] hover:text-slate-900 transition-all shadow-sm hover:shadow-md flex items-center gap-2 group"
          >
            <span>Enroll Now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="lg:hidden p-2.5 rounded-2xl text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-[#87CEEB]"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-[#2C5F8A] text-white font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-base hover:bg-[#70BDDF] transition-all shadow-md"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
