"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import { Flex } from "@radix-ui/themes";
import { Heading } from "../common/heading";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronDown, Sparkles } from "lucide-react";
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
    <section id="projects-section" className="py-10 relative">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(79, 156, 237, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 156, 237, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div
        id="projects"
        className="flex flex-col max-w-7xl mx-auto p-5 justify-center items-center relative z-10"
      >
        <div className="relative">
          <Sparkles className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 text-primary/30 hidden md:block" />
          <Heading>Featured Projects</Heading>
          <Sparkles className="absolute -right-12 top-1/2 -translate-y-1/2 w-8 h-8 text-secondary/30 hidden md:block" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 w-full">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <Button customStyle="mt-8" href="/projects">View All Projects</Button>
      </div>
    </section>
  );
}
