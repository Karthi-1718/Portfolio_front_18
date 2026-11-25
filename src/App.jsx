import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Network from './components/Network.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Education from './sections/Education.jsx';
import Certifications from './sections/Certifications.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Network />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
