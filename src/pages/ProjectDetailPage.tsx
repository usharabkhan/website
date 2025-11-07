import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Heading, SubHeading } from '../components/common/heading';
import TechnologyPill from '../components/projects/TechnologyPill';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || '0');
  const project = projects[projectIndex];

  useEffect(() => {
    if (!project) {
      navigate('/projects');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 p-5 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-subHeading hover:text-heading transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {project.logo && (
              <img src={project.logo} alt={project.logoName} className="w-12 h-12 rounded-lg" />
            )}
            <div>
              <Heading>{project.title}</Heading>
              <SubHeading>{project.progress}</SubHeading>
            </div>
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Project Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-heading mb-4">About</h3>
          <p className="text-subHeading text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-heading mb-4">Key Features</h3>
          <ul className="space-y-3">
            {project.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-heading mt-1">•</span>
                <span className="text-subHeading">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-heading mb-4">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <TechnologyPill key={index} text={tech} />
            ))}
          </div>
        </div>

        {/* Project Type */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-heading mb-4">Project Type</h3>
          <div className="flex flex-wrap gap-2">
            {project.type.map((type, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-regular bg-opacity-20 text-heading rounded-full text-sm"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-8">
          {project.url && (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-heading text-background rounded-lg hover:opacity-80 transition-opacity"
            >
              <Github size={20} />
              View Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-heading text-heading rounded-lg hover:bg-heading hover:text-background transition-colors"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
          )}
        </div>

        {/* Navigation to other projects */}
        <div className="border-t border-regular border-opacity-30 pt-8">
          <div className="flex justify-between items-center">
            {projectIndex > 0 && (
              <Link 
                to={`/projects/${projectIndex - 1}`}
                className="text-subHeading hover:text-heading transition-colors"
              >
                ← Previous Project
              </Link>
            )}
            {projectIndex < projects.length - 1 && (
              <Link 
                to={`/projects/${projectIndex + 1}`}
                className="text-subHeading hover:text-heading transition-colors ml-auto"
              >
                Next Project →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}