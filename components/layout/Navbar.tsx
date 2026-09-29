"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Track scroll position for header shadow & height transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trainers", href: "/trainers" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Active state matching, ensuring /courses remains active on /courses/[id]
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/courses") {
      return pathname === "/courses" || pathname.startsWith("/courses/");
    }
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled
          ? "shadow-md border-slate-200 py-2.5"
          : "border-slate-100/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Treatment */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#87CEEB] rounded-xl p-1"
          aria-label="Ayan Montessori Institute Home"
        >
          <Image
            src="/images/logo.png"
            alt="Ayan Montessori Institute"
            width={196}
            height={195}
            priority
            className={`w-auto transition-all duration-300 ${isScrolled ? "h-12" : "h-14"}`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-poppins transition-all duration-200 ${
                  active
                    ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-bold shadow-xs border border-[#87CEEB]/40"
                    : "text-slate-700 font-medium hover:text-[#2C5F8A] hover:bg-slate-100/80"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-[#2C5F8A] text-white font-poppins font-bold text-xs sm:text-sm hover:bg-[#87CEEB] hover:text-[#2C5F8A] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            id="nav-enroll-btn"
          >
            <span>Enroll Now</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle mobile navigation menu"
          aria-expanded={isOpen}
          className="lg:hidden p-2.5 rounded-2xl text-[#2C5F8A] bg-slate-100 hover:bg-[#87CEEB]/20 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] transition-colors cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-poppins font-semibold transition-all ${
                    active
                      ? "bg-[#2C5F8A] text-white shadow-md"
                      : "text-[#2C5F8A] hover:bg-slate-100"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? "text-[#FFD166]" : "opacity-40"}`} />
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2C5F8A] hover:bg-[#87CEEB] text-white hover:text-[#2C5F8A] font-poppins font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Enroll Now</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
