// ============================================================
// testimonialData.ts — Ayan Montessori Institute
// All testimonial-related data. Edit this file to add, remove,
// reorder, or modify any testimonial without touching the UI.
// ============================================================

export type TestimonialCategory =
  | "All"
  | "Parents"
  | "Students"
  | "Courses"
  | "Teachers"
  | "Learning Environment";

export interface Testimonial {
  id: string;
  name: string;
  /** Profile photo path (relative to /public) or a Unsplash URL */
  photo: string;
  /** e.g. "Mother of Aisha, Level 1" or "Montessori Diploma Graduate" */
  relation: string;
  /** Short course/class label shown on card */
  courseOrClass: string;
  rating: number; // 1–5
  review: string;
  category: TestimonialCategory;
  date?: string;
  /** Optional YouTube or hosted video URL */
  videoUrl?: string;
}

export interface StudentTestimonial {
  id: string;
  name: string;
  photo: string;
  courseOrClass: string;
  rating: number;
  review: string;
  date?: string;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  image: string;
  courseOrClass: string;
  story: string;
  achievement: string;
}

export interface Stat {
  id: string;
  value: string;
  numericEnd: number; // used by counter animation
  suffix: string; // e.g. "+" or "%"
  label: string;
  icon: string; // lucide icon name or emoji fallback
}

// -----------------------------------------------
// STATISTICS (editable)
// -----------------------------------------------
export const testimonialStats: Stat[] = [
  {
    id: "s1",
    value: "500+",
    numericEnd: 500,
    suffix: "+",
    label: "Happy Students",
    icon: "SmilePlus",
  },
  {
    id: "s2",
    value: "95%",
    numericEnd: 95,
    suffix: "%",
    label: "Parent Satisfaction",
    icon: "HeartHandshake",
  },
  {
    id: "s3",
    value: "4.9",
    numericEnd: 4.9,
    suffix: "/5",
    label: "Average Rating",
    icon: "Star",
  },
  {
    id: "s4",
    value: "30+",
    numericEnd: 30,
    suffix: "+",
    label: "Dedicated Educators",
    icon: "GraduationCap",
  },
];

// -----------------------------------------------
// FEATURED TESTIMONIAL
// -----------------------------------------------
export const featuredTestimonial: Testimonial = {
  id: "featured",
  name: "Fatima Al-Rahman",
  photo: "/testimonial-featured.jpg",
  relation: "Mother of Zara, Level 2",
  courseOrClass: "Montessori Level 2",
  rating: 5,
  review:
    "Ayan Montessori Institute has been the greatest gift we have ever given our daughter. From the very first day, Zara walked into a world designed for her curiosity. The educators here don't just teach — they nurture, guide, and inspire. Within months, Zara's confidence, language skills, and love of learning grew beyond anything we imagined. The thoughtful curriculum, the beautiful classroom environment, and the warmth of every staff member make this place truly exceptional. We are forever grateful for the transformation we witnessed in our child.",
  category: "Parents",
  date: "March 2025",
};

// -----------------------------------------------
// PARENT TESTIMONIALS (grid – 6 to 9 entries)
// -----------------------------------------------
export const parentTestimonials: Testimonial[] = [
  {
    id: "p1",
    name: "Ahmed Hassan",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=AhmedHassan&backgroundColor=b6e3f4",
    relation: "Father of Omar, Toddler Group",
    courseOrClass: "Toddler Programme",
    rating: 5,
    review:
      "The Toddler Programme is extraordinary. Omar joined at 18 months and the team's patience and expertise are unmatched. He is now communicating in full sentences and absolutely loves going to school every morning.",
    category: "Parents",
    date: "January 2025",
  },
  {
    id: "p2",
    name: "Saira Malik",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=SairaMalik&backgroundColor=ffd6a5",
    relation: "Mother of Hana, Level 1",
    courseOrClass: "Montessori Level 1",
    rating: 5,
    review:
      "I was initially hesitant about the Montessori approach, but after seeing Hana's progress in just three months, I am completely convinced. The self-directed learning has made her independent, focused, and genuinely happy.",
    category: "Parents",
    date: "February 2025",
  },
  {
    id: "p3",
    name: "Khalid Qureshi",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=KhalidQureshi&backgroundColor=c1fba4",
    relation: "Father of Ali & Bilal",
    courseOrClass: "Montessori Level 1 & 2",
    rating: 5,
    review:
      "Both of my sons attend Ayan Montessori and the consistency of quality across all levels is remarkable. The teachers know each child personally and the communication with parents is excellent. Truly a world-class institution.",
    category: "Parents",
    date: "December 2024",
  },
  {
    id: "p4",
    name: "Mariam Tahir",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=MariamTahir&backgroundColor=a0c4ff",
    relation: "Mother of Noor, Level 3",
    courseOrClass: "Montessori Level 3",
    rating: 5,
    review:
      "The learning environment here is unlike anything I have seen. The classrooms are beautiful, the materials are carefully chosen, and the educators are genuinely passionate. Noor has flourished academically and socially.",
    category: "Learning Environment",
    date: "November 2024",
  },
  {
    id: "p5",
    name: "Usman Farooq",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=UsmanFarooq&backgroundColor=bdb2ff",
    relation: "Father of Sara, Toddler Group",
    courseOrClass: "Toddler Programme",
    rating: 4,
    review:
      "Outstanding programme for toddlers. Sara went from being shy and reserved to a confident little explorer. The staff celebrate every small achievement and the positive reinforcement approach has been transformative.",
    category: "Parents",
    date: "October 2024",
  },
  {
    id: "p6",
    name: "Ayesha Chaudhry",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=AyeshaChaudhry&backgroundColor=ffadad",
    relation: "Mother of Ibrahim, Level 2",
    courseOrClass: "Montessori Level 2",
    rating: 5,
    review:
      "The teachers at Ayan Montessori are extraordinary human beings. They understand child psychology, maintain incredible patience, and make learning genuinely joyful. Ibrahim asks to go to school even on weekends!",
    category: "Teachers",
    date: "September 2024",
  },
  {
    id: "p7",
    name: "Haris Baig",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=HarisBaig&backgroundColor=caffbf",
    relation: "Father of Fatima, Level 1",
    courseOrClass: "Montessori Level 1",
    rating: 5,
    review:
      "The Montessori curriculum at this institute is structured yet flexible. Fatima works at her own pace, and I have seen a remarkable improvement in her concentration span, fine motor skills, and overall confidence.",
    category: "Courses",
    date: "August 2024",
  },
  {
    id: "p8",
    name: "Nadia Shah",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=NadiaShah&backgroundColor=fdffb6",
    relation: "Mother of Zaid, Level 3",
    courseOrClass: "Montessori Level 3",
    rating: 5,
    review:
      "Zaid's reading and mathematical ability have surpassed children years older than him. The sensorial materials and the phonics programme at Ayan Montessori are world-standard. We could not be more proud or grateful.",
    category: "Courses",
    date: "July 2024",
  },
  {
    id: "p9",
    name: "Bilal Siddiqui",
    photo: "https://api.dicebear.com/8.x/notionists/svg?seed=BilalSiddiqui&backgroundColor=e0aaff",
    relation: "Father of Amina, Level 2",
    courseOrClass: "Montessori Level 2",
    rating: 5,
    review:
      "The classroom environment is prepared with such intention and beauty. Every corner invites curiosity. Amina's sense of order, responsibility, and care for her environment has improved dramatically.",
    category: "Learning Environment",
    date: "June 2024",
  },
];

// -----------------------------------------------
// STUDENT TESTIMONIALS (carousel)
// -----------------------------------------------
export const studentTestimonials: StudentTestimonial[] = [
  {
    id: "st1",
    name: "Zara Ahmed",
    photo: "https://api.dicebear.com/8.x/adventurer/svg?seed=ZaraAhmed&backgroundColor=b6e3f4",
    courseOrClass: "Montessori Level 2",
    rating: 5,
    review: "I love my classroom! My teacher is so kind and I learn new things every day. My favourite is the golden beads for maths!",
    date: "March 2025",
  },
  {
    id: "st2",
    name: "Omar Khalid",
    photo: "https://api.dicebear.com/8.x/adventurer/svg?seed=OmarKhalid&backgroundColor=ffd6a5",
    courseOrClass: "Montessori Level 1",
    rating: 5,
    review: "I like reading books and doing puzzles. My school has lots of beautiful things to learn with. I want to be here every day!",
    date: "February 2025",
  },
  {
    id: "st3",
    name: "Hana Malik",
    photo: "https://api.dicebear.com/8.x/adventurer/svg?seed=HanaMalik&backgroundColor=c1fba4",
    courseOrClass: "Montessori Level 3",
    rating: 5,
    review: "My teacher taught me how to write my name and count to 100! I love painting and the sandpaper letters. School is my favourite place.",
    date: "January 2025",
  },
  {
    id: "st4",
    name: "Bilal Farooq",
    photo: "https://api.dicebear.com/8.x/adventurer/svg?seed=BilalFarooq&backgroundColor=a0c4ff",
    courseOrClass: "Toddler Programme",
    rating: 5,
    review: "I love my friends at school and playing with the building blocks. We sing songs and my teacher reads me stories. I am very happy here!",
    date: "December 2024",
  },
  {
    id: "st5",
    name: "Noor Tahir",
    photo: "https://api.dicebear.com/8.x/adventurer/svg?seed=NoorTahir&backgroundColor=bdb2ff",
    courseOrClass: "Montessori Level 2",
    rating: 5,
    review: "The science experiments are my favourite! We grew a plant from a seed and watched it every day. I also love the map puzzles and geography work.",
    date: "November 2024",
  },
];

// -----------------------------------------------
// VIDEO TESTIMONIALS
// -----------------------------------------------
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "Fatima Al-Rahman",
    description: "Fatima shares how Ayan Montessori transformed her daughter Zara's confidence and love of learning.",
    thumbnail: "/testimonials-hero.jpg",
    // Replace with real YouTube embed URL when available
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v2",
    name: "Ahmed Hassan",
    description: "Ahmed talks about his son Omar's remarkable development in the Toddler Programme over six months.",
    thumbnail: "/testimonials-hero.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v3",
    name: "Saira Malik",
    description: "Saira describes how the Montessori method changed her entire perspective on early childhood education.",
    thumbnail: "/testimonials-hero.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// -----------------------------------------------
// SUCCESS STORIES
// -----------------------------------------------
export const successStories: SuccessStory[] = [
  {
    id: "ss1",
    studentName: "Zara Ahmed",
    image: "/success-story-1.jpg",
    courseOrClass: "Montessori Level 2",
    story:
      "Zara joined Ayan Montessori at age three with limited vocabulary and social hesitancy. Within her first semester, her educators identified her visual-spatial strengths and gently guided her through the sensorial curriculum. Today, she reads independently, leads group activities, and speaks with remarkable clarity and confidence.",
    achievement: "Reading independently at age 4",
  },
  {
    id: "ss2",
    studentName: "Omar Khalid",
    image: "/success-story-1.jpg",
    courseOrClass: "Toddler Programme → Level 1",
    story:
      "Omar's parents enrolled him in the Toddler Programme with concerns about his speech development. The gentle, language-rich environment at Ayan Montessori, combined with individualised educator attention, created the perfect conditions for his language to flourish. Omar now narrates stories and asks thoughtful questions that amaze everyone around him.",
    achievement: "Achieved speech milestones 6 months ahead of schedule",
  },
  {
    id: "ss3",
    studentName: "Hana Malik",
    image: "/success-story-1.jpg",
    courseOrClass: "Montessori Level 3",
    story:
      "Hana joined the Level 3 programme mid-year, having previously attended a traditional preschool. The transition to self-directed Montessori learning was initially challenging, but her educator's patient guidance helped her discover a love for mathematics through the golden bead system. She now leads her peers in mathematical reasoning activities.",
    achievement: "Top performer in mathematics for her age group",
  },
];

// -----------------------------------------------
// FILTER CATEGORIES
// -----------------------------------------------
export const testimonialCategories: TestimonialCategory[] = [
  "All",
  "Parents",
  "Students",
  "Courses",
  "Teachers",
  "Learning Environment",
];
