"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects";
import { Flex } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

const categories = ["All", "Mobile", "Desktop", "Data", "Frontend", "Fullstack"];

export default function ProjectSection() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (projectsRef.current) {
      gsap.to(projectsRef.current, {
        maxHeight: showAll ? projectsRef.current.scrollHeight : 0,
        opacity: showAll ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [showAll]);

  return (
    <section>
      <div
        id="projects"
        className="flex flex-col max-w-7xl mx-auto p-5 sm:p-10 justify-center lg:justify-start"
      >
        <Heading>Projects</Heading>

        <Tabs defaultValue="All" className="w-full max-w-[350px] md:max-w-[750px]">
          <TabsList>
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                onClick={() => {
                  console.log("triggered");
                  setShowAll(false);
                }}
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => {
            // Filter logic: show all OR type array contains the selected category
            const filteredProjects =
              cat === "All" ? projects : projects.filter((p) => p.type.includes(cat));

            return (
              <TabsContent key={cat} value={cat}>
                {/* <Flex direction="column" align="start" gap="6" className="mt-5"> */}
                <div className="grid grid-cols-1 md:grid-cols-3">
                  {/* {filteredProjects.length > 0 && <ProjectCard data={filteredProjects[0]} />} */}

                  <Flex
                    ref={projectsRef}
                    direction="column"
                    gap="6"
                    overflow="hidden"
                    maxHeight="0"
                    className="w-full"
                  >
                    {filteredProjects.slice(1).map((project, idx) => (
                      <ProjectCard data={project} key={idx} />
                    ))}
                  </Flex>

                  {/* {filteredProjects.length > 1 && (
                    <button
                      className="flex items-center justify-center w-full py-3 px-6 text-sm text-subHeading bg-container shadow hover:opacity-80 focus:outline-none focus:ring-1 focus:ring-borderColor transition-transform duration-300"
                      onClick={() => setShowAll((prev) => !prev)}
                    >
                      <span>{showAll ? "Show Less" : "Show More"}</span>
                      <ChevronDown
                        className={`ml-2 transform transition-transform duration-300 ${
                          showAll ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )} */}
                  {/* </Flex> */}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
