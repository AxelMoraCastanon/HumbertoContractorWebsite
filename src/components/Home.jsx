import React from 'react';
import About from './About';
import Services from './Services';
import Process from './Process';
import Gallery from './Gallery';

const Home = () => {
  return (
    <>
      {/* About Section, covering the full screen */}
      <section id="about" className="w-screen relative left-1/2 -translate-x-1/2">
        <About fullPage={true} />
      </section>

      {/* Other sections within a flex container */}
      <div className="flex flex-col items-center justify-center">
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
    </>
  );
};

export default Home;
