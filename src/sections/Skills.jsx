import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData.js';
import SectionHeading from '../components/SectionHeading.jsx';
const faces = [
  { label: 'C#', detail: 'DEVELOPMENT', cls: 'front' },
  { label: 'Python', detail: 'AUTOMATION', cls: 'back' },
  { label: 'JavaScript', detail: 'INTERACTIVITY', cls: 'right' },
  { label: 'SQL', detail: 'DATABASES', cls: 'left' },
  { label: 'React', detail: 'INTERFACES', cls: 'top' },
  { label: 'ASP.NET Core', detail: 'WEB APIS', cls: 'bottom' },
];
export default function Skills() { return <section className="skills-section section-pad" id="skills"><div className="section-shell"><div className="skills-head"><SectionHeading eyebrow="TECH STACK" title={<>My <span>toolkit</span></>}>A practical technology stack for building interfaces, services, database integrations, and reliable applications.</SectionHeading></div><div className="skills-layout"><motion.div className="cube-stage" initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}><div className="cube-perspective"><div className="tech-cube">{faces.map(f=><div className={`cube-face ${f.cls}`} key={f.cls}><div className="cube-face-copy"><span>{f.label}</span><small>{f.detail}</small></div></div>)}</div></div></motion.div><div className="skills-panel">{personal.skillGroups.map((group)=><div className="skill-group" key={group.name}><div className="skill-group-head"><h3>{group.name}</h3></div><div className="skill-items">{group.items.map(item=><span className="skill-pill" key={item}><i/>{item}</span>)}</div></div>)}</div></div></div></section>; }
