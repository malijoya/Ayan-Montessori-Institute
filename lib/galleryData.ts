export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "Classrooms"
    | "Learning Activities"
    | "Arts & Crafts"
    | "Sports"
    | "Events"
    | "Celebrations"
    | "Workshops"
    | "Teachers";
  image: string;
  caption?: string;
  span?: string; // For masonry variation e.g. "col-span-1", "md:col-span-2"
}

export interface FeaturedMoment {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface VideoMedia {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
}

export interface SocialPost {
  id: string;
  handle: string;
  caption: string;
  image: string;
  likes: number;
}

export const galleryCategories = [
  "All",
  "Classrooms",
  "Learning Activities",
  "Arts & Crafts",
  "Sports",
  "Events",
  "Celebrations",
  "Workshops",
  "Teachers",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Practical Life Lab Station",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    caption: "Children engaging in fine motor practical life exercises in a fully prepared Montessori environment.",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: "g2",
    title: "Sensorial Material Presentations",
    category: "Learning Activities",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    caption: "Exploring dimensions and visual isolation of difficulty with authentic sensorial apparatus.",
  },
  {
    id: "g3",
    title: "Creative Painting & Expression",
    category: "Arts & Crafts",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    caption: "Young artists expressing their imagination during our weekly creative workshop.",
  },
  {
    id: "g4",
    title: "Outdoor Physical Movement",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    caption: "Gross motor development activities on our safe, green outdoor play field.",
  },
  {
    id: "g5",
    title: "Annual Day Stage Performance",
    category: "Events",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    caption: "Students showcasing music and drama during our Annual Day celebration.",
    span: "col-span-1 md:col-span-2",
  },
  {
    id: "g6",
    title: "National Day Celebration",
    category: "Celebrations",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
    caption: "Celebrating cultural heritage and unity with traditional crafts and songs.",
  },
  {
    id: "g7",
    title: "Montessori Educator Lab Workshop",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    caption: "Trainee educators mastering material presentation techniques under expert faculty supervision.",
  },
  {
    id: "g8",
    title: "Faculty Mentorship & Guidance",
    category: "Teachers",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    caption: "Our certified AMI faculty members providing one-on-one child guidance.",
  },
  {
    id: "g9",
    title: "Sandpaper Phonics & Literacy",
    category: "Learning Activities",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    caption: "Tactile learning of letter sounds using authentic sandpaper letters.",
  },
  {
    id: "g10",
    title: "Prepared Classroom Reading Nook",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    caption: "A quiet, low-level reading corner designed to cultivate a lifelong love of books.",
  },
  {
    id: "g11",
    title: "Clay Modeling & Sculpting",
    category: "Arts & Crafts",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    caption: "Developing hand strength and tactile creativity through natural clay sculpting.",
  },
  {
    id: "g12",
    title: "Mini Sports Olympiad",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    caption: "Fun obstacle courses and relay races teaching teamwork and sportsmanship.",
  },
  {
    id: "g13",
    title: "Art Exhibition Showcase",
    category: "Events",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
    caption: "Parents exploring student artwork during our end-of-term creative exhibition.",
  },
  {
    id: "g14",
    title: "ECCE Teacher Training Seminar",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    caption: "Interactive seminar on infant brain development and responsive caregiving.",
  },
  {
    id: "g15",
    title: "Golden Beads Math Discovery",
    category: "Learning Activities",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
    caption: "Understanding decimal units, tens, hundreds, and thousands with Golden Bead material.",
  },
  {
    id: "g16",
    title: "Faculty Planning & Collaboration",
    category: "Teachers",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    caption: "Our academic team collaborating on personalized child development plans.",
  },
];

export const featuredMoments: FeaturedMoment[] = [
  {
    id: "fm1",
    title: "Annual Day & Cultural Festival",
    description: "A joyful celebration of music, drama, and student performances attended by over 400 parents and guests.",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fm2",
    title: "Junior Sports Day Gala",
    description: "An energetic day of friendly races, obstacle games, and sportsmanship building physical confidence.",
    date: "February 2026",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fm3",
    title: "Creative Young Artists Exhibition",
    description: "Showcasing over 200 handmade paintings, clay sculptures, and recycled art projects by our students.",
    date: "January 2026",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "fm4",
    title: "Parents' Orientation & Open House",
    description: "Welcoming new parents to explore our prepared Montessori environments and interact with our lead faculty.",
    date: "December 2025",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
  },
];

export const videoMedia: VideoMedia[] = [
  {
    id: "v1",
    title: "A Day Inside Our Montessori Classroom",
    description: "Watch how children navigate independent choice, practical life materials, and group social harmony.",
    thumbnail: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop",
    duration: "3:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "Supervised Educator Lab Presentations",
    description: "Take a look inside our teacher diploma training lab where educators master AMI presentation techniques.",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    duration: "4:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Early Childhood Care & Toddler Environment",
    description: "Discover our low-level infant and toddler prepared rooms designed for safe 0–3 exploration.",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    duration: "2:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const socialPosts: SocialPost[] = [
  {
    id: "sp1",
    handle: "@ayanmontessori",
    caption: "Exploring color sorting and fine motor precision with our toddler learners! 🌟 #MontessoriLife",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
    likes: 142,
  },
  {
    id: "sp2",
    handle: "@ayanmontessori",
    caption: "Congratulations to our latest batch of Montessori Diploma graduates! Ready to inspire! 🎓✨",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    likes: 218,
  },
  {
    id: "sp3",
    handle: "@ayanmontessori",
    caption: "Friday art workshop! Mixing natural watercolors and creating botanical leaf prints. 🎨🌿",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
    likes: 189,
  },
  {
    id: "sp4",
    handle: "@ayanmontessori",
    caption: "Independent reading time in our cozy classroom library corner. 📚❤️ #EarlyLiteracy",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop",
    likes: 165,
  },
  {
    id: "sp5",
    handle: "@ayanmontessori",
    caption: "Supervised lab presentations in action! Our trainee teachers mastering Golden Beads. 🔢⚡",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    likes: 204,
  },
  {
    id: "sp6",
    handle: "@ayanmontessori",
    caption: "Outdoor sports day energy! Building physical confidence through friendly teamwork. 🏆🏃‍♂️",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
    likes: 177,
  },
];
