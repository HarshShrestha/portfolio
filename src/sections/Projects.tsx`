import React, { useState } from 'react';
import { ExternalLink, GitBranch, X } from 'lucide-react';
import { projects, Project } from '../data/profile';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { TiltCard } from '../components/motion/TiltCard';
import { Stagger } from '../components/motion/Stagger';
import { Reveal } from '../components/motion/Reveal';
import { Modal } from '../components/motion/Modal';

const ACCENT_MAP = {
  emerald: {
    gradient: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
    text: 'text-emerald-500/30',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/20',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/50',
  },
  violet: {
    gradient: 'from-violet-500/20 via-violet-400/10 to-transparent',
    text: 'text-violet-500/30',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/20',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/50',
  },
  amber: {
    gradient: 'from-amber-500/20 via-amber-400/10 to-transparent',
    text: 'text-amber-500/30',
    border: 'border-amber-500/20',
    glow: 'shadow-amber-500/20',
    accentColor: 'text-amber-400',
    borderColor: 'border-amber-500/50',
  },
};

const ProjectHeader: React.FC<{ project: Project }> = ({ project }) => {
  const accent = ACCENT_MAP[project.accent];

  return (
    <div className="relative h-40 w-full overflow-hidden bg-slate-900/50">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient}`} />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      <span className={`absolute -bottom-2 -right-4 text-6xl font-mono font-bold uppercase select-none pointer-events-none ${accent.text} opacity-40`}>
        {project.slug}
      </span>
      <div className={`absolute top-0 left-0 w-full h-px ${accent.border}`} />
      <div className={`absolute top-0 left-10 w-px h-full ${accent.border}`} />
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <Reveal direction="up">
      <TiltCard>
        <Card
          className="overflow-hidden flex flex-col h-full group cursor-pointer"
          onClick={onClick}
        >
          <ProjectHeader project={project} />
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <p className="text-muted text-sm mb-6 line-clamp-2">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech) => (
                <Tag key={tech} variant="muted">
                  {tech}
                </Tag>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border/50">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
                >
                  <GitBranch size={14} />
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </Card>
      </TiltCard>
    </Reveal>
  );
};

const ProjectDetailView: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  const accent = ACCENT_MAP[project.accent];

  return (
    <div className={`flex flex-col h-full max-h-[90vh] relative border-t-4 ${accent.borderColor}`}>
      <div className="p-6 overflow-y-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className={`text-3xl font-bold ${accent.accentColor} mb-2`}>
              {project.title}
            </h2>
            <p className="text-muted text-lg">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-border transition-colors text-muted hover:text-text"
          >
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h4 className="text-sm font-mono uppercase text-muted mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full bg-current ${accent.accentColor}`} />
                Key Highlights
              </h4>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-text/90">
                    <span className={`font-mono ${accent.accentColor}`}>&gt;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-mono uppercase text-muted mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Tag key={tech} variant="muted">{tech}</Tag>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-card border ${accent.borderColor} text-text text-sm font-mono hover:bg-accent/10 transition-colors`}
                >
                  <GitBranch size={16} />
                  GitHub Repo
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-card bg-accent text-black font-bold text-sm hover:opacity-90 transition-opacity`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="py-24 lg:py-32 container mx-auto px-6">
      <SectionHeading
        number="06"
        title="Projects"
        subtitle="A curated selection of my engineering work, from agentic AI to scalable backends."
      />

      <Stagger>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </Stagger>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <ProjectDetailView
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Modal>
    </section>
  );
};
