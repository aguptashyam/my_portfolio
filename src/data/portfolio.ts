// ============================================================================
// Portfolio Data Configuration
// All personal information, projects, skills, and achievements are centralized
// here for easy maintenance and updates.
// ============================================================================

export const siteConfig = {
  name: "Anubhav Gupta",
  title: "Anubhav Gupta — Software Engineer",
  description:
    "Portfolio of Anubhav Gupta — Computer Science student and software engineer building scalable products, exploring AI/ML, and crafting thoughtful user experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://anubhavgupta.dev",
  locale: "en_US",
  creator: "Anubhav Gupta",
};

export const personalInfo = {
  name: "Anubhav Gupta",
  firstName: "Anubhav",
  lastName: "Gupta",
  title: "Software Engineer",
  tagline: "Building software that matters.",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "CS Undergraduate",
  ],
  email: "shyam.anubhav10@gmail.com",
  phone: "+91 8840405476",
  location: "Patiala, Punjab, India",
  university: "Thapar Institute of Engineering & Technology",
  degree: "Bachelor of Engineering — Computer Science",
  graduationDate: "July 2027",
  cgpa: "8.78/10",
  enrollmentDate: "August 2023",
  links: {
    github: "https://github.com/aguptashyam",
    linkedin: "https://www.linkedin.com/in/anubhav--gupta",
    leetcode: "https://leetcode.com/u/aguptashyam/",
    codeforces: "https://codeforces.com/profile/aguptashyam",
    credly: "https://www.credly.com/users/anubhav--gupta",
    resume:
      "https://drive.google.com/file/d/1GNmRXt6a_bYVe_WMn1fgwE2zIE90rtaO/view?usp=sharing",
  },
};

export const aboutText = {
  headline: "Engineer at heart, builder by choice.",
  paragraphs: [
    "I build software products and study the systems behind them. My work spans full-stack development, backend engineering, and applied AI/ML — from designing APIs and database schemas to training neural networks on EEG signals.",
    "What drives me is understanding how things actually work: how a request moves through a distributed system, why a particular model architecture outperforms another, or what makes an interface feel intuitive rather than merely functional.",
    "I care about code that's well-structured, products that solve real problems, and engineering decisions that hold up under scrutiny. Currently pursuing my Computer Science degree at Thapar Institute, I'm focused on building the technical depth to contribute to meaningful software at scale.",
  ],
  interests: [
    "Software Engineering",
    "Full-Stack Development",
    "Artificial Intelligence & Machine Learning",
    "Backend Engineering",
    "System Design",
    "Scalable Software Products",
  ],
};

export const experience = [
  {
    id: "ml-research-intern",
    title: "Machine Learning Research Intern",
    organization: "Experimental Learning Activity Centre, Thapar Institute of Engineering & Technology",
    location: "Patiala, India",
    period: "June 2025 – August 2025",
    type: "Research Internship" as const,
    description:
      "Collaborated in a four-member research team to develop an end-to-end Python pipeline for processing and classifying multi-channel EEG signals using signal-processing and machine-learning techniques.",
    contributions: [
      "Processed multi-channel EEG datasets for ADHD detection/classification research",
      "Extracted 760 signal features across 19 channels using signal-processing techniques",
      "Applied K-NN-based feature selection to reduce the feature space from 760 to 28 features",
      "Trained and evaluated ML/DL models including CNN+LSTM architectures",
      "Worked with Variational Mode Decomposition (VMD) for signal processing",
      "Achieved 93.1% accuracy and 0.97 AUC with the CNN+LSTM approach",
      "Contributed to a comparative research study on ML and DL methods for EEG-based mental-health analysis",
    ],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "NumPy", "Pandas", "Signal Processing"],
    github: "https://github.com/aguptashyam/ADHD-Detection-Using-EEG-Signals",
    metrics: [
      { label: "Accuracy", value: "93.1%" },
      { label: "AUC Score", value: "0.97" },
      { label: "Features Selected", value: "28/760" },
      { label: "EEG Channels", value: "19" },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  contributions: string[];
  challenges?: string[];
  architecture?: string;
  metrics?: { label: string; value: string }[];
  category: "fullstack" | "ai-ml" | "backend" | "database";
}

export const projects: Project[] = [
  {
    id: "neuris",
    title: "NEURIS",
    subtitle: "Cognitive Memory System",
    description:
      "An end-to-end cognitive memory platform designed to store, organize, and retrieve contextual information through semantic search and graph relationships.",
    longDescription:
      "NEURIS is a cognitive memory system that transforms unstructured audio and text input into organized, queryable knowledge. The platform processes conversations through speech diarization, extracts structured memories using LLMs, stores them in a Neo4j knowledge graph, and enables context-aware retrieval through graph relationships and RAG pipelines.",
    technologies: [
      "FastAPI",
      "React",
      "Python",
      "Neo4j",
      "Redis",
      "Docker",
      "LLMs",
      "Vector Search",
      "RAG",
      "Google Cloud Speech",
      "Gemini",
      "SQLAlchemy",
    ],
    github: "https://github.com/aguptashyam/NEURIS",
    featured: true,
    contributions: [
      "Developed the backend using FastAPI and SQLAlchemy",
      "Integrated Google Cloud Speech for speaker diarization",
      "Used Gemini for structured memory extraction from conversations",
      "Designed Neo4j graph-based memory storage with semantic relationships",
      "Integrated Redis caching for improved retrieval performance",
      "Used Docker Compose for multi-service orchestration",
      "Implemented episodic memory organization through timeline clustering",
      "Built context-aware retrieval using graph relationships and RAG",
    ],
    architecture:
      "Audio/Text Input → Speech Processing → Memory Extraction → Embeddings/Graph Storage → Semantic Retrieval → Contextual Response",
    metrics: [
      { label: "Retrieval Time", value: "<2s" },
      { label: "Relevance Improvement", value: "35%" },
      { label: "Speaker Tracking", value: "3–5 concurrent" },
    ],
    category: "ai-ml",
  },
  {
    id: "calivio",
    title: "Calivio",
    subtitle: "Event Management Platform",
    description:
      "A full-stack SaaS platform for event discovery, event hosting, and ticketing with Stripe payment integration.",
    longDescription:
      "Calivio is a production-ready event management platform built with Next.js and TypeScript. It provides event creators with tools to host, manage, and monetize events, while attendees can discover, book, and pay for events through an integrated Stripe checkout flow.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "Mongoose",
      "Clerk",
      "Stripe",
      "Tailwind CSS",
      "shadcn/UI",
      "UploadThing",
    ],
    github: "https://github.com/aguptashyam/Calivio",
    live: "https://calivio-sand.vercel.app/",
    featured: true,
    contributions: [
      "Built backend workflows for users, events, and orders",
      "Implemented Stripe Checkout and webhook-driven order processing",
      "Developed MongoDB-backed APIs with Mongoose ODM",
      "Implemented search, filtering, and server-side pagination",
      "Integrated Clerk authentication for secure user management",
      "Built responsive interfaces with Tailwind CSS and shadcn/UI",
      "Implemented event discovery, creator dashboards, and order management",
    ],
    category: "fullstack",
  },
  {
    id: "urbanvista",
    title: "UrbanVista",
    subtitle: "Fashion E-commerce Platform",
    description:
      "A MERN-based fashion e-commerce application with shopping, authentication, payment, and administrative workflows.",
    longDescription:
      "UrbanVista is a full-featured e-commerce platform built on the MERN stack. It includes product discovery, shopping cart management, user authentication with role-based access, Stripe payment processing, Cloudinary image management, Redis caching, and an admin dashboard with analytics.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Zustand",
      "Axios",
      "Stripe",
      "Cloudinary",
      "Redis",
    ],
    github: "https://github.com/aguptashyam/UrbanVista",
    live: "https://urbanvista-30br.onrender.com/",
    featured: true,
    contributions: [
      "Built product discovery and shopping cart functionality",
      "Implemented user authentication and role-based access control",
      "Integrated Stripe payment processing",
      "Set up Cloudinary for image management",
      "Implemented Redis caching for performance",
      "Built coupon and discount functionality",
      "Created admin dashboard with analytics",
    ],
    category: "fullstack",
  },
  {
    id: "flight-management",
    title: "Flight Management System",
    subtitle: "Relational Database Engineering",
    description:
      "A relational database system for managing airline operations including ticket booking, scheduling, and automated pricing.",
    longDescription:
      "An academic database engineering project implementing a comprehensive relational database for airline operations. The system manages ticket booking, passenger records, flight scheduling, and includes automated demand-based and seasonal ticket pricing through stored procedures and triggers.",
    technologies: ["MySQL", "SQL", "PL/SQL"],
    github: "https://github.com/aguptashyam",
    featured: false,
    contributions: [
      "Designed the relational schema for airline operations",
      "Implemented stored procedures for ticket booking workflows",
      "Created triggers for automated demand-based pricing",
      "Built seasonal ticket pricing logic",
      "Ensured transaction consistency across concurrent operations",
      "Achieved 35% reduction in SQL query response times under concurrent workloads",
    ],
    metrics: [
      { label: "Query Improvement", value: "35%" },
    ],
    category: "database",
  },
];

export const skillCategories = [
  {
    name: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    name: "AI / ML",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "RAG",
      "Vector Search",
    ],
  },
  {
    name: "Databases",
    skills: ["MySQL", "MongoDB", "Neo4j", "Redis"],
  },
  {
    name: "Cloud & Tools",
    skills: ["AWS", "Docker", "Linux", "Git", "GitHub", "Postman", "VS Code"],
  },
  {
    name: "CS Foundations",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "AI & Machine Learning",
    ],
  },
];

export const achievements = [
  {
    id: "google-big-code",
    title: "Google Big Code Challenge 2026",
    description: "Advanced to Round 2, among the top 1,500 students nationwide.",
    highlight: "Top 1,500 Nationwide",
    organization: "Google",
  },
  {
    id: "zs-campus-beats",
    title: "ZS Campus Beats 2026",
    description: "Ranked among the top 100 teams.",
    highlight: "Top 100 Teams",
    organization: "ZS Associates",
  },
  {
    id: "goldman-sachs",
    title: "Goldman Sachs India Hackathon 2026",
    description: "All India Rank 7410.",
    highlight: "AIR 7410",
    organization: "Goldman Sachs",
  },
];

export const codingProfiles = [
  {
    platform: "LeetCode",
    url: "https://leetcode.com/u/aguptashyam/",
    description: "Data structures, algorithms, and problem solving",
  },
  {
    platform: "Codeforces",
    url: "https://codeforces.com/profile/aguptashyam",
    description: "Competitive programming",
  },
];

export const certifications = [
  {
    name: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "September 2026",
    credlyUrl: "https://www.credly.com/users/anubhav--gupta",
  },
  {
    name: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle",
    date: "September 25, 2026",
    credlyUrl: "https://www.credly.com/users/anubhav--gupta",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
