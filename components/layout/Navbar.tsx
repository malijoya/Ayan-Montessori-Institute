"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Info,
  Phone,
  Image as GalleryIcon,
  Building2,
  Handshake,
  Store,
  MessageSquareQuote,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutExpanded, setMobileAboutExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Track scroll position for header styling
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 150);
  };

  // Submenu items under ABOUT US
  const aboutSubLinks = [
    { name: "Who We Are", href: "/about#who-we-are", icon: Info },
    { name: "Contact Us", href: "/contact", icon: Phone },
    { name: "Gallery", href: "/gallery", icon: GalleryIcon },
    { name: "Our Clients", href: "/about#clients", icon: Building2 },
    { name: "Our Partners", href: "/about#partners", icon: Handshake },
    { name: "Franchise Program", href: "/franchise", icon: Store },
    { name: "Testimonials", href: "/testimonials", icon: MessageSquareQuote },
  ];

  // Active state matching helper
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/courses") {
      return pathname === "/courses" || pathname.startsWith("/courses/");
    }
    return pathname === href;
  };

  const isAboutActive =
    pathname === "/about" ||
    pathname === "/gallery" ||
    pathname === "/testimonials" ||
    pathname === "/franchise";

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled
          ? "shadow-md border-slate-200 py-2.5"
          : "border-slate-100/80 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#87CEEB] rounded-xl p-1 shrink-0"
          aria-label="Ayan Montessori Institute Home"
        >
          <Image
            src="/images/logo.png"
            alt="Ayan Montessori Institute"
            width={196}
            height={195}
            priority
            className={`w-auto transition-all duration-300 ${isScrolled ? "h-11 sm:h-12" : "h-12 sm:h-14"}`}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {/* 1. HOME */}
          <Link
            href="/"
            className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-poppins transition-all duration-200 ${
              isLinkActive("/")
                ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-bold shadow-xs border border-[#87CEEB]/40"
                : "text-slate-700 font-medium hover:text-[#2C5F8A] hover:bg-slate-100/80"
            }`}
            aria-current={isLinkActive("/") ? "page" : undefined}
          >
            HOME
          </Link>

          {/* 2. ABOUT US (WITH DROPDOWN) */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/about"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs xl:text-sm font-poppins transition-all duration-200 ${
                isAboutActive
                  ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-bold shadow-xs border border-[#87CEEB]/40"
                  : "text-slate-700 font-medium hover:text-[#2C5F8A] hover:bg-slate-100/80"
              }`}
              aria-expanded={aboutDropdownOpen}
              aria-haspopup="true"
            >
              <span>ABOUT US</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  aboutDropdownOpen ? "rotate-180 text-[#2C5F8A]" : "text-slate-400"
                }`}
              />
            </Link>

            {/* Desktop Dropdown Menu Card */}
            {aboutDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="space-y-1">
                  {aboutSubLinks.map((item) => {
                    const Icon = item.icon;
                    const isSubActive = pathname === item.href.split("#")[0];
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs xl:text-sm font-poppins font-medium transition-all ${
                          isSubActive
                            ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-semibold"
                            : "text-slate-700 hover:bg-[#87CEEB]/15 hover:text-[#2C5F8A]"
                        }`}
                        role="menuitem"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 text-[#2C5F8A] flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. TRAINERS */}
          <Link
            href="/trainers"
            className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-poppins transition-all duration-200 ${
              isLinkActive("/trainers")
                ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-bold shadow-xs border border-[#87CEEB]/40"
                : "text-slate-700 font-medium hover:text-[#2C5F8A] hover:bg-slate-100/80"
            }`}
            aria-current={isLinkActive("/trainers") ? "page" : undefined}
          >
            TRAINERS
          </Link>

          {/* 4. COURSES */}
          <Link
            href="/courses"
            className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-poppins transition-all duration-200 ${
              isLinkActive("/courses")
                ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-bold shadow-xs border border-[#87CEEB]/40"
                : "text-slate-700 font-medium hover:text-[#2C5F8A] hover:bg-slate-100/80"
            }`}
            aria-current={isLinkActive("/courses") ? "page" : undefined}
          >
            COURSES
          </Link>

          {/* 5. JOB PLACEMENT */}
          <Link
            href="/job-placement"
            className={`px-3.5 py-2 rounded-full text-xs xl:text-sm font-poppins transition-all duration-200 ${
              isLinkActive("/job-placement")
                ? "bg-[#87CEEB]/20 text-[#2C5F8A] font-bold shadow-xs border border-[#87CEEB]/40"
                : "text-slate-700 font-medium hover:text-[#2C5F8A] hover:bg-slate-100/80"
            }`}
            aria-current={isLinkActive("/job-placement") ? "page" : undefined}
          >
            JOB PLACEMENT
          </Link>
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
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {/* 1. HOME */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-poppins font-semibold transition-all ${
                isLinkActive("/")
                  ? "bg-[#2C5F8A] text-white shadow-md"
                  : "text-[#2C5F8A] hover:bg-slate-100"
              }`}
            >
              <span>HOME</span>
              <ChevronRight className={`w-4 h-4 ${isLinkActive("/") ? "text-[#FFD166]" : "opacity-40"}`} />
            </Link>

            {/* 2. ABOUT US (ACCORDION) */}
            <div className="rounded-2xl border border-slate-100 overflow-hidden bg-slate-50/50">
              <div className="flex items-center justify-between px-4 py-3">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="font-poppins font-semibold text-sm text-[#2C5F8A] hover:text-[#87CEEB]"
                >
                  ABOUT US
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileAboutExpanded(!mobileAboutExpanded)}
                  aria-label="Toggle About Us submenu"
                  className="p-1 rounded-lg text-slate-500 hover:bg-slate-200/60"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileAboutExpanded ? "rotate-180 text-[#2C5F8A]" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Submenu links */}
              {mobileAboutExpanded && (
                <div className="px-3 pb-3 space-y-1 bg-white pt-1 border-t border-slate-100">
                  {aboutSubLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-poppins font-medium text-slate-700 hover:bg-[#87CEEB]/20 hover:text-[#2C5F8A] transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-[#2C5F8A]" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. TRAINERS */}
            <Link
              href="/trainers"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-poppins font-semibold transition-all ${
                isLinkActive("/trainers")
                  ? "bg-[#2C5F8A] text-white shadow-md"
                  : "text-[#2C5F8A] hover:bg-slate-100"
              }`}
            >
              <span>TRAINERS</span>
              <ChevronRight className={`w-4 h-4 ${isLinkActive("/trainers") ? "text-[#FFD166]" : "opacity-40"}`} />
            </Link>

            {/* 4. COURSES */}
            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-poppins font-semibold transition-all ${
                isLinkActive("/courses")
                  ? "bg-[#2C5F8A] text-white shadow-md"
                  : "text-[#2C5F8A] hover:bg-slate-100"
              }`}
            >
              <span>COURSES</span>
              <ChevronRight className={`w-4 h-4 ${isLinkActive("/courses") ? "text-[#FFD166]" : "opacity-40"}`} />
            </Link>

            {/* 5. JOB PLACEMENT */}
            <Link
              href="/job-placement"
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-poppins font-semibold transition-all ${
                isLinkActive("/job-placement")
                  ? "bg-[#2C5F8A] text-white shadow-md"
                  : "text-[#2C5F8A] hover:bg-slate-100"
              }`}
            >
              <span>JOB PLACEMENT</span>
              <ChevronRight className={`w-4 h-4 ${isLinkActive("/job-placement") ? "text-[#FFD166]" : "opacity-40"}`} />
            </Link>
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
