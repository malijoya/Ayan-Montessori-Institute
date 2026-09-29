"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Users,
  HeartHandshake,
  CheckCircle2,
  Mail,
  ArrowRight,
  Sparkles,
  Brain,
  Puzzle,
  ClipboardList,
  Monitor,
  BookOpen,
  Mic,
  Briefcase,
  Quote,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";

import { trainers, Trainer } from "@/lib/trainerData";
import TrainerProfileModal from "./TrainerProfileModal";
import JoinTeamModal from "./JoinTeamModal";

export default function TrainersPageClient() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isJoinTeamModalOpen, setIsJoinTeamModalOpen] = useState(false);

  const openTrainerProfile = (trainer: Trainer) => {
    setSelectedTrainer(trainer);
    setIsProfileModalOpen(true);
  };

  // 4 Features for "Why Our Trainers"
  const whyFeatures = [
    {
      icon: <Award className="w-5 h-5 text-[#2C5F8A]" />,
      title: "Experienced Master Trainers",
      description: "Trainers backed by AYAN's legacy of teacher training since 2010.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#2C5F8A]" />,
      title: "Practical, Job-Oriented Training",
      description: "Hands-on apparatus work and classroom skills you can use from day one.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#2C5F8A]" />,
      title: "Personal Mentorship",
      description: "Guidance and feedback for every trainee throughout their learning journey.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#2C5F8A]" />,
      title: "On-Campus & Online",
      description: "Learn in person, in hybrid batches, or live on Zoom from anywhere.",
    },
  ];

  // 8 Cards for "Areas of Expertise"
  const expertiseCards = [
    {
      icon: <Layers className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Montessori Philosophy",
      description: "The Montessori method, the prepared environment, and the role of the teacher.",
    },
    {
      icon: <Puzzle className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Apparatus Handling",
      description: "Practical life, sensorial, language, and mathematics apparatus presentations.",
    },
    {
      icon: <Brain className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Child Psychology",
      description: "Early childhood development, behaviour, and supporting diverse learners.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Classroom Management",
      description: "Lesson planning, observation techniques, and effective classroom design.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#2C5F8A]" />,
      title: "English & Urdu Phonics",
      description: "Proven early reading techniques for English and Urdu classrooms.",
    },
    {
      icon: <Mic className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Spoken English",
      description: "Fluency and classroom communication for teachers and professionals.",
    },
    {
      icon: <Monitor className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Live Online Teaching",
      description: "Interactive Zoom classrooms for learners anywhere in Pakistan or abroad.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#2C5F8A]" />,
      title: "Career Readiness",
      description: "Job-oriented training with teaching vacancies shared across our network.",
    },
  ];

  // 6 Teaching Philosophy Pillars
  const philosophyPillars = [
    { title: "Curiosity", desc: "Encouraging open inquiry and self-directed exploration." },
    { title: "Independence", desc: "Empowering children with self-care and decision-making skills." },
    { title: "Creativity", desc: "Nurturing imaginative expression across all learning modules." },
    { title: "Confidence", desc: "Building self-assurance through practical mastery and praise." },
    { title: "Critical Thinking", desc: "Promoting problem-solving and logical apparatus reasoning." },
    { title: "Collaboration", desc: "Fostering social grace, courtesy, and group harmony." },
  ];

  return (
    <div className="bg-white">
      {/* ---------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#87CEEB]/20 via-[#87CEEB]/5 to-white pt-12 pb-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 bg-[#87CEEB]/20 text-[#2C5F8A] px-4 py-1.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                Meet Our Trainers
              </span>

              <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#2C5F8A] leading-tight">
                Learn From Pakistan&apos;s Trusted Montessori Trainers
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Since 2010, AYAN Montessori Institute has trained more than 10,000 educators. Our trainers guide you through Montessori philosophy, hands-on apparatus practice, and real classroom skills — on campus, in hybrid batches, or live on Zoom.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold rounded-2xl shadow-xl shadow-[#2C5F8A]/20 transition-all hover:scale-105 active:scale-95 text-base flex items-center gap-2"
                >
                  Explore Our Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Quick Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-lg mx-auto lg:mx-0">
                <div>
                  <strong className="font-poppins font-extrabold text-xl sm:text-2xl text-[#2C5F8A] block">2010</strong>
                  <span className="text-xs text-slate-500 font-medium">Established</span>
                </div>
                <div>
                  <strong className="font-poppins font-extrabold text-xl sm:text-2xl text-[#2C5F8A] block">AMI &amp; MACTE</strong>
                  <span className="text-xs text-slate-500 font-medium">Certified Trainers</span>
                </div>
                <div>
                  <strong className="font-poppins font-extrabold text-xl sm:text-2xl text-[#2C5F8A] block">10,000+</strong>
                  <span className="text-xs text-slate-500 font-medium">Educators Trained</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                  alt="Trainees in a teacher training session"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#FFD166]/30 text-slate-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#2C5F8A]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs text-[#2C5F8A]">AMI &amp; MACTE Master Trainers</h4>
                  <p className="text-[11px] text-slate-500">World-Class Mentorship</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-[#87CEEB]/30 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#2C5F8A]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-xs text-[#2C5F8A]">Warm &amp; Supportive</h4>
                  <p className="text-[11px] text-slate-500">Guidance at every step</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. WHY OUR TRAINERS */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-96 lg:h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop"
                  alt="Trainer guiding a group workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2C5F8A] text-white p-4 rounded-2xl shadow-lg font-poppins font-bold text-xs text-center">
                <span className="block text-xl text-[#FFD166]">10,000+</span>
                Educators Trained
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                  Dedicated Excellence
                </span>
                <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A] mt-1">
                  Trainers Who Inspire, Guide and Support
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Great teachers are shaped by great trainers. Our faculty are not just instructors — they are mentors who help every trainee master the Montessori method, build classroom confidence, and step into a rewarding teaching career.
              </p>

              {/* 4 Feature Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {whyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 hover:border-[#87CEEB] transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#87CEEB]/20 flex items-center justify-center">
                      {feat.icon}
                    </div>
                    <h3 className="font-poppins font-bold text-sm text-[#2C5F8A]">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. TRAINER GRID */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Faculty Directory
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A]">
              Meet Our Trainers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click &quot;View Profile&quot; on any faculty card to explore their full qualifications, biography, and courses taught.
            </p>
          </div>

          {/* Trainer Grid: 1 col mobile, 2 tablet, 3 desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((tr) => (
              <div
                key={tr.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo & Badge */}
                  <div className="relative h-64 w-full overflow-hidden">
                    {tr.photo ? (
                      <Image
                        src={tr.photo}
                        alt={tr.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/40 to-[#2C5F8A]/20 flex items-center justify-center">
                        <GraduationCap className="w-20 h-20 text-[#2C5F8A]" aria-hidden="true" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#2C5F8A] text-[10px] font-poppins font-bold px-3 py-1 rounded-full shadow-xs">
                      {tr.experience}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-poppins font-bold text-xl text-[#2C5F8A] line-clamp-1">
                        {tr.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5 line-clamp-1">
                        {tr.title}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-500 pt-1 border-t border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                        <Award className="w-3.5 h-3.5 text-[#2C5F8A] shrink-0" />
                        <span className="truncate">{tr.qualification}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Sparkles className="w-3.5 h-3.5 text-[#87CEEB] shrink-0" />
                        <span className="truncate">{tr.expertise}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                      {tr.bio}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Socials & View Profile */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-2">
                    {tr.socials.linkedin && (
                      <a
                        href={tr.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {tr.socials.email && (
                      <a
                        href={`mailto:${tr.socials.email}`}
                        className="w-7 h-7 rounded-full bg-slate-100 hover:bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => openTrainerProfile(tr)}
                    className="px-4 py-2 rounded-full bg-[#2C5F8A] hover:bg-[#1E4363] text-white text-xs font-poppins font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1"
                  >
                    View Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. AREAS OF EXPERTISE */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
              Pedagogical Specialisations
            </span>
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A]">
              Our Areas of Expertise
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              The core areas our trainers cover across our diplomas, certificate courses, workshops, and skills programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs hover:border-[#87CEEB] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/20 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-poppins font-bold text-base text-[#2C5F8A]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. OUR TEACHING PHILOSOPHY */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-[#87CEEB]/10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content & 6 Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                  Core Educational Values
                </span>
                <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A] mt-1">
                  Teaching With Purpose
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Ayan Montessori Institute, our educational philosophy is rooted in the Maria Montessori principle: &ldquo;Help me to do it by myself.&rdquo; Our trainers prepare educators to nurture six foundational qualities in every child:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {philosophyPillars.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-poppins font-bold text-xs text-[#2C5F8A] block">
                        {p.title}
                      </strong>
                      <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                        {p.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Classroom Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-96 lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop"
                  alt="Teacher training lecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. TRAINER TESTIMONIAL / QUOTE */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#87CEEB]/20 via-[#FFD166]/15 to-[#87CEEB]/10 rounded-3xl p-8 sm:p-12 border border-[#87CEEB]/30 shadow-md">
            <Quote className="w-16 h-16 text-[#2C5F8A]/15 absolute top-6 right-6" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
              <div className="sm:col-span-4 flex justify-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#87CEEB]/50 to-[#2C5F8A]/30 flex items-center justify-center">
                    <GraduationCap className="w-16 h-16 text-[#2C5F8A]" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-8 space-y-4 text-center sm:text-left">
                <blockquote className="font-poppins font-medium text-base sm:text-lg text-[#2C5F8A] italic leading-relaxed">
                  &ldquo;The greatest sign of success for a teacher is to be able to say, &lsquo;The children are now working as if I did not exist.&rsquo;&rdquo;
                </blockquote>
                <div>
                  <h4 className="font-poppins font-bold text-lg text-[#2C5F8A]">
                    Dr. Maria Montessori
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    Founder of the Montessori Method
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. JOIN OUR TEAM */}
      {/* ---------------------------------------------------- */}
      <section className="py-16 bg-slate-50/70 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-[#87CEEB]/20 text-[#2C5F8A] px-4 py-1.5 rounded-full text-xs font-poppins font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Faculty Recruitment
          </span>

          <h2 className="font-poppins font-bold text-2xl sm:text-3xl lg:text-4xl text-[#2C5F8A]">
            Want to Become Part of Our Team?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Are you a certified Montessori trainer or early childhood specialist passionate about mentoring the next generation of teachers? We invite qualified trainers to join the faculty at Ayan Montessori Institute.
          </p>

          <button
            type="button"
            onClick={() => setIsJoinTeamModalOpen(true)}
            className="px-8 py-4 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold rounded-2xl shadow-lg transition-all hover:scale-105 text-base cursor-pointer inline-flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" />
            Join Our Team
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 9. CALL TO ACTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2C5F8A] via-[#1E4363] to-[#2C5F8A] py-16 lg:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6 relative z-10">
          <span className="inline-block bg-[#FFD166] text-slate-900 font-poppins font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider">
            Start Your Learning Journey
          </span>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Start Your Montessori Teaching Career
          </h2>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            Explore our Montessori teacher training diplomas, certificate courses, and professional skills programs — on campus, hybrid, or live on Zoom.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/courses"
              className="px-8 py-4 bg-[#FFD166] hover:bg-[#ffc847] text-slate-900 font-poppins font-bold rounded-2xl shadow-xl transition-all hover:scale-105 text-base"
            >
              Explore Courses
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold rounded-2xl border border-white/20 transition-all text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Trainer Profile Modal */}
      <TrainerProfileModal
        trainer={selectedTrainer}
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      {/* Interactive Join Team Recruitment Modal */}
      <JoinTeamModal
        isOpen={isJoinTeamModalOpen}
        onClose={() => setIsJoinTeamModalOpen(false)}
      />
    </div>
  );
}
