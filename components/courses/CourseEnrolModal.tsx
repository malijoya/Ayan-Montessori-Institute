"use client";

import { useState } from "react";
import { X, CheckCircle, Send, User, Mail, Phone, Calendar } from "lucide-react";

interface CourseEnrolModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
}

export default function CourseEnrolModal({
  isOpen,
  onClose,
  courseTitle,
}: CourseEnrolModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredMode: "On Campus",
    preferredBatch: "Weekend Batch",
    message: "",
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-slate-100 animate-fadeIn"
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
              Enrolment Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you for applying to <strong className="text-[#2C5F8A]">{courseTitle}</strong>. Our admissions officer will contact you within 24 hours with details.
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
                Official Application
              </span>
              <h3 className="font-poppins font-bold text-2xl text-[#2C5F8A] mt-1">
                Enrol in Course
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                Course: <strong className="text-slate-700">{courseTitle}</strong>
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
                    Learning Mode
                  </label>
                  <select
                    value={formData.preferredMode}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredMode: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                  >
                    <option value="On Campus">On Campus</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Preferred Batch
                  </label>
                  <select
                    value={formData.preferredBatch}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredBatch: e.target.value,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2C5F8A] focus:ring-2 focus:ring-[#87CEEB]/30 transition-all"
                  >
                    <option value="Weekend Batch">Weekend Batch</option>
                    <option value="Weekday Evening">Weekday Evening</option>
                    <option value="Morning Batch">Morning Batch</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2C5F8A] hover:bg-[#1E4363] text-white font-poppins font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2C5F8A]/20 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                Submit Enrolment Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
