// ✅ IMPORT IMAGES FIRST
import ticketImg from "../assets/ticketapp.jpg";
import dashboardImg from "../assets/dashboard.jpg";

export const projects = [
  {
    id: 1,
    title: "ExamMate",
    subtitle: "AI Powered Exam Preparation App",
    tech: ["Flutter", "Dart", "Firebase"],
    frameworks: ["Flutter SDK"],
    category: "Mobile App",
    image: ticketImg,
    link: "https://github.com/yourusername/exammate",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    subtitle: "Animated developer portfolio with GSAP",
    tech: ["React", "Tailwind CSS", "GSAP"],
    frameworks: ["React.js", "GSAP Animation Library"],
    category: "Web App",
    image: dashboardImg,
    link: "https://yourportfolio.com",
  },
  {
    id: 3,
    title: "Travel Booking App",
    subtitle: "Modern UI travel app concept",
    tech: ["Flutter", "Provider"],
    frameworks: ["Flutter SDK", "Provider State Management"],
    category: "UI/UX",
    image: ticketImg,
    link: "https://github.com/yourusername/travel-app",
  },
  {
    id: 4,
    title: "Startup Dashboard",
    subtitle: "Internal dashboard built during startup internship",
    tech: ["Next.js", "Tailwind", "Shadcn UI"],
    frameworks: ["Next.js", "Shadcn UI Components"],
    category: "Startup Project",
    image: dashboardImg,
    link: "#",
  },
];
