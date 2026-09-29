"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      return;
    }
    setNewsletterStatus("submitting");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }, 1000);
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Trainers", href: "/trainers" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  const popularCourses = [
    { name: "6-Month Montessori Diploma", href: "/courses/1" },
    { name: "Online Montessori Diploma", href: "/courses/2" },
    { name: "1-Year Montessori Diploma", href: "/courses/3" },
    { name: "Montessori / ECE Certificate", href: "/courses/4" },
    { name: "Spoken English", href: "/courses/5" },
    { name: "Phonics Workshops", href: "/courses/6" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FacebookIcon,
      href: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      href: "https://instagram.com",
    },
    {
      name: "YouTube",
      icon: YoutubeIcon,
      href: "https://youtube.com",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      href: "https://linkedin.com",
    },
  ];

  return (
    <footer className="bg-[#2C5F8A] text-white pt-16 pb-8 border-t-4 border-[#87CEEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COLUMN 1 — ABOUT */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-[#87CEEB] text-[#2C5F8A] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-poppins font-bold text-lg text-white block leading-tight">
                  Ayan Montessori
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#87CEEB] uppercase block font-poppins">
                  Institute
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-montserrat">
              A welcoming educational institute focused on helping children learn, explore, develop confidence, and build strong foundations for the future.
            </p>

            {/* Social Media Links */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-poppins font-semibold text-[#87CEEB] uppercase tracking-wider block">
                Follow Our Journey
              </span>
              <div className="flex items-center gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow Ayan Montessori Institute on ${item.name}`}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FFD166] hover:text-slate-900 text-white border border-white/15 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-base text-[#87CEEB] border-b border-[#87CEEB]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-montserrat">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-[#FFD166] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB] group-hover:w-2.5 group-hover:bg-[#FFD166] transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 — POPULAR COURSES */}
          <div className="space-y-4">
            <h3 className="font-poppins font-bold text-base text-[#87CEEB] border-b border-[#87CEEB]/30 pb-2">
              Popular Courses
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-montserrat">
              {popularCourses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-blue-100 hover:text-[#FFD166] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#87CEEB] group-hover:w-2.5 group-hover:bg-[#FFD166] transition-all" />
                    <span>{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT & NEWSLETTER */}
          <div className="space-y-5">
            <h3 className="font-poppins font-bold text-base text-[#87CEEB] border-b border-[#87CEEB]/30 pb-2">
              Contact Us
            </h3>

            {/* Editable Contact Info */}
            <div className="space-y-2.5 text-xs text-blue-100 font-montserrat">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD166] shrink-0 mt-0.5" />
                <span>Plot 42, Educational Sector, H-8/4, Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD166] shrink-0" />
                <span>+92 (300) 123-4567 / +92 (51) 876-5432</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD166] shrink-0" />
                <span>info@ayanmontessori.edu.pk</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFD166] shrink-0 mt-0.5" />
                <span>Mon – Fri: 8:00 AM – 4:00 PM | Sat: 9:00 AM – 2:00 PM</span>
              </div>
            </div>

            {/* NEWSLETTER SUBSCRIPTION */}
            <div className="pt-3 border-t border-white/10 space-y-3">
              <div>
                <h4 className="font-poppins font-bold text-xs text-[#FFD166]">
                  Stay Updated
                </h4>
                <p className="text-[11px] text-blue-200 mt-0.5">
                  Subscribe to receive updates about courses, activities, and announcements.
                </p>
              </div>

              {newsletterStatus === "success" ? (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-white/10 text-white placeholder-blue-200 border border-white/20 rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#87CEEB] pr-10"
                      aria-label="Email address for newsletter"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === "submitting"}
                      aria-label="Subscribe to newsletter"
                      className="absolute right-1 top-1 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 w-7 h-7 rounded-full flex items-center justify-center transition-all cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {newsletterStatus === "error" && (
                    <p className="text-[10px] text-rose-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      Please enter a valid email address.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200 font-montserrat text-center sm:text-left">
          <p>© 2026 Ayan Montessori Institute. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#FFD166] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#FFD166] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
