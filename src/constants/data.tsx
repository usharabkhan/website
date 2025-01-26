import PSS_mms from "../assets/screenshots/pss_mms.png"
import Shad_Recruitment_Image from "../assets/screenshots/shad_recruitment.jpg"
import ucalgary_social_media from "../assets/screenshots/ucalgary_social_media.png"
import portfolio_website from "../assets/screenshots/portfolio_website.png"
import PSS_Logo from "../assets/logos/pss.jpg"

export const bio = "I am a curious individual with experience in Software and Fullstack Development, and particular interest in Cloud Computing as I actively pursue certifications in the field. Having worked and performed well in teams related to academics, extracurriculars, and work, I have proven to be a valuable team player who brings in the positive energy and the necessary skills.\n"+
"\nAlong with 3 years of experience in Object Oriented Programming using Java, I have experience in Mobile and Web development using React.js, React Native, and TypeScript. I have also worked with relational databases like MySQL, SQLite, and PostgreSQL.\n"


export const roles = ["Software Engineer", "Fullstack Developer", "Cloud Developer"]
export const projects = [
    {
        title: "Portfolio Website ",
        description: "A website to share my experience, skills, and projects.",
        technologies: ["TypeScript", "React.js", "Tailwind CSS", "Git"],
        url: "https://github.com/usharabkhan/website",
        demoUrl: "",
        bullets: [
            "Elegant styling using a professional color palette",
            "Responsive design for all devices",
            "Animation libraries for smooth transitions",
        ],
        image: portfolio_website,
        logo: "",
        progress: "In Progress"
    },
    {
        title: "Social Media Interface",
        description: "A social media platform for students to connect and share experiences. (Course Project)",
        technologies: ["TypeScript", "React.js", "Tailwind CSS"],
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
        description: "A mobile application to track summer program recruitment efforts.",
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
        description: "A desktop application to streamline memberships and event registrations.",
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

export const toolkit = [
    ["React.js", "React Native", "HTML", "CSS", "JavaScript", "TypeScript", "WordPress"],
    ["Java", "Python", "REST API", "MySQL", "SQLite", "PostgreSQL", "Node.js", "Express.js"],
    ["JavaFX", "Pandas", "PySpark", "GSAP", "Django", "Tailwind CSS"],
    ["Azure", "Figma", "Vite", "Git", "VSCode", "IntelliJ", "Eclipse"],
]

export const baseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/"
export const ToolkitImages: Record<string, string> = {
    // BACKEND
    "Java" : "java/java-original.svg",
    "Python" : "python/python-original.svg",
    "MySQL" : "mysql/mysql-original.svg",
    "SQLite" : "sqlite/sqlite-original.svg",
    "PostgreSQL" : "postgresql/postgresql-original.svg",
    "Node.js" : "nodejs/nodejs-original.svg",
    "Express.js" : "express/express-original.svg",
    // FRONTEND
    "HTML" : "html5/html5-original.svg",
    "CSS" : "css3/css3-original.svg",
    "JavaScript" : "javascript/javascript-original.svg",
    "TypeScript" : "typescript/typescript-original.svg",
    "WordPress" : "wordpress/wordpress-plain.svg",
    "JavaFX" : "java/java-original.svg",
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