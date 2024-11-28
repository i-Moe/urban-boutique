import React from "react";
import roomImage from "../assets/images/room1.jpg";
import HalfMoonDivider from "../assets/something/half-moon.svg";
import FadeIn from "../components/FadeIn";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${roomImage})`, // Replace with your hotel's image URL
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10 text-center sm:text-left text-white">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between">
          <div className="sm:w-3/5 mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to <br />
              <span className="text-vitamin">Urban Boutique Hotel</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed sm:pl-4">
              Where luxury meets comfort. Discover your perfect stay in the
              heart of the city with unmatched hospitality, exceptional
              amenities, and an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center mt-8 gap-4">
              <a
                href="#rooms"
                className="bg-vitamin text-white text-lg border border-vitamin px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-vitamin transition duration-300"
              >
                Explore Our Rooms
              </a>
              <a
                href="#contact"
                className="bg-transparent text-white text-lg border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-vitamin transition duration-300 sm:ml-4"
              >
                Contact Us
              </a>
            </div>
          </div>
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
