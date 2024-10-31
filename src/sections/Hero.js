import React from "react";
import CatImage from "../assets/images/cat_no_bg.png";
import HalfMoonDivider from "../assets/something/half-moon.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-mint min-h-[90vh] flex items-center justify-center">
        <div className="container-max-w-5xl flex flex-col sm:flex-row items-center sm:items-start justify-between text-center sm:text-left sm:px-10">
          <div className="pt-16 md:pl-16 sm:w-3/5 mb-0 sm:mb-8">
            <h1 className="text-cream text-stroke text-stroke-choco text-shadow-choco text-8xl lg:text-9xl font-bold mb-4" style={{ lineHeight: '0.1' }}>
              Hello, 
              <span className="text-4xl lg:text-5xl"><br />my friends! We are</span> 
              <br /><span className="text-5xl lg:text-7xl">The Lazy Cat!</span>
            </h1>
            <p className="text-cream text-xl sm:pl-5">
              Discover who we are,
              <br />our services, and more.
            </p>
            <div className="flex justify-center sm:justify-end sm:mr-8 mt-7 mb-5">
              <a
                href="#contact"
                className="bg-vitamin text-cream text-lg border border-vitamin px-6 py-3 rounded-full font-semibold hover:bg-cream hover:text-vitamin transition duration-300"
              >
                LET'S TALK!
              </a>
            </div>
          </div>
          <div className="sm:w-2/5">
            <img src={CatImage} alt="Cat" className="w-3/5 sm:w-full h-auto mx-auto rotate-3" />
          </div>
        </div>
      </section>

      <img
        src={HalfMoonDivider}
        alt="Half Moon divider"
        className="block w-full 
        
        
        relative mt-[-3px]
          h-[40px] sm:h-[60px] lg:h-[100px]"
      />

      {/* <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      /> */}
    </>
  );
};

export default Hero;
