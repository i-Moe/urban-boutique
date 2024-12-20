import React, { useEffect, useState } from "react";
import roomImageWebP_1920 from "../assets/images/hero1920w.webp";
import roomImageWebP_1200 from "../assets/images/hero1200w.webp";
import roomImageWebP_800 from "../assets/images/hero800w.webp";
import roomImageJPG_1920 from "../assets/images/hero1920w.jpg";
import roomImageJPG_1200 from "../assets/images/hero1200w.jpg";
import roomImageJPG_800 from "../assets/images/hero800w.jpg";
import FadeIn from "../components/FadeIn";

const Hero = () => {

  const [supportsWebP, setSupportsWebP] = useState(false);

  // Detect WebP support
  useEffect(() => {
    const testWebP = () => {
      const canvas = document.createElement("canvas");
      if (canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0) {
        setSupportsWebP(true);
      }
    };
    testWebP();
  }, []);

  // Set the background image based on format support
  const backgroundImage = supportsWebP
    ? `${roomImageWebP_1920}, ${roomImageWebP_1200}, ${roomImageWebP_800}`
    : `${roomImageJPG_1920}, ${roomImageJPG_1200}, ${roomImageJPG_800}`;



  // const [supportsWebP, setSupportsWebP] = useState(false);

  // useEffect(() => {
  //   const testWebP = () => {
  //     const canvas = document.createElement("canvas");
  //     if (canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0) {
  //       setSupportsWebP(true);
  //     }
  //   };
  //   testWebP();
  // }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center py-14"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      
      // style={{
      //   backgroundImage: `url(${supportsWebP ? roomImageWebP : roomImageJPG})`,
      // }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="container mx-auto px-4 relative z-10 text-center sm:text-left text-lightcream">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between">
          <FadeIn>
            <div className="sm:w-3/5 mb-8">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-urban">
                Welcome to <br />
                <span className="text-vitamin">Urban Boutique Hotel</span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed sm:pl-4 text-shadow-urban">
                Where luxury meets comfort. Discover your perfect stay in the
                heart of the city with unmatched hospitality, exceptional
                amenities, and an unforgettable experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center mt-8 gap-4">
                <a
                  href="#rooms"
                  className="bg-vitamin text-lightcream text-lg border border-vitamin px-6 py-3 rounded-full font-semibold hover:bg-lightcream hover:text-vitamin transition duration-300"
                >
                  Explore Our Rooms
                </a>
                <a
                  href="#contact"
                  className="bg-transparent text-lightcream text-lg border border-lightcream px-6 py-3 rounded-full font-semibold hover:bg-lightcream hover:text-vitamin transition duration-300 sm:ml-4"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
    </section>

    // <img
    //   src={HalfMoonDivider}
    //   alt="Half Moon divider"
    //   className="block w-full

    //   relative mt-[-3px]
    //     h-[40px] sm:h-[60px] lg:h-[100px]"
    // />

    /* <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      /> */
  );
};

export default Hero;
