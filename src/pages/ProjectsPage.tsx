import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import { Link } from "react-router-dom";
import { Heading, SubHeading } from "../components/common/heading";
import { Sparkles, Code2, Rocket } from "lucide-react";
import { useState } from "react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "Mobile", "Desktop", "Data", "Frontend", "Fullstack"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.type.includes(filter));

  return (
    <div className="min-h-screen p-5 pt-10 relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(79, 156, 237, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 156, 237, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-20">
            <Rocket className="w-16 h-16 text-primary" />
          </div>
          <Heading>All Projects</Heading>
          <SubHeading>Explore my complete portfolio of projects</SubHeading>
          
          {/* Decorative icons */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden xl:block">
            <Code2 className="w-10 h-10 text-primary/30" />
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden xl:block">
            <Sparkles className="w-10 h-10 text-secondary/30" />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-container border border-borderColor text-regular hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Count */}
        <div className="text-center mb-8">
          <p className="text-regular text-sm">
            Showing <span className="text-primary font-semibold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="transform transition-all duration-300">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Code2 className="w-16 h-16 text-regular/30 mx-auto mb-4" />
            <p className="text-regular text-lg">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}
