"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import { Flex } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import Button from "../common/button";
import { Link } from "react-router-dom";

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
    <section id="projects-section" className="">
      <div
        id="projects"
        className="flex flex-col max-w-7xl mx-auto p-5 justify-center items-center "
      >
        <Heading>Featured Projects</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <Button customStyle="mt-4" href="/projects">View All Projects</Button>
      </div>
    </section>
  );
}
