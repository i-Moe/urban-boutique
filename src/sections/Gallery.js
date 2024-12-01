import React from "react";
import FadeIn from "../components/FadeIn";
import familyRoomImage from "../assets/images/family.jpg";
import budgetDoubleRoomImage from "../assets/images/budget.jpg";
import spaBathRoomImage from "../assets/images/double.jpg";
import deluxeRoomImage from "../assets/images/deluxe.jpg";

const galleryImages = [
  familyRoomImage,
  budgetDoubleRoomImage,
  spaBathRoomImage,
  deluxeRoomImage,
  familyRoomImage,
  budgetDoubleRoomImage,
  spaBathRoomImage,
  deluxeRoomImage,
];

const Gallery = () => {
  
  return (
    <section id="gallery" className="py-40 mt-[-150px] z-[-250] relative bg-cream">
      <div className="container-max-w-5xl">
        <FadeIn>
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden cursor-pointer"
            >
              <img
                src={image}
                alt={`Room ${index + 1}`}
                className="object-cover w-full h-40 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
