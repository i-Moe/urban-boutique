import React from "react";
import FadeIn from "../components/FadeIn";
import balconyImage from "../assets/images/balcony.jpg";
import budgetRoomImage from "../assets/images/budget.jpg";
import deluxeRoomImage from "../assets/images/deluxe.jpg";
import doubleRoomImage from "../assets/images/double.jpg";
import doubleRoomImage2 from "../assets/images/double2.jpg";
import doubleRoomImage3 from "../assets/images/double3.jpg";
import eyeImage from "../assets/images/paintingOfEye.jpg";
import spaBathImage from "../assets/images/spaBath.jpg";
import chairsImage from "../assets/images/twoChairs.jpg";
import chairsImage2 from "../assets/images/twoChairs2.jpg";
import familyRoomImage from "../assets/images/family.jpg";
import familyRoomImage2 from "../assets/images/family2.jpg";
import doorImage from "../assets/images/urban-boutique.jpg";

const galleryImages = [
  balconyImage,
  familyRoomImage,
  familyRoomImage2,
  budgetRoomImage,
  chairsImage2,
  doubleRoomImage,
  doubleRoomImage2,
  doubleRoomImage3,
  eyeImage,
  spaBathImage,
  chairsImage,
  deluxeRoomImage,
  doorImage,
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="pb-40 relative"
    >
      <div className="container-max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        </FadeIn>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid shadow-md cursor-pointer"
            >
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="w-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer"
            >
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="object-cover w-full h-40 hover:scale-105 transition-transform duration-300 shadow-md"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;
