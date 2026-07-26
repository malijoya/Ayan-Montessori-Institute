import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { Search, FileText, ClipboardCheck, GraduationCap } from "lucide-react";

export default function EnrolmentProcess() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Choose Course",
      description: "Browse our full course catalogue and select the programme that best fits your child's age, interests, and goals.",
    },
    {
      step: "02",
      icon: FileText,
      title: "Submit Application",
      description: "Complete our simple online or in-person application form with your child's basic information and preferred batch.",
    },
    {
      step: "03",
      icon: ClipboardCheck,
      title: "Admission Review",
      description: "Our admissions team reviews your application and contacts you to schedule a welcome orientation session.",
    },
    {
      step: "04",
      icon: GraduationCap,
      title: "Start Learning",
      description: "Join your batch on the start date and embark on a transformative educational journey with Ayan Montessori.",
    },
  ];

  return (
    <SectionContainer bg="primary-light">
      <SectionHeader
        badge="Simple Steps"
        title="Enrolment Process"
        subtitle="Getting started is easy. Follow these four simple steps to secure your child's place at Ayan Montessori Institute."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting dashed line on desktop */}
        <div className="hidden lg:block absolute top-[3.75rem] left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-[#87CEEB]/60 z-0 pointer-events-none"></div>

        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="relative z-10 bg-white rounded-3xl p-7 border border-[#87CEEB]/30 shadow-montessori hover:shadow-montessori-lg hover:-translate-y-2 transition-all duration-300 group text-center space-y-4"
            >
              {/* Step Number Badge */}
              <div className="relative mx-auto w-16 h-16">
                <div className="w-16 h-16 rounded-full bg-[#2C5F8A] text-white flex items-center justify-center font-poppins font-extrabold text-xl shadow-md group-hover:bg-[#87CEEB] group-hover:text-[#2C5F8A] transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#FFD166] text-[#2C5F8A] font-poppins font-extrabold text-xs flex items-center justify-center shadow-sm">
                  {idx + 1}
                </span>
              </div>

              <h3 className="font-poppins font-bold text-lg text-[#2C5F8A] group-hover:text-[#2C5F8A]">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}
