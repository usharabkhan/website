import { Technology } from "./type"
import JavaLogo from "../assets/logos/Java.webp";
import TypeScriptLogo from "../assets/logos/Typescript.png";
import ReactLogo from "../assets/logos/React.png";
import ReactNativeLogo from "../assets/logos/ReactNative.svg";
import TailwindLogo from "../assets/logos/Tailwind.svg";
import MySQLLogo from "../assets/logos/Mysql.svg";
import SQLiteLogo from "../assets/logos/SQLite.png";

export const projects = [
    {
        title: "Recruitment Tracker Application",
        description: "A mobile application developed for Shad Canada to track recruitment efforts"+
                        " in the city of Calgary. Spreading the word about the summer program to Canadian youth.",
        technologies: ["TypeScript", "React Native", "Expo Router", "MySQL"],
        url: "https://github.com/usharabkhan/shad_recruitment"
    },
    {
        title: "Membership Management System",
        description: "A desktop application for Pakistani Students' Society at the University of Calgary"+
                    " to streamline memberships and event registrations.",
        technologies: ["Java", "JavaFX", "SQLite"],
        url: "https://github.com/usharabkhan/pss_mms"
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