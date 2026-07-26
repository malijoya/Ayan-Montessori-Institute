import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import OurFacilities from "@/components/about/OurFacilities";
import TeachingApproach from "@/components/about/TeachingApproach";
import AboutGalleryPreview from "@/components/about/AboutGalleryPreview";
import AboutAchievements from "@/components/about/AboutAchievements";
import TrustedPartners from "@/components/about/TrustedPartners";
import FeaturedTestimonial from "@/components/about/FeaturedTestimonial";
import AboutCta from "@/components/about/AboutCta";

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <AboutHero />

      {/* 2. OUR STORY */}
      <OurStory />

      {/* 3. OUR MISSION & VISION */}
      <MissionVision />

      {/* 4. OUR CORE VALUES */}
      <CoreValues />

      {/* 5. OUR FACILITIES */}
      <OurFacilities />

      {/* 6. OUR TEACHING APPROACH */}
      <TeachingApproach />

      {/* 7. PHOTO GALLERY PREVIEW */}
      <AboutGalleryPreview />

      {/* 8. OUR ACHIEVEMENTS */}
      <AboutAchievements />

      {/* 9. TRUSTED PARTNERS / CLIENTS */}
      <TrustedPartners />

      {/* 10. PARENT TESTIMONIAL */}
      <FeaturedTestimonial />

      {/* 11. CALL TO ACTION */}
      <AboutCta />
    </div>
  );
}
