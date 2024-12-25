import React from "react";
import FadeIn from "../components/FadeIn";

import room1Image from "../assets/images/room1.png";
import room1Image2 from "../assets/images/room111.jpg";
import room1BalconyImage from "../assets/images/room1Balcony.jpg";

import room2Image from "../assets/images/room2.png";
import room2Image2 from "../assets/images/room2Overview.jpg";
import eyeImage from "../assets/images/paintingOfEye.jpg";
import room2CouchImage from "../assets/images/room2Couch.jpg";
import spaBathImage from "../assets/images/spaBath.jpg";
import chairsImage from "../assets/images/twoChairs.jpg";

import room4Image from "../assets/images/familyNew.jpg";
import room4Image2 from "../assets/images/room4Chairs.jpg";
import room4TableImage from "../assets/images/room4Table.jpg";

import doorImage from "../assets/images/hotelCorridor.png";
import libraryImage from "../assets/images/library.jpg";
import stairsImage from "../assets/images/stairs.jpg";
import lampImage from "../assets/images/lamp.jpg";
import lampsImage2 from "../assets/images/3lamps.jpg";
import paintImage from "../assets/images/paint.jpg";
import plantImage from "../assets/images/plant.jpg";
import balconyImage from "../assets/images/balcony.jpg";


const galleryImages = [
  balconyImage,
  room4Image,
  room4Image2,
  room1Image,
  room2Image,
  room2Image2,
  eyeImage,
  spaBathImage,
  chairsImage,
  doorImage,
  libraryImage,
  paintImage,
  lampsImage2,
  lampImage,
  stairsImage,
  room1Image2,
  plantImage,
  room1BalconyImage,
  room4TableImage,
  room2CouchImage,
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
              className="break-inside-avoid shadow-md"
            >
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="w-full object-cover rounded-md"
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
