import React from "react";
import profileImage from "../assets/images/us.png";
import WavyDivider from "../assets/something/wavy-steps.svg";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="pt-40 pb-24 sm:pb-40  bg-cream relative z-[-100] mt-[-120px]"
      >
        <div className="container-max-w-5xl mt-14">
          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image (Optional) */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img
                src={profileImage}
                alt="Profile"
                className="w-4/5 mx-auto h-auto rounded-full border-2 border-choco"
              />
            </div>
            {/* About Me Text */}
            <div className="px-3 md:w-2/3 md:pl-8">
              <h2 className="text-3xl font-bold text-mint mb-4">
                About Us
              </h2>
              <p className="text-lg text-choco mb-4">
              We are a couple of web developers who, after volunteering at the front desk of various hotels, noticed a common problem: managers had little to no control over the hotel’s performance, resulting in substantial financial losses. 

              </p>
              <p className="text-lg text-choco">
              One day, we had the big idea to input our programming skills to bridge this gap, developing tools to boost hotel performance. The financial results were unbelievable — for both the hotel and for us! Now, we get to do the two things we love most at the same time: traveling and making money.
              </p>
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
