import { getCourse } from "@/lib/courseData";

export interface Trainer {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experience: string;
  expertise: string;
  bio: string;
  /** Optional — when omitted, an avatar placeholder is shown instead of a photo. */
  photo?: string;
  specialisation: string;
  /** Optional — the section is hidden when omitted. */
  teachingPhilosophy?: string;
  coursesTaught: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Course labels come from courseData so they always match the course pages
const courseLabel = (id: number) => {
  const course = getCourse(id);
  return course ? `${course.title} (${course.mode})` : "";
};

export const trainers: Trainer[] = [
  {
    id: "asma",
    name: "Ma'am Asma",
    title: "Master Trainer — Hybrid Montessori Diplomas",
    qualification: "Master Trainer, AYAN Montessori Institute",
    experience: "Lead Faculty",
    expertise: "Montessori Philosophy, Apparatus & Classroom Management",
    bio: "Ma'am Asma leads AYAN Montessori Institute's hybrid Montessori teacher training diplomas, guiding trainees through Montessori philosophy, hands-on apparatus lab work, child psychology, and practical classroom management.",
    specialisation: "Montessori Apparatus, Child Psychology & Classroom Leadership",
    coursesTaught: [courseLabel(1), courseLabel(3)],
    socials: {},
  },
  {
    id: "jumana",
    name: "Ma'am Jumana",
    title: "Trainer — Online Montessori Diploma",
    qualification: "Trainer, AYAN Montessori Institute",
    experience: "Online Faculty",
    expertise: "Early Childhood Development & Practical Pedagogy",
    bio: "Ma'am Jumana teaches AYAN Montessori Institute's live online Montessori diploma on Zoom, bringing early childhood development and practical Montessori pedagogy to trainees wherever they are.",
    specialisation: "Early Childhood Development & Live Online Instruction",
    coursesTaught: [courseLabel(2)],
    socials: {},
  },
  {
    id: "nadia",
    name: "Ma'am Nadia",
    title: "Trainer — Online Montessori Diploma",
    qualification: "Trainer, AYAN Montessori Institute",
    experience: "Online Faculty",
    expertise: "Early Childhood Development & Practical Pedagogy",
    bio: "Ma'am Nadia teaches AYAN Montessori Institute's live online Montessori diploma on Zoom, helping trainees build a strong foundation in early childhood development and practical Montessori pedagogy.",
    specialisation: "Practical Pedagogy & Live Online Instruction",
    coursesTaught: [courseLabel(2)],
    socials: {},
  },
];
