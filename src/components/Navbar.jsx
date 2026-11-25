import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Education', 'education'], ['Certificates', 'certifications']];
export default function Navbar() {
  const [active, setActive] = useState('home'); const [open, setOpen] = useState(false);
  useEffect(() => {
    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-38% 0px -52% 0px' });
    sections.forEach(s => observer.observe(s)); return () => observer.disconnect();
  }, []);
  return <header className="nav-wrap"><nav className="nav-shell" aria-label="Main navigation"><a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">K</span><span className="brand-name">K<span className="brand-divider">|</span>KARTHIKEYAN</span></a><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><div className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</div><a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a></nav></header>;
}
