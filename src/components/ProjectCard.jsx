import { ArrowUpRight, Code2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.accent}`}>
      <div className="project-visual">
        <img className="project-cover" src={project.image} alt="" loading="lazy" />
        <span className="project-number">{project.number}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-copy">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={18} /></span>
        </div>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
        </div>
        {project.githubUrl && <a className="project-source-link" href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 size={15} /> View GitHub code <ArrowUpRight size={14} /></a>}
      </div>
    </article>
  );
}
