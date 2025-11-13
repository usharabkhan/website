import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { Heading, SubHeading } from '../components/common/heading';
import TechnologyPill from '../components/projects/TechnologyPill';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
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
    <div className="min-h-screen pt-20 p-5 relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back button */}
        <Link 
          to="/website/projects" 
          className="inline-flex items-center gap-2 text-regular hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </Link>

        {/* Project Header Card */}
        <div className="bg-gradient-to-br from-container via-accent to-container rounded-2xl p-8 mb-10 border border-borderColor shadow-2xl relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          
          <div className="flex items-start gap-6 mb-6 relative z-10">
            {project.logo && (
              <div className="bg-subContainer p-3 rounded-xl border border-borderColor">
                <img src={project.logo} alt={project.logoName} className="w-16 h-16 rounded-lg" />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-3">
                {project.title}
              </h1>
              <div className="flex items-center gap-3">
                <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                  project.progress.includes('In Progress') 
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {project.progress}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
            <div className="bg-subContainer/50 p-4 rounded-xl border border-borderColor">
              <p className="text-regular/70 text-sm mb-1">Project Type</p>
              <p className="text-text font-medium">{project.type.join(', ')}</p>
            </div>
            <div className="bg-subContainer/50 p-4 rounded-xl border border-borderColor">
              <p className="text-regular/70 text-sm mb-1">Technologies</p>
              <p className="text-text font-medium">{project.technologies.length} Stack</p>
            </div>
            <div className="bg-subContainer/50 p-4 rounded-xl border border-borderColor">
              <p className="text-regular/70 text-sm mb-1">Features</p>
              <p className="text-text font-medium">{project.bullets.length} Key Features</p>
            </div>
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="mb-10 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full rounded-2xl shadow-2xl border border-borderColor relative z-10"
            />
          </div>
        )}

        {/* Project Description */}
        <div className="mb-10 bg-gradient-to-br from-container to-accent rounded-2xl p-8 border border-borderColor shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <Layers className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">About This Project</h3>
          </div>
          <p className="text-regular text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-10 bg-gradient-to-br from-container to-accent rounded-2xl p-8 border border-borderColor shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">Key Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.bullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-3 bg-subContainer/50 p-4 rounded-xl border border-borderColor hover:border-primary/50 transition-colors duration-300">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-regular">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies & Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Technologies */}
          <div className="bg-gradient-to-br from-container to-accent rounded-2xl p-8 border border-borderColor shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-5 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <TechnologyPill key={index} text={tech} />
              ))}
            </div>
          </div>

          {/* Project Type */}
          <div className="bg-gradient-to-br from-container to-accent rounded-2xl p-8 border border-borderColor shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-5 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Categories
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.type.map((type, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-subContainer border border-borderColor text-text rounded-full text-sm font-medium hover:border-primary/50 transition-colors duration-300"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.url && (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              <Github size={22} />
              View Source Code
            </a>
          )}
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-container border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              <ExternalLink size={22} />
              Live Demo
            </a>
          )}
        </div>

        {/* Navigation to other projects */}
        <div className="bg-gradient-to-r from-container via-accent to-container rounded-2xl p-6 border border-borderColor">
          <p className="text-regular text-sm mb-4 text-center">Explore More Projects</p>
          <div className="flex justify-between items-center gap-4">
            {projectIndex > 0 ? (
              <Link 
                to={`/website/projects/${projectIndex - 1}`}
                className="flex items-center gap-2 px-5 py-3 bg-subContainer border border-borderColor text-text rounded-xl font-medium hover:border-primary hover:text-primary transition-all duration-300 group"
              >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-regular">Previous</p>
                  <p className="text-sm">{projects[projectIndex - 1]?.title}</p>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {projectIndex < projects.length - 1 ? (
              <Link 
                to={`/website/projects/${projectIndex + 1}`}
                className="flex items-center gap-2 px-5 py-3 bg-subContainer border border-borderColor text-text rounded-xl font-medium hover:border-primary hover:text-primary transition-all duration-300 group ml-auto"
              >
                <div className="text-right">
                  <p className="text-xs text-regular">Next</p>
                  <p className="text-sm">{projects[projectIndex + 1]?.title}</p>
                </div>
                <ArrowLeft size={18} className="rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}