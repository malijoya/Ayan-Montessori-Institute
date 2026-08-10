import { Metadata } from "next";
import ContactPageClient from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us — Admissions & Campus Location | Ayan Montessori Institute",
  description:
    "Get in touch with Ayan Montessori Institute. Find our campus address in Islamabad, admissions desk phone numbers, email contacts, office hours, and send online inquiries.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
