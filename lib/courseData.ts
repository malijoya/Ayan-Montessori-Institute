export interface CourseModule {
  title: string;
  lessons: string[];
}

export type CourseProgramType = "diplomas" | "short" | "skills";
export type CourseFormatIcon = "trainer" | "self-paced" | "online";

export const programTypeLabels: Record<CourseProgramType, string> = {
  diplomas: "Montessori Diplomas",
  short: "Short Courses",
  skills: "Professional Skills",
};

export interface Course {
  id: number;
  title: string;
  badge: string;
  category: string;
  programType: CourseProgramType;
  shortDescription: string;
  fullDescription: string;
  purpose: string;
  whoShouldJoin: string;
  benefits: string[];
  ageGroup: string;
  duration: string;
  level: string;
  format: string;
  formatIcon: CourseFormatIcon;
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
    /** Optional — when omitted, an initials avatar is shown instead of a photo. */
    photo?: string;
  };
  gallery: { title: string; image: string }[];
  faqs: { question: string; answer: string }[];
  relatedIds: number[];
}

// Adult-learner imagery (trainees in classrooms, workshops, and online sessions)
const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

const IMAGES = {
  lectureRoom: "1524178232363-1fb2b075b655",
  zoomCall: "1588196749597-9ff075ee6b5b",
  workshopGroup: "1515187029135-18ee286d815b",
  laptopStudy: "1531482615713-2afd69097998",
  conversation: "1543269865-cbf427effbad",
  studyTable: "1522202176988-66273c2fd55f",
  lectureHall: "1427504494785-3a9ca7044f45",
};

const gallery = (items: [string, keyof typeof IMAGES][]) =>
  items.map(([title, key]) => ({ title, image: img(IMAGES[key], 800) }));

const ADMISSIONS_TIMINGS = "Contact admissions for current batch timings";

const montessoriDiplomaModules: CourseModule[] = [
  {
    title: "Module 1: Montessori Philosophy & Child Development",
    lessons: [
      "Life and work of Dr. Maria Montessori",
      "The absorbent mind and sensitive periods",
      "Planes of development",
      "Principles of the prepared environment",
    ],
  },
  {
    title: "Module 2: Exercises of Practical Life",
    lessons: [
      "Preliminary exercises and grace & courtesy",
      "Care of self and care of the environment",
      "Control of error and isolation of difficulty",
      "Presentation practice with practical life apparatus",
    ],
  },
  {
    title: "Module 3: Sensorial Education",
    lessons: [
      "Purpose and sequence of sensorial apparatus",
      "Visual, tactile, auditory, and olfactory materials",
      "The three-period lesson",
      "Presentation practice with sensorial apparatus",
    ],
  },
  {
    title: "Module 4: Language & Early Literacy",
    lessons: [
      "Spoken language and vocabulary enrichment",
      "Phonics, sandpaper letters, and the movable alphabet",
      "Writing before reading",
      "Presentation practice with language materials",
    ],
  },
  {
    title: "Module 5: Mathematics & Cultural Studies",
    lessons: [
      "Number concepts and the decimal system",
      "Golden bead material and related apparatus",
      "Cultural curriculum: geography, botany, and science",
    ],
  },
  {
    title: "Module 6: Classroom Management & Assessment",
    lessons: [
      "Planning and organising the prepared environment",
      "Lesson planning and record keeping",
      "Observation techniques and child progress records",
      "Final practical assessment and portfolio review",
    ],
  },
];

const montessoriDiplomaOutcomes = [
  { title: "Montessori Philosophy", description: "A clear understanding of the Montessori method and how young children learn." },
  { title: "Apparatus Handling", description: "Confidence presenting Montessori apparatus accurately and in sequence." },
  { title: "Classroom Management", description: "Skills to plan, organise, and run a prepared Montessori classroom." },
  { title: "Child Observation", description: "Practical observation and record-keeping techniques to track each child's progress." },
  { title: "Lesson Planning", description: "Structured lesson plans that match children's developmental needs." },
  { title: "Career Readiness", description: "A job-oriented diploma that prepares you to step into a Montessori classroom." },
];

const courses: Course[] = [
  {
    id: 1,
    title: "6-Month Montessori Teachers Training Diploma",
    badge: "Diploma Track",
    category: "Montessori Diplomas",
    programType: "diplomas",
    shortDescription:
      "Comprehensive training covering core Montessori philosophy, apparatus handling, and classroom management.",
    fullDescription:
      "Our 6-Month Montessori Teachers Training Diploma is a hybrid programme that combines guided theory sessions with hands-on practice in our Montessori apparatus labs. Trainees build a strong foundation in Montessori philosophy, learn to present the apparatus across all core curriculum areas, and develop the classroom management skills needed to lead a prepared environment with confidence.",
    purpose:
      "To professionally prepare aspiring and practising educators to teach using the Montessori method, with a strong balance of theory and practical apparatus work.",
    whoShouldJoin:
      "Aspiring Montessori teachers, current school teachers looking to upgrade their skills, career switchers entering early childhood education, and parents who want to apply Montessori principles at home.",
    benefits: [
      "Hybrid learning — on-campus and online",
      "Hands-on apparatus lab practice",
      "Mentorship from a Master Trainer",
      "100% job-oriented diploma",
      "Career and job placement support",
    ],
    ageGroup: "Adult Learners",
    duration: "6 Months",
    level: "Professional",
    format: "Hybrid | Led by Ma'am Asma",
    formatIcon: "trainer",
    schedule: ADMISSIONS_TIMINGS,
    language: "Urdu / English",
    classSize: "Limited seats per batch",
    certification: "Montessori Teachers Training Diploma",
    classDays: "Weekday & Weekend Batches",
    timing: "Contact Admissions",
    mode: "Hybrid",
    image: img(IMAGES.lectureRoom),
    heroImage: img(IMAGES.workshopGroup),
    modules: montessoriDiplomaModules,
    outcomes: montessoriDiplomaOutcomes,
    trainer: {
      name: "Ma'am Asma",
      qualification: "Master Trainer, AYAN Montessori Institute",
      experience: "Lead Faculty",
      expertise: "Montessori Philosophy, Apparatus Presentations, Classroom Management",
      bio: "Ma'am Asma leads AYAN Montessori Institute's hybrid Montessori diploma programmes, guiding trainees through Montessori philosophy, hands-on apparatus work, and practical classroom management.",
    },
    gallery: gallery([
      ["Diploma Classroom Session", "lectureRoom"],
      ["Group Workshop Activity", "workshopGroup"],
      ["Collaborative Study", "studyTable"],
      ["Trainee Discussions", "conversation"],
      ["Guided Practice Session", "laptopStudy"],
      ["Seminar & Lectures", "lectureHall"],
    ]),
    faqs: [
      {
        question: "Who can join this diploma?",
        answer:
          "Anyone passionate about early childhood education — aspiring teachers, working teachers, career switchers, and parents. No prior Montessori experience is required.",
      },
      {
        question: "What does 'hybrid' mean for this course?",
        answer:
          "The programme combines on-campus sessions (including hands-on apparatus lab practice) with online learning, so you get practical experience with added flexibility.",
      },
      {
        question: "How long is the programme?",
        answer: "The diploma runs for 6 months.",
      },
      {
        question: "Will I receive a diploma?",
        answer:
          "Yes. On successful completion you receive the AYAN Montessori Institute Montessori Teachers Training Diploma.",
      },
      {
        question: "What are the class timings and fees?",
        answer:
          "Batch timings and fees vary by intake. Please contact our admissions team for the current schedule and fee structure.",
      },
      {
        question: "Do you help with job placement?",
        answer:
          "Yes. We continuously source and share active teaching vacancies across our school network to help graduates get a head start in their careers.",
      },
    ],
    relatedIds: [2, 3, 4, 6],
  },
  {
    id: 2,
    title: "6-Month Montessori Teachers Training Diploma",
    badge: "Online Diploma",
    category: "Montessori Diplomas",
    programType: "diplomas",
    shortDescription:
      "Interactive live digital classroom covering early childhood development and practical pedagogy.",
    fullDescription:
      "The online edition of our 6-Month Montessori Teachers Training Diploma is delivered through live, interactive classes on Zoom. Trainees learn early childhood development and practical Montessori pedagogy from experienced trainers in real time — with discussions, demonstrations, and assignments — from anywhere in Pakistan or abroad.",
    purpose:
      "To make professional Montessori teacher training accessible to learners who cannot attend on campus, without compromising on live interaction with trainers.",
    whoShouldJoin:
      "Aspiring and working teachers, career switchers, and parents who prefer to learn from home, including those living outside the city or overseas.",
    benefits: [
      "Live interactive classes on Zoom",
      "Learn from anywhere",
      "Guidance from experienced trainers",
      "100% job-oriented diploma",
      "Career and job placement support",
    ],
    ageGroup: "Adult Learners",
    duration: "6 Months",
    level: "Professional",
    format: "Live on Zoom | Ma'am Jumana / Nadia",
    formatIcon: "trainer",
    schedule: ADMISSIONS_TIMINGS,
    language: "Urdu / English",
    classSize: "Limited seats per batch",
    certification: "Montessori Teachers Training Diploma",
    classDays: "Weekday & Weekend Batches",
    timing: "Contact Admissions",
    mode: "Online (Live on Zoom)",
    image: img(IMAGES.zoomCall),
    heroImage: img(IMAGES.zoomCall),
    modules: montessoriDiplomaModules.map((module, idx) =>
      idx === montessoriDiplomaModules.length - 1
        ? {
            ...module,
            lessons: [
              "Planning and organising the prepared environment",
              "Lesson planning and record keeping",
              "Observation techniques and child progress records",
              "Final assessment and portfolio review",
            ],
          }
        : {
            ...module,
            lessons: module.lessons.map((lesson) =>
              lesson.startsWith("Presentation practice")
                ? lesson.replace("Presentation practice", "Live demonstrations")
                : lesson
            ),
          }
    ),
    outcomes: montessoriDiplomaOutcomes,
    trainer: {
      name: "Ma'am Jumana / Ma'am Nadia",
      qualification: "Trainers, AYAN Montessori Institute",
      experience: "Online Faculty",
      expertise: "Early Childhood Development, Practical Pedagogy, Live Online Instruction",
      bio: "Ma'am Jumana and Ma'am Nadia lead the live online Montessori diploma classes, bringing early childhood development and practical Montessori pedagogy to trainees through interactive Zoom sessions.",
    },
    gallery: gallery([
      ["Live Zoom Classroom", "zoomCall"],
      ["Online Study Session", "laptopStudy"],
      ["Collaborative Learning", "studyTable"],
      ["Trainee Discussions", "conversation"],
      ["Group Workshop Activity", "workshopGroup"],
      ["Diploma Classroom Session", "lectureRoom"],
    ]),
    faqs: [
      {
        question: "Are the classes live or recorded?",
        answer:
          "Classes are held live on Zoom, so you can interact with your trainers and classmates in real time.",
      },
      {
        question: "What do I need to join?",
        answer:
          "A stable internet connection and a laptop, tablet, or smartphone with Zoom installed.",
      },
      {
        question: "Can I join from outside Pakistan?",
        answer: "Yes. The online diploma is open to learners anywhere with an internet connection.",
      },
      {
        question: "Will I receive the same diploma as on-campus trainees?",
        answer:
          "Yes. On successful completion you receive the AYAN Montessori Institute Montessori Teachers Training Diploma.",
      },
      {
        question: "What are the class timings and fees?",
        answer:
          "Batch timings and fees vary by intake. Please contact our admissions team for the current schedule and fee structure.",
      },
      {
        question: "Do you help with job placement?",
        answer:
          "Yes. We share active teaching vacancies across our school network with our graduates.",
      },
    ],
    relatedIds: [1, 3, 4, 5],
  },
  {
    id: 3,
    title: "1-Year Montessori Teachers Training Diploma",
    badge: "Advanced Diploma",
    category: "Montessori Diplomas",
    programType: "diplomas",
    shortDescription:
      "In-depth professional mastery program with extensive practical lab work, child psychology, and leadership.",
    fullDescription:
      "Our 1-Year Montessori Teachers Training Diploma is an in-depth professional mastery programme for educators who want to go further. Alongside the complete Montessori curriculum, trainees complete extensive practical lab work, study child psychology in depth, and develop the leadership skills needed to guide a classroom — or a Montessori section — with confidence.",
    purpose:
      "To develop highly skilled Montessori professionals with deep practical expertise, a strong grounding in child psychology, and classroom leadership ability.",
    whoShouldJoin:
      "Educators seeking an advanced, comprehensive qualification, teachers aiming for senior or coordinator roles, and anyone planning a long-term career in Montessori education.",
    benefits: [
      "Extensive practical lab work",
      "In-depth child psychology",
      "Leadership and classroom coordination skills",
      "Mentorship from a Master Trainer",
      "100% job-oriented advanced diploma",
    ],
    ageGroup: "Adult Learners",
    duration: "1 Year",
    level: "Advanced",
    format: "Hybrid | Led by Ma'am Asma",
    formatIcon: "trainer",
    schedule: ADMISSIONS_TIMINGS,
    language: "Urdu / English",
    classSize: "Limited seats per batch",
    certification: "1-Year Montessori Teachers Training Diploma",
    classDays: "Weekday & Weekend Batches",
    timing: "Contact Admissions",
    mode: "Hybrid",
    image: img(IMAGES.workshopGroup),
    heroImage: img(IMAGES.lectureRoom),
    modules: [
      ...montessoriDiplomaModules.slice(0, 5),
      {
        title: "Module 6: Child Psychology & Development",
        lessons: [
          "Cognitive, social, and emotional development",
          "Understanding behaviour and positive discipline",
          "Supporting children with diverse learning needs",
          "Working with parents and families",
        ],
      },
      {
        title: "Module 7: Classroom Leadership & Management",
        lessons: [
          "Designing and managing the prepared environment",
          "Long-term curriculum and lesson planning",
          "Observation, assessment, and progress reporting",
          "Leading and mentoring classroom assistants",
        ],
      },
      {
        title: "Module 8: Extended Practical Lab & Final Assessment",
        lessons: [
          "Extended supervised apparatus lab practice",
          "Practical demonstrations and peer review",
          "Portfolio completion",
          "Final practical and theory assessment",
        ],
      },
    ],
    outcomes: [
      { title: "Curriculum Mastery", description: "Deep command of the complete Montessori curriculum and its apparatus." },
      { title: "Practical Expertise", description: "Extensive supervised lab practice for confident, accurate presentations." },
      { title: "Child Psychology", description: "Understanding of how children think, feel, and behave — and how to support them." },
      { title: "Classroom Leadership", description: "Ability to lead a classroom and mentor assistant teachers." },
      { title: "Assessment Skills", description: "Structured observation, assessment, and parent reporting." },
      { title: "Career Advancement", description: "An advanced diploma that supports senior and coordinator roles." },
    ],
    trainer: {
      name: "Ma'am Asma",
      qualification: "Master Trainer, AYAN Montessori Institute",
      experience: "Lead Faculty",
      expertise: "Montessori Curriculum, Child Psychology, Classroom Leadership",
      bio: "Ma'am Asma leads AYAN Montessori Institute's hybrid diploma programmes, guiding trainees through the full Montessori curriculum, extended apparatus lab work, and the leadership skills needed to run a Montessori classroom.",
    },
    gallery: gallery([
      ["Group Workshop Activity", "workshopGroup"],
      ["Diploma Classroom Session", "lectureRoom"],
      ["Seminar & Lectures", "lectureHall"],
      ["Collaborative Study", "studyTable"],
      ["Trainee Discussions", "conversation"],
      ["Guided Practice Session", "laptopStudy"],
    ]),
    faqs: [
      {
        question: "How is this different from the 6-month diploma?",
        answer:
          "The 1-year diploma goes deeper, with more extensive practical lab work plus dedicated modules on child psychology and classroom leadership.",
      },
      {
        question: "Who should choose the 1-year diploma?",
        answer:
          "Educators who want a comprehensive, advanced qualification or are aiming for senior teaching and coordinator roles.",
      },
      {
        question: "Is prior Montessori experience required?",
        answer: "No. The programme starts from the foundations and builds to advanced practice.",
      },
      {
        question: "Will I receive a diploma?",
        answer:
          "Yes. On successful completion you receive the AYAN Montessori Institute 1-Year Montessori Teachers Training Diploma.",
      },
      {
        question: "What are the class timings and fees?",
        answer:
          "Batch timings and fees vary by intake. Please contact our admissions team for the current schedule and fee structure.",
      },
      {
        question: "Do you help with job placement?",
        answer:
          "Yes. We share active teaching vacancies across our school network with our graduates.",
      },
    ],
    relatedIds: [1, 2, 4, 6],
  },
  {
    id: 4,
    title: "Montessori / ECE Certificate Course",
    badge: "Certificate Course",
    category: "Short Courses",
    programType: "short",
    shortDescription:
      "Flexible, self-paced certification for educators seeking essential Montessori and Early Childhood foundation concepts.",
    fullDescription:
      "The Montessori / ECE Certificate Course is a flexible, self-paced programme covering the essential foundations of Montessori education and Early Childhood Education (ECE). There are no live classes — you study the course material in your own time and complete it within one month, making it ideal for busy educators who want a recognised foundation certificate.",
    purpose:
      "To give educators and parents a solid, practical foundation in Montessori and early childhood concepts on a schedule that suits them.",
    whoShouldJoin:
      "Working teachers, teaching assistants, school staff, and parents who want a foundational certificate without committing to fixed class times.",
    benefits: [
      "Study at your own pace",
      "No fixed class times",
      "Essential Montessori & ECE foundations",
      "Complete in one month",
      "Certificate on completion",
    ],
    ageGroup: "Adult Learners",
    duration: "1 Month",
    level: "Foundation",
    format: "Self-Paced (No Live Classes)",
    formatIcon: "self-paced",
    schedule: "Self-paced — study anytime",
    language: "Urdu / English",
    classSize: "Individual (self-paced)",
    certification: "Montessori / ECE Certificate",
    classDays: "Anytime",
    timing: "Self-Paced",
    mode: "Self-Paced Online",
    image: img(IMAGES.laptopStudy),
    heroImage: img(IMAGES.laptopStudy),
    modules: [
      {
        title: "Module 1: Introduction to Montessori",
        lessons: [
          "Who was Dr. Maria Montessori?",
          "Core principles of the Montessori method",
          "The role of the Montessori teacher",
        ],
      },
      {
        title: "Module 2: Foundations of Early Childhood Education",
        lessons: [
          "Stages of early childhood development",
          "How young children learn through play and exploration",
          "Supporting social and emotional growth",
        ],
      },
      {
        title: "Module 3: The Prepared Environment",
        lessons: [
          "Setting up a child-centred learning space",
          "Overview of Montessori curriculum areas",
          "Choosing age-appropriate materials",
        ],
      },
      {
        title: "Module 4: Observation & Assessment",
        lessons: [
          "Basics of child observation",
          "Recording progress",
          "Final assessment",
        ],
      },
    ],
    outcomes: [
      { title: "Montessori Foundations", description: "A clear grasp of the core principles of the Montessori method." },
      { title: "ECE Essentials", description: "Understanding of early childhood development stages." },
      { title: "Learning Environments", description: "Knowledge of how to set up a child-centred space." },
      { title: "Observation Basics", description: "Simple techniques for observing and recording children's progress." },
      { title: "Flexible Learning", description: "Discipline and confidence gained through independent study." },
      { title: "Recognised Certificate", description: "A certificate to strengthen your teaching profile." },
    ],
    trainer: {
      name: "AYAN Faculty",
      qualification: "AYAN Montessori Institute Training Team",
      experience: "Course Team",
      expertise: "Montessori Foundations, Early Childhood Education",
      bio: "This self-paced course is developed by AYAN Montessori Institute's training team, drawing on more than a decade of experience training Montessori educators across Pakistan.",
    },
    gallery: gallery([
      ["Self-Paced Study", "laptopStudy"],
      ["Online Learning", "zoomCall"],
      ["Collaborative Study", "studyTable"],
      ["Trainee Discussions", "conversation"],
      ["Classroom Session", "lectureRoom"],
      ["Group Workshop", "workshopGroup"],
    ]),
    faqs: [
      {
        question: "Are there any live classes?",
        answer:
          "No. This is a fully self-paced course — you study the material in your own time with no fixed class schedule.",
      },
      {
        question: "How long do I have to complete it?",
        answer: "The course is designed to be completed within 1 month.",
      },
      {
        question: "Who is this course for?",
        answer:
          "Teachers, teaching assistants, school staff, and parents looking for a foundation in Montessori and early childhood education.",
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes. You receive a Montessori / ECE Certificate on successful completion.",
      },
      {
        question: "What are the fees?",
        answer: "Please contact our admissions team for the current fee.",
      },
      {
        question: "Can I upgrade to a diploma later?",
        answer:
          "Yes. Many learners go on to our 6-month or 1-year Montessori diplomas — contact admissions for guidance.",
      },
    ],
    relatedIds: [1, 2, 3, 6],
  },
  {
    id: 5,
    title: "Professional Spoken English Course",
    badge: "Language Mastery",
    category: "Professional Skills",
    programType: "skills",
    shortDescription:
      "Fluency and classroom communication mastery tailored for teachers and professional working individuals.",
    fullDescription:
      "The Professional Spoken English Course builds fluency, confidence, and clear communication for teachers and working professionals. Delivered live on Zoom four days a week, the course focuses on everyday and professional conversation, pronunciation, and the classroom language teachers use every day.",
    purpose:
      "To help teachers and professionals speak English fluently and confidently in the classroom and the workplace.",
    whoShouldJoin:
      "Teachers, teaching assistants, school staff, and working professionals who want to improve their spoken English and communication confidence.",
    benefits: [
      "Live interactive classes on Zoom",
      "4 days per week of practice",
      "Classroom and workplace communication",
      "Pronunciation and fluency building",
      "Certificate on completion",
    ],
    ageGroup: "Teachers & Professionals",
    duration: "6 Months (4 Days/Week)",
    level: "All Levels",
    format: "Online Live on Zoom",
    formatIcon: "online",
    schedule: `4 days per week — ${ADMISSIONS_TIMINGS.toLowerCase()}`,
    language: "English",
    classSize: "Limited seats per batch",
    certification: "Professional Spoken English Certificate",
    classDays: "4 Days/Week",
    timing: "Contact Admissions",
    mode: "Online (Live on Zoom)",
    image: img(IMAGES.conversation),
    heroImage: img(IMAGES.conversation),
    modules: [
      {
        title: "Module 1: Foundations of Spoken English",
        lessons: [
          "Everyday conversation basics",
          "Sentence structure for speaking",
          "Building core vocabulary",
        ],
      },
      {
        title: "Module 2: Pronunciation & Fluency",
        lessons: [
          "Sounds, stress, and intonation",
          "Common pronunciation challenges",
          "Speaking with clarity and pace",
        ],
      },
      {
        title: "Module 3: Classroom Communication",
        lessons: [
          "Classroom instructions and routines",
          "Asking questions and giving feedback",
          "Communicating with parents",
        ],
      },
      {
        title: "Module 4: Professional Communication",
        lessons: [
          "Meetings, presentations, and interviews",
          "Professional etiquette and tone",
          "Handling discussions with confidence",
        ],
      },
      {
        title: "Module 5: Confidence & Final Assessment",
        lessons: [
          "Role-plays and real-life scenarios",
          "Public speaking practice",
          "Final speaking assessment",
        ],
      },
    ],
    outcomes: [
      { title: "Fluency", description: "Speak English naturally and with fewer pauses." },
      { title: "Pronunciation", description: "Clearer pronunciation, stress, and intonation." },
      { title: "Classroom English", description: "Confident use of English for teaching and classroom routines." },
      { title: "Professional Communication", description: "Clear communication in meetings, presentations, and interviews." },
      { title: "Vocabulary", description: "A broader everyday and professional vocabulary." },
      { title: "Confidence", description: "The confidence to speak up in any setting." },
    ],
    trainer: {
      name: "AYAN Faculty",
      qualification: "AYAN Montessori Institute Language Trainers",
      experience: "Language Faculty",
      expertise: "Spoken English, Pronunciation, Classroom & Professional Communication",
      bio: "The Professional Spoken English Course is taught live by AYAN Montessori Institute's language trainers, with a focus on practical speaking for teachers and working professionals.",
    },
    gallery: gallery([
      ["Conversation Practice", "conversation"],
      ["Live Zoom Class", "zoomCall"],
      ["Group Discussion", "studyTable"],
      ["Presentation Practice", "lectureRoom"],
      ["Collaborative Learning", "workshopGroup"],
      ["Independent Practice", "laptopStudy"],
    ]),
    faqs: [
      {
        question: "How often are classes held?",
        answer: "Classes are held live on Zoom 4 days per week for 6 months.",
      },
      {
        question: "What level of English do I need?",
        answer:
          "The course is suitable for all levels. Trainers support learners from their current level upward.",
      },
      {
        question: "Is this course only for teachers?",
        answer:
          "No. It is tailored for teachers but equally suitable for working professionals who want to improve their spoken English.",
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes. You receive a certificate on successful completion.",
      },
      {
        question: "What are the class timings and fees?",
        answer:
          "Please contact our admissions team for current batch timings and fees.",
      },
      {
        question: "What do I need to join?",
        answer:
          "A stable internet connection and a laptop, tablet, or smartphone with Zoom installed.",
      },
    ],
    relatedIds: [6, 4, 2, 1],
  },
  {
    id: 6,
    title: "English & Urdu Phonics Workshops (Offered Separately)",
    badge: "Specialized Workshop",
    category: "Short Courses",
    programType: "short",
    shortDescription:
      "Specialized, stand-alone workshops focused on early reading mechanics—choose either the English Phonics or Urdu Phonics track to master proven classroom reading techniques.",
    fullDescription:
      "Our Phonics Pedagogy Workshops are short, specialised, stand-alone workshops focused on the mechanics of early reading. Choose the English Phonics track or the Urdu Phonics track — each is offered separately and runs live on Zoom over 1–2 days. You will learn proven, practical techniques for teaching letter sounds, blending, and early reading in the classroom.",
    purpose:
      "To equip teachers with practical, proven phonics techniques they can use immediately to teach early reading in English or Urdu.",
    whoShouldJoin:
      "Pre-primary and primary teachers, Montessori teachers, tutors, and parents who teach young children to read.",
    benefits: [
      "Choose English or Urdu Phonics",
      "Short 1–2 day format",
      "Live and interactive on Zoom",
      "Practical classroom reading techniques",
      "Certificate of participation",
    ],
    ageGroup: "Teachers & Parents",
    duration: "1–2 Days Each (Separate Tracks)",
    level: "All Levels",
    format: "Online Live on Zoom",
    formatIcon: "online",
    schedule: "Workshop dates announced per track — contact admissions",
    language: "English / Urdu (per track)",
    classSize: "Limited seats per workshop",
    certification: "Phonics Workshop Certificate",
    classDays: "1–2 Days",
    timing: "Contact Admissions",
    mode: "Online (Live on Zoom)",
    image: img(IMAGES.studyTable),
    heroImage: img(IMAGES.studyTable),
    modules: [
      {
        title: "English Phonics Track",
        lessons: [
          "Letter sounds and correct articulation",
          "Blending and segmenting",
          "Tricky words and early decoding",
          "Classroom phonics activities and games",
        ],
      },
      {
        title: "Urdu Phonics Track",
        lessons: [
          "Urdu letter sounds (huroof ki awaazein)",
          "Joining letters and forming words",
          "Early Urdu reading techniques",
          "Classroom phonics activities for Urdu",
        ],
      },
    ],
    outcomes: [
      { title: "Letter Sounds", description: "Teach letter sounds accurately and consistently." },
      { title: "Blending & Segmenting", description: "Guide children to blend sounds into words and break words into sounds." },
      { title: "Early Reading", description: "Proven techniques that help children start reading with confidence." },
      { title: "Classroom Activities", description: "Ready-to-use phonics games and activities." },
      { title: "Lesson Delivery", description: "Structured, engaging phonics lessons." },
      { title: "Teaching Confidence", description: "Confidence to teach reading from the very first lesson." },
    ],
    trainer: {
      name: "AYAN Faculty",
      qualification: "AYAN Montessori Institute Phonics Trainers",
      experience: "Workshop Faculty",
      expertise: "English Phonics, Urdu Phonics, Early Reading Pedagogy",
      bio: "The phonics workshops are delivered live by AYAN Montessori Institute's trainers, focusing on practical, classroom-ready techniques for teaching early reading.",
    },
    gallery: gallery([
      ["Workshop Session", "studyTable"],
      ["Live Zoom Workshop", "zoomCall"],
      ["Group Practice", "workshopGroup"],
      ["Trainee Discussions", "conversation"],
      ["Independent Practice", "laptopStudy"],
      ["Classroom Session", "lectureRoom"],
    ]),
    faqs: [
      {
        question: "Are the English and Urdu workshops one course?",
        answer:
          "No. They are offered separately — you can join either the English Phonics track or the Urdu Phonics track, or both.",
      },
      {
        question: "How long is each workshop?",
        answer: "Each track runs for 1–2 days.",
      },
      {
        question: "Where are the workshops held?",
        answer: "Workshops are held live on Zoom.",
      },
      {
        question: "Who should attend?",
        answer:
          "Pre-primary, primary, and Montessori teachers, tutors, and parents who teach young children to read.",
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes. Participants receive a certificate for the track they complete.",
      },
      {
        question: "When is the next workshop?",
        answer:
          "Workshop dates are announced per track. Contact our admissions team for upcoming dates and fees.",
      },
    ],
    relatedIds: [4, 5, 1, 2],
  },
];

export function getCourse(id: number): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getRelatedCourses(ids: number[]): Course[] {
  return ids.map((id) => courses.find((c) => c.id === id)).filter(Boolean) as Course[];
}

export { courses };
