export interface Trainer {
  id: string;
  name: string;
  title: string;
  qualification: string;
  experience: string;
  expertise: string;
  bio: string;
  photo: string;
  specialisation: string;
  teachingPhilosophy: string;
  coursesTaught: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const trainers: Trainer[] = [
  {
    id: "ayesha-tariq",
    name: "Ms. Ayesha Tariq",
    title: "Lead Faculty & Head of Montessori Pedagogy",
    qualification: "M.Ed. Early Childhood | AMI Certified Trainer",
    experience: "15+ Years Experience",
    expertise: "Montessori 3–6 Curriculum, EPL & Sensorial",
    bio: "Ms. Ayesha Tariq is the Lead Faculty and Head of Montessori Pedagogy at Ayan Montessori Institute. With over 15 years of classroom leadership and AMI certification, she has mentored more than 300 early childhood educators.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    specialisation: "Exercises of Practical Life (EPL) & Sensorial Education",
    teachingPhilosophy: "I believe every child possesses an inner drive to explore. Our duty as Montessori educators is to prepare an environment that allows that natural potential to unfold with dignity and joy.",
    coursesTaught: [
      "Montessori Teacher Diploma — Primary Level (Ages 3–6)",
      "Exercises of Practical Life Workshop",
      "Child Observation & Assessment Seminar",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "ayesha.tariq@ayanmontessori.edu.pk",
    },
  },
  {
    id: "sana-[#87CEEB]",
    name: "Ms. Sana Khurshid",
    title: "Senior ECCE & Toddler Care Specialist",
    qualification: "B.S. Child Development | Certified ECCE Master Trainer",
    experience: "10+ Years Experience",
    expertise: "Infant Care, Responsive Caregiving & Safety",
    bio: "Ms. Sana Khurshid specializes in infant and toddler brain development. She leads our Early Childhood Care & Education (ECCE) program, helping caregivers design secure and sensory-rich environments for ages 0–3.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    specialisation: "Toddler Brain Development & Safety Protocols",
    teachingPhilosophy: "The first three years of life lay the foundation for all future learning. Warmth, responsiveness, and safety are the key pillars of authentic early care.",
    coursesTaught: [
      "Early Childhood Care & Education Certificate (Ages 0–3)",
      "Toddler Environment Design Workshop",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "sana.khurshid@ayanmontessori.edu.pk",
    },
  },
  {
    id: "hamza-ali",
    name: "Mr. Hamza Ali",
    title: "Language & Phonics Master Instructor",
    qualification: "M.A. English Literature | Certified Jolly Phonics Trainer",
    experience: "9+ Years Experience",
    expertise: "Spoken English, Phonics & Literacy Pedagogy",
    bio: "Mr. Hamza Ali is an enthusiastic language educator dedicated to building early childhood literacy and spoken English fluency using multi-sensory phonics and storytelling techniques.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    specialisation: "Phonics, Spoken English & Early Literacy",
    teachingPhilosophy: "Language acquisition happens best through playful interaction, music, and multi-sensory materials. When children feel confident speaking, their curiosity explodes.",
    coursesTaught: [
      "Spoken English for Kids",
      "Montessori Language & Phonics Module",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "hamza.ali@ayanmontessori.edu.pk",
    },
  },
  {
    id: "fatima-raza",
    name: "Ms. Fatima Raza",
    title: "Early Learning & Preschool Program Lead",
    qualification: "B.Ed. Early Childhood | Montessori Practitioner",
    experience: "8+ Years Experience",
    expertise: "Preschool Curriculum, Creative Pedagogy",
    bio: "Ms. Fatima Raza leads our Preschool and Kindergarten Learning Programs. She excels at combining Montessori materials with creative arts to build cognitive and emotional resilience in young learners.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    specialisation: "Preschool & Foundation Level Pedagogy",
    teachingPhilosophy: "Learning should be a joyful adventure. By fostering independent choice and social harmony, children grow into compassionate, lifelong learners.",
    coursesTaught: [
      "Preschool & Kindergarten Programme",
      "Montessori Foundation Programme",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "fatima.raza@ayanmontessori.edu.pk",
    },
  },
  {
    id: "zoya-ahmed",
    name: "Ms. Zoya Ahmed",
    title: "STEM & Mathematics Pedagogy Specialist",
    qualification: "M.Sc. Applied Mathematics | Certified STEM Educator",
    experience: "7+ Years Experience",
    expertise: "Concrete Math Apparatus, STEM Exploration",
    bio: "Ms. Zoya Ahmed brings abstract mathematical concepts to life through concrete Montessori apparatus like the Golden Beads and Stamp Game, making mathematics intuitive and exciting for kids.",
    photo: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
    specialisation: "Montessori Mathematics & Early STEM Education",
    teachingPhilosophy: "Math is not about rote memorization; it is about recognizing patterns in the world around us. Hands-on materials turn mathematical concepts into tangible discovery.",
    coursesTaught: [
      "Mathematics Skills Booster",
      "Science Exploration Club",
      "Montessori Math Apparatus Module",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "zoya.ahmed@ayanmontessori.edu.pk",
    },
  },
  {
    id: "bilal-hassan",
    name: "Mr. Bilal Hassan",
    title: "Kid Coding & Robotics Lead Trainer",
    qualification: "B.S. Computer Science | Certified Youth Robotics Mentor",
    experience: "6+ Years Experience",
    expertise: "Scratch Coding, Kids Robotics & Tech Literacy",
    bio: "Mr. Bilal Hassan introduces young minds to computational thinking, problem-solving, and robotics through interactive visual coding blocks and hands-on maker workshops.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    specialisation: "Computational Thinking & Kid Robotics",
    teachingPhilosophy: "Technology is a tool for creation, not just consumption. Teaching kids to code empowers them to build their own ideas and solve real-world problems.",
    coursesTaught: [
      "Robotics for Kids",
      "IT Course — Coding & Web",
      "Computer Basics for Kids",
    ],
    socials: {
      linkedin: "https://linkedin.com",
      email: "bilal.hassan@ayanmontessori.edu.pk",
    },
  },
];
