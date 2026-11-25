import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Education() {
  return (
    <section className="education-section section-pad" id="education">
      <div className="section-shell">
        <div className="education-head">
          <SectionHeading eyebrow="EDUCATION" title={<>Academic<br /><span>background</span></>}>
            Formal study in computer applications and mathematics.
          </SectionHeading>
        </div>
        <div className="education-grid">
          {personal.education.map((item, index) => (
            <motion.article className="education-card" key={item.short} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
              <div className="education-card-top"><span className="education-badge">{item.short}</span><span className="education-years">{item.years}</span></div>
              <div><p className="education-level">{index === 0 ? 'POSTGRADUATE' : 'UNDERGRADUATE'}</p><h3>{item.degree}</h3><p className="education-school">{item.institution}</p></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
