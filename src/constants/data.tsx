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
        title: "Shad Recruitment Tracker Application ",
        description: "A mobile application developed for Shad Canada to track recruitment efforts"+
                        " in the city of Calgary. Spreading the word about the summer program to Canadian youth.",
        technologies: ["TypeScript", "React Native", "Expo Router", "MySQL"],
        url: "https://github.com/usharabkhan/shad_recruitment",
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
        bullets: [
            "Dashboard with key member statistics",
            "world",
        ],
        image: PSS_MSS_Image,
        progress: "October 2024",
    },
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