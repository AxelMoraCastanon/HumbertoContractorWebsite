import React from 'react';
import About from './About';
import Services from './Services';
import Process from './Process';
import Gallery from './Gallery';

const Home = ({ fullPage }) => {
  return (
    <div className={`${fullPage ? 'min-h-screen' : ''} flex flex-col items-center justify-center`}>
      {/* Main Home Page Content */}
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
