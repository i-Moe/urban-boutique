import React from "react";
import balconyImage from "../assets/images/balcony.jpg";
import WavyDivider from "../assets/something/wavy-steps.svg";
import FadeIn from "../components/FadeIn";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-24 sm:pb-40 bg-cream relative z-[-100]"
      >
        <div className="container-max-w-5xl mt-14">
          <div className="flex flex-col md:flex-row items-center">
            {/* Balcony Image */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <FadeIn>
                <img
                  src={balconyImage} // Add your balcony image import
                  alt="Balcony view"
                  className="w-full h-auto rounded-md shadow-lg"
                />
              </FadeIn>
            </div>
            {/* About Hotel Text */}
            <div className="px-3 md:w-2/3 md:pl-8">
              <FadeIn>
                <h2 className="text-4xl font-bold text-mint mb-4">
                  Find Your Comfort Escape in Prishtina
                </h2>
              </FadeIn>
              <FadeIn>
                <p className="text-lg text-choco mb-4">
                  Experience the perfect blend of comfort and charm at our
                  boutique hotel in the heart of Prishtina. Whether you're here
                  for business or leisure, we offer a cozy, intimate atmosphere
                  designed to make you feel at home.
                </p>
                <p className="text-lg text-choco">
                  Unwind in our welcoming rooms, thoughtfully designed to offer
                  comfort and style. With personalized service and a focus on
                  making your stay memorable, we ensure every guest feels
                  special, from check-in to check-out.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      />

      {/* <img
        src={HalfMoonDivider}
        alt="Half Moon divider"
        className="block w-full relative 
          top-[-90px] sm:top-[-75px] lg:top-[-40px]
          h-[40px] sm:h-[60px] lg:h-[100px]"
      /> */}

      {/* <img
        src={HalfMoonDivider}
        alt="Half Moon divider"
        className="block w-full relative top-[-60px] mt-[-3px]
          h-[40px]       // Default height for small screens
          sm:h-[60px]    // Height for medium screens and up (md breakpoint)
          lg:h-[100px]    // Height for large screens and up (lg breakpoint)
        "
      /> */}
    </>
  );
};

export default About;
