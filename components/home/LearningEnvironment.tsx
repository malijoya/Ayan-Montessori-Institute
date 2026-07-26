import Link from "next/link";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeader from "@/components/ui/SectionHeader";
import { ZoomIn, ArrowRight } from "lucide-react";

export default function LearningEnvironment() {
  const galleryItems = [
    {
      id: 1,
      title: "Sensorial Exploration Lab",
      category: "Montessori Apparatus",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2 row-span-1",
      height: "h-64 sm:h-72",
    },
    {
      id: 2,
      title: "Early Reading & Phonics Nook",
      category: "Language Station",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
      height: "h-64 sm:h-72",
    },
    {
      id: 3,
      title: "Practical Life Skills Area",
      category: "Motor Skills Lab",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
      height: "h-64 sm:h-72",
    },
    {
      id: 4,
      title: "Mathematics & Golden Bead Activity",
      category: "Math Station",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2 row-span-1",
      height: "h-64 sm:h-72",
    },
    {
      id: 5,
      title: "Creative Arts & Expressive Studio",
      category: "Creativity Corner",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
      height: "h-64 sm:h-72",
    },
    {
      id: 6,
      title: "Teacher Training & Demonstration Lab",
      category: "Faculty Practice",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2 row-span-1",
      height: "h-64 sm:h-72",
    },
  ];

  return (
    <SectionContainer bg="white">
      <SectionHeader
        badge="Campus & Facilities"
        title="Inspiring Learning Environment"
        subtitle="Take a glimpse inside our bright, spacious, and thoughtfully equipped Montessori classrooms and practical labs."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`group relative rounded-3xl overflow-hidden shadow-montessori ${item.span} ${item.height} bg-slate-100 cursor-pointer`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F8A]/90 via-[#2C5F8A]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFD166] text-[#2C5F8A] inline-block mb-2 shadow-sm">
                  {item.category}
                </span>
                <h3 className="font-poppins font-bold text-lg text-white group-hover:text-[#87CEEB] transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Gallery Button */}
      <div className="text-center mt-12">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#87CEEB] text-[#2C5F8A] font-bold text-sm hover:bg-[#70BDDF] transition-all shadow-md group"
        >
          <span>Explore Full Gallery</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </SectionContainer>
  );
}
