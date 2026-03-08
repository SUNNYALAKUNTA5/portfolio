import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="preloader-content">
          <div className="preloader-logo">
            <span className="preloader-text">S</span>
          </div>
          <div className="preloader-progress">
            <div className="progress-bar"></div>
          </div>
          <p className="preloader-text-small">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Preloader */}
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default App;
