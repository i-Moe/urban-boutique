import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeIn from "../components/FadeIn";
import WavyDivider from "../assets/something/wavy-steps-mirrored.svg";
import familyRoomImage from "../assets/images/family.jpg";
import budgetDoubleRoomImage from "../assets/images/budget.jpg";
import spaBathRoomImage from "../assets/images/double.jpg";
import deluxeRoomImage from "../assets/images/deluxe.jpg";

const roomsData = [
  {
    image: familyRoomImage,
    title: "Family Room with Bathroom",
    description:
      "2 single beds and 1 extra-large double bed. A cozy space perfect for families.",
  },
  {
    image: budgetDoubleRoomImage,
    title: "Budget Double Room",
    description:
      "1 large double bed. Ideal for couples or solo travelers seeking comfort at a great value.",
  },
  {
    image: spaBathRoomImage,
    title: "Double Room with Spa Bath",
    description:
      "1 extra-large double bed. Relax and unwind in a spacious room with a spa bath.",
  },
  {
    image: deluxeRoomImage,
    title: "Deluxe Double or Twin Room with Balcony",
    description:
      "1 single bed and 1 large double bed. A stylish room with a balcony for a refreshing escape.",
  },
];

const Rooms = () => {
  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Show one card at a time
    slidesToScroll: 1, // Scroll one card at a time
    centerMode: true, // Center the current card
    focusOnSelect: true, // Focus on the selected card
    autoplay: true, // Enable auto play
    autoplaySpeed: 3000, // Auto play speed
    cssEase: "ease-in-out", // Smooth transition
    navigation: false,
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1,
          centerPadding: "20px", // Padding between cards
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show 3 cards at once
          centerPadding: "20px", // Padding between cards
        },
      },
    ],
  };

  return (
    <>
      <section
        id="rooms"
        className="py-40 mt-[-150px] z-[-200] relative bg-chillmint"
      >
        <div className="w-screen">
          <FadeIn>
            <h2 className="text-4xl font-bold text-choco text-center my-12">
              Our Rooms
            </h2>
          </FadeIn>
          <Slider {...settings}>
            {roomsData.map((room, index) => (
              <div key={index} className="px-2">
                <div className="bg-lightcream border border-choco rounded-lg shadow-xl  overflow-hidden h-full flex flex-col min-h-[400px]">
                  {/* Image Section */}
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  {/* Content Section */}
                  <div className="p-4 text-left flex-grow flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2">
                      {room.title}
                    </h3>
                    <p className="text-lg leading-6">{room.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <img
        src={WavyDivider}
        alt="Wavy divider"
        className="block w-full mt-[-3px]"
      />
    </>
  );
};

export default Rooms;

// import React from "react";
// import Slider from "react-slick";
// import familyRoomImage from "../assets/images/family.jpg";
// import budgetDoubleRoomImage from "../assets/images/budget.jpg";
// import spaBathRoomImage from "../assets/images/double.jpg";
// import deluxeRoomImage from "../assets/images/deluxe.jpg";

// // Sample room data
// const roomsData = [
//   {
//     image: familyRoomImage,
//     title: "Family Room with Bathroom",
//     description:
//       "2 single beds and 1 extra-large double bed. A cozy space perfect for families.",
//   },
//   {
//     image: budgetDoubleRoomImage,
//     title: "Budget Double Room",
//     description:
//       "1 large double bed. Ideal for couples or solo travelers seeking comfort at a great value.",
//   },
//   {
//     image: spaBathRoomImage,
//     title: "Double Room with Spa Bath",
//     description:
//       "1 extra-large double bed. Relax and unwind in a spacious room with a spa bath.",
//   },
//   {
//     image: deluxeRoomImage,
//     title: "Deluxe Double or Twin Room with Balcony",
//     description:
//       "1 single bed and 1 large double bed. A stylish room with a balcony for a refreshing escape.",
//   },
// ];

// const Rooms = () => {
//   const settings = {
//     dots: true, // Enable pagination dots
//     infinite: true, // Infinite looping
//     speed: 500, // Transition speed
//     slidesToShow: 1, // Show one card at a time
//     slidesToScroll: 1, // Scroll one card at a time
//     centerMode: true, // Center the current card
//     focusOnSelect: true, // Focus on the selected card
//     autoplay: true, // Enable auto play
//     autoplaySpeed: 3000, // Auto play speed
//     cssEase: "ease-in-out", // Smooth transition
//     responsive: [
//       {
//         breakpoint: 768, // For smaller screens
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "30px", // Padding between cards
//         },
//       },
//       {
//         breakpoint: 1024, // For medium screens
//         settings: {
//           slidesToShow: 3, // Show 3 cards at once
//           centerPadding: "20px", // Padding between cards
//         },
//       },
//     ],
//   };

//   return (
//     <section
//       id="rooms"
//       className="py-40 bg-vitamin relative z-[-105] mt-[-145px]"
//     >
//       <div className="w-full">
//         <h2 className="text-4xl font-bold text-center my-12">Our Rooms</h2>

//         {/* Slider */}
//         <Slider {...settings}>
//           {roomsData.map((room, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 min-w-[240px] max-w-[320px] mx-2 bg-cream shadow-solid border border-choco rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 min-h-[450px]"
//               style={{ width: "calc(100% - 16px)" }} // Ensure width is set correctly
//             >
//               {/* Image Section */}
//               <div className="p-4">
//                 <img
//                   src={room.image}
//                   alt={room.title}
//                   className="w-full h-48 rounded-xl border border-choco object-cover"
//                 />
//               </div>
//               {/* Content Section */}
//               <div className="px-7 py-4 text-left">
//                 <h3 className="text-2xl font-semibold mb-2">{room.title}</h3>
//                 <p className="text-lg mb-4">{room.description}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Rooms;
