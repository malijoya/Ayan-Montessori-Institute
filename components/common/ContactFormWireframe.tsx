"use client";

import WireframeInput from "@/components/ui/WireframeInput";
import WireframeButton from "@/components/ui/WireframeButton";
import { User, Mail, Phone, BookOpen, Send } from "lucide-react";

export default function ContactFormWireframe() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WireframeInput
          label="Full Name"
          placeholder="Enter your full name"
          icon={<User className="w-4 h-4" />}
        />
        <WireframeInput
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          icon={<Mail className="w-4 h-4" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <WireframeInput
          label="Phone Number"
          type="tel"
          placeholder="+92 300 0000000"
          icon={<Phone className="w-4 h-4" />}
        />
        <div className="w-full space-y-1.5">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Interested Program
          </label>
          <div className="relative">
            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <select className="w-full bg-slate-50 border border-slate-200 rounded-full text-slate-800 text-sm pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] appearance-none">
              <option>Select a Course / Program</option>
              <option>Montessori Teacher Training Diploma</option>
              <option>Early Childhood Education Certificate</option>
              <option>Child Psychology Workshop</option>
              <option>General Admission Inquiry</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full space-y-1.5">
        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
          Your Message
        </label>
        <textarea
          rows={4}
          placeholder="Write your message or inquiry here..."
          className="w-full bg-slate-50 border border-slate-200 rounded-3xl text-slate-800 text-sm px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#87CEEB] placeholder:text-slate-400"
        ></textarea>
      </div>

      <WireframeButton
        label="Submit Inquiry Wireframe"
        variant="primary"
        size="lg"
        fullWidth
        icon={<Send className="w-4 h-4" />}
      />
    </form>
  );
}
