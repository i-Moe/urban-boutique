"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import WavyDivider from "../assets/something/wavy-steps-mirrored.svg";

// Importe as imagens com next/image
// import familyRoomImage from "/images/familyNew.jpg";
// import budgetDoubleRoomImage from "/images/budget.jpg";
// import spaBathRoomImage from "/images/balcony.jpg";
// import deluxeRoomImage from "/images/deluxe.jpg";

const roomsData = [
  {
    image: "/images/familyNew.jpg",
    title: "Family Room with Bathroom",
    description:
      "2 single beds and 1 extra-large double bed. A cozy space perfect for families.",
  },
  {
    image: "/images/room1.png",
    title: "Budget Double Room",
    description:
      "1 large double bed. Ideal for couples or solo travelers seeking comfort at a great value.",
  },
  {
    image: "/images/room2.png",
    title: "Double Room with Spa Bath",
    description:
      "1 extra-large double bed. Relax and unwind in a spacious room with a spa bath.",
  },
  {
    image: "/images/deluxe.jpg",
    title: "Deluxe Double or Twin Room with Balcony",
    description:
      "1 single bed and 1 large double bed. A stylish room with a balcony for a refreshing escape.",
  },
];

export default function Rooms() {
  return (
    <>
      <section
        id="rooms"
        className="py-40 mt-[-150px] z-[-200] relative bg-chillmint"
        aria-labelledby="rooms-title"
      >
        <div className="max-w-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="rooms-title"
              className="text-4xl font-bold text-choco text-center my-12"
            >
              Our Rooms
            </h2>
          </motion.div>

          {/* Swiper Slider */}
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {roomsData.map((room, index) => (
              <SwiperSlide key={index}>
                <div className="px-4">
                  <div className="bg-cream border border-choco rounded-lg shadow-xl overflow-hidden h-full flex flex-col min-h-[400px]">
                    {/* Imagem usando next/image */}
                    <div className="relative w-full h-56">
                      <Image
                        src={room.image}
                        alt={room.title}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                        priority={index === 0} // Prioriza a primeira imagem
                      />
                    </div>
                    <div className="p-6 text-left flex-grow flex flex-col">
                      <h3 className="text-2xl font-semibold mb-2">
                        {room.title}
                      </h3>
                      <p className="text-lg leading-6">{room.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Wavy Divider */}
      {/* <Image
        src={WavyDivider}
        alt="Wavy divider"
        width={1920}
        height={150}
        priority
        className="block w-full mt-[-3px]"
      /> */}
    </>
  );
}
