import ProjectCard from "./ProjectCard";
import { Flex, Text } from "@radix-ui/themes";
import { projects } from "../../constants/data";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { Title } from "../common/title";

function ProjectSection() {
  const projectsRef = useRef<HTMLDivElement>(null); // Ref for the collapsible content
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (projectsRef.current) {
      if (showAll) {
        // Expand animation
        gsap.to(projectsRef.current, {
          maxHeight: projectsRef.current.scrollHeight,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        // Collapse animation
        gsap.to(projectsRef.current, {
          maxHeight: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    }
  }, [showAll]);

  return (
    <div id="projects" className="flex flex-col items-center lg:items-start justify-center my-2 min-h-fit p-5 sm:p-10">
      {/* Title */}
      <Title>Projects</Title>
      {/* Project Cards */}
      <Flex direction="column" align={{ initial: "center", lg: "start" }} gap="4" className="h-full w-full">
        {/* Always show the first ProjectCard */}
        <ProjectCard data={projects[0]} key={0} />

        {/* Render the remaining ProjectCards conditionally */}
        <Flex
          ref={projectsRef}
          direction="column"
          gap="4"
          overflow="hidden"
          maxHeight="0"
          className="w-full"
        >
          {projects.slice(1).map((project, index) => (
            <ProjectCard
              data={project}
              key={index + 1}
            />
          ))}
        </Flex>

        {/* Show All / Show Less Button */}
        <button
          className="flex items-center justify-center w-full py-3 px-6 text-sm font-medium text-white bg-container rounded-lg shadow hover:opacity-80 focus:outline-none focus:ring focus:ring-indigo-300 transition-transform duration-300"
          onClick={() => setShowAll((prev) => !prev)}
        >
          <span>{showAll ? "Show Less" : "Show More"}</span>
          <ChevronDown
            className={`ml-2 transform transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>

      </Flex>
    </div>
  );
}

export default ProjectSection;
