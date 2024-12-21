import JavaLogo from "../assets/logos/Java.webp";
import TypeScriptLogo from "../assets/logos/Typescript.png";
import ReactLogo from "../assets/logos/React.png";
import ReactNativeLogo from "../assets/logos/ReactNative.svg";
import TailwindLogo from "../assets/logos/Tailwind.svg";
import MySQLLogo from "../assets/logos/Mysql.svg";
import SQLiteLogo from "../assets/logos/SQLite.png";
import PSS_MSS_Image from "../assets/screenshots/pss_mss.png"
import Shad_Recruitment_Image from "../assets/screenshots/shad_recruitment.png"

export const projects = [
    {
        title: "Portfolio Website ",
        description: "A website to share my experience, skills, and projects.",
        technologies: ["TypeScript", "React.js", "Tailwind CSS"],
        url: "https://github.com/usharabkhan/website",
        demoUrl: "",
        bullets: [
            "Elegant styling and animations",
            "Conditional rendering of elements",
        ],
        image: "https://media.istockphoto.com/id/844229938/vector/system-software-update-data-update-or-synchronize-with-progress-bar-on-the-screen-illustration.jpg?s=612x612&w=0&k=20&c=1pgTrigg0iit_IDj_ZMaPB5HjbX6qQVh9w4yKAjIe6o=",
        progress: "In Progress"
    },
    {
        title: "Shad Recruitment Tracker Application ",
        description: "A mobile application developed for Shad Canada to track recruitment efforts"+
                        " in the city of Calgary. Spreading the word about the summer program to Canadian youth.",
        technologies: ["TypeScript", "React Native", "Expo Router", "MySQL"],
        url: "https://github.com/usharabkhan/shad_recruitment",
        demoUrl: "",
        bullets: [
            "Dashboard to display summary",
            "Track activity with schools & teachers",
            "View and update visits' information",
        ],
        image: Shad_Recruitment_Image,
        progress: "November 2024"
    },
    {
        title: "PSS Membership Management System ",
        description: "A desktop application for Pakistani Students' Society at the University of Calgary"+
                    " to streamline memberships and event registrations.",
        technologies: ["Java", "JavaFX", "SQLite"],
        url: "https://github.com/usharabkhan/pss_mms",
        demoUrl: "n",
        bullets: [
            "Dashboard with key member statistics",
            "world",
        ],
        image: PSS_MSS_Image,
        progress: "October 2024",
    },
]

export const toolkit = [
    ["React.js", "React Native", "HTML", "CSS", "JavaScript", "TypeScript", "WordPress"],
    ["Java", "Python", "REST API", "MySQL", "SQLite", "PostgreSQL", "Node.js", "Express.js"],
    ["JavaFX", "Pandas", "Django", "Tailwind CSS", "Vite", "Git"],
]

export const TechnologyImages: Record<string, string> = {
    "Java" : JavaLogo,
    "JavaFX" : JavaLogo,
    "MySQL" : MySQLLogo,
    "TypeScript" : TypeScriptLogo,
    "React" : ReactLogo,
    "React Native" : ReactNativeLogo,
    "Tailwind" : TailwindLogo,
    "SQLite" : SQLiteLogo
}
export const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"
export const ToolkitImages: Record<string, string> = {
    "Java" : "java/java-original.svg",
    "Python" : "python/python-original.svg",
    // "REST API" : "",
    "MySQL" : "mysql/mysql-original.svg",
    "SQLite" : "sqlite/sqlite-original.svg",
    "PostgreSQL" : "postgresql/postgresql-original.svg",
    "Node.js" : "nodejs/nodejs-original.svg",
    "Express.js" : "express/express-original.svg",
    "React.js" : "react/react-original.svg",
    "React Native" : "react/react-original.svg",
    "HTML" : "html5/html5-original.svg",
    "CSS" : "css3/css3-original.svg",
    "JavaScript" : "javascript/javascript-original.svg",
    "TypeScript" : "typescript/typescript-original.svg",
    "WordPress" : "wordpress/wordpress-plain.svg",
    "JavaFX" : "java/java-original.svg",
    "Pandas" : "pandas/pandas-original.svg",
    "Django" : "django/django-plain.svg",
    "Tailwind CSS" : "tailwindcss/tailwindcss-original.svg",
    "Vite" : "vitejs/vitejs-original.svg",
    "Git" : "git/git-original.svg",
}