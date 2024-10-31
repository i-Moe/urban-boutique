import React from "react";
// import { FaPaintBrush, FaCode, FaLanguage } from "react-icons/fa";
import HalfMoonDivider2 from "../assets/something/half-moon2.svg"; // Example icons from react-icons
import WorldMap from "../assets/images/map.svg";
import "flag-icons/css/flag-icons.min.css";
import FadeIn from "../components/FadeIn";
// import { GiMayanPyramid } from "react-icons/gi";

const hostels = [
  { name: "Blue Orange Hostel", country: "Macedonia", countryCode: "mk" },
  { name: "Jungle Jaffa Hostel", country: "Israel", countryCode: "il" },
  { name: "The Holy Rock Hostel", country: "Greece", countryCode: "gr" },
  { name: "Pangar Barsay", country: "Thailand", countryCode: "th" },
  { name: "Hostel Hasta la Vista", country: "Albania", countryCode: "al" },
  // Add more hostels here if needed
];

const Clients = () => {
  return (
    <>
      <section
        id="clients"
        className="pt-40 pb-16 bg-lemon relative z-[-110] mt-[-150px]"
      >
        <div className="container-max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center my-14">
              Our Clients
            </h2>
          </FadeIn>
          <img
            src={WorldMap}
            alt="WorldMap"
            className="absolute top-[150px] z-[-10] w-11/12 max-w-[1000px] h-auto left-1/2 transform -translate-x-1/2"
          />
          <FadeIn>
            <div className="flex flex-wrap justify-center px-2 sm:px-4 md:px-6 lg:px-0">
              {hostels.map((hostel, index) => (
                <div
                  key={index}
                  className="w-full sm:w-5/6 md:w-1/2 lg:w-1/3 p-3"
                >
                  <div className="bg-cream p-5 rounded-xl shadow-solid border border-choco text-center md:min-h-[140px] flex flex-col justify-between">
                    {/* This div flex container centers the hostel name */}
                    <div className="flex flex-col flex-grow justify-center">
                      <h3 className="text-xl font-semibold flex items-center justify-center">
                        <span
                          className={`fi fi-${hostel.countryCode.toLowerCase()} mr-2 text-lg`}
                        />
                        {hostel.name}
                        <span
                          className={`fi fi-${hostel.countryCode.toLowerCase()} ml-2 text-lg`}
                        />
                      </h3>
                    </div>
                    {/* Country name anchored at the bottom */}
                    <p className="mt-2">{hostel.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* <div className="flex flex-wrap -mx-4"> */}
          {/* Graphic Design Card */}
          {/* <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-cream p-6 rounded-xl shadow-solid border border-choco text-center">
                <FaPaintBrush className="text-4xl text-mint mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
                <p className="text-gray-600">
                  Creating visually stunning graphics to represent your brand
                  and ideas effectively.
                </p>
              </div>
            </div>
          
          </div> */}
        </div>
      </section>

      <img
        src={HalfMoonDivider2}
        alt="Half Moon divider"
        className="block w-full 
        
        
        relative mt-[-3px]
          h-[40px] sm:h-[60px] lg:h-[100px]"
      />
    </>
  );
};

export default Clients;
