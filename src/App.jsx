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
    <Router>
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
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<div className="container mx-auto px-8"><Home /></div>} />
          <Route path="/about" element={<About fullPage />} /> {/* Full-width About */}
          <Route path="/services" element={<div className="container mx-auto px-8"><Services /></div>} />
          <Route path="/process" element={<div className="container mx-auto px-8"><Process /></div>} />
          <Route path="/gallery" element={<div className="container mx-auto px-8"><Gallery /></div>} />
          <Route path="/contact" element={<div className="container mx-auto px-8"><Contact /></div>} />
        </Routes>

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
