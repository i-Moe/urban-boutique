// components/Homepage.js
import React from 'react';
import Hero from '../sections/Hero';      // Import your Hero section component
import About from '../sections/About';    // Import your About section component
import Services from '../sections/Services';   // Import your Services section component
import Clients from '../sections/Clients'; // Import your Portfolio section component
import Contact from '../sections/Contact';     // Import your Contact section component

const Homepage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
    </main>
  );
};

export default Homepage;