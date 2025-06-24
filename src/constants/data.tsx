import PSS_mms from "../assets/screenshots/pss_mms.png"
import Shad_Recruitment_Image from "../assets/screenshots/shad_recruitment.jpg"
import ucalgary_social_media from "../assets/screenshots/ucalgary_social_media.png"
import portfolio_website from "../assets/screenshots/portfolio_website.png"
import PSS_Logo from "../assets/logos/pss.jpg"
import MSA_Logo from "../assets/logos/msa-logo.jpeg"
import AASEE_Logo from "../assets/logos/aasee.jpg"

export const bio = "I'm a Full-Stack Developer with a passion for Cloud Computing and a strong background in Java, React.js, React Native, TypeScript, and Tailwind CSS. With experience in both relational and non-relational databases, I build scalable and efficient applications."+

"\n\nBeyond coding, I thrive in team environments, bringing not just technical expertise but also a positive and collaborative mindset. Check out my projects below, or feel free to reach out!"


export const roles = ["Software Engineer", "Fullstack Developer", "Cloud Developer"]

export const projects = [
    // {
    //     title: "Portfolio Website ",
    //     description: "A website to highlight my experience, skills, and projects, featuring an interactive user interface with smooth animations.",
    //     technologies: ["TypeScript", "React.js", "Tailwind CSS", "Git", "GSAP"],
    //     url: "https://github.com/usharabkhan/website",
    //     demoUrl: "",
    //     bullets: [
    //         "Elegant styling using a professional color palette",
    //         "Responsive design for all devices",
    //         "Animation libraries for smooth transitions",
    //     ],
    //     image: portfolio_website,
    //     logo: "",
    //     progress: "January 2025"
    // },
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
        progress: "November 2024"
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
    },
]

export const contributions = [
    {
        logo: MSA_Logo,
        title: "Muslim Students Association",
        role: "Fullstack Web Developer",
        date: "Dec 2024 - Present",
        description: "Redesigning and implementing features for the club's website, focusing on enhancing functionality and user experience.",
        technologies: ["NextJS", "MongoDB", "Tailwind CSS"],
        link: ""
    },
    {
        logo: AASEE_Logo,
        title: "Association for the Advancement of Science & Engineering",
        role: "Web Developer",
        date: "Nov 2024 - Present",
        description: "Maintaining and updating a website that showcases STEM workshops for youth, allowing school teachers to view past work and donors to make contributions.",
        technologies: ["WordPress", "PHP", "HTML", "CSS" ],
        link: "https://aasee.ca"
    },
]

export const toolkit = [
    {
        "HTML": "4 years",
        "CSS": "4 years",
        "JavaScript": "2 years",
        "React.js": "2 years",
        "TypeScript": "1 year",
        "React Native": "1 year",
        "WordPress": "< 1 year",
        "PHP": "< 1 year",
        "NextJS": "< 1 year"
    },
    {
        "Java": "4 years",
        "SQLite": "4 years",
        "Python": "2 years",
        "REST API": "2 years",
        "MySQL": "2 years",
        "PostgreSQL": "1 year",
        "MongoDB": "< 1 year",
        "Node.js": "< 1 year",
        "Express.js": "< 1 year"
    },
    {
        "JavaFX": "3 years",
        "Django": "1 year",
        "GSAP": "< 1 year",
        "Pandas": "< 1 year",
        "PySpark": "< 1 year",
        "Tailwind CSS": "< 1 year"
    },
    {
        "VSCode": "4 years",
        "IntelliJ": "4 years",
        "Git": "4 years",
        "Eclipse": "3 years",
        "Azure": "1 year",
        "Figma": "< 1 year",
        "Vite": "< 1 year",
    }
]

export const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"

export const ToolkitImages: Record<string, string> = {
    // BACKEND
    "Java" : "java/java-original.svg",
    "Python" : "python/python-original.svg",
    "MySQL" : "mysql/mysql-original.svg",
    "SQLite" : "sqlite/sqlite-original.svg",
    "PostgreSQL" : "postgresql/postgresql-original.svg",
    "MongoDB" : "mongodb/mongodb-original.svg",
    "Node.js" : "nodejs/nodejs-original.svg",
    "Express.js" : "express/express-original.svg",
    // FRONTEND
    "HTML" : "html5/html5-original.svg",
    "CSS" : "css3/css3-original.svg",
    "JavaScript" : "javascript/javascript-original.svg",
    "TypeScript" : "typescript/typescript-original.svg",
    "WordPress" : "wordpress/wordpress-plain.svg",
    "JavaFX" : "java/java-original.svg",
    "NextJS" : "nextjs/nextjs-original.svg",
    "PHP" : "php/php-original.svg",
    // TOOLS
    "Pandas" : "pandas/pandas-original.svg",
    "PySpark" : "apachespark/apachespark-original.svg",
    "Django" : "django/django-plain.svg",
    "Tailwind CSS" : "tailwindcss/tailwindcss-original.svg",
    // TOOLS
    "Figma" : "figma/figma-original.svg",
    "Azure" : "azure/azure-original.svg",
    "Vite" : "vitejs/vitejs-original.svg",
    "Git" : "git/git-original.svg",
    "VSCode" : "vscode/vscode-original.svg",
    "IntelliJ" : "intellij/intellij-original.svg",
    "Eclipse" : "eclipse/eclipse-original.svg",
}

export const OtherLogos: Record<string, string> = {
    "uni" : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/University_of_Calgary_coat_of_arms_without_motto_scroll.svg/640px-University_of_Calgary_coat_of_arms_without_motto_scroll.svg.png",
    "class": "https://static-00.iconduck.com/assets.00/graduation-cap-icon-2048x1341-x1cubwfl.png",
    "compsci" : "https://cdn-icons-png.flaticon.com/512/6840/6840478.png",
    "datasci" : "https://cdn-icons-png.flaticon.com/512/2029/2029234.png",
    "microsoft" : "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "React.js" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "React Native" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "REST API" : "https://cdn-icons-png.flaticon.com/512/8681/8681370.png",
    "GSAP" : "https://i.vimeocdn.com/portrait/34768143_640x640?sig=f177f398fbd6f943578b3368c2fc677a1cafac361651c4b8c693f228a59fc819&v=1",
}