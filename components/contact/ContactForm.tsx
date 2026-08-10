"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles, User, Mail, Phone, MessageSquare, BookOpen } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "Admissions & Registration",
    childAge: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const inquiryOptions = [
    "Admissions & Registration",
    "Montessori Teacher Training",
    "Book a Campus Tour",
    "Fee & Financial Guidance",
    "Parent Care & Feedback",
    "General Inquiry",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please provide a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage("Please enter your phone number.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please write your message or question.");
      return;
    }

    setStatus("submitting");

    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "Admissions & Registration",
        childAge: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#87CEEB]/20 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#87CEEB]/10 pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-[#87CEEB] tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Send an Inquiry
          </span>
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-[#2C5F8A]">
            How Can We Assist You Today?
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Fill out the form below and our admissions counselors will reach out within 24 business hours.
          </p>
        </div>

        {status === "success" && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold font-poppins">Message Sent Successfully!</p>
              <p className="mt-0.5 text-emerald-700">
                Thank you for contacting Ayan Montessori Institute. A representative will contact you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-bold underline text-emerald-800 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-800 text-xs sm:text-sm animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ayesha Rahman"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. ayesha@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* Grid Phone & Child Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
                Phone Number / WhatsApp <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Child Age / Interest */}
            <div>
              <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
                Child&apos;s Age / Trainee Interest <span className="text-slate-400">(Optional)</span>
              </label>
              <div className="relative">
                <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleChange}
                  placeholder="e.g. 3 years old or Adult Diploma"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Inquiry Category */}
          <div>
            <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
              Select Inquiry Type
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all cursor-pointer"
            >
              {inquiryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Request for Level 1 Enrolment details"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-poppins font-semibold text-slate-700 mb-1">
              Your Message / Questions <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your questions regarding admissions, fee structure, batch timings, or campus visits..."
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 outline-none transition-all resize-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold text-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            id="contact-submit-btn"
          >
            {status === "submitting" ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Inquiry...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#FFD166]" />
                Send Inquiry Message
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
