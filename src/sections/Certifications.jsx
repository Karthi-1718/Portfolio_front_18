import { ArrowUpRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';

export default function Certifications() {
  return (
    <section className="certifications-section section-pad" id="certifications">
      <div className="section-shell">
        <SectionHeading eyebrow="CERTIFICATIONS" title={<>Professional<br /><span>learning</span></>}>
          Certificates in data analytics, SQL Server, and Python development.
        </SectionHeading>
        <div className="certifications-grid">
          {personal.certifications.map((certificate, index) => (
            <motion.article className={`certification-card ${certificate.credentialUrl ? 'has-credential' : ''}`} key={certificate.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
              <div className="certification-icon"><Award size={20} /></div>
              <p className="certification-provider">{certificate.provider}</p>
              <h3>{certificate.name}</h3>
              <span className="certification-type">PROFESSIONAL CERTIFICATE</span>
              {certificate.credentialUrl && <a className="certification-link" href={certificate.credentialUrl} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={14} /></a>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
