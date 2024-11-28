// components/Homepage.js
import React from 'react';
import Hero from '../sections/Hero';      // Import your Hero section component
import About from '../sections/About';    // Import your About section component
import Rooms from '../sections/Rooms';   // Import your Services section component
import Gallery from '../sections/Gallery'; // Import your Portfolio section component
import Contact from '../sections/Contact';     // Import your Contact section component

const Homepage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Contact />
    </main>
  );
};

export default Homepage;