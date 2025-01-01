import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[93vh] flex items-center justify-center py-14">
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10"></div>

      {/* Imagem responsiva do Hero */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero1200w.webp"
          alt="Luxury boutique hotel room with city view"
          layout="fill"
          objectFit="cover"
          quality={90}
          priority
        />
      </div>

      {/* Conteúdo do Hero */}
      <div className="container mx-auto px-4 text-center sm:text-left text-lightcream relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between">
          <div className="sm:w-3/5 mb-8">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-shadow-urban">
              Welcome to <br />
              <span className="text-vitamin">Urban Boutique Hotel</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed sm:pl-4 text-shadow-urban">
              Where luxury meets comfort. Discover your perfect stay in the heart of the city with unmatched hospitality, exceptional amenities, and an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center mt-8 gap-4">
              <a
                href="#rooms"
                aria-label="Explore our luxury rooms"
                className="bg-vitamin shadow-md text-lightcream text-lg border border-vitamin px-6 py-3 rounded-full font-semibold hover:bg-lightcream hover:text-vitamin hover:scale-105 transition duration-300"
              >
                Explore Our Rooms
              </a>
              <a
                href="#contact"
                aria-label="Contact Urban Boutique Hotel"
                className="bg-transparent shadow-md text-lightcream text-lg border border-lightcream px-6 py-3 rounded-full font-semibold hover:bg-lightcream hover:text-vitamin hover:scale-105 transition duration-300 sm:ml-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
