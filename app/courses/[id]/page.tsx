import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCourse, getRelatedCourses, courses } from "@/lib/courseData";
import CourseDetailsClient from "@/components/courses/CourseDetailsClient";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const numericId = parseInt(resolvedParams.id, 10) || 1;
  const course = getCourse(numericId) || getCourse(1);

  if (!course) {
    return {
      title: "Course Not Found | Ayan Montessori Institute",
    };
  }

  return {
    title: `${course.title} | Ayan Montessori Institute`,
    description: course.shortDescription,
  };
}

export default async function CourseDetailsPage({ params }: CoursePageProps) {
  const resolvedParams = await params;
  const numericId = parseInt(resolvedParams.id, 10) || 1;
  
  // Resolve course data dynamically
  const course = getCourse(numericId) || getCourse(1);

  if (!course) {
    notFound();
  }

  // Get dynamic related courses
  const relatedCourses = getRelatedCourses(course.relatedIds.length > 0 ? course.relatedIds : [1, 2, 3, 4]);

  return <CourseDetailsClient course={course} relatedCourses={relatedCourses} />;
}

// Generate static params for all courses in data store
export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}
