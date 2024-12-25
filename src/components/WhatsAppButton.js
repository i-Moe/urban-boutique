import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);
  const phoneNumber = "38344987898"; // Replace with your WhatsApp phone number
  const message = encodeURIComponent(
    "Hello, I have a question about the hotel!"
  );

  useEffect(() => {
    const handleScroll = () => {
        // Adjust this offset value to make the button appear earlier or later
        const offset = window.innerHeight * 0.4; // Slightly less than 100vh
        if (window.scrollY > offset) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <div className="container-max-w-5xl relative">
          {/* Your other content here */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-3 lg:right-[calc((100vw-1024px)/2)] z-[300] bg-green-500 text-white rounded-full shadow-lg p-4 hover:bg-green-600 focus:ring-4 focus:ring-green-300"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
