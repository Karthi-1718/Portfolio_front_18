import { ArrowUpRight, MapPin } from 'lucide-react';
import { personal } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';
import ContactForm from '../components/ContactForm.jsx';

function GitHubMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 1.71 2.61 1.22 3.25.93.1-.73.39-1.22.71-1.5-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.7 10.7 0 0 1 5.57 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.09 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}

function LinkedInMark() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>;
}

export default function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-shell">
        <div className="contact-heading">
          <SectionHeading eyebrow="GET IN TOUCH" title={<>Let's work<br /><span>together</span></>}>
            If you’re developing an idea or exploring a collaboration, send a note. I’d be glad to hear about the work and the problem you’re solving.
          </SectionHeading>
        </div>
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-detail">
              <span className="contact-icon"><MapPin size={18} /></span>
              <div><small>BASED IN</small><p>{personal.location}</p></div>
            </div>
            {personal.github && (
              <a className="contact-detail" href={personal.github} target="_blank" rel="noreferrer">
                <span className="contact-icon"><GitHubMark /></span>
                <div><small>GITHUB</small><p>View my work <ArrowUpRight size={14} /></p></div>
              </a>
            )}
            <a className="contact-detail" href={personal.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-icon"><LinkedInMark /></span>
              <div><small>CONNECT ON LINKEDIN</small><p>Let's connect <ArrowUpRight size={14} /></p></div>
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
