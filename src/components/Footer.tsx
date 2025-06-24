import { FaHandPointUp } from "react-icons/fa";
import { Text } from "@radix-ui/themes";
import { baseUrl, OtherLogos, ToolkitImages } from "../constants/data";

const techStack = [
    { name: "TypeScript"},
    { name: "React.js"},
    { name: "Tailwind CSS"},
    { name: "Git"},
    { name: "GSAP"}
];

export default function Footer(): JSX.Element{
    return(
        <div className="flex flex-col items-center justify-center p-5 text-regular w-full h-fit gap-3" >
            <div className="flex items-center gap-2">
                <Text weight="light" size="2" align="center">Elegantly developed using </Text>
                <FaHandPointUp className="text-yellow-500 animate-bounce"/>
            </div>
            <div className="flex flex-row gap-4 py-2">
                {techStack.map((tech, idx) => (
                    <img
                        key={tech.name}
                        src={ToolkitImages[tech.name] ? (baseUrl + ToolkitImages[tech.name]) : OtherLogos[tech.name]}
                        alt={tech.name}
                        title={tech.name}
                        className="w-7 h-7 grayscale hover:grayscale-0 transition duration-200"
                        style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.08))" }}
                    />
                ))}
            </div>
            <Text weight="light" size="2" align="center">© 2025 Usharab Khan. All rights reserved.</Text>
        </div>
    )
}