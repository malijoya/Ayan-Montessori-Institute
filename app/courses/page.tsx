import CoursesHero from "@/components/courses/CoursesHero";
import CourseSearchFilter from "@/components/courses/CourseSearchFilter";
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

      {/* 2. COURSE SEARCH & FILTER */}
      <CourseSearchFilter />

      {/* 3. FEATURED COURSES */}
      <FeaturedCoursesSection />

      {/* 4. ALL COURSES GRID */}
      <AllCoursesGrid />

      {/* 5. COURSE CATEGORIES */}
      <CourseCategories />

      {/* 6. WHY OUR COURSES? */}
      <WhyOurCourses />

      {/* 7. ENROLMENT PROCESS */}
      <EnrolmentProcess />

      {/* 8. FAQ */}
      <CoursesFAQ />

      {/* 9. CALL TO ACTION */}
      <CoursesCta />
    </div>
  );
}
