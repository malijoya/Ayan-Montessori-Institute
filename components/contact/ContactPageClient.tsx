"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Award,
  HeartHandshake,
  Building2,
  ChevronDown,
  Car,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Phone,
} from "lucide-react";

import {
  contactInfoCards,
  departmentContacts,
  campusGuideDetails,
  contactFAQs,
  ContactFAQ,
} from "@/lib/contactData";
import ContactForm from "./ContactForm";

// Helper for Lucide icons on info cards
function CardIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-[#2C5F8A]";
  switch (name) {
    case "MapPin":
      return <MapPin className={cls} />;
    case "PhoneCall":
      return <PhoneCall className={cls} />;
    case "Mail":
      return <Mail className={cls} />;
    case "Clock":
      return <Clock className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

// Helper for department icons
function DeptIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-[#2C5F8A]";
  switch (name) {
    case "GraduationCap":
      return <GraduationCap className={cls} />;
    case "Award":
      return <Award className={cls} />;
    case "HeartHandshake":
      return <HeartHandshake className={cls} />;
    case "Building2":
      return <Building2 className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

// Helper for campus guide icons
function GuideIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-[#2C5F8A]";
  switch (name) {
    case "Car":
      return <Car className={cls} />;
    case "ShieldCheck":
      return <ShieldCheck className={cls} />;
    case "Compass":
      return <Compass className={cls} />;
    default:
      return <Sparkles className={cls} />;
  }
}

export default function ContactPageClient() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("All");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const faqCategories = ["All", "Admissions", "Campus Visits", "Teacher Diplomas", "General"];

  const filteredFaqs =
    activeFaqCategory === "All"
      ? contactFAQs
      : contactFAQs.filter((faq) => faq.category === activeFaqCategory);

  return (
    <>
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden min-h-[500px] md:min-h-[560px] flex items-center">
        <Image
          src="/contact-hero.jpg"
          alt="Ayan Montessori Institute Reception & Admissions Desk"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F8A]/90 via-[#2C5F8A]/75 to-[#87CEEB]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-2 bg-[#FFD166]/20 border border-[#FFD166]/40 text-[#FFD166] font-poppins font-semibold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </span>

            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              We Would Love to{" "}
              <span className="text-[#FFD166]">Hear From You</span>
            </h1>

            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-xl">
              Whether you are looking to enroll your child, join our teacher training diploma, or tour our Montessori campus, our team is here to help every step of the way.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact-form-section"
                className="inline-flex items-center gap-2 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 font-poppins font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                id="hero-send-message"
              >
                Send Us a Message
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-poppins font-bold text-sm px-6 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300"
                id="hero-whatsapp"
              >
                <Phone className="w-4 h-4 text-[#FFD166]" />
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 48" className="w-full h-12 fill-white" preserveAspectRatio="none">
            <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. QUICK CONTACT INFO CARDS                                   */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Contact Channels
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Connect With Our Admissions Desk
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Reach out through any of our official channels below for immediate assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfoCards.map((card) => (
              <div
                key={card.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#E0F2FE] flex items-center justify-center group-hover:bg-[#87CEEB]/30 transition-colors">
                    <CardIcon name={card.icon} />
                  </div>

                  <div>
                    <h3 className="font-poppins font-bold text-base text-[#2C5F8A]">{card.title}</h3>
                    <p className="text-slate-400 text-xs mt-0.5">{card.subtitle}</p>
                  </div>

                  <div className="space-y-1 text-xs text-slate-600 font-inter">
                    {card.lines.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </div>

                {card.actionText && card.actionHref && (
                  <div className="pt-4 mt-4 border-t border-slate-50">
                    <a
                      href={card.actionHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-poppins font-semibold text-[#2C5F8A] hover:text-[#FFD166] transition-colors"
                    >
                      {card.actionText}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. CONTACT FORM & DEPARTMENT DIRECTORY                        */}
      {/* ============================================================ */}
      <section id="contact-form-section" className="py-14 md:py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Department Contacts Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                  Department Directory
                </span>
                <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                  Direct Department Contacts
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Contact specific administrative teams directly for quick resolution.
                </p>
              </div>

              <div className="space-y-4">
                {departmentContacts.map((dept) => (
                  <div
                    key={dept.id}
                    className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center shrink-0 mt-0.5">
                        <DeptIcon name={dept.icon} />
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-sm text-[#2C5F8A]">
                          {dept.name}
                        </h3>
                        <p className="text-slate-500 text-xs leading-snug">{dept.role}</p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-50 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-inter text-slate-600">
                      <div>
                        <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                          Email
                        </span>
                        <a href={`mailto:${dept.email}`} className="text-[#2C5F8A] hover:underline truncate block">
                          {dept.email}
                        </a>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                          Helpline
                        </span>
                        <span className="text-slate-700">{dept.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CAMPUS LOCATION MAP & VISITOR GUIDE                       */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Campus Location &amp; Directions
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Find Us On The Map
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Located conveniently in Sector H-8/4, main educational boulevard with easy access and dedicated parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Styled Map Container */}
            <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 min-h-[380px] relative flex flex-col justify-between p-6">
              <iframe
                title="Ayan Montessori Institute Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.46789123!2d73.065!3d33.684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzAyLjQiTiA3M8KwMDMnNTQuMCJF!5e0!3m2!1sen!2spk!4v1620000000000!5m2!1sen!2spk"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="relative z-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md max-w-xs space-y-1 border border-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2C5F8A] font-poppins">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  Main Campus Building
                </span>
                <p className="text-xs text-slate-600">Plot 42, Educational Sector, H-8/4, Islamabad</p>
              </div>
            </div>

            {/* Visitor Guide Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-poppins font-bold text-xl text-[#2C5F8A]">
                  Visitor Facilities &amp; Guidelines
                </h3>
                <p className="text-slate-500 text-xs">
                  We strive to make every campus visit comfortable, secure, and insightful for parents and children.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {campusGuideDetails.map((guide, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] flex items-center justify-center shrink-0">
                      <GuideIcon name={guide.icon} />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-xs text-[#2C5F8A]">
                        {guide.title}
                      </h4>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-snug">
                        {guide.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. CONTACT FAQ ACCORDION                                      */}
      {/* ============================================================ */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Got Questions?
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Find quick answers regarding admissions, campus tours, and teacher training programmes.
            </p>
          </div>

          {/* FAQ Category Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFaqCategory(cat)}
                className={`px-4 py-2 rounded-full font-poppins font-semibold text-xs transition-all cursor-pointer ${
                  activeFaqCategory === cat
                    ? "bg-[#2C5F8A] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-[#87CEEB]/20 border border-slate-200"
                }`}
                aria-pressed={activeFaqCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq: ContactFAQ) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-poppins font-semibold text-sm sm:text-base text-[#2C5F8A] hover:bg-slate-50/80 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#87CEEB] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#2C5F8A]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed font-inter border-t border-slate-50 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL TO ACTION                                              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2C5F8A] via-[#1E4363] to-[#2C5F8A] py-16 md:py-20 text-white">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-block bg-[#FFD166] text-slate-900 font-poppins font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
            Book a Personal Tour
          </span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Schedule Your <span className="text-[#FFD166]">Campus Visit Today</span>
          </h2>
          <p className="text-blue-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Experience our vibrant Montessori classrooms, observe our trained educators in action, and see how your child will thrive at Ayan Montessori Institute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#contact-form-section"
              className="inline-flex items-center gap-2 bg-[#FFD166] hover:bg-yellow-300 text-slate-900 font-poppins font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Campus Visit
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-poppins font-bold text-sm px-8 py-4 rounded-full transition-all duration-300"
            >
              View Our Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
