import SectionContainer from "@/components/ui/SectionContainer";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";

export default function OurStory() {
  return (
    <SectionContainer bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: Large Image */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-montessori-lg border-4 border-slate-50 group">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
              alt="Ayan Montessori Story - Teachers and Students"
              className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60">
              <span className="text-xs font-bold text-[#2C5F8A] block uppercase tracking-wider">Established Legacy</span>
              <span className="text-xs text-slate-600">Over a decade of transformative early education and teacher training</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Story Content */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87CEEB]/20 text-[#2C5F8A] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Foundation & Journey</span>
          </div>

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-[#2C5F8A]">
            Our Story & Educational Philosophy
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            Ayan Montessori Institute was established with a singular vision: to create an authentic Montessori environment where children are empowered to explore, discover, and learn at their own natural pace. What started as a dedicated early learning center has expanded into a premiere institute offering both early childhood education and internationally recognized Montessori Teacher Training diplomas.
          </p>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            We believe that every child possesses an innate drive to learn. By providing scientifically designed Montessori materials, child-proportioned practical stations, and compassionate master educators, we help children develop concentration, spatial reasoning, emotional intelligence, and self-confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-[#2C5F8A] pt-2">
            <div className="flex items-center gap-2 bg-[#F0F4F8] p-3 rounded-2xl">
              <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
              <span>Authentic Montessori Apparatus</span>
            </div>
            <div className="flex items-center gap-2 bg-[#F0F4F8] p-3 rounded-2xl">
              <CheckCircle2 className="w-4 h-4 text-[#87CEEB] shrink-0" />
              <span>Certified Diploma Trainers</span>
            </div>
          </div>

          {/* Highlighted Quote Box */}
          <div className="p-6 rounded-3xl bg-[#E0F2FE]/50 border-l-4 border-[#2C5F8A] relative space-y-2">
            <Quote className="w-8 h-8 text-[#2C5F8A]/30 absolute top-4 right-4 pointer-events-none" />
            <p className="text-sm font-semibold text-[#2C5F8A] italic leading-relaxed">
              "Never help a child with a task at which he feels he can succeed."
            </p>
            <span className="text-xs font-bold text-slate-500 block">— Dr. Maria Montessori</span>
          </div>

        </div>

      </div>
    </SectionContainer>
  );
}
