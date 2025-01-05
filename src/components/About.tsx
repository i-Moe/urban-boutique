// import React from "react";
// import Image from "next/image";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-24 sm:pb-40 bg-cream relative overflow-hidden"
//     >
//       <div className="container-max-w-5xl">
//         <div className="grid grid-cols-3 justify-between">
//           {/* Balcony Image */}
//           <div className="col-span-1 mb-8 md:mb-0 rounded-xl overflow-visible relative">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream"></div>
//             <Image
//               src="/images/balcony.jpg"
//               alt="Balcony view"
//               width={700}
//               height={500}
//               className="object-cover"
//               style={{ maxWidth: 'none' }}
//             />
//           </div>

//           {/* About Hotel Text */}
//           <div className="col-span-2 text-center md:text-left relative z-10">
//             <h2 className="text-4xl sm:text-5xl font-semibold text-mint mb-6 leading-snug md:relative md:left-6">
//               Find Your Comfort Escape in Prishtina
//             </h2>

//             <p className="text-lg sm:text-xl text-choco mb-6 md:relative md:left-6">
//               Experience the perfect blend of comfort and charm at our boutique hotel in the heart of Prishtina. Whether you're here for business or leisure, we offer a cozy, intimate atmosphere designed to make you feel at home.
//             </p>

//             <p className="text-lg sm:text-xl text-choco mb-8 md:relative md:left-6">
//               Unwind in our welcoming rooms, thoughtfully designed to offer comfort and style. With personalized service and a focus on making your stay memorable, we ensure every guest feels special, from check-in to check-out.
//             </p>

//             <a
//               href="#book-now"
//               className="inline-block py-3 px-8 text-lg sm:text-xl font-semibold text-white bg-mint rounded-full shadow-lg hover:bg-mint-dark transition-all duration-300 ease-in-out"
//             >
//               Book Your Stay
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-24 sm:pb-40 bg-cream relative z-[-100]"
      >
        <div className="container-max-w-5xl mt-14">
          <div className="flex flex-col md:flex-row items-center">
            {/* Balcony Image */}
            <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/balcony.jpg"
              alt="Balcony view"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-md "
            />
                
            </div>
            {/* About Hotel Text */}
            <div className="px-3 md:w-2/3 md:pl-8">
              
                <h2 className="text-4xl font-bold text-mint mb-4">
                  Find Your Comfort Escape in Prishtina
                </h2>
              
                <p className="text-lg text-choco mb-4">
                  Experience the perfect blend of comfort and charm at our
                  boutique hotel in the heart of Prishtina. Whether you're here
                  for business or leisure, we offer a cozy, intimate atmosphere
                  designed to make you feel at home.
                </p>
                <p className="text-lg text-choco">
                  Unwind in our welcoming rooms, thoughtfully designed to offer
                  comfort and style. With personalized service and a focus on
                  making your stay memorable, we ensure every guest feels
                  special, from check-in to check-out.
                </p>
              
            </div>
          </div>
        </div>
      </section>

      
      
    </>
  );
};

export default About;