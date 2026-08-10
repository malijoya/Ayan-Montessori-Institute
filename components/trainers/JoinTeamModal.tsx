"use client";

import { useState } from "react";
import { X, CheckCircle, Send, User, Mail, Phone, Briefcase, FileText } from "lucide-react";

interface JoinTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinTeamModal({
  isOpen,
  onClose,
}: JoinTeamModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "3-5 Years",
    coverNote: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 animate-fadeIn my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
              Application Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
              Thank you for your interest in joining Ayan Montessori Institute. Our academic recruitment team will review your profile and reach out shortly.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-6 py-3 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-semibold rounded-full transition-all text-sm shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#87CEEB] tracking-wider block">
                Educator Recruitment
              </span>
              <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A] mt-1">
                Join Our Faculty Team
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Share your credentials to become a trainer at Ayan Montessori Institute.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Highest Qualification
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. M.Ed / AMI Diploma"
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualification: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Teaching Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({ ...formData, experience: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                  >
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5-10 Years">5-10 Years</option>
                    <option value="10+ Years">10+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Brief Introduction & Specialisation
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your teaching experience and area of interest..."
                  value={formData.coverNote}
                  onChange={(e) =>
                    setFormData({ ...formData, coverNote: e.target.value })
                  }
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2C5F8A]/20 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
