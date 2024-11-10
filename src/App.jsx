import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WebsiteBackground from "./assets/WebsiteBackground.jpg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { FaArrowUp } from 'react-icons/fa';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router
      basename="/HumbertoContractorWebsite"
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <div
        className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
        style={{
          backgroundImage: `url(${WebsiteBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="container mx-auto px-8">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home fullPage />} />
            <Route path="/about" element={<About fullPage />} />
            <Route path="/services" element={<Services fullPage />} />
            <Route path="/process" element={<Process fullPage />} />
            <Route path="/gallery" element={<Gallery fullPage />} />
            <Route path="/contact" element={<Contact fullPage />} />
          </Routes>
        </div>

        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-transparent border border-white text-white shadow-lg hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </Router>
  );
};

export default App;
