import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Award, Globe, ShieldCheck, BookOpen, GraduationCap, Building2 } from "lucide-react";

export default function TrustedPartners() {
  const partners = [
    { name: "AMI Accreditation Board", type: "Accreditation", icon: Award },
    { name: "Early Childhood Council", type: "Affiliate", icon: Globe },
    { name: "Montessori Teacher Assoc.", type: "Partner", icon: ShieldCheck },
    { name: "Global Pedagogy Network", type: "Collaborator", icon: BookOpen },
    { name: "National Education Board", type: "Certification", icon: GraduationCap },
    { name: "International Montessori Alliance", type: "Sponsor", icon: Building2 },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Collaborations & Credentials"
        title="Our Trusted Partners"
        subtitle="Recognized by leading Montessori accreditation councils, educational boards, and international institutions."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {partners.map((partner, idx) => {
          const Icon = partner.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-montessori hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#87CEEB]/15 text-[#2C5F8A] flex items-center justify-center group-hover:bg-[#87CEEB] group-hover:text-[#2C5F8A] transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <span className="font-poppins font-bold text-xs text-[#2C5F8A] leading-tight block">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">
                {partner.type}
              </span>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
