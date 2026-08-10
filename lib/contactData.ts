// ============================================================
// contactData.ts — Ayan Montessori Institute
// Data layer for Contact Page info, departments, FAQs & office details
// ============================================================

export interface ContactInfoCard {
  id: string;
  title: string;
  subtitle: string;
  lines: string[];
  icon: string;
  actionText?: string;
  actionHref?: string;
}

export interface DepartmentContact {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsapp: string;
  hours: string;
  icon: string;
}

export interface ContactFAQ {
  id: string;
  question: string;
  answer: string;
  category: "Admissions" | "Campus Visits" | "Teacher Diplomas" | "General";
}

export interface CampusDetail {
  title: string;
  description: string;
  icon: string;
}

// -----------------------------------------------
// MAIN CONTACT INFO CARDS
// -----------------------------------------------
export const contactInfoCards: ContactInfoCard[] = [
  {
    id: "address",
    title: "Campus Location",
    subtitle: "Visit our main institute premises",
    lines: [
      "Ayan Montessori Institute",
      "Plot 42, Educational Boulevard, Sector H-8/4",
      "Islamabad, Pakistan 44000",
    ],
    icon: "MapPin",
    actionText: "Get Directions on Map",
    actionHref: "https://maps.google.com",
  },
  {
    id: "phone",
    title: "Phone & WhatsApp",
    subtitle: "Speak directly with our team",
    lines: [
      "Admissions Desk: +92 (300) 123-4567",
      "Information Helpline: +92 (51) 876-5432",
      "WhatsApp Support: +92 (312) 987-6543",
    ],
    icon: "PhoneCall",
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/923001234567",
  },
  {
    id: "email",
    title: "Email Addresses",
    subtitle: "Send us a written query anytime",
    lines: [
      "Admissions: admissions@ayanmontessori.edu.pk",
      "Teacher Training: diploma@ayanmontessori.edu.pk",
      "General Support: info@ayanmontessori.edu.pk",
    ],
    icon: "Mail",
    actionText: "Send an Email",
    actionHref: "mailto:admissions@ayanmontessori.edu.pk",
  },
  {
    id: "hours",
    title: "Office & Visiting Hours",
    subtitle: "When our campus doors are open",
    lines: [
      "Monday – Friday: 8:00 AM – 4:00 PM",
      "Saturday: 9:00 AM – 2:00 PM (Appt Only)",
      "Sunday: Closed for Regular Admissions",
    ],
    icon: "Clock",
  },
];

// -----------------------------------------------
// DEPARTMENT CONTACTS
// -----------------------------------------------
export const departmentContacts: DepartmentContact[] = [
  {
    id: "dept-1",
    name: "Admissions & Student Enrolment",
    role: "Child admissions, registration & fee structure guidance",
    email: "admissions@ayanmontessori.edu.pk",
    phone: "+92 (300) 123-4567",
    whatsapp: "+92 300 1234567",
    hours: "Mon–Fri: 8:30 AM – 3:30 PM",
    icon: "GraduationCap",
  },
  {
    id: "dept-2",
    name: "Montessori Diploma & Teacher Training",
    role: "ECCE certification, diploma courses & educator workshops",
    email: "diploma@ayanmontessori.edu.pk",
    phone: "+92 (301) 987-6543",
    whatsapp: "+92 301 9876543",
    hours: "Mon–Sat: 9:00 AM – 4:00 PM",
    icon: "Award",
  },
  {
    id: "dept-3",
    name: "Parent Care & Student Welfare",
    role: "Existing parent communications, progress updates & tours",
    email: "parentcare@ayanmontessori.edu.pk",
    phone: "+92 (51) 876-5432",
    whatsapp: "+92 312 9876543",
    hours: "Mon–Fri: 8:00 AM – 3:00 PM",
    icon: "HeartHandshake",
  },
  {
    id: "dept-4",
    name: "Administration & Partnerships",
    role: "School affiliations, corporate inquiries & career opportunities",
    email: "admin@ayanmontessori.edu.pk",
    phone: "+92 (51) 876-5433",
    whatsapp: "+92 300 1234567",
    hours: "Mon–Fri: 9:00 AM – 5:00 PM",
    icon: "Building2",
  },
];

// -----------------------------------------------
// CAMPUS GUIDE DETAILS
// -----------------------------------------------
export const campusGuideDetails: CampusDetail[] = [
  {
    title: "Dedicated Visitors Parking",
    description: "Ample covered & secure parking space available right in front of the main entrance gate.",
    icon: "Car",
  },
  {
    title: "Security & Check-in",
    description: "All visitors are asked to register at the main security desk for child safety protocols.",
    icon: "ShieldCheck",
  },
  {
    title: "Guided Campus Tours",
    description: "Personalised walkthroughs of classrooms, outdoor playgrounds, and sensorial labs.",
    icon: "Compass",
  },
  {
    title: "Accessible Facilities",
    description: "Wheelchair ramps, stroller-friendly pathways, and comfortable waiting lounges for parents.",
    icon: "Sparkles",
  },
];

// -----------------------------------------------
// CONTACT FAQs
// -----------------------------------------------
export const contactFAQs: ContactFAQ[] = [
  {
    id: "faq-1",
    category: "Campus Visits",
    question: "Can I visit the campus without a prior appointment?",
    answer:
      "While walk-in visitors are welcome during regular office hours (9:00 AM – 2:00 PM), we strongly recommend booking a guided campus tour in advance to ensure an admissions counselor is dedicated to answering all your questions without interrupting active classroom sessions.",
  },
  {
    id: "faq-2",
    category: "Admissions",
    question: "What age groups does Ayan Montessori Institute cater to?",
    answer:
      "We offer early childhood programmes starting from 1.5 years (Toddler Group), Level 1 (2.5 - 3.5 years), Level 2 (3.5 - 4.5 years), and Level 3 (4.5 - 6 years), along with adult teacher training diploma programmes.",
  },
  {
    id: "faq-[#3]",
    category: "Admissions",
    question: "What documents are required for child registration?",
    answer:
      "You will need a copy of your child's Birth Certificate or B-Form, 4 passport-size photographs, copies of both parents' CNIC/Passport, and previous school reports (if applicable).",
  },
  {
    id: "faq-[#4]",
    category: "Teacher Diplomas",
    question: "How do I enroll in the Montessori Teacher Training Diploma?",
    answer:
      "You can submit an inquiry through our Contact Form or visit our Teacher Training Desk. Eligibility requires a minimum of Intermediate / Higher Secondary completion. Both weekday and weekend batches are available.",
  },
  {
    id: "faq-5",
    category: "General",
    question: "How quickly will I receive a response to my message?",
    answer:
      "Our admissions team responds to all online inquiries within 24 business hours. For immediate assistance, feel free to call our WhatsApp Helpline at +92 (300) 123-4567.",
  },
];
