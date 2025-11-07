import { projects } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import { Link } from "react-router-dom";
import { Heading, SubHeading } from "../components/common/heading";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen p-5 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Heading>All Projects</Heading>
          <SubHeading>Explore my complete portfolio of projects</SubHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${index}`}>
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
