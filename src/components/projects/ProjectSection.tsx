import ProjectCard from "./ProjectCard";
import { Flex, Text } from "@radix-ui/themes";
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
    <div id="projects" className="flex flex-col items-center lg:items-start justify-center my-2 min-h-fit p-5 sm:p-10">
      {/* <MyHeading type="h3" title="Projects" customStyle="text-textPrimary mb-3" /> */}
      <Text size="6" weight="bold" className="text-textPrimary mb-4">Projects</Text>
      {/* Project Cards */}
      <Flex direction="column" align={{initial: "center", lg: "start"}} gap="4" className="h-full w-full">
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
  );
}

export default ProjectSection;
