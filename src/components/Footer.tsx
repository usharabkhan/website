import { FaHandPointUp } from "react-icons/fa";
import { Text } from "@radix-ui/themes";
import { baseUrl, OtherLogos, ToolkitImages } from "../data/data";
import { Code2 } from "lucide-react";

const techStack = [
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Tailwind CSS" },
  { name: "Git" },
  { name: "GSAP" },
];

export default function Footer(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-text w-full h-fit gap-5 bg-gradient-to-t from-accent to-background border-t border-borderColor mt-10">
      <div className="flex items-center gap-2">
        <Text weight="regular" size="2" align="center" className="text-regular">
          <Code2 size={20} className="inline-block mr-1 text-primary" />
          {" with"}
        </Text>
        <FaHandPointUp className="text-yellow-400 animate-bounce" />
      </div>
      <div className="flex flex-row gap-5 py-2">
        {techStack.map((tech, idx) => (
          <div key={tech.name} className="group relative">
            <img
              src={
                ToolkitImages[tech.name] ? baseUrl + ToolkitImages[tech.name] : OtherLogos[tech.name]
              }
              alt={tech.name}
              title={tech.name}
              className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              style={{ filter: "drop-shadow(0 2px 4px rgba(79, 156, 237, 0.2))" }}
            />
          </div>
        ))}
      </div>
      <Text weight="light" size="2" align="center" className="text-regular/80">
        © 2025 Usharab Khan. All rights reserved.
      </Text>
    </div>
  );
}
