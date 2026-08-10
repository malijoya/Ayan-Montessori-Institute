import { Metadata } from "next";
import GalleryPageClient from "@/components/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery — Campus Life & Learning Moments | Ayan Montessori Institute",
  description:
    "Explore our photo and video gallery showcasing authentic Montessori classrooms, learning activities, arts & crafts, sports, annual events, and educator workshops at Ayan Montessori Institute.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
