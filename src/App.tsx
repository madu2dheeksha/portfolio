import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Contributions from './sections/Contributions';
import LearningOutcomes from './sections/LearningOutcomes';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Contributions />
        <LearningOutcomes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
