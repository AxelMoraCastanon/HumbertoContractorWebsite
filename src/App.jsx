import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WebsiteBackground from "./assets/WebsiteBackground.jpg";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div
        className="w-full h-full min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"
        style={{
          backgroundImage: `url(${WebsiteBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <HamburgerMenu /> {/* New Hamburger Menu Component */}
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
      </div>
    </Router>
  );
};

export default App;
