"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

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
];

export default function Rooms() {
  return (
    <section id="rooms">
      <div className="container mx-auto max-w-5xl py-20 overflow-x-hidden">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="rooms-title"
            className="text-4xl font-bold text-choco text-center mb-8"
          >
            Our Rooms
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {roomsData.map((room, index) => (
            <div
              key={index}
              className="bg-lightcream border border-choco shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={room.image}
                alt={room.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-700">{room.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Swiper for Medium and Small Screens */}
        <div className="lg:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={16}
            centeredSlides={true}
            slidesPerView={1.2}
            initialSlide={0}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 24,
                initialSlide: 1,
              },
            }}
          >
            {roomsData.map((room, index) => (
              <SwiperSlide key={index}>
                <div className="bg-lightcream border border-choco shadow-lg rounded-lg overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                    <p className="text-gray-700">{room.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
