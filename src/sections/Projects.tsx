import React from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';
import { projects, Project } from '../data/profile';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Tag } from '../components/ui/Tag';
import { TiltCard } from '../components/motion/TiltCard';
import { Stagger } from '../components/motion/Stagger';
import { Reveal } from '../components/motion/Reveal';

const ACCENT_MAP = {
  emerald: {
    gradient: 'from-emerald-500/20 via-emerald-400/10 to-transparent',
    text: 'text-emerald-500/30',
    border: 'border-emerald-500/20',
  },
  violet: {
    gradient: 'from-violet-500/20 via-violet-400/10 to-transparent',
    text: 'text-violet-500/30',
    border: 'border-violet-500/20',
  },
  amber: {
    gradient: 'from-amber-500/20 via-amber-400/10 to-transparent',
    text: 'text-amber-500/30',
    border: 'border-amber-500/20',
  },
};

const ProjectHeader: React.FC<{ project: Project }> = ({ project }) => {
  const accent = ACCENT_MAP[project.accent];

  return (
    <div className="relative h-40 w-full overflow-hidden bg-slate-900/50">
      {/* Gradient Mesh */}
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient}`} />

      {/* Circuit Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-border) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Oversized Slug Text */}
      <span className={`absolute -bottom-2 -right-4 text-6xl font-mono font-bold uppercase select-none pointer-events-none ${accent.text} opacity-40`}>
        {project.slug}
      </span>

      {/* Decorative Circuit Line */}
      <div className={`absolute top-0 left-0 w-full h-px ${accent.border}`} />
      <div className={`absolute top-0 left-10 w-px h-full ${accent.border}`} />
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Reveal direction="up">
      <TiltCard>
        <Card className="overflow-hidden flex flex-col h-full group">
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

export const Projects: React.FC = () => {
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
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Stagger>
    </section>
  );
};
