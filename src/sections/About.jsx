import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, FunctionSquare, Layers2 } from 'lucide-react';
import { personal } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function About() {
  return (
    <section className="section-shell about section-pad" id="about">
      <div className="about-card-wrap">
        <motion.div className="portrait-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6 }}>
          <div className="portrait-art"><img src="/profile-photo-navy.png" alt="Karthikeyan K" /></div>
          <div className="portrait-caption"><div><h3>Karthikeyan K</h3><p>Full Stack Developer</p></div></div>
        </motion.div>
      </div>
      <motion.div className="about-content" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .6, delay: .12 }}>
        <SectionHeading eyebrow="ABOUT / THE APPROACH" title={<>Ideas into<br /><span>useful software</span></>} />
        <p className="about-description">{personal.about}</p>
        <div className="approach-list">
          <div><span className="approach-icon"><Code2 size={18} /></span><span>Backend engineering</span></div>
          <div><span className="approach-icon"><Layers2 size={18} /></span><span>Full-stack development</span></div>
          <div><span className="approach-icon"><FunctionSquare size={18} /></span><span>Problem solving</span></div>
        </div>
        <a className="text-link" href={personal.linkedin} target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={15} /></a>
      </motion.div>
    </section>
  );
}
