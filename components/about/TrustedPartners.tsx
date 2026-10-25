import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";

export default function TrustedPartners() {
  // 3 Accredited Partner slots ready for logos
  const partners = [
    {
      id: 1,
      title: "Accredited Partner 1",
      subtitle: "Recognized Montessori Body",
      icon: Award,
      logoUrl: null, // Replace with logo path when provided
    },
    {
      id: 2,
      title: "Accredited Partner 2",
      subtitle: "Government & Regulatory Alignment",
      icon: ShieldCheck,
      logoUrl: null, // Replace with logo path when provided
    },
    {
      id: 3,
      title: "Accredited Partner 3",
      subtitle: "International Pedagogical Standards",
      icon: CheckCircle,
      logoUrl: null, // Replace with logo path when provided
    },
  ];

  return (
    <SectionContainer id="partners" bg="white" className="scroll-mt-20">
      <div id="clients" className="scroll-mt-28"></div>
      <SectionHeader
        badge="ACCREDITATIONS & PARTNERSHIPS"
        title="Our Accredited Partners"
        subtitle="Proudly aligned with leading bodies to ensure world-class standards in Montessori teacher training."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {partners.map((partner) => {
          const Icon = partner.icon;
          return (
            <div
              key={partner.id}
              className="bg-white rounded-3xl p-8 border-2 border-dashed border-slate-200 hover:border-[#87CEEB] shadow-sm hover:shadow-montessori hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 group min-h-[180px]"
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.title}
                  className="max-h-16 max-w-full object-contain filter group-hover:brightness-105 transition-all"
                />
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#87CEEB]/15 text-[#2C5F8A] flex items-center justify-center group-hover:bg-[#87CEEB] group-hover:text-[#2C5F8A] transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="font-poppins font-bold text-base text-[#2C5F8A] block">
                      {partner.title}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {partner.subtitle}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
