import ProjectCard from "./ProjectCard";
import { Flex } from "@radix-ui/themes";
import { projects } from "../../constants/data";
import { useState } from "react";
import MyHeading from "../common/heading";

function ProjectSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  // Toggle the active project
  const handleToggle = (index: number) => {
    setActiveProjectIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="projects" className="flex flex-col items-center justify-center my-2 min-h-fit p-5 sm:p-10 border-2">
      <MyHeading type="h2" title="My Projects" customStyle="text-textPrimary self-center mb-3" />
      <div className="flex flex-col items-center gap-x-3 h-[80%] w-full">
        {/* Project Cards */}
        <Flex direction="column" align="center" className="h-full w-full">
          {projects.map((project, index) => (
            <ProjectCard
              data={project}
              key={index}
              isOpen={activeProjectIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </Flex>
      </div>
    </div>
  );
}

export default ProjectSection;
