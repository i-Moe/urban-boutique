import React, { useState } from "react";
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
  // State to manage modal visibility and the image source for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open the modal with a selected image
  const openModal = (image) => {
    console.log("Opening modal with image:", image);
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    setModalImage("");
  };

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
              onClick={() => openModal(image)} // Open modal when image is clicked
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

      {/* Modal (conditional rendering based on isModalOpen state) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 w-screen bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div
            className="relative bg-cream p-2 max-w-[85vw] max-h-[80vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeModal} // Close modal when clicking the close button
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="Modal"
              className="w-auto max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
