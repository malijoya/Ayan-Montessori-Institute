import { Metadata } from "next";
import TrainersPageClient from "@/components/trainers/TrainersPageClient";

export const metadata: Metadata = {
  title: "Meet Our Expert Trainers | Ayan Montessori Institute",
  description:
    "Learn from certified AMI Montessori trainers and ECCE specialists dedicated to nurturing child potential and training world-class educators.",
};

export default function TrainersPage() {
  return <TrainersPageClient />;
}
