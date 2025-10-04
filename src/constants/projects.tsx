import PSS_mms from "../assets/screenshots/pss_mms.png";
import Shad_Recruitment_Image from "../assets/screenshots/shad_recruitment.jpg";
import ucalgary_social_media from "../assets/screenshots/ucalgary_social_media.png";
import TABLEAU_Image from "../assets/screenshots/traffic_dashboard.png";
import PSS_Logo from "../assets/logos/pss.jpg";
import portfolio_website from "../assets/screenshots/portfolio_website.png";
import msa_website from "../assets/screenshots/msa_website.png";

export type ProjectType = "Mobile" | "Data" | "Desktop" | "Frontend" | "Backend" | "Fullstack";

export const projects: {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  demoUrl: string;
  bullets: string[];
  image: string;
  logo: string;
  logoName?: string;
  progress: string;
  type: string[];
}[] = [
//   {
//     title: "Portfolio Website",
//     description: "A website to highlight my experience, skills, and projects, featuring an interactive user interface with smooth animations.",
//     technologies: ["TypeScript", "React.js", "Tailwind CSS", "Git", "GSAP"],
//     url: "https://github.com/usharabkhan/website",
//     demoUrl: "",
//     bullets: [
//       "Elegant styling using a professional color palette",
//       "Responsive design for all devices",
//       "Animation libraries for smooth transitions",
//     ],
//     image: portfolio_website,
//     logo: "",
//     progress: "January 2025",
//     type: "Web",
//     tags: ["Portfolio", "Frontend", "React", "Tailwind"]
//   },

  {
    title: "Student Engagement Hub",
    description: "Full-stack membership & events management for the Muslim Students' Association with role-based access and analytics dashboard.",
    technologies: ["NextJS", "MongoDB", "Tailwind CSS", "TypeScript", "Azure"],
    url: "https://msaucalgary.com",
    demoUrl: "",
    bullets: [
      "Admin dashboard for managing members, events, and donations",
      "Role-based access and permission system",
      "Responsive UI for both staff and members",
      "Implemented analytics for tracking engagement and attendance"
    ],
    image: msa_website,
    logo: "",
    progress: "In Progress",
    type: ["Fullstack", "Data"]
  },
  {
    title: "Traffic Incident Analysis Dashboard",
    description: "A Tableau dashboard visualizing traffic incident data from Calgary, showcasing trends and patterns in incidents over time.",
    technologies: ["Python", "PySpark", "Pandas", "Tableau"],
    url: "https://public.tableau.com/app/profile/usharab.khan/viz/DATA501-Usharab_Ali/Dashboard?publish=yes",
    demoUrl: "",
    bullets: [
      "Analyzed traffic incident patterns in Calgary using PySpark and Pandas",
      "Visualized trends using interactive Tableau dashboards"
    ],
    image: TABLEAU_Image,
    logo: "",
    progress: "April 2025", 
    type: ["Data", "Frontend"]
  },
  {
    title: "Hiking Social Network",
    description: "Collaborated on a full-stack hiking social network web app featuring user authentication, hike tracking, and social functionality, using Docker containerization to streamline development and deployment.",
    technologies: ["React.js", "Tailwind CSS", "Docker", "Firebase"],
    url: "",
    demoUrl: "",
    bullets: [
      "Implemented user authentication and social features",
      "Tracked hikes and user activities",
      "Containerized the app with Docker for easy deployment"
    ],
    image: "",
    logo: "",
    progress: "April 2025", 
    type: ["Fullstack", "Mobile"]
  },
  {
    title: "Social Media Interface",
    description: "Social platform for university students. Employed Task Centered System Design process to iteratively create an elegant UI/UX. (Course Project)",
    technologies: ["TypeScript", "React.js", "Tailwind CSS", "Figma"],
    url: "https://github.com/ManrajSingh6/CPSC481-Social-Media-Network",
    demoUrl: "https://manrajsingh6.github.io/CPSC481-Social-Media-Network/#/login",
    bullets: [
      "Developed following Task Centered Design Process",
      "Phase-wise iteration of the design",
      "Improved by user feedback and heuristic evaluation",
    ],
    image: ucalgary_social_media,
    logo: "",
    progress: "December 2024", 
    type: ["Frontend", "Mobile"]
  },
  {
    title: "Recruitment Mobile Application",
    description: "Application to track school visits, emails, and recruitment progress, providing insights on students and schools reached. Integrated MySQL for backend data management.",
    technologies: ["TypeScript", "React Native", "Node.js", "Expo Router", "MySQL"],
    url: "https://github.com/usharabkhan/shad_recruitment",
    demoUrl: "",
    bullets: [
      "Cross platform mobile application with Shad's theme",
      "Dashboard to track and analyze recruitment progress",
      "Track activity with schools & teachers",
      "View and update visits' information",
    ],
    image: Shad_Recruitment_Image,
    logo: "https://www.shad.ca/wp-content/uploads/2023/08/Logo-footer.png",
    logoName: "Shad Canada",
    progress: "November 2024",
    type: ["Mobile", "Data"]
  },
  {
    title: "Membership Management System",
    description: "A JavaFX desktop application for the Pakistani Students' Society to manage memberships and event registrations, featuring a dashboard and member status cross-checking with SQLite integration.",
    technologies: ["Java", "JavaFX", "SQLite"],
    url: "https://github.com/usharabkhan/pss_mms",
    demoUrl: "n",
    bullets: [
      "User-centered solution and design for the Internal Affairs team",
      "Dashboard with key member statistics",
      "Event registration and attendance tracking",
      "Efficient member management using SQLite database",
      "Import data from Excel"
    ],
    image: PSS_mms,
    logo: PSS_Logo,
    logoName: "Pakistani Students' Society",
    progress: "October 2024",
    type: ["Desktop", "Data"]
  },
];
