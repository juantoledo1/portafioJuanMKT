import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Simple intersection observer for fade-in animations on scroll could be added here
  // For now, we rely on standard layout and hover effects

  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-white font-sans selection:bg-brand-cyan/30 selection:text-brand-cyan">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Certifications />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;