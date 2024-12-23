import PSS_MSS_Image from "../assets/screenshots/pss_mss.png"
import Shad_Recruitment_Image from "../assets/screenshots/shad_recruitment.png"
import ucalgary_social_media from "../assets/screenshots/ucalgary_social_media.png"
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
        logo: "",
        progress: "In Progress"
    },
    {
        title: "University of Calgary Social Media",
        description: "A social media platform for students at the University of Calgary to connect and share experiences.",
        technologies: ["TypeScript", "React.js", "Tailwind CSS"],
        url: "https://github.com/ManrajSingh6/CPSC481-Social-Media-Network",
        demoUrl: "https://manrajsingh6.github.io/CPSC481-Social-Media-Network/#/login",
        bullets: [],
        image: ucalgary_social_media,
        logo: "",
        progress: "December 2024", 
    },
    {
        title: "Recruitment Tracker Application",
        description: "A mobile application to track summer program recruitment efforts",
        technologies: ["TypeScript", "React Native", "Expo Router", "MySQL"],
        url: "https://github.com/usharabkhan/shad_recruitment",
        demoUrl: "",
        bullets: [
            "Dashboard to display summary",
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
            "Dashboard with key member statistics",
            "world",
        ],
        image: PSS_MSS_Image,
        logo: "",
        logoName: "Pakistani Students' Society",
        progress: "October 2024",
    },
]

export const toolkit = [
    ["React.js", "React Native", "HTML", "CSS", "JavaScript", "TypeScript", "WordPress"],
    ["Java", "Python", "REST API", "MySQL", "SQLite", "PostgreSQL", "Node.js", "Express.js"],
    ["JavaFX", "Pandas", "Django", "Tailwind CSS", "Vite", "Git", "VSCode", "IntelliJ", "Eclipse"],
]

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
}