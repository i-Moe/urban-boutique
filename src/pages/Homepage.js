// components/Homepage.js
import React from 'react';
import Hero from '../sections/Hero';      
import About from '../sections/About';    
import Rooms from '../sections/Rooms';   
import Gallery from '../sections/Gallery'; 
import Blog from '../sections/BlogSection';
import Reviews from '../sections/Reviews';
import Contact from '../sections/Contact';     

const Homepage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Reviews />      
      <Gallery />  
      <Blog />    
      <Contact />
    </main>
  );
};

export default Homepage;