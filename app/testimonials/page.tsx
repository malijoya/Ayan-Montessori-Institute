import { Metadata } from "next";
import TestimonialsPageClient from "@/components/testimonials/TestimonialsPageClient";

export const metadata: Metadata = {
  title: "Testimonials — Parent & Student Reviews | Ayan Montessori Institute",
  description:
    "Read genuine reviews from parents and students of Ayan Montessori Institute. Discover how our child-centred Montessori approach has transformed hundreds of young lives.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
