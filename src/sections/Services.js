import React from "react";
import WavyMirroredDivider from "../assets/something/wavy-steps-mirrored.svg";
import Dashboard from "../assets/images/monthlyRep.png";
import Onsite from "../assets/images/onsite.png";
import Website from "../assets/images/website.png";
import HisRep from "../assets/images/hisRep.png";
import FadeIn from "../components/FadeIn";

// Sample portfolio items
const servicesItems = [
  {
    title: "Automated Dashboard",
    description:
      "Transform booking data into insightful, user-friendly dashboards with ease.",
    image: Dashboard,
  },
  {
    title: "On-site Consultancy",
    description:
      "Boost your space’s appeal from decor to promotions and online presence.",
    image: Onsite,
  },
  {
    title: "Website",
    description:
      "Smart websites with FAQs and QR codes to reduce guest inquiries.",
    image: Website,
  },
  {
    title: "Historical Analysis",
    description: "Turn past data into future profits with actionable insights.",
    image: HisRep,
  },
  // Add more projects as needed
];

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="py-40 bg-vitamin relative z-[-105] mt-[-145px]"
      >
        <div className="container-max-w-5xl">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center my-12">Services</h2>
          </FadeIn>

          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-cream shadow-solid border border-choco rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
                >
                  {/* Image Section */}
                  <div className="p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 rounded-xl border border-choco object-cover"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="px-7 py-4 text-left">
                    <h3 className="text-2xl font-semibold mb-2o">
                      {item.title}
                    </h3>
                    <p className="mb-4 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {servicesItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-cream shadow-solid border border-choco rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div> */}
        </div>
      </section>

      <img
        src={WavyMirroredDivider}
        alt="Wavy Mirrored divider"
        className="block w-full mt-[-3px]"
      />
    </>
  );
};

export default Services;
