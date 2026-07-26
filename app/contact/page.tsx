import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import WireframeCard from "@/components/ui/WireframeCard";
import ContactFormWireframe from "@/components/common/ContactFormWireframe";
import FAQAccordionWireframe from "@/components/common/FAQAccordionWireframe";
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#E0F2FE]/50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-4">
          <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A]">
            Section 1: Hero Section
          </span>
          <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2C5F8A]">
            Get In Touch With Ayan Montessori
          </h1>
          <div className="wireframe-block rounded-2xl p-4 space-y-2 max-w-2xl mx-auto">
            <div className="h-3 bg-slate-300 rounded-full w-full"></div>
            <div className="h-3 bg-slate-300 rounded-full w-5/6 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* 2 & 3. INSTITUTE INFORMATION & CONTACT FORM */}
      <SectionContainer bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* 2. INSTITUTE INFORMATION */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A] mb-2 inline-block">
                Section 2: Institute Contact Info
              </span>
              <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                Admissions & Campus Office
              </h2>
            </div>

            <div className="space-y-4">
              <WireframeCard hoverEffect={false} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm text-[#2C5F8A]">Campus Address</h4>
                  <div className="text-xs text-slate-600 mt-1 space-y-1">
                    <p>Ayan Montessori Institute Campus Building</p>
                    <p>Educational Sector, Main Boulevard</p>
                  </div>
                </div>
              </WireframeCard>

              <WireframeCard hoverEffect={false} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm text-[#2C5F8A]">Phone & WhatsApp</h4>
                  <div className="text-xs text-slate-600 mt-1 space-y-1">
                    <p>Admissions Desk: +92 (300) 123-4567</p>
                    <p>General Inquiries: +92 (423) 555-0199</p>
                  </div>
                </div>
              </WireframeCard>

              <WireframeCard hoverEffect={false} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm text-[#2C5F8A]">Email Addresses</h4>
                  <div className="text-xs text-slate-600 mt-1 space-y-1">
                    <p>admissions@ayanmontessori.edu</p>
                    <p>info@ayanmontessori.edu</p>
                  </div>
                </div>
              </WireframeCard>

              <WireframeCard hoverEffect={false} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#87CEEB]/20 text-[#2C5F8A] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm text-[#2C5F8A]">Office Hours</h4>
                  <div className="text-xs text-slate-600 mt-1 space-y-1">
                    <p>Monday – Saturday: 9:00 AM – 5:00 PM</p>
                    <p>Sunday: Closed (Weekend Batches Only)</p>
                  </div>
                </div>
              </WireframeCard>
            </div>
          </div>

          {/* 3. CONTACT FORM */}
          <div className="lg:col-span-7">
            <WireframeCard hoverEffect={false} borderAccent className="p-6 md:p-8 space-y-6">
              <div>
                <span className="wireframe-badge bg-[#87CEEB]/20 text-[#2C5F8A] mb-2 inline-block">
                  Section 3: Contact Form Component
                </span>
                <h2 className="font-poppins font-bold text-2xl text-[#2C5F8A]">
                  Send Us an Inquiry Message
                </h2>
              </div>
              <ContactFormWireframe />
            </WireframeCard>
          </div>

        </div>
      </SectionContainer>

      {/* 4. GOOGLE MAP PLACEHOLDER */}
      <SectionContainer bg="surface">
        <SectionHeader
          badge="Section 4: Location Map"
          title="Find Us On The Map"
          subtitle="Interactive Campus Map Container"
        />

        <div className="w-full h-96 rounded-3xl wireframe-block flex flex-col items-center justify-center gap-3 text-slate-400 p-6 shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#87CEEB]/30 text-[#2C5F8A] flex items-center justify-center">
            <Map className="w-8 h-8" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-[#2C5F8A]">
            Google Maps API / iFrame Embed Container Placeholder
          </span>
          <span className="text-xs text-slate-400">
            Interactive Pin Location: Ayan Montessori Institute Main Campus
          </span>
        </div>
      </SectionContainer>

      {/* 5. FAQ */}
      <SectionContainer bg="white">
        <SectionHeader
          badge="Section 5: General FAQs"
          title="Admission & Inquiry FAQs"
        />
        <FAQAccordionWireframe />
      </SectionContainer>

    </div>
  );
}
