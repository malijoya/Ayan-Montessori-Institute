export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  id: number;
  title: string;
  badge: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  purpose: string;
  whoShouldJoin: string;
  benefits: string[];
  ageGroup: string;
  duration: string;
  level: string;
  schedule: string;
  language: string;
  classSize: string;
  certification: string;
  classDays: string;
  timing: string;
  mode: string;
  image: string;
  heroImage: string;
  modules: CourseModule[];
  outcomes: { title: string; description: string }[];
  trainer: {
    name: string;
    qualification: string;
    experience: string;
    expertise: string;
    bio: string;
    photo: string;
  };
  gallery: { title: string; image: string }[];
  faqs: { question: string; answer: string }[];
  relatedIds: number[];
}

const courses: Course[] = [
  {
    id: 1,
    title: "Montessori Teacher Diploma — Primary Level (Ages 3–6)",
    badge: "Diploma Track",
    category: "Teacher Training",
    shortDescription:
      "Our flagship accredited programme covering all five Montessori curriculum areas with 100+ hours of supervised lab practice.",
    fullDescription:
      "The Montessori Teacher Diploma (Primary Level) is our most comprehensive and prestigious educator training programme. Participants gain deep theoretical knowledge and extensive practical competence across all five Montessori curriculum areas: Practical Life, Sensorial, Language, Mathematics, and Cultural Studies. With over 100 hours of supervised classroom lab practice, graduates are prepared to design and manage authentic Montessori prepared environments for children aged 3 to 6.",
    purpose:
      "To professionally qualify aspiring and practicing educators in the complete Montessori method for the primary age group, aligning with internationally recognised AMI standards.",
    whoShouldJoin:
      "Aspiring Montessori teachers, current school educators seeking an upgrade, parents who wish to apply Montessori principles at home, and professionals transitioning into early childhood education.",
    benefits: [
      "Internationally recognised Montessori diploma",
      "100+ supervised practical lab hours",
      "Complete 3–6 curriculum mastery",
      "Small cohort for personalised mentoring",
      "Post-graduation career placement support",
    ],
    ageGroup: "Educator Diploma (Adults)",
    duration: "6 Months",
    level: "Professional",
    schedule: "Sat & Sun — 10:00 AM to 1:00 PM",
    language: "Urdu / English",
    classSize: "Max 12 per batch",
    certification: "AMI-Aligned Montessori Diploma",
    classDays: "Saturday & Sunday",
    timing: "10:00 AM – 1:00 PM",
    mode: "On Campus",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    modules: [
      {
        title: "Module 1: Montessori Philosophy & Child Development",
        lessons: [
          "Life and work of Dr. Maria Montessori",
          "The absorbent mind and sensitive periods",
          "Planes of development (0–24 years)",
          "The prepared environment principles",
        ],
      },
      {
        title: "Module 2: Exercises of Practical Life (EPL)",
        lessons: [
          "Preliminary exercises and grace & courtesy",
          "Care of self and care of environment",
          "Control of error and isolation of difficulty",
          "Lab practice: EPL material presentations",
        ],
      },
      {
        title: "Module 3: Sensorial Education",
        lessons: [
          "Purpose and sequence of sensorial apparatus",
          "Visual, tactile, olfactory, and gustatory materials",
          "Three-period lesson technique",
          "Lab practice: full sensorial presentations",
        ],
      },
      {
        title: "Module 4: Language & Literacy",
        lessons: [
          "Spoken language and vocabulary enrichment",
          "Phonics, sandpaper letters, and movable alphabet",
          "Writing before reading methodology",
          "Lab practice: language material presentations",
        ],
      },
      {
        title: "Module 5: Mathematics & Cultural Studies",
        lessons: [
          "Number concept and the decimal system",
          "Golden bead material and stamp game",
          "Cultural curriculum: geography, biology, science",
          "Portfolio assessment and observation records",
        ],
      },
    ],
    outcomes: [
      {
        title: "Curriculum Mastery",
        description:
          "Deep command of all five Montessori curriculum areas for the 3–6 age group.",
      },
      {
        title: "Practical Presentation Skills",
        description:
          "Confidence in delivering accurate three-period lesson presentations with authentic materials.",
      },
      {
        title: "Classroom Management",
        description:
          "Skills to design, organise, and manage a fully prepared Montessori environment.",
      },
      {
        title: "Child Observation",
        description:
          "Systematic observation and documentation techniques for tracking child progress.",
      },
      {
        title: "Communication Skills",
        description:
          "Effective parent-teacher communication and progress reporting strategies.",
      },
      {
        title: "Confidence Building",
        description:
          "Readiness to lead a Montessori classroom independently from day one.",
      },
    ],
    trainer: {
      name: "Ms. Ayesha Tariq",
      qualification: "M.Ed. Early Childhood Education | AMI Certified Trainer",
      experience: "15+ Years",
      expertise: "Montessori 3–6 Curriculum, Child Development, EPL & Sensorial",
      bio: "Ms. Ayesha Tariq is the Lead Faculty and Head of Montessori Pedagogy at Ayan Montessori Institute. With 15+ years of hands-on classroom experience and AMI certification, she has trained over 300 Montessori educators across Pakistan. She specialises in practical life education and language development for the primary age group.",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    gallery: [
      {
        title: "Practical Life Lab Station",
        image:
          "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Sensorial Material Presentations",
        image:
          "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Language Sandpaper Letters",
        image:
          "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Golden Bead Math Activity",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Group Diploma Lab Session",
        image:
          "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
      },
      {
        title: "Graduation & Diploma Ceremony",
        image:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
      },
    ],
    faqs: [
      {
        question: "Who can join this diploma programme?",
        answer:
          "Anyone with a passion for early childhood education. No prior teaching experience is required, though a basic educational qualification is preferred.",
      },
      {
        question: "Is prior knowledge of Montessori required?",
        answer:
          "No. The programme starts from foundational philosophy and builds progressively to advanced curriculum presentations.",
      },
      {
        question: "What is the total duration?",
        answer:
          "6 months, conducted over weekends (Saturdays and Sundays), with a total of approximately 120 contact hours plus 100+ supervised lab hours.",
      },
      {
        question: "Is a certificate or diploma awarded?",
        answer:
          "Yes. Graduates receive an official Ayan Montessori Institute Diploma aligned with AMI standards, recognised by schools and institutions.",
      },
      {
        question: "What are the class timings?",
        answer:
          "Classes are held every Saturday and Sunday from 10:00 AM to 1:00 PM on campus.",
      },
      {
        question: "Can I attend an orientation before enrolling?",
        answer:
          "Yes. We conduct free pre-enrolment orientations every month. Contact our admissions desk to register for the next session.",
      },
    ],
    relatedIds: [2, 3, 4, 5],
  },
  {
    id: 2,
    title: "Early Childhood Care & Education Certificate",
    badge: "Certificate",
    category: "Teacher Training",
    shortDescription:
      "Focused certification in toddler brain development, child safety protocols, and responsive early care environments.",
    fullDescription:
      "The Early Childhood Care & Education (ECCE) Certificate provides comprehensive training in the science of early brain development, safe caregiving practices, nutritional management, and responsive relationship-building for children aged 0 to 3. Participants learn to design stimulating indoor and outdoor environments that support every domain of early development.",
    purpose:
      "To equip caregivers and educators with the specialised knowledge and skills needed to provide exceptional care and education for infants and toddlers aged 0–3.",
    whoShouldJoin:
      "Daycare workers, nannies, preschool assistants, parents of toddlers, and anyone working with children under the age of three.",
    benefits: [
      "Toddler brain development expertise",
      "Child safety and first aid certification",
      "Responsive caregiving strategies",
      "Environmental design skills",
      "ECCE internationally recognised certificate",
    ],
    ageGroup: "Ages 0–3 Focus",
    duration: "3 Months",
    level: "Certificate",
    schedule: "Mon & Wed — 4:00 PM to 6:30 PM",
    language: "Urdu / English",
    classSize: "Max 15 per batch",
    certification: "ECCE Certificate",
    classDays: "Monday & Wednesday",
    timing: "4:00 PM – 6:30 PM",
    mode: "On Campus",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    modules: [
      {
        title: "Module 1: Infant & Toddler Development",
        lessons: [
          "Stages of 0–3 brain development",
          "Attachment theory and bonding",
          "Developmental milestones overview",
        ],
      },
      {
        title: "Module 2: Safe & Responsive Caregiving",
        lessons: [
          "Child safety protocols and first aid",
          "Responsive feeding and sleep routines",
          "Positive caregiving communication",
        ],
      },
      {
        title: "Module 3: Environment Design",
        lessons: [
          "Setting up stimulating low-level environments",
          "Sensory-rich material selection for infants",
          "Outdoor safe play area design",
        ],
      },
    ],
    outcomes: [
      { title: "Development Knowledge", description: "Deep understanding of 0–3 brain development stages and milestones." },
      { title: "Safe Caregiving", description: "Practical child safety and first aid skills for emergency situations." },
      { title: "Responsive Relationships", description: "Building secure attachments and positive bonds with infants." },
      { title: "Environment Design", description: "Creating stimulating, age-appropriate indoor and outdoor play spaces." },
      { title: "Communication Skills", description: "Effective caregiver-parent communication and progress documentation." },
      { title: "Nutritional Awareness", description: "Understanding early nutritional needs and feeding best practices." },
    ],
    trainer: {
      name: "Ms. Sana Khurshid",
      qualification: "B.S. Child Development | ECCE Specialist",
      experience: "10+ Years",
      expertise: "Infant & Toddler Care, Responsive Caregiving, Child Safety",
      bio: "Ms. Sana Khurshid is a certified ECCE specialist with over a decade of experience in infant and toddler care programmes. She has conducted workshops for parents, nursery staff, and caregivers across the region, specialising in responsive relationships and safe environmental design for the youngest learners.",
      photo:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    },
    gallery: [
      { title: "Toddler Sensory Play", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" },
      { title: "Safe Environment Setup", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
      { title: "Caregiver Training Session", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" },
      { title: "Infant Brain Development Workshop", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
      { title: "Outdoor Play Design", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" },
      { title: "ECCE Certificate Ceremony", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" },
    ],
    faqs: [
      { question: "Who can join?", answer: "Anyone working with or caring for children aged 0–3, including parents, nannies, and daycare staff." },
      { question: "Is prior knowledge required?", answer: "No prior childcare experience is required. The course is suitable for complete beginners." },
      { question: "What is the duration?", answer: "3 months, with classes twice per week on Monday and Wednesday evenings." },
      { question: "Are certificates awarded?", answer: "Yes. All completions receive an official ECCE Certificate from Ayan Montessori Institute." },
      { question: "What are the class timings?", answer: "Monday and Wednesday evenings from 4:00 PM to 6:30 PM." },
      { question: "Can parents attend orientation?", answer: "Yes. Free orientation sessions are held monthly. Contact admissions to register." },
    ],
    relatedIds: [1, 3, 4, 5],
  },
  // Generic template for courses 3–15
  ...Array.from({ length: 13 }, (_, i) => {
    const id = i + 3;
    return {
      id,
      title: [
        "Preschool & Kindergarten Programme",
        "Montessori Foundation Programme",
        "Preschool Programme",
        "Kindergarten Level",
        "Spoken English for Kids",
        "Arabic Language Course",
        "Quran with Tajweed",
        "Computer Basics for Kids",
        "IT Course — Coding & Web",
        "Robotics for Kids",
        "Creative Arts & Craft",
        "Mathematics Skills Booster",
        "Science Exploration Club",
      ][i],
      badge: ["Early Learning", "Early Learning", "Early Learning", "Early Learning", "Language", "Language", "Islamic Studies", "Technology", "Technology", "STEM", "Arts", "STEM", "STEM"][i],
      category: ["Early Learning", "Early Learning", "Early Learning", "Early Learning", "Language Courses", "Language Courses", "Islamic Studies", "Technology", "Technology", "STEM Education", "Arts & Creativity", "STEM Education", "STEM Education"][i],
      shortDescription: "A modern, engaging programme designed for young learners to explore, discover, and develop core skills in a joyful Montessori-inspired environment.",
      fullDescription: "This programme provides children with a rich, structured learning experience that develops essential skills through hands-on activities, creative exploration, and collaborative discovery. Each session is thoughtfully designed to align with children's natural developmental stages and learning preferences.",
      purpose: "To nurture each child's curiosity, independence, and love of learning through an authentic child-centred educational experience.",
      whoShouldJoin: "Children within the specified age group who are curious, eager to explore, and ready to develop new skills in a warm and welcoming classroom environment.",
      benefits: ["Expert qualified instruction", "Hands-on practical activities", "Small class sizes", "Regular progress reports", "Certificate upon completion"],
      ageGroup: ["Ages 3–5", "Ages 2.5–4", "Ages 3–5", "Ages 5–6", "Ages 4–10", "Ages 5–12", "Ages 5–14", "Ages 6–12", "Ages 8–14", "Ages 7–13", "Ages 3–10", "Ages 5–10", "Ages 6–12"][i],
      duration: ["1 Year", "3 Months", "1 Year", "1 Year", "3 Months", "4 Months", "6 Months", "6 Weeks", "3 Months", "6 Weeks", "4 Weeks", "6 Weeks", "6 Weeks"][i],
      level: ["Beginner", "Foundation", "Beginner", "Intermediate", "Beginner", "Beginner", "All Levels", "Beginner", "Intermediate", "Beginner", "All Levels", "Intermediate", "All Levels"][i],
      schedule: "Flexible batch timings available — contact admissions for current schedule",
      language: "Urdu / English",
      classSize: "Max 15 per batch",
      certification: "Ayan Montessori Institute Certificate of Completion",
      classDays: "Mon, Wed & Fri",
      timing: "9:00 AM – 11:00 AM",
      mode: "On Campus",
      image: ["https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop", "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop"][i],
      heroImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
      modules: [
        { title: "Module 1: Introduction & Foundations", lessons: ["Overview and programme orientation", "Core concepts and learning objectives", "Setting expectations and environment"] },
        { title: "Module 2: Core Skills Development", lessons: ["Hands-on activity sessions", "Interactive group learning", "Individual skill-building exercises"] },
        { title: "Module 3: Applied Learning", lessons: ["Real-world application projects", "Creative problem-solving tasks", "Peer collaboration activities"] },
        { title: "Module 4: Review & Assessment", lessons: ["Portfolio completion", "Progress review and feedback", "Celebration of learning achievements"] },
      ],
      outcomes: [
        { title: "Practical Skills", description: "Core competencies developed through hands-on activities and real-world exercises." },
        { title: "Creative Thinking", description: "Imaginative problem-solving through open-ended projects and explorations." },
        { title: "Communication Skills", description: "Articulate expression of ideas in group and individual settings." },
        { title: "Teamwork", description: "Collaborative spirit built through structured group discovery activities." },
        { title: "Problem Solving", description: "Logical and creative approaches to challenges developed across all modules." },
        { title: "Confidence Building", description: "Self-assurance gained through mastery, presentation, and peer recognition." },
      ],
      trainer: {
        name: "Ms. Fatima Raza",
        qualification: "B.Ed. Early Childhood | Certified Montessori Practitioner",
        experience: "8+ Years",
        expertise: "Child Development, Creative Pedagogy, Montessori Methodology",
        bio: "Ms. Fatima Raza is a passionate educator and certified Montessori practitioner with over 8 years of classroom experience. She specialises in creating joyful, child-centred learning experiences that develop curiosity, confidence, and a lifelong love of learning.",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      },
      gallery: [
        { title: "Classroom Learning Activity", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" },
        { title: "Hands-on Workshop Session", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" },
        { title: "Group Collaboration Activity", image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" },
        { title: "Creative Project Showcase", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
        { title: "End-of-Term Presentation", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" },
        { title: "Certificate Ceremony", image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" },
      ],
      faqs: [
        { question: "Who can join this programme?", answer: "Children in the specified age range who are eager to learn and explore in a structured, supportive environment." },
        { question: "Is prior knowledge required?", answer: "No prior experience is necessary. The programme is designed to be accessible for all skill levels." },
        { question: "What is the duration?", answer: `The programme runs for ${["1 Year", "3 Months", "1 Year", "1 Year", "3 Months", "4 Months", "6 Months", "6 Weeks", "3 Months", "6 Weeks", "4 Weeks", "6 Weeks", "6 Weeks"][i]} with flexible batch timings.` },
        { question: "Are certificates awarded?", answer: "Yes. All children who complete the programme receive an official Ayan Montessori Institute Certificate of Completion." },
        { question: "What are the class timings?", answer: "Multiple batch timings are available. Contact our admissions desk to find the schedule that suits your child." },
        { question: "Can parents attend orientation?", answer: "Absolutely. We encourage all parents to attend our welcome orientation before the first session." },
      ],
      relatedIds: [1, 2, id === 3 ? 4 : 3, id === 5 ? 6 : 5],
    } as Course;
  }),
];

export function getCourse(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getRelatedCourses(ids: number[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export { courses };
