import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';

export default function Projects() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="section-shell">
        <div className="projects-header">
          <SectionHeading eyebrow="SELECTED WORK" title={<>Projects in<br /><span>motion</span></>}>
            Practical applications built around real problems, useful features, and reliable software.
          </SectionHeading>
        </div>
        <div className="timeline">
          {personal.projects.map((project, index) => (
            <motion.div className={`timeline-row row-${index + 1}`} key={project.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .6 }}>
              <div className="timeline-node"><span>{project.number}</span><i /></div>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
