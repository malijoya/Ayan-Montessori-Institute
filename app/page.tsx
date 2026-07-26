import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import UpcomingCourses from "@/components/home/UpcomingCourses";
import LearningEnvironment from "@/components/home/LearningEnvironment";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import StatsSection from "@/components/home/StatsSection";
import CtaSection from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 3. FEATURED COURSES */}
      <FeaturedCourses />

      {/* 4. UPCOMING COURSES */}
      <UpcomingCourses />

      {/* 5. LEARNING ENVIRONMENT PREVIEW */}
      <LearningEnvironment />

      {/* 6. TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* 7. STATISTICS SECTION */}
      <StatsSection />

      {/* 8. CALL TO ACTION */}
      <CtaSection />
    </div>
  );
}
