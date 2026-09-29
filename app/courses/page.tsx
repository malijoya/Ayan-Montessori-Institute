import CoursesHero from "@/components/courses/CoursesHero";
import FeaturedCoursesSection from "@/components/courses/FeaturedCoursesSection";
import AllCoursesGrid from "@/components/courses/AllCoursesGrid";
import CourseCategories from "@/components/courses/CourseCategories";
import WhyOurCourses from "@/components/courses/WhyOurCourses";
import EnrolmentProcess from "@/components/courses/EnrolmentProcess";
import CoursesFAQ from "@/components/courses/CoursesFAQ";
import CoursesCta from "@/components/courses/CoursesCta";

export default function CoursesPage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <CoursesHero />

      {/* 2. FEATURED COURSES */}
      <FeaturedCoursesSection />

      {/* 3. ALL COURSES GRID (with search & filter) */}
      <AllCoursesGrid />

      {/* 4. COURSE CATEGORIES */}
      <CourseCategories />

      {/* 5. WHY OUR COURSES? */}
      <WhyOurCourses />

      {/* 6. ENROLMENT PROCESS */}
      <EnrolmentProcess />

      {/* 7. FAQ */}
      <CoursesFAQ />

      {/* 8. CALL TO ACTION */}
      <CoursesCta />
    </div>
  );
}
